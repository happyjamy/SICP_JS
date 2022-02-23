/*
Exercise 1.10
The following function computes a mathematical function called Ackermann's function.
function A(x, y) {
    return y === 0
           ? 0
           : x === 0
           ? 2 * y
           : y === 1
           ? 2
           : A(x - 1, A(x, y - 1));
} 
What are the values of the following statements?
A(1, 10); 
A(2, 4); 
A(3, 3); 
*/

// A(1,10)
A(0,A(1,9))
A(0,A(0,A(1,8)))
A(0,A(0,A(0,A(1,7))))
A(0,A(0,A(0,A(0,A(1,6)))))
A(0,A(0,A(0,A(0,A(0,A(1,5))))))
A(0,A(0,A(0,A(0,A(0,A(0,A(1,4)))))))
A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(1,3))))))))
A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(1,2)))))))))
A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(1,1))))))))))
A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,2)))))))))
A(0,A(0,A(0,A(0,A(0,A(0,A(0,A(0,4))))))))
A(0,A(0,A(0,A(0,A(0,A(0,A(0,8)))))))
A(0,A(0,A(0,A(0,A(0,A(0,16))))))
A(0,A(0,A(0,A(0,A(0,32)))))
A(0,A(0,A(0,A(0,64))))
A(0,A(0,A(0,128)))
A(0,A(0,256))
A(0,512)
1024

//A(2,4)
A(1,A(2,3))
A(1,A(1,A(2,2)))
A(1,A(1,A(1,A(2,1))))
A(1,A(1,A(1,2)))
A(1,A(1,A(0,A(1,1))))
A(1,A(1,A(0,2)))
A(1,A(1,4))
A(1,A(0,A(1,3)))
A(1,A(0,A(0,A(1,2))))
A(1,A(0,A(0,A(0,A(1,1)))))
A(1,A(0,A(0,A(0,2))))
A(1,A(0,A(0,4)))
A(1,A(0,8))
A(1,16)
A(0,A(1,15))
...
A(0,32768) // 16384 = 2**15
65536

// A(3,3)
A(2,A(3,2))
A(2,A(2,A(3,1)))
A(2,A(2,2))
A(2,A(1,A(2,1)))
A(2,A(1,2))
A(2,A(0,A(1,1)))
A(2,A(0,2))
A(2,4)
... 
65536



/*
Consider the following functions, where A is the function declared above:
function f(n) {
    return A(0, n);
}
function g(n) {
    return A(1, n);
}
function h(n) {
    return A(2, n);
}
function k(n) {
   return 5 * n * n;
} 
Give concise mathematical definitions for the functions computed by the functionsf, g, and h for positive integer values of n.
For example, k(n) computes 5n**2
*/
f(n) = A(0,n) - (n=0) 0
              - (otherwise) 2n 
f(n) computes 2n

g(n) = A(1,n) - (n=0) 0
              - (n=1) 2
              - (otherwise) A(0, A(1,n-1)) = f(g(n-1)) = 2^n
g(n) computes 2^n

h(n) = A(2,n) - (n=0) 0
              - (n=1) 2
              - (otherwise) A(1, A(2,n-1)) = g(h(n-1)) = 2^2^2^...^2
h(n) computes 2^2^2^2^2...2 (n-1)개만큼 2승을 함