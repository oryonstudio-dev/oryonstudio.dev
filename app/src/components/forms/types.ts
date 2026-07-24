import { Ref } from '@/utils/types';

export interface InputProps {
    className?:   string;
    ref?:         Ref<HTMLInputElement>;
    name?:        string;
    type?:        string;
    required?:    boolean;
    id?:          string;
    placeholder?: string;
}