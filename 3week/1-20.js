/*
Exercise 1.20
The process that a function generates is of course dependent on the rules used by the interpreter. 
As an example, consider the iterative gcdfunction given above. 
Suppose we were to interpret this function using normal-order evaluation, as discussed in section 1.1.5. 
(The normal-order-evaluation rule for conditional expressions is described in exercise 1.5.) 
Using the substitution method (for normal order), illustrate the process generated in evaluating gcd(206, 40) 
and indicate the remainder operations that are actually performed. 
How many remainder operations are actually performed in the normal-order evaluation of gcd(206, 40)? 
In the applicative-order evaluation?
*/

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

//정의대로 계산법 nornal-order evaluation
gcd(206,40)
40 === 0 ? 206 : gcd(40,206%40)
gcd(40,206%40)
206%40 === 0 ? 40 : gcd(206%40, (40)%(206%40))
gcd(206%40, (40)%(206%40))
(40)%(206%40) === 0 ? ... : ...
.
.
.
// a를 계산하기 위해 remainder가 4번 쓰인다. 따라서 총 쓰인 횟수는 1+2+4+7+4 = 18번이다.

//인자 먼저 계산법 applicative-order evaluation
gcd(206,40)
gcd(40,6)
gcd(6,4)
gcd(4,2)
gcd(2,0)
// 인자 먼저 계산법에서는 인자를 먼저 계산하는데, 따라서 remainder는 4번만 계산된다.

//정의대로 계산법은 중복된 계산을 할 여지가 있기에, 본 프로세스에서는 인자 먼저 계산법이 더 효율적이다.

