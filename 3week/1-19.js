function fib(n) {
    return fib_iter(1, 0, 0, 1, n);
}
function fib_iter(a, b, p, q, count) {
    return count === 0
           ? b
           : is_even(count)
           ? fib_iter(a,
                      b,
                      p*p + q*q,            // compute p'
                      2*(p*q) + q*q,        // compute q'
                      count / 2)
           : fib_iter(b * q + a * q + a * p,
                      b * p + a * q,
                      p,
                      q,
                      count - 1);
}

/*
피보나치 수열을 iterative process로 나타내면 f(a,b,n) => f(a+b,a,n-1) 식으로 전개된다. (시작 a=1 b=0)
그렇게 되면 a->a+b, b->a 가 된다.
a←bq+aq+ap  b←bp+aq 가 성립할때 p=0 q=1 이다.
이때 한번 이렇게 진행되는 것을 T(pq) 라고 할때 T(pq)를 두번 한것이 T(p'q')와 같다고 가정할때, (그렇게 해야 피보나치 수열을 log(n) 시간복잡도를 가진 알고리즘으로 짤 수 있다.)
p'와 q'은 선형대수를 사용해 구할 수 있다.
*/




