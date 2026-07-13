'use client';

import { Shader, Aurora, ChromaFlow } from 'shaders/react';

function LiquidAurora() {
    return (
        <Shader 
            style={{
                position: 'absolute',
                width: '110vw',
                height: '110vh',
                top: '10%',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: -1
            }}
        >
            <Aurora
                colorA='#00f'
                colorB='#44f'
            />
            <ChromaFlow
                baseColor='#00f'
                upColor='#44f'
                downColor='#05f'
                leftColor='#10f'
                rightColor='#14f'
                intensity={0.3}
            />
        </Shader>
    );
}

export default LiquidAurora;