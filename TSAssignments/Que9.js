//9. Write a TypeScript program that defines an enumeration 'Color' with values 'Red', 'Green', 'White' and Blue. Create a variable 'selectedColor' of type 'Color' and assign it one of the enumeration values.
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["White"] = 2] = "White";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var selectedColor = Color.Green;
// Log the selected color
console.log("Selected Color:", selectedColor);
/* In TypeScript, enumerations are assigned numeric values by default starting from 0.
 *  In this case, Color.Green corresponds to the numeric value 1.
 *  If you want to use string values instead of numeric values for the enumeration,
 *  you can explicitly assign values to each enum member like this: */
var Color1;
(function (Color1) {
    Color1["Red"] = "Red";
    Color1["Green"] = "Green";
    Color1["White"] = "White";
    Color1["Blue"] = "Blue";
})(Color1 || (Color1 = {}));
var selectedColor1 = Color1.Green;
// Log the selected color
console.log("Selected Color:", selectedColor1);
