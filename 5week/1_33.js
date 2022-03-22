/*
You can obtain an even more general version of accumulate (exercise 1.32) by introducing the notion of a filter on the terms to be combined. 
That is, combine only those terms derived from values in the range that satisfy a specified condition. 
The resulting filtered_accumulate abstraction takes the same arguments as accumulate, together with an additional predicate of one argument 
that specifies the filter. Write filtered_accumulate as a function. Show how to express the following using filtered_accumulate:
*/

// 1, the product of all the positive integers less than n that are relatively prime to n (i.e., all positive integers i < n such that GCD(i,n)=1).


function filtered_accumulate(filter,combiner,null_value,term, a, next, b) {
    function iter(a, result) {
        return a > b
               ? result
               : filter(a)
               ? iter(next(a),combiner(term(a),result))
               : iter(next(a),result)
    }
    return iter(a, null_value);

}