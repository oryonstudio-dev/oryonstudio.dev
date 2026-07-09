import styles from "./Footer.module.scss";
import { LinkTemplate } from '@/utils/types';
import CypherLink from '@/components/links/cypher';
import { useTranslations } from 'next-intl';

const s = styles;

function Footer() {
    const t = useTranslations('global.links');

    const links: LinkTemplate[] = [
        { href: '/',           label: t('home')       },
        { href: '/about',      label: t('about')      },
        { href: '/experience', label: t('experience') },
        { href: '/services',   label: t('services')   },
        { href: '/contact',    label: t('contact')    }
    ];

    return (
        <footer className={s.Footer}>
            <nav>
                { links.map(link => <CypherLink className={s.link} label={link.label} href={link.href} key={links.indexOf(link)} />)}
            </nav>
        </footer>
    );
}

export default Footer;