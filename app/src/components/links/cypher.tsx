'use client';

import { LinkProps } from '@/utils/types';
import { Link } from '@/i18n/navigation';
import styles from './links.module.scss';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import { useRef, useMemo } from 'react';
import { Ref, El } from '@/utils/types';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { forwardRef } from 'react';

gsap.registerPlugin(ScrambleTextPlugin);

const s = styles;

interface Props extends LinkProps {
    onClick?: () => void;
}

const CypherLink = forwardRef<HTMLAnchorElement, Props>(({ href, className, onClick, label = 'label', active }, ref) => {
    const textRef: Ref = useRef<El>(null);

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
});

CypherLink.displayName = 'CypherLink';
export default CypherLink;
