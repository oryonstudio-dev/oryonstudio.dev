'use client';

import { LinkProps } from '@/utils/types';
import Link from 'next/link';
import { motion } from 'motion/react';
import styles from './links.module.scss';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import { useRef } from 'react';
import { A, ARef } from '@/utils/types';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrambleTextPlugin);

const s = styles;

interface Props extends LinkProps {
    onClick?: () => void;
}

const MotionLink = motion.create(Link);

function CypherLink({ href, className, onClick, label = 'label', active } : Props) {
    const linkRef: ARef = useRef<A>(null);

    function handleMouseEnter() {
        gsap.killTweensOf(linkRef.current);

        gsap.to(linkRef.current, {
            duration: 1,
            scrambleText: {
                text: `${label}${active ? ' █ //current' : '=>'}`,
                chars: "ORYONSTUDIO"
            }
        });
    }

    function handleMouseLeave() {
        gsap.killTweensOf(linkRef.current);

        gsap.to(linkRef.current, {
            duration: 0.5,
            scrambleText: {
                text: `~/${label}${active ? ' █' : ''}`,
                chars: "oryonstudio"
            }
        });
    }

    return (
        <MotionLink
            href={href}
            className={`${className} ${s.cypherLink}`}
            onClick={onClick}
            ref={linkRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            ~/{ label }{active ? ' █' : ''}
        </MotionLink>
    );
}

export default CypherLink;
