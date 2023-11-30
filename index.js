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