import { LinkProps } from '@/utils/types';
import Link from 'next/link';
import { motion } from 'motion/react';
import styles from './Sidebar.module.scss';

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
            className={`${className} ${s.link}`}
            onClick={onClick}
        >
            { children }
        </MotionLink>
    );
}

export default SidebarLink;
