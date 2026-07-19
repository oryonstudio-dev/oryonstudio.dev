// E L E M E N T S
export type El<T extends HTMLElement = HTMLElement> = T | null;

export namespace El {
  export type H    = HTMLHeadingElement   | null;
  export type P    = HTMLParagraphElement | null;
  export type Li   = HTMLLIElement        | null;
  export type Text = HTMLHeadingElement   | HTMLParagraphElement | HTMLLIElement | null;

  export type Btn  = HTMLButtonElement    | null;
  export type Div  = HTMLDivElement       | null;
  export type A    = HTMLAnchorElement    | null;
}

// R E F S
export type Ref<T extends HTMLElement = HTMLElement> = React.RefObject<any>;

export namespace Ref {
  export type H    = React.RefObject<El.H>;
  export type P    = React.RefObject<El.P>;
  export type Li   = React.RefObject<El.Li>;
  export type Text = React.RefObject<El.Text>;

  export type Btn  = React.RefObject<HTMLButtonElement    | null>;
  export type Div  = React.RefObject<HTMLDivElement       | null>;
  export type A    = React.RefObject<HTMLAnchorElement    | null>;
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

// G S A P   A N I M A T I O N   T Y P E
export type GSAPAnimation<T extends Ref<any> = Ref<any>> = (el: T | T[], options?: gsap.TweenVars) => gsap.core.Tween | gsap.core.Timeline;