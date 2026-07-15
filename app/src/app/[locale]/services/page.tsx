import styles from './page.module.scss';
import Slide from '@/components/Slide/Slide';
import { useTranslations } from 'next-intl';

import dynamic from 'next/dynamic';
const LiquidPlasma = dynamic(() => import('@/components/shaders/LiquidPlasma'), { ssr: false });

const s = styles;

function Services() {
    const t = useTranslations('services.content');

    return (
        <Slide className={s.Hero}>
            <LiquidPlasma />
            <h1>{ t('page under construction') } <span className={s.pointer}>█</span></h1>
        </Slide>
    );
}

export default Services;