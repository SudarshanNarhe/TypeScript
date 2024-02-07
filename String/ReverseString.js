// write a code to create a function to revesre a string
var RevString = /** @class */ (function () {
    function RevString() {
    }
    RevString.prototype.revString = function (str) {
        var word = "";
        for (var i = str.length - 1; i >= 0; i--) {
            word = word + str.charAt(i);
        }
        return word;
    };
    RevString.countVowels = function (str) {
        var count = 0;
        for (var i = 0; i < str.length; i++) {
            if (str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u' ||
                str.charAt(i) == 'A' || str.charAt(i) == 'E' || str.charAt(i) == 'I' || str.charAt(i) == 'O' || str.charAt(i) == 'U') {
                count++;
            }
        }
        return count;
    };
    return RevString;
}());
var s = new RevString();
console.log(s.revString("Hello"));
var count = RevString.countVowels("India is a Country");
console.log(count);
