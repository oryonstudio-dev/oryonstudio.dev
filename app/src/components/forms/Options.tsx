'use client';

import OptionBtn from './OptionBtn';
import s from './forms.module.scss';
import type { Ref, El, Children } from '@/utils/types';
import { useState } from 'react';

interface Props extends Children {
    options:    string[];
    className?: string;
    ref?:       Ref<El.Div>;
}

function Options({ children, options, className='', ref }: Props) {
    const [active, setActive] = useState(0);

    return (
        <div className={`${className} ${s.Options}`} ref={ref}>
            { options.map((option, i) => {
                return (
                    <OptionBtn 
                        active={active == i + 1}
                        key={i}
                        onClick={() => active == i + 1 ? setActive(0) : setActive(i + 1)}
                    >
                        { option }
                    </OptionBtn>
                );
            }) }
            { children }
        </div>
    )
}

export default Options;