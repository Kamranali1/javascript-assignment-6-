
//task 1 starts here
function date(){
    var date= new Date();
    alert(date)
}
date()
//task 1 ends here 

//task 2 starts 
function greetings(greet) {
    var a = prompt("Enter First name")
    var b = prompt("Enter last name")
    var fullname = a+b
    alert("wellcome "+fullname)
}
greetings()
//task 2 ends here

//task 3 starts here 
function addition(a,b){
     alert(a+b)
}
addition(+prompt("Enter a num"),+prompt("Enter a num"))
//task 3 ends here 

//task 4 starts here 
function calculator() {
    var num1 = +prompt("enter Num")
    var opreater = prompt("enter opreator")
    var num2 = +prompt("Enter a num")
    if(opreater === "+"){
        alert(num1+num2)
    }
    else    if(opreater === "-"){
        alert(num1-num2)
    }
    else    if(opreater === "*"){
        alert(num1*num2)
    }
    else    if(opreater === "/"){
        alert(num1/num2)
    }
    else{
        alert("wrong opreator")
    }
}
calculator()
//task 4 ends here 

//task 5 starts here 
function square(a){
    alert(a*a)
}
square(+prompt("Enter a num to get its square"))
//task 5 ends here

//task 6 starts here 
function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
  let n = +prompt("Enter a num to get its factorial");
  answer = factorial(n)
  alert("The factorial of " + n + " is " + answer);
  //task 6 ends here 


  //task 7 starts here 
function counting(){
    var i = +prompt("Enter a num starts counting from")
    var j = +prompt("Enter a num end counting")
    for (var input = i; input <= j; input++) {
        document.write(input +"&emsp;");
       }
}
counting()
//task 7 ends here 


//task 8 starts here
function hypotenuse(a, b) {
  function square(x) { return x*x; }
  return Math.sqrt(square(a) + square(b));
}
function secondFunction() {
  var result;
  result = hypotenuse(+prompt("Enter base value"),+prompt("Enter perpendicular Value"));
 alert ( result );
}
secondFunction()
//task 8 ends here 

//task 9 starts here 
function myFunction(width,height) {
  
    var width = prompt("Enter a whole number for the width of your rectangle.");
    var  height= prompt ("Enter a whole number for the heigt of your rectangle.");
    
    var area= width*height ;
    alert("area of your rectangle is :"+area)
    }
    myFunction()
//task 9 ends here 


 //task 10 starts here 
 function palindrome(str) {
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, '');
  var len = str.length;
  for (var i = 0; i < len/2; i++) {
    if (str[i] !== str[len - 1 - i]) {
        return "your word is not palindrome";
    }
  }
  return "your word is palindrome";
}
 alert(palindrome(prompt("Enter a word to know if it is palindrome or not")))
 //task 10 ends here

 
//task 11 starts here 
function capitalize_Words(str)
{
 return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
alert((capitalize_Words("the quick brown fox")))
//task 11 ends here 





//task 12 starts here 
function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
alert((find_longest_word('Web Development Tutorial')))
//task 12 ends here 

//task 13 starts here
function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}
alert((char_count('JSResourceS.com', 'o')))
//task 13 ends here 




//task 14 starts here 
function calcCircumference(radius) {
  alert("The circumference of the circle is:" + 2 * 3.142 * radius)
}
function calcarea(Radius1) {
  alert("The area of the circle is :" + 3.142 * Radius1 * Radius1)
}

calcCircumference(prompt("Enter radius too get circumference"))
calcarea(prompt("Enter radius to get its area "))
//task 14  ends here 



