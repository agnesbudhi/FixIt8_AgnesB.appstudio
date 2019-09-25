/* Name the form 'product'. Create an array that holds these numbers: 

123, 433, 54326, 2234, 1919, 1123, 1928, 3374, 23, 190, 33874

Create a function that takes 2 parameters and returns the product of the two numbers. 
In the main program, create a loop that calls the function with 2 numbers at a time (inside the loop), keeping a running total of the product so far. 
When the loop is done, output the final product (which will be all of the numbers) to the console. 
*/

let num = [123, 433, 54326, 2234, 1919, 1123, 1928, 3374, 23, 190, 33874]
let product = 1
function productCalc(num1, num2) {
  return num1 * num2
  }
  
for (i=0; i < num.length; i++) {
  product = productCalc(product, num[i])
  }
  console.log(product)
  