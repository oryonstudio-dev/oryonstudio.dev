import styles from './page.module.scss';
import Slide from '@/components/Slide/Slide';
import { useTranslations } from 'next-intl';
import FlareBtn from '@/components/links/FlareBtn';
import LiquidPlasma from '@/components/shaders/LiquidPlasma';
import { HorizontalSection, HorizontalPanel } from '@/components/horizontal-scroll/horizontal-scroll';
import Image from 'next/image';
import q1BgText from '@/../public/dotted-kihim-text/pages.svg';
import q2BgText from '@/../public/dotted-kihim-text/type.svg';
import q3BgText from '@/../public/dotted-kihim-text/creativity.svg';
import q4BgText from '@/../public/dotted-kihim-text/you.svg';

const s = styles;

function Contact() {
    const t = useTranslations('contact.content');

    return (
        <>
            <Slide className={s.Hero}>
                <LiquidPlasma />
                <div className={s.content}>
                    <h1>Let's Build Something Out of This World</h1>
                    <p className={s.lead}>Fill out the form below or send a direct email. We respond to qualified inqueries within 24 hours.</p>
                </div>
            </Slide>

            <HorizontalSection className={s.form} id="form">
                <HorizontalPanel>
                    <div className={`${s.question} ${s.q1}`}>
                        <Image
                            className={s.bgText}
                            src={q1BgText}
                            alt="pages"
                        />
                        
                        <div className={s.blueRect} />

                        <div className={s.modal}>
                            <h2>How many pages do you need on your website?</h2>
                        </div>
                    </div>
                </HorizontalPanel>

                <HorizontalPanel>
                    <div className={`${s.question} ${s.q2}`}>
                        <Image
                            className={s.bgText}
                            src={q2BgText}
                            alt="pages"
                        />

                        <div className={`${s.blueRect} ${s.br1}`} />
                        <div className={`${s.blueRect} ${s.br2}`} />

                        <div className={s.modal}>
                            <h2>What type of website are you looking for?</h2>
                        </div>
                    </div>
                </HorizontalPanel>

                <HorizontalPanel>
                    <div className={`${s.question} ${s.q3}`}>
                        <Image
                            className={s.bgText}
                            src={q3BgText}
                            alt="pages"
                        />

                        <div className={`${s.blueRect} ${s.br1}`} />
                        <div className={`${s.blueRect} ${s.br2}`} />

                        <div className={s.modal}>
                            <h2>How creative do you want it to be?</h2>
                        </div>
                    </div>
                </HorizontalPanel>

                <HorizontalPanel>
                    <div className={`${s.question} ${s.q4}`}>
                        <Image
                            className={s.bgText}
                            src={q4BgText}
                            alt="pages"
                        />

                        <div className={`${s.blueRect} ${s.br1}`} />
                        <div className={`${s.blueRect} ${s.br2}`} />

                        <div className={s.modal}>
                            <h2>Your information</h2>
                        </div>
                    </div>
                </HorizontalPanel>
            </HorizontalSection>
        </>
    );
}

export default Contact;