'use client';

import { useState, useEffect } from 'react';
import { DeviceSpecs } from '@/utils/types';

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

    console.log(specs);

    return specs;
}