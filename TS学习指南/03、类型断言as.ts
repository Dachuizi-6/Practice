function getLength(input: string | number): number {
    const str = input as String //这里大写的String是接口
    if (str.length) {
        return str.length
    } else {
        const num = input as Number
        return num.toString().length
    }
}

// 简化写法
function getLength1(input: string | number): number {
    if ((<string>input).length) {
        return (<string>input).length
    } else {
        return input.toString().length
    }
}

// 注意只能断言成联合类型里面有的类型