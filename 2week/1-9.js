/*
Exercise 1.9
Each of the following two functions defines a method for adding two positive integers in terms of the functionsinc, which increments its argument by 1, and dec, which decrements its argument by 1.
function plus(a, b) {
    return a === 0 ? b : inc(plus(dec(a), b)); 
} 
function plus(a, b) {
    return a === 0 ? b : plus(dec(a), inc(b));
} 
Using the substitution model, illustrate the process generated by each function in evaluating plus(4, 5);. Are these processes iterative or recursive?
*/

//first function
inc(plus(dec(4), 5))
inc(plus(3,5))
inc(inc(plus(dec(3), 5)))
inc(inc(plus(2,5)))
inc(inc(inc(plus(dec(2), 5))))
inc(inc(inc(plus(1, 5))))
inc(inc(inc(inc(plus(dec(1), 5)))))
inc(inc(inc(inc(plus(0, 5)))))
// a=0
inc(inc(inc(inc(5))))
inc(inc(inc(6)))
inc(inc(7))
inc(8)
9

//second function
plus(dec(4), inc(5))
plus(3,6)
plus(dec(3), inc(6))
plus(2,7)
plus(dec(2), inc(7))
plus(1,8)
plus(dec(1), inc(8))
plus(0,9)
// a=0
9

/* answer : first is recursive, because the expansion occurs as the process builds up a chain of deferred operations.
second is iterative, because the second process does not grow and shrink 
and at each step, all we need to keep track of, for any n, are the current values of the namesproduct, counter, and max_count. */