'use client';

import styles from './Header.module.scss';
import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from '@/i18n/navigation';
import LogoDraw from '@/components/LogoDraw';

const s = styles;

interface Props {
    setSidebarOpen: (open: boolean) => void,
    ref: React.RefObject<HTMLElement | null>,
    sidebarOpen: boolean
}

function Header({ setSidebarOpen, ref, sidebarOpen } : Props) {
    const [hamburgerState, setHamburgerState] = useState(false);
    const [headerHidden, setHeaderHidden]     = useState(false);

    function toggleHamburger() {
        if (!headerHidden) {
            setHamburgerState(prev => !prev);
        } else {
            setHamburgerState(false);
        }
    }

    useEffect(() => {
        setHamburgerState(sidebarOpen);
        if (sidebarOpen) {
            setHeaderHidden(false);
        }
    }, [sidebarOpen]);

    const [supportsCornerShape, setSupportsCornerShape] = useState(false);
    useEffect(() => {
        if (typeof CSS != 'undefined') {
            setSupportsCornerShape(CSS.supports('corner-shape', 'bevel'));
        }
    }, []);

    useEffect(() => {
        setSidebarOpen(hamburgerState);
    }, [hamburgerState, setSidebarOpen]);

    const header = ref;

    useGSAP(() => {
        if (headerHidden) {
            gsap.to(header.current, {
                duration: 0.5,
                y: '-100%',
                ease: 'power1.in'
            });
        } else {
            gsap.to(header.current, {
                duration: 0.5,
                y: 0,
                ease: 'power1.out'
            })
        }
    }, { dependencies: [headerHidden] });

    useEffect(() => {
        let lastScroll = 0;
        let ticked = false;

        function handleScroll() {
            if (!ticked) {
                window.requestAnimationFrame(() => {
                    const currentScroll = window.scrollY;

                    if (currentScroll > lastScroll && currentScroll > 100) {
                        setHeaderHidden(true);
                    } else {
                        setHeaderHidden(false);
                    }

                    lastScroll = currentScroll;
                    ticked = false;
                });

                ticked = true;
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const hamburger = useRef<HTMLButtonElement>(null);
    const topBar = useRef<HTMLDivElement>(null);
    const midBar1 = useRef<HTMLDivElement>(null);
    const midBar2 = useRef<HTMLDivElement>(null);
    const bottomBar = useRef<HTMLDivElement>(null);

    const onTl = useRef<gsap.core.Timeline | null>(null);

    const hamburgerSize = 2.5;
    const hamburgerLineThickness = 0.3;

    function rem(size: number) {
        return String(size) + 'rem';
    }

    useGSAP(() => {
        if (topBar.current && bottomBar.current && midBar1.current && midBar2.current && typeof window != 'undefined') {
            if (!onTl.current) {
                onTl.current = gsap.timeline({ paused: true })
                    .to(hamburger.current, {
                        rotateZ: -360 * 2 + 90,
                        ease: 'power1.out',
                        easeReverse: 'ease.InOut',
                        duration: 1
                    })
                    .to([topBar.current, bottomBar.current], {
                        borderRadius: rem(hamburgerLineThickness / (supportsCornerShape ? 2 : 3)),
                        duration: 1,
                        ease: 'power4.inOut',
                        easeReverse: true
                    }, '<')
                    .to(midBar1.current, {
                        x: '-100%',
                        y: '50%',
                        borderRadius: rem(hamburgerLineThickness / 3),
                        height: rem(hamburgerLineThickness / 2),
                        width: '30%',
                        duration: 0.25,
                        ease: 'power1.in',
                        easeReverse: true
                    }, '<')
                    .to(midBar2.current, {
                        x: '100%',
                        y: '50%',
                        borderRadius: rem(hamburgerLineThickness / 3),
                        height: rem(hamburgerLineThickness / 2),
                        width: '30%',
                        duration: 0.25,
                        ease: 'power1.in',
                        easeReverse: true
                    }, '<')
                    .to(topBar.current, {
                        rotate: 45,
                        duration: 0.3,
                        ease: 'power1.inOut',
                        easeReverse: true
                    }, '<')
                    .to(bottomBar.current, {
                        rotate: -45,
                        duration: 0.3,
                        ease: 'power1.inOut',
                        easeReverse: true
                    }, '<')
                    .to(topBar.current, {
                        x: rem(hamburgerLineThickness * 1.2),
                        y: rem(hamburgerLineThickness / 2 * 1.2),
                        duration: 0.3,
                        ease: 'power1.inOut',
                        easeReverse: true
                    }, '<')
                    .to(bottomBar.current, {
                        x: rem(hamburgerLineThickness * 1.2),
                        y: rem(-hamburgerLineThickness / 2 * 1.2),
                        duration: 0.3,
                        ease: 'power2.inOut',
                        easeReverse: true
                    }, '<');
            }
            if (hamburgerState) {
                onTl.current.restart();
            } else {
                onTl.current.reverse();
            }
        }
    }, { dependencies: [hamburgerState] });

    return (
        <header className={s.Header} id="Header" ref={ref}>
            <Link className={s.logo} href='/' onClick={() => setHamburgerState(false)}>
                <LogoDraw 
                    active={!headerHidden}
                    strokeWidth={20}
                    color='#0a21ff'
                />
            </Link>

            <button className={`${s.Hamburger} ${s.btn} btn`} onClick={toggleHamburger} ref={hamburger}>
                <div className={s.TopBar}    ref={topBar}   ></div>
                <div className={s.MidBar1}   ref={midBar1}  ></div>
                <div className={s.MidBar2}   ref={midBar2}  ></div>
                <div className={s.BottomBar} ref={bottomBar}></div>
            </button>
        </header>
    );
}

export default Header;