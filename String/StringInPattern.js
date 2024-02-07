// write a code to display string in pattern form
/*
I
I Like
I Like India
I Like India Country */
function StringToPattern(str) {
    var words = str.split(" ");
    var count = words.length;
    for (var i = 0; i < count; i++) {
        var str1 = "";
        for (var j = 0; j <= i; j++) {
            str1 = str1 + words[j];
            str1 = str1 + " ";
        }
        console.log(str1);
    }
}
var str = "I Like India Country";
StringToPattern(str);
