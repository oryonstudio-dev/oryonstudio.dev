'use client';

import { TransitionRouter } from 'next-transition-router';
import { Children, DivRef, Div } from '@/utils/types';
import { useRef } from 'react';
import styles from './TransitionProvider.module.scss';
import { gsap } from 'gsap';
import { mapArray } from '@/utils/functions';

const s = styles;
const rows = 4;
const eases = ['power1.out', 'power2.out', 'power3.out', 'power4.out'];

function TransitionProvider({ children }: Children) {
    const gridRef: DivRef = useRef(null);
    const blocksRefs: DivRef[] = Array.from({ length: rows }, () => useRef(null));

    const animate: {
        in:  (onComplete: () => void) => gsap.core.Timeline;
        out: (onComplete: () => void) => gsap.core.Timeline;
    } = {
        in: (onComplete: () => void) => {
            const tl = gsap.timeline({ onComplete });
            const blocks = mapArray(blocksRefs)

            tl.set(blocks, {
                transformOrigin: 'left center',
                scaleX: 0
            });

            blocks.forEach((block, index) => {
                tl.to(block, {
                    scaleX: 1,
                    duration: 1,
                    ease: gsap.utils.random(eases),
                }, '<0.1');
            });

            return tl;
        },

        out: (onComplete: () => void) => {
            const tl = gsap.timeline({ onComplete });
            const blocks = mapArray(blocksRefs)

            tl.set(blocks, {
                transformOrigin: 'right center',
                scaleX: 1
            });

            blocks.forEach((block, index) => {
                tl.to(block, {
                    scaleX: 0,
                    duration: 1,
                    ease: gsap.utils.random(eases),
                }, '<0.1');
            });
            
            return tl;
        }
    }

    return (
        <TransitionRouter 
            auto
            leave={next => {
                const tl = animate.in(next);
                return () => tl.kill();
            }}
            enter={next => {
                const tl = animate.out(next);
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