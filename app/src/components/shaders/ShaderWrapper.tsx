'use client';

import { DeviceSpecs } from '@/utils/types';
import { useDeviceSpecs } from '@/utils/functions';
import { useState, useEffect } from 'react';
import { Shader } from 'shaders/react';

interface Props {
    children: React.ReactNode,
    width?: string,
    height?: string,
    style?: React.CSSProperties,
    center?: boolean
}

function ShaderWrapper({ children, width = '110vw', height = '110vh', style = {}, center = true }: Props) {
    const [specs, setSpecs]     = useState<DeviceSpecs>(useDeviceSpecs());
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const centerStyles: React.CSSProperties = center ? {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    } : {};

    return (
        <div
            style={{
                opacity: mounted ? 1 : 0,
                transition: 'opacity 3s ease-in-out',
                width: width,
                height: height,
                zIndex: -1,
                ...centerStyles,
                ...style
            }}
        >
            { specs.lowPowerDevice ? '' : (
                <Shader 
                    style={{ 
                        width: '100%',
                        height: '100%'
                    }}
                >
                    { children }
                </Shader>
            )}
        </div>
    )
}

export default ShaderWrapper;