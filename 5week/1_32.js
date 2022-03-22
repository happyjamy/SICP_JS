/*
Show that sum and product (exercise 1.31) are both special cases of a still more general notion called accumulate that combines a collection of terms, 
using some general accumulation function: accumulate(combiner, null_value, term, a, next, b); => 덧셈 곱하기를 하는 함수 생성가능
The function accumulate takes as arguments the same term and range specifications as sum and product, 
together with a combinerfunction (of two arguments) that specifies how the current term is to be combined with 
the accumulation of the preceding terms and a null_value that specifies what base value to use when the terms run out. 
Write accumulate and show how sum and product can both be declared as simple calls to accumulate.
*/

// iterative process
function accumulate(combiner, null_value, term, a, next, b) {
    function iter(a, result) {
        return a > b
            ? result
            : iter(next(a), combiner(term(a), result))
    }
    return iter(a, null_value);
}

/*
If your accumulatefunction generates a recursive process, write one that generates an iterative process. 
If it generates an iterative process, write one that generates a recursive process.
*/

//recursive process
function accumulate_r(combiner, null_value, term, a, next, b) {
    return a > b
        ? null_value
        : combiner(term(a),
            accumulate_r(combiner,
                null_value,
                term, next(a), next, b));
}