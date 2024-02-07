// Write a code to display each word from the reverse order
function revEachWord(str) {
    var st = str.split(" ");
    var revWord = "";
    for (var i = 0; i < st.length; i++) {
        for (var j = st[i].length - 1; j >= 0; j--) {
            revWord = revWord + st[i].charAt(j);
        }
        revWord = revWord + " ";
    }
    // var revString=rev
    return revWord;
}
var str1 = revEachWord("I love India");
console.log(str1);
