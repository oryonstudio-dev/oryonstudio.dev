import styles from "./Footer.module.scss";
import { LinkTemplate } from '@/utils/types';
import CypherLink from '@/components/links/cypher';

const s = styles;

function Footer() {
    const links: LinkTemplate[] = [
        { href: '/', label:'home' },
        { href: '/about', label: 'about_us' },
        { href: '/experience', label: 'our_experience' },
        { href: '/services', label: 'our_services' },
        { href: '/contact', label: 'contact_us'}
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