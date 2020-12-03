function echo<T>(arg: T): T {
    return arg
}

const result = echo(true)

function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}

const result2 = swap(["str", 123])
// result2[0]. 数字的方法

// 这个函数作用于含有T类型的array
function echoWithArray<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg
}

// const arrs = echoWithArray([1, 2, 3])
// const arrs = echoWithArray('str') //报错 此时使用泛型约束，可以传有length属性的变量，这就是约束泛型

interface IWithLength {
    length: number
}
// T是约束的泛型，只要你有length属性就行，
// 泛型中使用extends关键字，就可以让传入值满足我们的特定条件
function echoWithLength<T extends IWithLength>(arg: T): T {
    console.log(arg.length);
    return arg
}

const str = echoWithLength("str")
const obj = echoWithLength({ length: 10 })
const arr2 = echoWithLength([1, 2, 3])
// echoWithLength(13) // 报错

// 以上是在函数的参数和返回值中使用泛型








// 泛型在类上面的使用

// 需求：我传入什么值，推出的就是什么值
class Queue<T> {
    private data = [];
    push(item: T) {
        return this.data.push(item)
    }
    pop(): T {
        return this.data.shift()
    }
}

const queue = new Queue<number>()// 多走一步
queue.push(10)

console.log(queue.pop().toFixed());
// console.log(queue.pop().toFixed());// 报错：字符串没有toFixed方法

const queue2 = new Queue<string>()
queue2.push('str 1')
console.log(queue2.pop().length);





// 接口接受泛型的洗礼
// 接口是用来描述一个对象的样子的
interface KeyPair<T, U> {
    key: T;
    value: U;
}
let kp1: KeyPair<number, string> = { key: 123, value: "加油" }
let kp2: KeyPair<string, number> = { key: "加油", value: 123 }

// 以前定义数字类型的数组的时候，是这样的
const arr: number[] = [1, 2, 3]
// 现在可以interface的泛型类来表示
let arrTwo: Array<number> = [1, 2]//这是interface搭配泛型，可以非常灵活的返回不同的类型

// 泛型也是用来表示类型的，接口是用来表示对象的样子的





// 接口还可以用来描述一个函数的样子
// 当然我们interface函数也可以支持泛型，它会使我们支持的函数类型更加多变

// interface Iplus {
//     (a: number, b: number): number
// }

// function plus(a: number, b: number): number {
//     return a + b;
// }
// // const a = plus//这是类型断言

// const b: Iplus = plus

interface Iplus<T> {
    (a: T, b: T): T
}

function plus(a: number, b: number): number {
    return a + b;
}

function connect(a: string, b: string) {
    return a + b
}

const b: Iplus<number> = plus
const c: Iplus<string> = connect