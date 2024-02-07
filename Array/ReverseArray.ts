// write a code to reverse an array

let arra=[1,2,3,4,5,6]

console.log("Original : "+arra)
for(let i=0;i<arra.length;i++){
   
    for(let j=i+1;j<arra.length;j++){
        let temp=arra[i]
        arra[i]=arra[j]
        arra[j]=temp
    }
    
}

console.log("Reverse : "+arra)