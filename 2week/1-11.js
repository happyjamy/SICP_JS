/*
Exercise 1.11
A function ff is defined by the rules f(n)=nf(n)=n if n < 3n<3 and 
f(n)={f(n-1)}+2f(n-2)+3f(n-3)f(n)=f(n−1)+2f(n−2)+3f(n−3) if n\ge 3n≥3. 
Write a JavaScript function that computes ff by means of a recursive process. 
Write a function that computes ff by means of an iterative process.
*/

//recursive
function f(n) {
    return n===0 ? 0
    : n===1 ? 1
    : n===2 ? 2
    : f(n-1)+2*f(n-2)+3*f(n-3) ;
}

//iterative
function f_iter(a,b,c,count) {
    return count ===0 ? c
    : f_iter((a+2*b+3*c),a,b,count-1)
}

function f(n) {
    return f_iter(2,1,0,n)
}