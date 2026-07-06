'use client';

import styles from './Sidebar.module.scss';
import SidebarLink from '@/components/Navbar/Sidebar/link';
import { useState } from 'react';

const s = styles;

interface Props {
    open: boolean;
    headerHeight: number;
    setSidebarOpen: (open: boolean) => void;
}

function Sidebar({ open, headerHeight, setSidebarOpen } : Props) {
    const [activeLink, setActiveLink] = useState(0);

    function setActive(link: number) {
        switch (link) {
            case 1:
                setActiveLink(1);
                break;
            case 2:
                setActiveLink(2);
                break;
            case 3:
                setActiveLink(3);
                break;
            case 4:
                setActiveLink(4);
                break;
            default:
                setActiveLink(0);
                break;
        }
    }

    return (
        <div className={s.Sidebar} style={{ paddingTop: headerHeight }} onMouseLeave={ () => setActive(0) }>
            <div className={s.Section1}>
                <nav className={s.Links}>
                    <SidebarLink onClick={() => setSidebarOpen(false) } className={s.link} onMouseEnter={ () => setActive(1)} active={activeLink === 1} href='/'        >Home</SidebarLink>
                    <SidebarLink onClick={() => setSidebarOpen(false) } className={s.link} onMouseEnter={ () => setActive(2)} active={activeLink === 2} href="/products">Products</SidebarLink>
                    <SidebarLink onClick={() => setSidebarOpen(false) } className={s.link} onMouseEnter={ () => setActive(3)} active={activeLink === 3} href="/about"   >About</SidebarLink>
                    <SidebarLink onClick={() => setSidebarOpen(false) } className={s.link} onMouseEnter={ () => setActive(4)} active={activeLink === 4} href="/contact" >Contact</SidebarLink>
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;