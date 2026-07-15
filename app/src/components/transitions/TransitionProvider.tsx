'use client';

import { TransitionRouter } from 'next-transition-router';
import { Children, DivRef, Div } from '@/utils/types';
import { useRef } from 'react';
import styles from './TransitionProvider.module.scss';
import { gsap } from 'gsap';
import { mapArray } from '@/utils/functions';

const s = styles;
const rows = 4;

function TransitionProvider({ children }: Children) {
    const gridRef: DivRef = useRef(null);
    const blocksRefs: DivRef[] = Array.from({ length: rows }, () => useRef(null));

    function animateIn(onComplete: () => void) {
        const tl = gsap.timeline({ onComplete });

        tl.set(mapArray(blocksRefs), {
            transformOrigin: 'left center',
            scaleX: 0
        });

        tl.to(mapArray(blocksRefs), {
            scaleX: 1,
            duration: 1,
            ease: 'power4.out',
            stagger: 0.075
        });

        return tl;
    }

    function animateOut(onComplete: () => void) {
        const tl = gsap.timeline({ onComplete });

        tl.set(mapArray(blocksRefs), {
            transformOrigin: 'right center',
            scaleX: 1
        });

        tl.to(mapArray(blocksRefs), {
            scaleX: 0,
            duration: 1,
            ease: 'power4.out',
            stagger: 0.075
        });

        return tl;
    }

    return (
        <TransitionRouter 
            auto
            leave={next => {
                const tl = animateIn(next);
                return () => tl.kill();
            }}
            enter={next => {
                const tl = animateOut(next);
                return () => tl.kill();
            }}
        >
            <div className={s.grid} ref={gridRef}>
                { Array.from({ length: rows }).map((_, i) => (
                    <div 
                        key={i}
                        className={s.block}
                        ref={blocksRefs[i]}
                    />
                )) }
            </div>
            { children }
        </TransitionRouter>
    );
}

export default TransitionProvider;