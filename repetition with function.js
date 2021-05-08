05/04/2021
mohamed chebbi
//Q1
function sum(number) {
if(number===0)
{return 0}
return number+ sum(number-1)}
undefined
sum(3)
6
//Q2
function factorial(number) {
if (number===0)
{return 1}
return number*factorial(number-1)}
undefined
factorial(3)
6
//Q3
function repeatString(string, number) {
 if (number===0)
{return ""}
return string + repeatString(string,number-1)}
undefined
repeatString("dog", 1)
"dog"
repeatString("dog", 2)
"dogdog"
//Q4
function fibonacci(number) {
if(number<=1){
return 1;

}
return fibonacci(number-1)+fibonacci(number-2)
}
fibonacci(5)
8
//Q5
function multiplyBy10(firstNumber, secondNumber) {
 if(secondNumber===0){
return 1 
}
 return firstNumber * Math.pow(10,secondNumber)
}
multiplyBy10(4, 3)
4000
//Q6

function sumBetween(start, end) {
    if(end === start){
        return 0 
    }
     return end + sumBetween(start , end-1)
}

//Q7
function inc(x) {
    return x + 1
    }
    function dec(x) {
    return x - 1
    }
 function add(number1, number2) {
    if(number2===0){
        number1
    }
    return add(inc(number1),dec(number2))
    }
//Q8
function isEven(number) {
 if (number%2===0)
{return true}
return false}
isEven(3)
false
isEven(2)
true
//Q9
function multiply(number1, number2) {
if (number2===0)
{return 1}
return number1*number2}
undefined
multiply(3, 2)
 6
multiply(5, 5)
 25
 //Q10
 function range(start, end) {
    if(end===0){
  return  start
  }
   return range(inc(start),dec(end))
   }
  undefined
  function range(start,end){
  if(end===start+1){
   return ''
   }
  return start+1 +','+range(start+1,end)
  }
  undefined
  range(1,9)
  "2,3,4,5,6,7,8,"
 
//Q15
function power(base, exponent) {
    if (exponent===0)
    {return 1}
    return base*power(base, exponent-1)}
    undefined
    power(2, 3)
    8
   //Q16
  

  //Q17
  function greatestCommonDivisor(n1, n2){
    if(n2 === 0){
      return n1;
    }
    return greatestCommonDivisor(n2, n1 % n2);
  }
  undefined
  greatestCommonDivisor(50, 120)
  10