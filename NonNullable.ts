// type MYNonNullable<T> = T extends null|undefined ? never : T
type MYNonNullable<T> = T & {}

type TT = 'name' | 'age' | null | undefined

type TT2 = NonNullable<TT>

const name:TT  = undefined


export {} 