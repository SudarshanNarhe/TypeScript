// simple array creation and declaration

let arr=[3,4,5,6,7]

console.log("Simple array : "+arr)

console.log("//////////////////////////////////////////////////")
// Generic array creation and declaration

let col : Array<String>
col=['red','blue','white','white']

console.log(col)

//It gives all index
for(let index in col){
    console.log(index)
}
console.log("//////////////////////////////////////////////////")

// It gives all elements
for(let ele of col){
    console.log(ele)
}
console.log("//////////////////////////////////////////////////")

// It gives index and element 
for(let index in col){
    console.log(index+"  "+col[index])
}
console.log("//////////////////////////////////////////////////")

// we can use traditional for loop
for(let i=0;i<col.length;i++){
    console.log(i+"  "+col[i])
}
console.log("//////////////////////////////////////////////////")

// Another with generic

let ids : Array<number> =[11,22,33,44,55]
console.log("Another generic array : "+ids)
