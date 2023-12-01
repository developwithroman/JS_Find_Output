// function currying

let sum = (a,b,c) => a+b+c

function curry(fn){
    return function _(...args){
        if(args.length===fn.length){
            return fn(...args)
        }
        return function(...newArgs){
            return _(...args,...newArgs)
        }
    }
}

curriedSum = curry(sum)

console.log(curriedSum(1)(2)(3))

