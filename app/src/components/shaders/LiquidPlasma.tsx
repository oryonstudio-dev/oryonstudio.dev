'use client';

import { Plasma, Liquify } from 'shaders/react';
import ShaderWrapper from './ShaderWrapper';

function LiquidGradient() {
    return (
        <ShaderWrapper>
            <Plasma
                colorA='#00f'
                colorB='#000'
                density={0.1}
                warp={0.5}
                contrast={1.1}
                speed={1}
            />
            <Liquify />
        </ShaderWrapper>
    )
}

export default LiquidGradient;