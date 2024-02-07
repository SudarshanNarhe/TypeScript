
// Write a code to display each word from the reverse order

function revEachWord(str : String):string{
    let st=str.split(" ");
    let revWord=""
    for(let i=0;i<st.length;i++){
       
        for(let j=st[i].length-1;j>=0;j--){
            revWord=revWord+st[i].charAt(j);
        }
        revWord=revWord+" "
    }
   // var revString=rev
   return revWord;
}

let str1=revEachWord("I love India")
console.log(str1)