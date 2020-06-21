
//task 1 starts here 
var date = new Date();
document.write(date)
//task 1 ends here 

//task 2 starts here 
var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var date = new Date();
var curmonth = months[date.getMonth()]
alert(curmonth)
//task 2 ends here 

//task 3 starts here 
var date = new Date();
var d = date.toString();
var day = d.slice(0,3)
alert("Today is"+day)
//task 3 ends here 


//task 4 starts here 
var date = new Date();
var day = date.getDay();
if(day === 6 || day == 7){
    alert("Its fun day ")
}
else {
    alert("A normal Day ")
}
//task 4 ends here 

//task 5 starts here 
var date = new Date();
var daysInMonths = date.getDate();
if(daysInMonths <= 15){
    alert("First fifteen days of the month")
}
else if (daysInMonths > 15){
    alert("Last days of the month")
}
else{
 alert("wrong date")

}
//task 5 ends here 

//task 6 starts here 
var date = new Date();
var milisec = date.getTime()
var min = milisec/(1000*60*60)
document.write("Current date :"+date+"<br> Elapsed milliseconds since jan 1 1970 :"+milisec+"<br> Elapsed minute since jan 1 1970 :"+min)
//task6 ends here 


//task 7 starts here
var date = new Date();
var hours = date.getHours();
if (hours < 12 ){
    alert("Its Am")
}
else if (hours >= 12 ){
    alert("Its Pm")
} 
else{
    alert("Wrong time")
}
//task 7 ends here 



//task 8 starts here 
var date = new Date();
var laterdate = new Date("2020-12-31T00:00:00+05:00")
alert(laterdate)
//task 8 ends here 

//task 9 starts here 
var date = new Date("2020-4-24");
var today = new Date();
var daysPassed = today - date
var DayS = Math.floor(daysPassed/(1000*60*60*24))
alert(DayS+"Days Have passed since 1st Ramdan 2020")
//task 9 ends here 


//task 10 starts here 
var date = new Date("2015-12-05T22:50:20+05:00")
var refDate = new Date("2015-01-01T00:00:00+05:00")
var diff = date-refDate
var secondPassed = Math.ceil(diff/(1000*60))
alert(secondPassed)
//task 10 ends here


//task 11 starts here 
var date = new Date("2020-06-20T09:00:00+05:00");
document.write(" <br> <br> 1 hour ago it was :"+date+"<br>")
var date2 = date.toString (date.setHours(10))
document.write("current date :"+date2)
//task 11 ends here 


//task 12 starts here 
var date1 = new Date("2020-06-20T09:00:00+05:00");
alert("current date : "+date1 )
var date2 = date1.toString(date1.setFullYear(1920))
alert("100 years ago it was :"+date2)
//task 12 ends here 


 //task 13 starts here
 var age = prompt("month date , year") 
var dob = new Date(age);
var dobmilli = dob.getTime(dob);
var today = new Date();
var todaymili = today.getTime(today);
var diffmili = todaymili - dobmilli
var Accuage = Math.floor(diffmili/(1000*60*60*24*30*12))
alert(Accuage)
//task 13 ends here 

//task 14 starts here
var custmerName = prompt("Enter Your Name")
var months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var date = new Date();
var curMonth = months[date.getMonth()]
var NumUnits = +prompt("Enter units used")
var chargesPerunit = 16
var latecharges = 350
var netAmount = NumUnits*chargesPerunit
var GrossAmount = netAmount+latecharges
document.write("<br> K-Electric Bill <br> <br> "+ "Custmer name"+custmerName+"<br> Month :"+curMonth+"<br> Number of units : "+NumUnits+"<br> Charges per unit :"+chargesPerunit+"<br> <br> Net amount payable (within due date)"+netAmount+"<br> Late payment surcharge :"+latecharges+"<br> Gross amount payable (after due date ) "+GrossAmount)
//task 14 ends here 