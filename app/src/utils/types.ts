export interface Children {
    children: Readonly<React.ReactNode>;
}

export interface LinkProps {
    href: string,
    children: React.ReactNode,
    className?: string,
    active?: boolean,
    visited?: boolean
}