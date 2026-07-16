'use client';

import dynamic from 'next/dynamic';
const LiquidMetal = dynamic(() => import('@paper-design/shaders-react').then(mod => mod.LiquidMetal), { ssr: false });

function LiquidMetalLogo() {
    return (
        <LiquidMetal 
            image='/logo-sdf.png'
            colorBack='#ffffff00'
            scale={1}
            style={{
                width: '10rem',
                height: '10rem',
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }}
        />
    );
}

export default LiquidMetalLogo;