import type { LogoTypeInterface } from "@/interfaces/logoType.interface";
import type { InjectionKey } from "vue";


export const elemTypesKeys = Symbol() as InjectionKey<{ elemTypes: string[] }>;
export const logoTypesKeys = Symbol() as InjectionKey<{ logoTypes: LogoTypeInterface }>;