'use client';

import ShaderWrapper from './ShaderWrapper';

import dynamic from 'next/dynamic';
const Aurora     = dynamic(() => import('shaders/react').then(mod => mod.Aurora));
const ChromaFlow = dynamic(() => import('shaders/react').then(mod => mod.ChromaFlow));

function LiquidAurora() {
    return (
        <ShaderWrapper>
            <Aurora
                colorA='#00f'
                colorB='#44f'
                height={190}
            />
            <ChromaFlow
                baseColor='#00f'
                upColor='#44f'
                downColor='#05f'
                leftColor='#10f'
                rightColor='#14f'
                intensity={0.3}
            />
        </ShaderWrapper>
    );
}

export default LiquidAurora;