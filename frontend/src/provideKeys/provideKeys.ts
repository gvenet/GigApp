import type { LogoTypeInterface } from "@/interfaces";
import type { InjectionKey } from "vue";

export const pokemonTypesKeys = Symbol() as InjectionKey<{
	logoTypes: LogoTypeInterface,
	elemTypes: string[]
}>;