import { gsap, CSSPlugin } from 'gsap';
import { filterNulls } from '@/utils/functions';
import { SplitText } from 'gsap/all';
import type { El, Ref, GSAPAnimation } from '@/utils/types';

gsap.registerPlugin(SplitText, CSSPlugin);

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

// S P L I T   T E X T   A N I M A T I O N S
export const charsSlideIn: GSAPAnimation.SplitText = {
    prepare: (text) => {
        const target = filterNulls(text);

        const splitText = SplitText.create(target, { type: "chars" });

        gsap.set(target, { overflow: 'hidden' });
        gsap.set(splitText.chars, { y: '100%' });

        return splitText;
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

export const magneticPull: GSAPAnimation.SplitText = {
    prepare: (text) => {
        const target = filterNulls(text);

        const splitText = SplitText.create(target, { type: "chars" });

        gsap.set(splitText.chars, { 
            x: () => gsap.utils.random(-200, 200),
            y: () => gsap.utils.random(-200, 200),
            opacity: 0,
            rotation: () => gsap.utils.random(-90, 90)
        });

        return splitText;
    },
    animate: (text, options) => {

        const tl = gsap.timeline();

        tl.fromTo(text.chars, {
            x: () => gsap.utils.random(-50, 50),
            y: () => gsap.utils.random(-50, 50),
            opacity: 0,
            rotation: () => gsap.utils.random(-90, 90)
        }, {
            x: 0,
            y: 0,
            opacity: 1,
            rotation: 0,
            stagger: 0.02,
            duration: 1,
            ease: 'power3.out',
            ...options
        });

        return tl;
    }
}

export const spiralIn: GSAPAnimation.SplitText = {
    prepare: (text) => {
        const target = filterNulls(text);

        const splitText = SplitText.create(target, { type: "chars" });

        gsap.set(splitText.chars, { 
            x: () => gsap.utils.random(-200, 200),
            y: () => gsap.utils.random(-200, 200),
            opacity: 0,
            rotation: () => gsap.utils.random(-90, 90)
        });

        return splitText;
    },
    animate: (text, options) => {

        const tl = gsap.timeline();

        tl.fromTo(text.chars, {
            x: (i) => Math.cos(i) * 100,
            y: (i) => Math.sin(i) * 100,
            rotation: 360,
            scale: 0,
            opacity: 0,
        }, {
            x: 0,
            y: 0,
            opacity: 1,
            rotation: 0,
            scale: 1,
            stagger: 0.04,
            duration: 0.8,
            ease: 'power3.out',
            ...options
        });

        return tl;
    }
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

// D I V I D E R   A N I M A T I O N
export const drawDivider: GSAPAnimation = (target, options) => {
    const divider = filterNulls(target);

    return gsap.from(divider, {
        height: 0,
        duration: 0.5,
        ease: 'power2.out'
    });
}