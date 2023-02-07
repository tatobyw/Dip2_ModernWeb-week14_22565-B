//7.Rest Parameter
function sum(a: number, ...x:number[]):number{
    let result = a
    console.log(x.length)
    for(var i =0; i < x.length; i++) {
        result = result +x[i]
    }
    return result
}

console.log(sum(3, 5, 7 ,9 , 10 ,20 ,30))