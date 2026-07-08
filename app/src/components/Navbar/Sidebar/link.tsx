'use client';

import { LinkProps } from '@/utils/types';
import Link from 'next/link';
import { motion } from 'motion/react';
import styles from './Sidebar.module.scss';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import { useRef, useState } from 'react';
import { A, ARef } from '@/utils/types';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrambleTextPlugin);

const s = styles;

interface Props extends LinkProps {
    onClick?: () => void;
}

const MotionLink = motion.create(Link);

function SidebarLink({ href, className, onClick, label = 'label', active } : Props) {
    const linkRef: ARef = useRef<A>(null);
    const [hover, setHover] = useState<boolean>(false);

    function handleMouseEnter() {
        gsap.killTweensOf(linkRef.current);

        gsap.to(linkRef.current, {
            duration: 1,
            scrambleText: {
                text: `${label}${active ? ' █ //current' : ' =>'}`,
                chars: "ORYON STUDIO"
            }
        });
        setHover(true);
    }

    function handleMouseLeave() {
        gsap.killTweensOf(linkRef.current);

        gsap.to(linkRef.current, {
            duration: 0.5,
            scrambleText: {
                text: `~/${label}${active ? ' █' : ''}`,
                chars: "ORYON STUDIO"
            }
        });
    }

    return (
        <MotionLink
            href={href}
            className={`${className} ${s.link}`}
            onClick={onClick}
            ref={linkRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            ~/{ label }{active ? ' █' : ''}
        </MotionLink>
    );
}

export default SidebarLink;
