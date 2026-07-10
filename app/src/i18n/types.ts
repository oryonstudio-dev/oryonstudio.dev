export type Locale = 'pl' | 'en';
export interface MetadataProps {
    params: Promise<{ locale: string }>
}