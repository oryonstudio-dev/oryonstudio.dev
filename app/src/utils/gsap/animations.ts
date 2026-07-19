import { gsap } from 'gsap';
import { filterNulls } from '@/utils/functions';
import { SplitText } from 'gsap/all';
import type { El, Ref, GSAPAnimation } from '@/utils/types';

gsap.registerPlugin(SplitText);

export const linksColumnSlide: {
    in:  GSAPAnimation;
    out: GSAPAnimation;
} = {
    in: (elements, options) => {
        const targets = filterNulls(elements);
        return gsap.fromTo(targets, {
            x: index => index % 2 == 0 ? 50 : -50,
            opacity: 0
        }, {
            duration: 0.75,
            stagger: 0.2,
            x: 0,
            opacity: 1,
            ease: 'power1.out',
            ...options
        });
    },
    out: (elements, options) => {
        const targets = filterNulls(elements);
        return gsap.fromTo(targets, {
            x: 0,
            opacity: 1,
        }, {
            duration: 0.5,
            stagger: 0.1,
            x: index => index % 2 != 0 ? 50 : -50,
            opacity: 0,
            ease: 'power1.out',
            ...options
        });
    }
}

export const charsSlideIn: GSAPAnimation.SplitText = {
    prepare: (text) => {
        const target = filterNulls(text);

        const splitText = SplitText.create(target, { type: "chars" });

        const tl = gsap.timeline();

        gsap.set(target, { overflow: 'hidden' });
        gsap.set(splitText.chars, { y: '100%' });

        return [tl, splitText];
    },
    animate: (text, options) => {

        const tl = gsap.timeline();

        tl.set(text.chars, { y: '100%' });

        tl.fromTo(text.chars, {
            y: '100%'
        }, {
            y: 0,
            duration: 0.6,
            ease: 'back.out(2)',
            stagger: {
                each: 0.03,
            },
            ...options
        });

        return tl;
    }
}

export const skewIn: GSAPAnimation<Ref> = (el, options) => {
    const target = filterNulls(el);

    const tween = gsap.from(target, {
        skewX: 30,
        x: -100,
        opacity: 0,
        ease: 'power3.out',
        stagger: 0.1,
        duration: 1,
        ...options
    });

    return tween;
}

export const magneticPull: GSAPAnimation<Ref<El.Text>> = (text, options) => {
    const targets = filterNulls(text);
    const splitText = SplitText.create(targets, { type: 'chars' });

    return gsap.from(splitText.chars, {
        x: () => gsap.utils.random(-200, 200),
        y: () => gsap.utils.random(-200, 200),
        opacity: 0,
        rotation: () => gsap.utils.random(-90, 90),
        stagger: 0.02,
        duration: 1,
        ease: 'power3.out',
        ...options
    });
}

export const spiralIn: GSAPAnimation<Ref<El.Text>> = (text, options) => {
    const target = filterNulls(text);
    const splitText = SplitText.create(target, { type: 'chars' });

    return gsap.from(splitText.chars, {
        x: (i) => Math.cos(i) * 100,
        y: (i) => Math.sin(i) * 100,
        rotation: 360,
        scale: 0,
        opacity: 0,
        stagger: 0.04,
        duration: 0.8,
        ease: 'power3.out',
        ...options
    });
}

export const revealWipe: GSAPAnimation<Ref<El.Text>> = (text, options) => {
    const target = filterNulls(text);
    const splitText = SplitText.create(target, { type: 'chars' });

    return gsap.from(splitText.chars, {
        clipPath: 'inset(0 100% 0 0)',
        duration: 1.2,
        ease: 'power3.inOut',
        ...options
    });
}

export const fadeUpWords: GSAPAnimation = (text, options) => {
    const target = filterNulls(text);
    const splitText = SplitText.create(target, { type: 'words' });

    return gsap.from(splitText.words, {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power2.out',
        ...options
    });
}