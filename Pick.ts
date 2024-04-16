type MYPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

interface TY{
  name: string
  age: number
  address: string
}

type test = MYPick<TY, 'age'|'address'>

export {}