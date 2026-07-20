'use client';

import styles from "./Footer.module.scss";
import { LinkTemplate } from '@/utils/types';
import CypherLink from '@/components/links/cypher';
import { useTranslations } from 'next-intl';
import LogoDraw from "@/components/LogoDraw";
import Link from 'next/link';
import { useIsVisible } from "@/utils/functions";
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { El } from '@/utils/types';
import { charsSlideIn, magneticPull, drawDivider } from '@/utils/gsap/animations';

gsap.registerPlugin(ScrollTrigger);

const s = styles;

function Footer() {
    const [footer, isFooterFullyVisible] = useIsVisible(0.75);
    const slogan = useRef<El.P>(null);
    const availability = useRef<El.P>(null);
    const divider = useRef<El.Div>(null);
    const linksRef = useRef(new Map());
    
    const t = useTranslations('global');

    const links: LinkTemplate[] = [
        { href: '/',           label: t('links.home')       },
        { href: '/about',      label: t('links.about')      },
        { href: '/experience', label: t('links.experience') },
        { href: '/services',   label: t('links.services')   },
        { href: '/contact',    label: t('links.contact')    }
    ];

    useGSAP(() => {
        if (typeof window == 'undefined') return;
        if (!footer.current || !slogan.current || !availability.current) return;

        const splitSlogan = magneticPull.prepare(slogan);
        const splitAvailability = charsSlideIn.prepare(availability);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: footer.current,
                start: '90% bottom'
            },
            delay: 0.1
        });

        tl.add(magneticPull.animate(splitSlogan));
        tl.add(charsSlideIn.animate(splitAvailability), "<0.5");
        tl.add(drawDivider(divider));
    });

    return (
        <footer className={s.Footer} ref={footer}>
            <section className={s.MainSection}>
                <div className={s.info}>
                    <Link href="/" className={s.logo}>
                        <LogoDraw 
                            active={isFooterFullyVisible}
                            color="#ffff"
                            duration={2}
                            delay={0.1}
                        />
                    </Link>
                    <p className={s.slogan} ref={slogan} dangerouslySetInnerHTML={{ __html: t('slogan') }}></p>
                    <p className={s.availability}><span className={s.indicator}></span><span className={s.text} ref={availability} dangerouslySetInnerHTML={{ __html: t('availability') }}></span></p>
                </div>

                <div className={s.divider} ref={divider} />

                <nav>
                    { links.map(link => (
                        <CypherLink 
                            className={s.link}
                            label={link.label}
                            href={link.href}
                            key={links.indexOf(link)}
                            ref={ (el) => {
                                if (el) {
                                    linksRef.current.set(links.indexOf(link), el);
                                } else {
                                    linksRef.current.delete(links.indexOf(link));
                                }
                            } }
                        />
                    )) }
                </nav>
            </section>

            <div className={s.bottom}>
                <p className={s.humanTouch}>{ t('footer.humanTouch.designed_and_engineered_by') } <a target='_blank'>{ t('footer.humanTouch.jakub_barczynski') }</a>. { t('footer.humanTouch.powered_by_nextjs') }</p>
                <p className={s.copyright}>{ t('footer.copyright') }</p>
            </div>
        </footer>
    );
}

export default Footer;