import styles from './page.module.scss';
import Slide from '@/components/Slide/Slide';
import { useTranslations } from 'next-intl';
import LiquidAurora from '@/components/shaders/LiquidAurora';
import FoggyBlob from '@/components/shaders/FoggyBlob';

const s = styles;

function Contact() {
    const t = useTranslations('contact.content');

    return (
        <Slide className={s.Hero}>
            <FoggyBlob />
            <h1>{ t('page under construction') } <span className={s.pointer}>█</span></h1>
        </Slide>
    );
}

export default Contact;