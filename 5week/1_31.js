/*
The sumfunction is only the simplest of a vast number of similar abstractions that can be captured as higher-order functions. 
Write an analogous function called product that returns the product of the values of a function at points over a given range. 
Show how to define factorial in terms of product. 
*/

//a. recursive process
function product_r(term, a, next, b) {
    return a > b
           ? 1
           : term(a) * product_r(term, next(a), next, b);
}

/*
If your productfunction generates a recursive process, write one that generates an iterative process. 
If it generates an iterative process, write one that generates a recursive process.
*/

//b. iterative process
function product_i(term, a, next, b) {
    function iter(a, result) {
        return a > b
               ? result
               : iter(next(a), term(a) * result);
    }
    return iter(a, 1);
}