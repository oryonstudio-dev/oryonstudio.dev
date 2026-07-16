import { gsap } from 'gsap';
import { ARef } from '@/utils/types';

export const linksColumnSlide: {
    in:  (elements: React.RefObject<ARef[]>) => gsap.core.Tween,
    out: (elements: React.RefObject<ARef[]>) => gsap.core.Tween
} = {
    in: (elements: React.RefObject<ARef[]>): gsap.core.Tween => {
        return gsap.fromTo(elements.current, {
            x: index => index % 2 == 0 ? 50 : -50,
            opacity: 0
        }, {
            duration: 0.75,
            stagger: 0.2,
            x: 0,
            opacity: 1,
            ease: 'power1.out'
        });
    },
    out: (elements: React.RefObject<ARef[]>): gsap.core.Tween => {
        return gsap.fromTo(elements.current, {
            x: 0,
            opacity: 1,
        }, {
            duration: 0.5,
            stagger: 0.1,
            x: index => index % 2 != 0 ? 50 : -50,
            opacity: 0,
            ease: 'power1.out'
        });
    }
}
