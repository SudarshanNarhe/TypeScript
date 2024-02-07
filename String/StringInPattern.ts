
// write a code to display string in pattern form
/*
I 
I Like 
I Like India
I Like India Country */

function StringToPattern(str : String){
    var words=str.split(" ");

    let count=words.length;

    for(let i=0;i<count;i++){
            let str1=""
        for(let j=0;j<=i;j++){
           str1=str1+words[j]
           str1=str1+" "
        }
        console.log(str1)

    }

}

var str="I Like India Country";
StringToPattern(str);