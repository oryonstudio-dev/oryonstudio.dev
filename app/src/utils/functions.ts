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