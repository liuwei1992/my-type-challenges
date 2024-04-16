type MyParameterType<F extends (...args:any[])=>any> = F extends (...args: infer P) => any ? P : never


function test(this:{name: string},p: string, v: string ){
  return p + v
}


type Params = MyParameterType<typeof test>

type Params2 =  ThisParameterType<typeof test>



export {}