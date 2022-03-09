/*
Exercise 1.17
The exponentiation algorithms in this section are based on performing exponentiation by means of repeated multiplication. 
In a similar way, one can perform integer multiplication by means of repeated addition. 
The following multiplication function (in which it is assumed that our language can only add, 
not multiply) is analogous to the exptfunction:

function times(a, b) {
    return b === 0
           ? 0
           : a + times(a, b - 1);
}

This algorithm takes a number of steps that is linear in b. 
Now suppose we include, together with addition, the functionsdouble, which doubles an integer, and halve, 
which divides an (even) integer by 2. 
Using these, design a multiplication function analogous to fast_expt that uses a logarithmic number of steps.
*/

function double(c) {
    return c*2;
};
function halve(d) {
    return d/2;
};
function isEven(e) {
    return e%2 === 0;
};

function time(a,b) {
    return b===0 || a===0
            ? 0
            : b===1
            ? a
            : isEven(b)
            ? time(double(a),halve(b))
            : a + time(a, b-1)
};

