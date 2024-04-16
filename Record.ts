type MyRecord<T extends keyof any,K>={
  [k in T]: K
}

interface TY{
  name: string
  age: number
  address: string
}

type test = Record<keyof TY, string>

interface II extends test{
  friends: any[]
}

const ii:II = {
  name: "liuw",
  age: '11',
  address: "address",
  friends:[]
} 
export {}