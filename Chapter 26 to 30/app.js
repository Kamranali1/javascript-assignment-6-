
//task 1 starts here 
var num = +prompt("Enter any number ")
var num1 = Math.round(num)
var num2 = Math.ceil(num)
var num3 = Math.floor(num)
document.write("Number: "+num+"<br> round off value :"+num1+"<br> floor value :"+num3+"<br> ceil value:"+num2  )
//task 1 ends here 


//task 2 starts here 
var num = +prompt("Enter any negative number ")
var num1 = Math.round(num)
var num2 = Math.ceil(num)
var num3 = Math.floor(num)
document.write("Number: "+num+"<br> round off value :"+num1+"<br> floor value :"+num3+"<br> ceil value:"+num2    )
//task 2 ends here 

//task 3 starts here 
var  num = +prompt("Enter a number")
var num1 = Math.abs(num)
document.write("The Absolute value of "+num+"is"+num1)
//task 3 ends here 

//task 4 starts here 
var dice = Math.floor(Math.random()*7)
alert("Random dice value: "+dice)
//task 4 ends here 



//task 5 starts here 
var input = prompt("choose heads or tails ")
var coin = Math.floor(Math.random()*2)+1
if(coin === 1 ){
    alert("Tails win ")
}
else if (coin === 2 ){
    alert("heads wins")
}
else {
    alert("nothing")
}
//task 5 ends here 

//task 6 starts here 
var counting1To100 = Math.floor(Math.random()*100)+1
alert("Random number between 1 to 100 :"+counting1To100)
//task 6 ends here 



//task 7 starts here 
var input = prompt("Enter Your weight")
var input1 = parseInt(input)
alert(input1+"kg")
//task 7 ends here 


//task 8 starts here 
var secret = 3
var a = " Enter a num between 1 to 10 "
var yournum = +prompt(a)
var num2 = secret+1
if (yournum === secret) {
    alert("Bingoo!! your Number is correct")

}
else if ( yournum === num2 ){
    alert("your number is close ")

}
else {
    alert("Wrong number ")
}
//task 8 ends here 





