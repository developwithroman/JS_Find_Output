const asyncFunction = async () =>{
    try {
        await Promise.reject("Oops")    
    } catch (error) {
        return "Caught" + error
    } finally{
        return "Finally block executed"
    }
}

asyncFunction().then(res=>{
    console.log(res)
})

// Output: Finally block executed

function problemTwo(){
    let a= 2;
    {
        let a=4
    }
    console.log(a+1)
}

problemTwo()

//output : 3



//Problem 3 

const createAsyncFunction = (ms,result)=> async ()=>{
    await new Promise(resolve=> setTimeout(resolve,ms))
    return result
}

const asyncFunctions = [
    createAsyncFunction(1000,"A"),
    createAsyncFunction(500,"B"),
    createAsyncFunction(2000,"C")
]

Promise.race(asyncFunctions.map(fn=>fn())).then(res=>console.log(res))

// Output : B