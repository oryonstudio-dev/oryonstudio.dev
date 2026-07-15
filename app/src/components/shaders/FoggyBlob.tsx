'use client';

import { Blob, Fog } from 'shaders/react';
import ShaderWrapper from './ShaderWrapper';

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