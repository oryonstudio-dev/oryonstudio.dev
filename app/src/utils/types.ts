// E L E M E N T S
export type El<T extends HTMLElement = HTMLElement> = T | null;

export namespace El {
  export type H   = HTMLHeadingElement   | null;
  export type P   = HTMLParagraphElement | null;
  export type Btn = HTMLButtonElement    | null;
  export type Div = HTMLDivElement       | null;
  export type Li  = HTMLLIElement        | null;
  export type A   = HTMLAnchorElement    | null;
}

// R E F S
export type Ref<T extends HTMLElement = HTMLElement> = React.RefObject<T | null>;

export namespace Ref {
  export type H   = React.RefObject<HTMLHeadingElement   | null>;
  export type P   = React.RefObject<HTMLParagraphElement | null>;
  export type Btn = React.RefObject<HTMLButtonElement    | null>;
  export type Div = React.RefObject<HTMLDivElement       | null>;
  export type Li  = React.RefObject<HTMLLIElement        | null>;
  export type A   = React.RefObject<HTMLAnchorElement    | null>;
}

// I N T E R F A C E S
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
    ref?:       React.RefObject<El.A>
}

export interface LinkTemplate {
    href:   string;
    label:  string;
}

export interface DeviceSpecs {
    mobile:         boolean,
    lowPowerDevice: boolean,
    mounted:        boolean
}