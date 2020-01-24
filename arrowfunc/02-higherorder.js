// Írjuk át a megjelölt function expressionöket
// arrow functionre! Ahol lehet, hagyjunk el amit
// csak lehet a szintaxisból!

const doSomething = (f, x) => f(x);

//                              (1)
const triple = doSomething(x => 3 * x, 5);
console.log(triple); // == 15

//                                    (4)
const createIncrementerFunction = inc => n => () => n + inc;

const result = createIncrementerFunction(1)(2)();
console.log(result); // 3
