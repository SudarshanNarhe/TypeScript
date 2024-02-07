
// write a code to create a function to revesre a string

class RevString {

    revString (str : String):string{

        var  word:string="";
        for(let i=str.length-1;i>=0;i--){
            word=word+str.charAt(i);
        }

        return word;
    }

    static countVowels(str : string):number{
        let count:number=0;
        for(let i=0;i<str.length;i++){
            if(str.charAt(i)=='a'||str.charAt(i)=='e'||str.charAt(i)=='i'||str.charAt(i)=='o'||str.charAt(i)=='u'||
            str.charAt(i)=='A'||str.charAt(i)=='E'||str.charAt(i)=='I'||str.charAt(i)=='O'||str.charAt(i)=='U'){
                count++;
            }
        }
        return count;
    }
}

let s=new RevString();
console.log(s.revString("Hello"));

let count=RevString.countVowels("India is a Country")
console.log(count);