// 省略一些属性
type MyOmit<T,K extends keyof T>={
  [N in keyof T as N extends K ? never: N]: T[n]
}

interface TY{
  name: string
  age: number
  address: string
}

type test = MyOmit<TY, 'name'>

export {}