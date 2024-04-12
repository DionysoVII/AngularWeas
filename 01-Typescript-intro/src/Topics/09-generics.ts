


export function whatsMyType<T>(argument: T) {

    return argument;
}


let iAmString = whatsMyType('Hola mundo!')
let iAmNumber = whatsMyType(100)
let iAmArray = whatsMyType([1,2,3,4,5])


console.log(iAmString)
console.log(iAmNumber)
console.log(iAmArray)