type MYReadonly<T> = {
  readonly [P in keyof T]: T[P];
}

interface TY{
  name: string
  age: number
  address: string
}

type test = MYReadonly<TY>

export {}