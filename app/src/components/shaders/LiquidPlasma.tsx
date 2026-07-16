'use client';

import ShaderWrapper from './ShaderWrapper';

import dynamic from 'next/dynamic';
const Plasma  = dynamic(() => import('shaders/react').then(mod => mod.Plasma));
const Liquify = dynamic(() => import('shaders/react').then(mod => mod.Liquify));

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