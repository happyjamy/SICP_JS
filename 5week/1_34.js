function f(g) {
    return g(2);
 }

 /*
 What happens if we (perversely) ask the interpreter to evaluate the application f(f)? Explain.
 */

 f(f) = f(2) = 2(2)
 // 2(2)는 계산할 수 없으므로 에러가 난다.