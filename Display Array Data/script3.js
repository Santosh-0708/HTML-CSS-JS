let calculate=(a,b,operation)=>{
    let result ="";
    if(operation ="sum"){
        return a+b;
    }
    if(operation = "mul"){
        return a*b;
    }
    return result;

}
let output1 = calculate(5,8,"sum")
console.log(output1)

let output2 = calculate(6,12,"mul")
console.log(output2)


