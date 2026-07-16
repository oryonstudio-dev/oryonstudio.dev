'use client';

import styles from './Sidebar.module.scss';
import CypherLink from '@/components/links/cypher';
import { useRef, createRef, useMemo } from 'react';
import { LinkTemplate } from '@/utils/types';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Div, DivRef } from '@/utils/types';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { A, ARef } from '@/utils/types';
import { linksColumnSlide } from '@/utils/gsap/animations';

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

    const t = useTranslations('global.links');

    const links: LinkTemplate[] = useMemo(() => [
        { href: '/',           label: t('home')       },
        { href: '/about',      label: t('about')      },
        { href: '/experience', label: t('experience') },
        { href: '/services',   label: t('services')   },
        { href: '/contact',    label: t('contact')    }
    ], [t]);

    const linksRefs = useRef<ARef[]>([]);

    if (linksRefs.current.length != links.length) {
        linksRefs.current = links.map(() => createRef<A>())
    }

    useGSAP(() => {
        if (open) linksColumnSlide. in(linksRefs);
        else      linksColumnSlide.out(linksRefs);
    }, { dependencies: [open] });

    function createLink(link: LinkTemplate, index: number) {
        const isHome = pathname.length == 3 && link.href == '/';

        return (
            <CypherLink
                key={index}
                onClick={ () => setSidebarOpen(false) }
                className={s.link}
                href={link.href}
                label={link.label}
                active={pathname.substring(3) === link.href || isHome}
                ref={linksRefs.current[index]}
            />
        );
    }

    return (
        <div className={s.Sidebar} style={{ paddingTop: headerHeight }} ref={sidebar}>
            <nav className={s.Links}>
                { links.map(link => createLink(link, links.indexOf(link))) }
            </nav>
        </div>
    );
}

export default Sidebar;