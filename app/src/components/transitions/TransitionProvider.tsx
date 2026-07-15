'use client';

import { TransitionRouter } from 'next-transition-router';
import { Children, Div, DivRef, H, HRef, Any, AnyRef } from '@/utils/types';
import { useRef } from 'react';
import styles from './TransitionProvider.module.scss';
import { gsap } from 'gsap';
import { mapArray } from '@/utils/functions';

const s = styles;

const rows = 4;
const eases = ['power1.out', 'power2.out', 'power3.out', 'power4.out'];

function TransitionProvider({ children }: Children) {
    const gridRef:    DivRef               = useRef<Div>(null);
    const blocksRefs: DivRef[]             = Array.from({ length: rows }, () => useRef<Div>(null));
    const headingRef: HRef                 = useRef<H>(null);
    const wordsRefs:  AnyRef[]             = Array.from({ length: rows }, () => useRef<Any>(null));

    const animate: {
        in:  (onComplete: () => void) => gsap.core.Timeline;
        out: (onComplete: () => void) => gsap.core.Timeline;
    } = {
        in: (onComplete: () => void) => {
            const tl = gsap.timeline({ onComplete });
            const blocks = mapArray(blocksRefs);
            const words  = mapArray(wordsRefs);

            tl.set(blocks, {
                transformOrigin: 'left center',
                scaleX: 0
            });

            tl.set(words, {
                y: '100%'
            })

            blocks.forEach((block) => {
                tl.to(block, {
                    scaleX: 1,
                    duration: 1,
                    ease: gsap.utils.random(eases),
                }, '<0.1');
            });

            tl.to(words, {
                y: 0,
                stagger: 0.1,
                duration: 1,
                ease: 'power4.out'
            }, '<');

            return tl;
        },

        out: (onComplete: () => void) => {
            const tl = gsap.timeline({ onComplete });
            const blocks = mapArray(blocksRefs);
            const words  = mapArray(wordsRefs);

            tl.set(blocks, {
                transformOrigin: 'right center',
                scaleX: 1
            });

            tl.set(mapArray(wordsRefs), {
                y: 0
            });

            tl.to(words, {
                y: '100%',
                duration: 0.5,
                stagger: 0.1,
                ease: 'power1.out'
            });

            blocks.forEach((block) => {
                tl.to(block, {
                    scaleX: 0,
                    duration: 1,
                    ease: gsap.utils.random(eases),
                }, '<0.1');
            }, '<0.9');
            
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

                <div className={s.branding}>
                    <h1 ref={headingRef}><span className={s.oryon} ref={wordsRefs[0]}>ORYON</span><span className={s.studio} ref={wordsRefs[1]}>STUDIO</span></h1>
                </div>
            </div>
            { children }
        </TransitionRouter>
    );
}

export default TransitionProvider;