//9. Write a TypeScript program that defines an enumeration 'Color' with values 'Red', 'Green', 'White' and Blue. Create a variable 'selectedColor' of type 'Color' and assign it one of the enumeration values.

enum Color {
    Red,
    Green,
    White,
    Blue
  }
  
  
  let selectedColor: Color = Color.Green;
  
  // Log the selected color
  console.log("Selected Color:", selectedColor);

 /* In TypeScript, enumerations are assigned numeric values by default starting from 0.
  *  In this case, Color.Green corresponds to the numeric value 1.
  *  If you want to use string values instead of numeric values for the enumeration,
  *  you can explicitly assign values to each enum member like this: */


enum Color1 {
  Red = 'Red',
  Green = 'Green',
  White = 'White',
  Blue = 'Blue'
}

let selectedColor1: Color1 = Color1.Green;
  
// Log the selected color
console.log("Selected Color:", selectedColor1);