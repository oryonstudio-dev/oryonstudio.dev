'use client';

import { Shader, Plasma, Liquify } from 'shaders/react';

function LiquidGradient() {
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
            <Plasma
                colorA='#00f'
                colorB='#000'
                density={0.1}
                warp={0.5}
                contrast={1.1}
                speed={1}
            />
            <Liquify />
        </Shader>
    )
}

export default LiquidGradient;