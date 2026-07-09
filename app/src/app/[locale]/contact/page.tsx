import styles from './page.module.scss';
import Slide from '@/components/Slide/Slide';
import { useTranslations } from 'next-intl';

const s = styles;

function Contact() {
    const t = useTranslations('contact.content');

    return (
        <Slide className={s.Hero}>
          <h1>{ t('page under construction') } <span className={s.pointer}>█</span></h1>
        </Slide>
    );
}

export default Contact;