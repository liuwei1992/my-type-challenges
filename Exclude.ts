// Exclude from T those types that are assignable to U
type MYExclude<T, K> = T extends K ? never : T

interface TY{
  name: string
  age: number
  address: string
}

interface UU{
  name: string
  age: number
}


type test = MYExclude<keyof TY,keyof UU>

export {}