'use client';

import { Shader, Blob, Fog } from 'shaders/react';

function FoggyBlob() {
    return (
        <Shader 
            style={{
                position: 'absolute',
                width: '110vw',
                height: '110vh',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: -1
            }}
        >
            <Blob
                colorA='#00f'
                colorB='#33f'
            />
            <Fog
                colorA='#00fd'
                colorB='#0000'
            />
        </Shader>
    );
}

export default FoggyBlob;