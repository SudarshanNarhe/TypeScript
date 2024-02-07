// Merge array into third array 

let ara=[1,2,3,4,5]

let aba=[6,7,8,9,0]

let newarray:Array<number>=[];

for(let ele of ara){
    newarray.push(ele);
}

for(let ele of aba){
    newarray.push(ele);
}

console.log(newarray)

