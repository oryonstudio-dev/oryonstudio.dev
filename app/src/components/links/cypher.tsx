'use client';

import { LinkProps } from '@/utils/types';
import { Link } from '@/i18n/navigation';
import styles from './links.module.scss';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import { useRef, useMemo } from 'react';
import { Any, AnyRef } from '@/utils/types';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrambleTextPlugin);

const s = styles;

interface Props extends LinkProps {
    onClick?: () => void;
}

function CypherLink({ href, className, onClick, label = 'label', active, ref } : Props) {
    const textRef: AnyRef = useRef<Any>(null);

    const { contextSafe } = useGSAP();

    const initialText = useMemo(() => `~/${ label }${active ? ' █' : ''}`,         [label, active]);
    const activeText  = useMemo(() => `${label}${active ? ' █ //current' : '=>'}`, [label, active]);

    const handleMouseEnter = contextSafe(() => {
        if (!textRef.current) return;

        gsap.killTweensOf(textRef.current);

        gsap.to(textRef.current, {
            duration: 1,
            scrambleText: {
                text: activeText,
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
                text: initialText,
                chars: "oryonstudio"
            }
        });
    });

    return (
        <Link
            href={href}
            className={`${className || ''} ${s.cypherLink}`}
            onClick={onClick}
            ref={ref}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span className={s.text} ref={textRef}>
                { initialText }
            </span>
        </Link>
    );
}

export default CypherLink;
