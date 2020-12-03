type PlusType = (x: number, y: number) => number
function sum(x: number, y: number): number {
    return x + y
}
// const sum2: (x: number, y: number) => number = sum
// 使用类型别名
const sum2: PlusType = sum

// 通常在联合类型中使用
type NameResolver = () => string
type NameOrResolver = string | NameResolver

function getName(n: NameOrResolver) {
    if (typeof n === 'string') {
        return n
    } else {
        return n()
    }
}