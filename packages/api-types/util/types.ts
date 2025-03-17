export type OmitNewableFunctionKeys<T = NewableFunction> = Omit<T, keyof NewableFunction>
