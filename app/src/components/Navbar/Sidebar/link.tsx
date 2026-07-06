import styles from './../links.module.scss';
import { LinkProps } from '@/utils/types';
import Link from 'next/link';
import { motion } from 'motion/react';

const s = styles;

interface Props extends LinkProps {
    onMouseEnter?: () => void;
    onClick?: () => void;
}

function SidebarLink({ children, href, className, active = false, onMouseEnter, onClick } : Props) {
    const MotionLink = motion.create(Link);

    return (
        <MotionLink
            href={href}
            className={`${className} ${s.mainCategoryLink}`}
            style={ active ? { x: '2.25rem', scale: 1.01, fontWeight: 300 } : {} }
            onMouseEnter={onMouseEnter}
            onClick={onClick}
        >
            { active ? <span style={{ color: '#f0f', transition: 'color 0.5s ease-in' }}>//</span> : <span style={{ color: '#f0f0', transition: 'color 0.5s ease-in-out' }}>//</span> } { children }
        </MotionLink>
    );
}

export default SidebarLink;
