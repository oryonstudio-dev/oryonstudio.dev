'use client';

import { LinkProps } from '@/utils/types';
import { Link } from '@/i18n/navigation';
import { motion } from 'motion/react';
import styles from './links.module.scss';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import { useRef } from 'react';
import { A, ARef, Any, AnyRef } from '@/utils/types';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrambleTextPlugin);

const s = styles;

interface Props extends LinkProps {
    onClick?: () => void;
}

const MotionLink = motion.create(Link);

function CypherLink({ href, className, onClick, label = 'label', active } : Props) {
    const linkRef: ARef = useRef<A>(null);
    const textRef: AnyRef = useRef<Any>(null);

    const { contextSafe } = useGSAP();

    const handleMouseEnter = contextSafe(() => {
        if (!textRef.current) return;

        gsap.killTweensOf(textRef.current);

        gsap.to(textRef.current, {
            duration: 1,
            scrambleText: {
                text: `${label}${active ? ' █ //current' : '=>'}`,
                chars: "ORYONSTUDIO"
            }
        });
    });

    const handleMouseLeave = contextSafe(() => {
        if (!textRef.current) return;

        gsap.killTweensOf(textRef.current);

        gsap.to(textRef.current, {
            duration: 0.5,
            scrambleText: {
                text: `~/${label}${active ? ' █' : ''}`,
                chars: "oryonstudio"
            }
        });
    });

    const initialText = `~/${ label }${active ? ' █' : ''}`;

    return (
        <MotionLink
            href={href}
            className={`${className} ${s.cypherLink}`}
            onClick={onClick}
            ref={linkRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span className={s.text} ref={textRef} dangerouslySetInnerHTML={{ __html: initialText }} />
        </MotionLink>
    );
}

export default CypherLink;
