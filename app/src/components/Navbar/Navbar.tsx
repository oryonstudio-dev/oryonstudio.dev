'use client';

import styles from './NavBar.module.scss';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import { useState, useRef, useEffect } from 'react';

const s = styles;

function NavBar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const headerRef = useRef<HTMLElement | null>(null);
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        function updateHeaderHeight() {
            setHeaderHeight(headerRef.current?.offsetHeight || 0);
        }
    
        updateHeaderHeight();

        const observer = new ResizeObserver(updateHeaderHeight);
        return () => observer.disconnect();
    }, []);


    return (
        <nav>
            <div className={s.Hitbox} style={ sidebarOpen ? { display: 'block' } : { display: 'none' }} onClick={() => setSidebarOpen(false)}></div>
            <Sidebar setSidebarOpen={setSidebarOpen} open={sidebarOpen} headerHeight={headerHeight} />
            <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} ref={headerRef} />
        </nav>
    );
}

export default NavBar;