// Good Luck 💪🏾
function makeCapital(str){
    let arr=str.toLowerCase().split(' ')
    let capitalizedStr=arr.map((val)=>{
        return val.replace(val.charAt(0),val.charAt(0).toUpperCase())
    })
    return capitalizedStr
}

let result1=makeCapital("my name is ali") 
let result2=makeCapital("fikrcamp Bootcamp")
let result3=makeCapital("i live In Paris")
console.log(result1)
console.log(result2)
console.log(result3)