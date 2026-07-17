'use client';

import { useDeviceSpecs } from '@/utils/functions';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import dynamic from 'next/dynamic';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
const Shader = dynamic(() => import('shaders/react').then(mod => mod.Shader), { ssr: false });

interface Props {
    children:          React.ReactNode;
    width?:            string;
    height?:           string;
    style?:            React.CSSProperties;
    center?:           boolean;
    imagePlaceholder?: string | StaticImport;
    video?:            string | undefined;
    videoPlaceholder?: string | undefined;
}

function ShaderWrapper({ children, width = '110vw', height = '110vh', style = {}, center = true, imagePlaceholder = '', video ='', videoPlaceholder = '' }: Props) {
    const [mounted, setMounted] = useState<boolean>(false);
    const specs = useDeviceSpecs();

    useEffect(() => {
        setMounted(true);
    }, []);

    const centerStyles: React.CSSProperties = center ? {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    } : {};

    function shader() {
        if (!specs.lowPowerDevice) {
            return (
                <Shader 
                    style={{ 
                        width: '100%',
                        height: '100%'
                    }}
                >
                    { children }
                </Shader>
            );
        } else return '';
    }

    function placeholder() {
        if (specs.lowPowerDevice) {
            if (videoPlaceholder) {
                return (
                    <video
                        src={video}
                        poster={videoPlaceholder}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        style={{ objectFit: 'cover', position: 'absolute', inset: 0 }}
                    />
                );
            } else if (imagePlaceholder) {
                return (
                    <Image
                        placeholder="blur"
                        src={imagePlaceholder}
                        fill={true}
                        alt=""
                    />
                );
            } else return undefined;
        } else return undefined;
    }

    function content() {
        if      (shader())      return shader();
        else if (placeholder()) return placeholder();
        else                    return '';
    }

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
            { content() }
        </div>
    )
}

export default ShaderWrapper;