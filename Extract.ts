// Extract from T those types that are assignable to U
type MYExtract<T, K> = T extends K ? T : never

interface TY{
  name: string
  age: number
  address: string
}

interface UU{
  name: string
  age: number
}

//  'name'|'age'|'address'    "name" | "age"
type test = MYExtract<keyof TY,keyof UU>

export {}