type MyReturnType<F extends (...arg: any)=>any> = F extends (...arg: any)=>infer R ? R : never


function test(p: string, v: string ){
  return p + v
}

type T = typeof test

type Return = MyReturnType<T>