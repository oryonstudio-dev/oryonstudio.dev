'use client';

import { useState, useEffect, useRef } from 'react';
import { DeviceSpecs } from '@/utils/types';
import { Ref, El } from './types';


// E L E M E N T S   F I L T E R I N G
export function mapArray(array?: React.RefObject<HTMLElement | null>[]) {
    return array
        ?.map(item => item.current)
        .filter((item): item is HTMLElement => item !== null) ?? [];
}

export function filterElement(element?: React.RefObject<HTMLElement | null>) {
    if (element != null) {
        return element.current;
    } else {
        return [];
    }
}

export function filterNulls(target: Ref[] | Ref) {
    const array = Array.isArray(target) ? target : [target];
    return array
        .map(el => el.current)
        .filter((el): el is NonNullable<typeof el> => el !== null);
}


// D E V I C E   S P E C S
export function useDeviceSpecs(): DeviceSpecs {
    const [specs, setSpecs] = useState<DeviceSpecs>({
        mobile:         false,
        lowPowerDevice: false,
        mounted:        false
    });

    useEffect(() => {
        const nav = navigator as any;

        // 1. Basic Mobile Check
        const mobile =
        /Mobi|Android|iPhone/i.test(navigator.userAgent) ||
        (window.matchMedia('(pointer: coarse)').matches);

        // 2. Hardware Resource Checks
        const lowRAM = nav.deviceMemory && nav.deviceMemory <= 4;
        const lowCPU = nav.hardwareConcurrency && nav.hardwareConcurrency <= 4;

        // 3. Connection Data-Saver Check
        const saveDataActive = nav.connection?.saveData === true;
        const lowPowerDevice = !!(lowRAM || lowCPU || saveDataActive);

        setSpecs({
            mobile,
            lowPowerDevice,
            mounted: true,
        });
    }, []);

    return specs;
}


// I N T E R S E C T I O N   O B S E R V E R
export function useIsVisible<T extends HTMLElement = HTMLElement>(ratio?: number, options?: IntersectionObserverInit): [React.RefObject<T | null>, boolean] {
    const [isVisible, setIsVisible] = useState(false);
    const elRef = useRef<T | null>(null);
    if (!ratio) ratio = 1.0;

    useEffect(() => {
        if (!elRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting && entry.intersectionRatio >= ratio);
            }, {
                threshold: ratio,
                ...options
            }
        );

        observer.observe(elRef.current);

        return () => {
            if (elRef.current) observer.unobserve(elRef.current);
        }
    }, [ratio, options]);

    return [elRef, isVisible];
}

