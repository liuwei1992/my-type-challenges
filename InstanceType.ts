type MyInstanceType<T extends new (...args: any)=>any> = T extends new (...args: any)=>infer R ? R : never


class Person{
  constructor(public name: string){}
}

const a = new Person('a')

type II = MyInstanceType<typeof Person>