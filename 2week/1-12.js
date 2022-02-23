/*
Exercise 1.12
The following pattern of numbers is called Pascal's triangle.
The numbers at the edge of the triangle are all 1, and each number inside the triangle is the sum of the two numbers above it.
Write a function that computes elements of Pascal's triangle by means of a recursive process.
*/

function paskal(row,index) {
    return row<index ? false
    : index ===1 || index === row ? 1
    : paskal(row-1,index+1) + paskal(row-1,index)
}