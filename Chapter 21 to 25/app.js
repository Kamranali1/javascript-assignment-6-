// task 1 starts here 
/*var firstName = prompt("Enter Your Name ")
var lastName = prompt("Enter Your Lastname")
var FullName = firstName + lastName
alert(FullName)
//task 1 ends here 

// task 2 starts here 
var favMob = prompt("Enter your favorite mobile name ")
var noofString = favMob.length;
document.write("My favorite phone is :"+favMob+"<br> length of string is :"+noofString)
//task 2 ends here 


// task 3 starts here 
var country = "Pakistani"
var indexNo = country.indexOf("n")
document.write("String :"+country+"<br> Index of 'n' is :"+indexNo)
//task 3 ends here 


//task 4 starts here 
var massAge = "Hello world!"
var lastIndex = massAge.lastIndexOf("l")
document.write("String :"+massAge+"<br> Last index of 'l' is :"+lastIndex)
//task 4 ends here 

// task 5 starts here 
var country = "Pakistani"
var index = country.charAt(3)
document.write("String :"+country+"<br> Character at index 3 is :"+index)
//task 5 ends here 


// task 6 starts here 
var firstName = prompt("Enter Your Name ")
var lastName = prompt("Enter Your Lastname")
var FullName = firstName.concat(lastName)
alert(FullName)
//task 6 ends here 

//task 7  starts here 
var city = "Hyderabad"
var city1 = city.replace("Hyder","Islam")
document.write("City :"+city+"<br> After replacement :"+city1)
//task 7 ends here 


//task 8 starts here 
var message = "Ali and Sami are best friends. They play cricket and football together.";
var MessAgE = message.replace(/and/g,"&")
document.write("string before replacement: &emsp;   "+message+"<br> string after replacement: &emsp;"+MessAgE)
//task 8 ends here 


//task 9 starts here 
var string = "472"
document.write("value :&emsp;"+string+"<br>"+"type:&emsp; "+typeof string+"<br>") 
var num1 = Number(string)
document.write("value :&emsp;"+num1+"<br>"+"type :&emsp;"+typeof num1 )
//task 9 ends here 



//task 10 starts here 
var nameOfthing = prompt("Enter a name of thing")
var nametouppercase = nameOfthing.toUpperCase()
document.write("User input:"+nameOfthing+"<br>"+"Upper case:"+nametouppercase)
//task 10 ends here 


//task 11 starts here 
var input = prompt("Enter a value")
var inputTitlecase = input.charAt(0).toUpperCase()  + input.slice(1)
document.write("user input:"+input+"<br> Title case :"+inputTitlecase)
//task 11 ends here 

//task 12 starts here 
var num = 35.36
var string = num.toString()
var string = string.replace(".","")
document.write("Number:"+num+"<br> String :"+string )
//task 12 ends here 


//task 13 starts here 
function Validusername(str) {
    for (var i = 0, n = str.length; i < n; i++) {
        if (str.charCodeAt(i) == 33) { return "Enter a valid user name "; }
       else if (str.charCodeAt(i) == 44) { return "Enter a valid user name "; }
       else if (str.charCodeAt(i) == 46) { return "Enter a valid user name "; }
       else if (str.charCodeAt( i ) == 64 ) { return "Enter a valid user name "; }
    }
return "correct Username";
}
var username = prompt("Enter username ")
var Username = Validusername(username)
alert(Username)
//task 13 ends here 


//task 14 starts here 
var a = "Wellcome to our bakery"
var items = ["cake", "apple pie", "cookie", "chips", "patties"] 
var search = prompt(a,"Enter product you are looking for ")
var search = search.toLowerCase(search)
if(items.indexOf(search) !==-1 ){
    document.write(search+" "+"is available at index "+ " "+items.indexOf(search)+"  in our bakery" )
}
else{
    document.write("We are sorry. "+ search +" "+ "is not available in our bakery")
} 
//task 14 ends here 



//task 16 starts here 
var university = "University of Karachi"
var arr_university = university.split([]) 
document.write(arr_university)
//task 16 ends  here 

//task 17 starts here 
var input = prompt("Enter a value")
var lastChar = input.charAt(input.length-1)
document.write("Input : "+input+"<br> Last character of input is : "+lastChar )
//task 17 ends here 

//task 18 starts here 
var text = "the quick brown fox jumps over the lazy dog";
var count = (text.match(/the/g) || []).length;
document.write("text:"+text+"<br> There are "+count+"&emsp; Occurence(s) of word 'the'"  )
//task 18 ends here */

