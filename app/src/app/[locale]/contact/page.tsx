import styles from './page.module.scss';
import Slide from '@/components/Slide/Slide';
import { useTranslations } from 'next-intl';

import dynamic from 'next/dynamic';
const FoggyBlob = dynamic(() => import('@/components/shaders/FoggyBlob'), { ssr: false });

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