/*
Exercise 1.18
Using the results of exercises 1.16 and 1.17, 
devise a function that generates an iterative process for multiplying two integers in terms of adding, 
doubling, and halving and uses a logarithmic number of steps.
*/

function double(c) {
    return c*2;
}
function halve(d) {
    return d/2;
}
function isEven(e) {
    return e%2 === 0;
}

function fast_time_iter(a,b,n){
    return a===0 || b===0
            ? 0
            : b===1
            ? n+a
            : isEven(b)
            ? fast_time_iter(double(a),halve(b),n)
            : fast_time_iter(a,b-1,n+a)
};

function fast_time(a,b) {
    return fast_time_iter(a,b,0)
};