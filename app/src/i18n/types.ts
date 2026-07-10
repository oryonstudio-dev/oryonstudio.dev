export type Locale = 'pl' | 'en';
export interface MetadataParams {
    params: Promise<{ locale: string }>
}