export interface Children {
    children: Readonly<React.ReactNode>;
}

export interface LinkProps {
    href:       string,
    children?:  React.ReactNode,
    className?: string,
    active?:    boolean,
    visited?:   boolean,
    label?:     string,
    ref?:       React.RefObject<A>
}

export interface LinkTemplate {
    href:   string;
    label:  string;
}


// Refs and Elements
export type H      = HTMLHeadingElement   | null;
export type HRef   = React.RefObject<H>;

export type P      = HTMLParagraphElement | null;
export type PRef   = React.RefObject<P>;

export type Btn    = HTMLButtonElement    | null;
export type BtnRef = React.RefObject<Btn>;

export type Any    = HTMLElement          | null;
export type AnyRef = React.RefObject<Any>;

export type Div    = HTMLDivElement       | null;
export type DivRef = React.RefObject<Div>;

export type Li     = HTMLLIElement        | null;
export type LiRef  = React.RefObject<Li>;

export type A      = HTMLAnchorElement    | null;
export type ARef   = React.RefObject<A>;


export interface DeviceSpecs {
    mobile:         boolean,
    lowPowerDevice: boolean,
    mounted:        boolean
}