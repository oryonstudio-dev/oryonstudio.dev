'use client';

import styles from './Sidebar.module.scss';
import SidebarLink from '@/components/Navbar/Sidebar/link';
import { useState, useRef, useEffect } from 'react';
import { LinkTemplate } from '@/utils/types';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Div, DivRef } from '@/utils/types';
import { usePathname } from 'next/navigation';

const s = styles;

interface Props {
    open: boolean;
    headerHeight: number;
    setSidebarOpen: (open: boolean) => void;
}

function Sidebar({ open, headerHeight, setSidebarOpen } : Props) {
    const sidebar: DivRef = useRef<Div>(null);
    const pathname = usePathname();

    useGSAP(() => {
        if (typeof window === 'undefined')  return;

        if (open) {
            gsap.to(sidebar.current, {
                duration: 1,
                top: 0,
                ease: 'back.out(1)'
            });
        } else {
            gsap.to(sidebar.current, {
                duration: 1,
                top: '-100%',
                ease: 'back.in(1)'
            });
        }
    }, { dependencies: [open] });

    const [activeLink, setActiveLink] = useState(0);

    const links: LinkTemplate[] = [
        { href: '/',           label: 'home'           },
        { href: '/about',      label: 'about_us'       },
        { href: '/experience', label: 'our_experience' },
        { href: '/services',   label: 'our_services'   },
        { href: '/contact',    label: 'contact_us'     }
    ];

    useEffect(() => {
        if (typeof window === 'undefined') return;

        links.map(link => {
            if (link.href === pathname) {
                setActiveLink(links.indexOf(link));
                return;
            }
        });
    }, [pathname]);

    function createLink(link: LinkTemplate, index: number) {
        return (
            <SidebarLink
                key={index}
                onClick={ () => setSidebarOpen(false) }
                className={s.link}
                href={link.href}
                label={link.label}
                active={activeLink == index}
            />
        );
    }

    return (
        <div className={s.Sidebar} style={{ paddingTop: headerHeight }} onMouseLeave={ () => setActiveLink(0) } ref={sidebar}>
            <nav className={s.Links}>
                { links.map(link => createLink(link, links.indexOf(link))) }
            </nav>
        </div>
    );
}

export default Sidebar;