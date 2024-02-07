// write a code to find out max and min from the array

let arr6=[1,3,4,5,6,8,0,9,11,13,98]

let max=0;
let min=arr6[0];
for(let ele of arr6){
    if(ele>max){
        max=ele
    }
    if(ele<min){
        min=ele
    }
}

console.log("Maximum element from array is : "+max)
console.log("Minimum element from array is : "+min)