'use client';

import ShaderWrapper from './ShaderWrapper';

import dynamic from 'next/dynamic';
const Blob = dynamic(() => import('shaders/react').then(mod => mod.Blob));
const Fog  = dynamic(() => import('shaders/react').then(mod => mod.Fog));

function FoggyBlob() {
    return (
        <ShaderWrapper>
            <Blob
                colorA='#00f'
                colorB='#33f'
            />
            <Fog
                colorA='#00fd'
                colorB='#0000'
            />
        </ShaderWrapper>
    );
}

export default FoggyBlob;