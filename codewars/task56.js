//https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/train/javascript
function expressionMatter(a, b, c) {
    let num1 = a+b+c;
    let num2 = a*b*c;
    let num3 = a*b+c;
    let num4 = (a+b)*c;
    let num5=a*(b+c)
return Math.max(num1, num2, num3, num4, num5)
  }