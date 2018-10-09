const triangleArea = (a, b, c) => {
  'use strict';
  let s = (1/2)*(a + b + c); //semiPerimerter
  let area = Math.sqrt(s*(s-a)*(s-b)*(s - c))
  console.log(area);
}