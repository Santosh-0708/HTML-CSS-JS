var emp{

    id:101;
    name:"raju";
    sal:60000;
    loc: ["hyd","bang","ND","Chennai"];

}

console.log(type(emp));
console.log(emp);

function add(a,b){
        console.log(a);
        console.log(b);

}
add(10,20);

function wish(){
    return "Good Morning";
    console.log("Good Night")
}
let msg = wish();
console.log(msg);

function display() {
    console.log("Hello GM")
    alert("Be Practical")
}
display();

function outer(){
        console.log("outer fun")
    function inner(){
        console.log("inner fun")

    }
    inner();
}
outer()

let emp = { id: 101, Name:"Shekar" , Sal:65000}
emp.Name="Ravi";
emp.Loc="Bang";
console.log(emp)

let size=['s','m','xl','xxl']
let product = {
    id:"P101",
    name:"Iphone",
    price:5000,
    color:"gold"
}
console.log(size[10])
console.log(product.discount)

let emp = { [id:101, first_name:"SR", last_name:"VK", email:"SR@gmail.com"],
            [id:102, first_name:"NV", last_name:"VG", email:"NV@gmail.com"],
            [id:103, first_name:"RR", last_name:"SK", email:"RR@gmail.com"]
}

for(var i=0; i<=employees-1; i=i+1){
    console.log((employees[i]).first_name)
}

for(x of detail){
    console.log(x.first_name)
}

    /*for (emp of employees){
        console.log(emp.first_name)
        console.log(emp.email)
}*/



/*for(emp of employees){
    console.log(emp.mail)
}*/


let size=[38,40,42,44]
size.push(46)
console.log(size)

let size=[38,40,42,44]
size.pop( )
console.log(size)


let emp = { id: 101, Name:"Shekar" , Sal:65000}
for(k in emp){
    console.log(k)
    console.log(object.keys(emp));
    console.log(object.values(emp));
}

//Arrays
let a=[]
console.log(a.length)
let b=[10,20,30,40]
let c=[10,20,30,40,50]
//let d=[10. "Twenty", true, false,null, undefined, [], {}]

console.log(a[0])
console.log(b[2])
console.log(c[4])
//console.log(d[4])


let ids=[101,102,103,104]
let marks=[]

if(ids.length>0) {
    console.log("Given array is not empty")
}else {
    console.log("Empty array")
}
console.log("***")



function greeting(name) {
    alert('Hello'+ name);

}

function processUserInput(callback) {
    var name=prompt('Please enter your name');
    callback(name);
}
processUserInput(greeting);

//FAT-ARROW FUNCTION
let sum = (a,b) => {
    return a+b;
}
let mul = (a,b) => {
    return a*b;
}

let calculate =(a,b, callback) =>{
    let result="";
    return callback(a,b);
}

let output=calculate(10,20,"sum")
console.log(output);

let output=calculate(10,20,"mul")
console.log(output);

output = calculate(10,20,(a,b) =>{
    return a-b;
});
console.log(output);
console.log(sum);



