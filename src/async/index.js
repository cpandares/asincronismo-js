const doSomethingAsync = ()=>{
    return new Promise((resolve,reject)=>{
        (true)
        ? setTimeout(()=>resolve('Do something async'),3000)
        : reject(new Error('Test error'))
    })
}


const doSomeThing = async()=>{
    const somethig = await doSomethingAsync()
    console.log(somethig)
}

console.log("before")
doSomeThing()
console.log("after")

const anotherFunction = async ()=>{
    try{
        const something = await doSomethingAsync()
        console.log(something)
    }catch(error){
        console.error(error)
    }
}