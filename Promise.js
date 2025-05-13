//promise - resolve

function go (){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve("I am going to the shop")
            
        }, 5000);
    })
}
function buy (){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("I am buying the product")
            
        }, 2000);
    })
}
function change (){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve("Get the change")
            
        }, 2000);
    })
}
function back() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Return to home")
            
        }, 5000);
    })
    
}
go()
.then(val =>{console.log(val); return buy()})
.then(val =>{console.log(val); return change()})
.then(val => {console.log(val); return back()})
.then(val =>{console.log(val)})
