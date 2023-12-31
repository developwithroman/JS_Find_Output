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

const problem3 = () => {

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
}

//Problem 4 

const problem4 = function() {

    function asyncMap(array, asyncFunction, callback){
        const results = []
        let count = 0
        array.forEach((item,index)=>{
            asyncFunction(item, value=>{
                results[index] = value
                count++;
                if(count===array.length) {
                    callback(results)
                }
            })
        })
    }
    
    const asyncDouble = (x, callback) => {
        setTimeout(()=> callback(x*2),1000)
    }
    
    asyncMap([1,2,3],asyncDouble, result=>console.log(result))
      
}
problem4()
//Output [2,4,6]


// Problem 5

const problem5 = function(){
    function asyncSum (a,b, callback){
        setTimeout(()=>callback(a+b),1000)
    }
    function asyncMultiply (a,b, callback){
        setTimeout(()=>callback(a*b),500)
    }
    function asyncSquare (a, callback){
        setTimeout(()=>callback(a*a),200)
    }
    
    asyncSum(3,4,sum=>{
        asyncMultiply(sum,2,product=>{
            asyncSquare(product,result=>{
                console.log(result)
            })
        })
    })
}
problem5()
// Output 196


//Problem 6 

const problem6 = function(){
    function* fibonacciGenerator(){
        let a=0, b=1;
        while(true){
            yield a;
        [a,b] = [b, a+b]
        }
    }
    
    const getFibonacciSequence = n => 
        Array.from({length:n},()=> 
        fibonacciGenerator().next().value)
    
    console.log(getFibonacciSequence(5))
}

// Output [0 0 0 0 0]