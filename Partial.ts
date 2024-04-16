type MYPartial<T> = {
  [P in keyof T]?: T[P];
}

interface TY{
  name: string
  age: number
  address: string
}

type test = MYPartial<TY>

export {}