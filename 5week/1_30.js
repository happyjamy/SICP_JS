/*
The sumfunction above generates a linear recursion. The function can be rewritten so that the sum is performed iteratively. 
Show how to do this by filling in the missing expressions in the following declaration:
*/

function sum(term, a, next, b) {
    function iter(a, result) {
        return a>b
               ? result
               : iter(next(a),result+term(a))
    }
    return iter(a,0);
}