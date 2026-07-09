import styles from "./Footer.module.scss";
import { LinkTemplate } from '@/utils/types';

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
        <footer className={s.Footer}></footer>
    );
}

export default Footer;