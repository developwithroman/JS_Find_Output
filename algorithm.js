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

// Polyfill for map

Array.prototype.customMap = function(callback,thisContext){
    let result = []
    for(let i=0;i<this.length;i++){
        if(i in this){
            result[i] = callback.call(thisContext,this[i],i,this)
        }
    }
    return result
}

