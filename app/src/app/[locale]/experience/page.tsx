import styles from './page.module.scss';
import Slide from '@/components/Slide/Slide';
import { useTranslations } from 'next-intl';
import LiquidAurora from '@/components/shaders/LiquidAurora';

const s = styles;

function Experience() {
    const t = useTranslations('experience.content');

    return (
        <Slide className={s.Hero}>
            <LiquidAurora />
            <h1>{ t('page under construction') } <span className={s.pointer}>█</span></h1>
        </Slide>
    );
}

export default Experience;