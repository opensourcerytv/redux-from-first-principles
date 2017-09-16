# Redux from First Principles

## 02 - Introducing the reducer function.

A `reduce` function is a combiner that takes two values and returns a single value that is a combination of the two.

The JavaScript `Array.prototype.reduce` function is a good example, and we use it to introduce the reducer function.

Our test uses the reducer function to add the values of an array to a single value. A reducer function supplied to `Array.prototype.reduce` is applied to the array recursively until all the values in the array have been folded into it.