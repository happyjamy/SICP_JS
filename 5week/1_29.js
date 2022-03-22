/*
Simpson's Rule is a more accurate method of numerical integration than the method illustrated above. 
Using Simpson's Rule, the integral of a function ff between aa and bb is approximated as ...
where h=(b-a)/nh=(b−a)/n, for some even integer nn, and y_k =f(a+kh). 
(Increasing nn increases the accuracy of the approximation.) 
Declare a function that takes as arguments f, a, b, and n and returns the value of the integral, computed using Simpson's Rule. 
Use your function to integrate cube between 0 and 1 (with n=100n=100 and n=1000n=1000), and compare the results to those of the integralfunction shown above.
*/

function sum(term, a, next, b) {
    return (
      a > b
      ? 0
      : term(a) + sum(term, next(a), next, b)
    );
  }
// y(k)값을 다 더해주는 함수

function simpson(f,a,b,n) {
    const h = (b-a)/n

    function y(k) {
        return f(a+k*h)
    }

    function term(k) {
        return (
          k === 0 || k === n
          ? y(k)
          : k % 2 == 0
            ? 2 * y(k)
            : 4 * y(k)
        );
      }
    
    function next(k) {
        return k + 1;
    }
    
    return h / 3 * sum(term, 0, next, n);

}

console.log(simpson((x) => x*x*x ,0,1,100))