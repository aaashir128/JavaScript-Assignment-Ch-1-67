// *********************    Chapter 21 - 25     *************************
// 1
function fullName(){
    var firstName = prompt("Enter your first Name")
    var LastName = prompt("Enter your Last Name")
    var name = firstName+ " " + LastName
    document.write("Good Morning "+ name)
}

// 2
function favphn(){
    var phn = prompt("Enter your Favorite mobile phone")
    document.write("My favorite Mobile phone is: " + phn + "<br>")
    document.write("Length of String: "+ phn.length )
}

// 3
function indexNum(){
    var country = "Pakistani"
    document.write("String: " + country + "<br>"+ "Index of 'n': " + country.indexOf("n"))
}

// 4
function gret(){
    var gret = ("Hello World")
    document.write("String " + gret + "<br>"+ "Last index of 'l': " + gret.lastIndexOf("l"))
}
// 5
function findindx(){
    var word = ("Pakistani")
    document.write("String " + word + "<br>"+ "Character at 3rd Index: " + word.charAt(3))
}

// 6
function concatmethod(){
    var country = ("Pakistani");
    var n = country.charAt(3)
    document.write ("String: " + country + "<br>" +"Character at index '3rd' is: " +n)
    
}
// 7
function varReplace(){
    var city = prompt("enter city name");
    for(var i =0; i<city.length; i++){
        if(city.slice(i, i+5)==="Hyder"){
            city = city.slice(0,i) + "Islam" + city.slice(i+5)
        }
    }
    document.write("You wrote " + city )
}
function anotherReplace(){
    var city = "Hyderabad is a Capital of Pakistan , And Hyderabad is a greenist city of Pakistan";
    city = city.replace(/Hyder/g,"Islam")
    document.write(city)
}

// 8
function replacingChar(){
    var message = ("Ali and Sami are best friends. They play cricket and football together.")
    message = message.replace(/and/g, "&")
    document.write(message)
}

// 9
function changeType(){
    var str = "472"
    var num = parseInt(str)
    document.write("Value " + str +"<br>" + "type " + typeof(str) + "<br>")
    document.write("Value " + num +"<br>" + "type " + typeof(num))
}

// 10
function convertCap(){
    var dryfruit = prompt("Enter your favorite dry fruit name")
    dryfruit = dryfruit.toUpperCase()
    document.write(dryfruit)
}

// 11
 
function capitalizeFLetter() { 
    var input = document.getElementById("input"); 
    var x = document.getElementById("div"); 
    var string = input.value; 
    x.innerHTML = string[0].toUpperCase() +  
      string.slice(1); 
  } 

//   12
function dotremove(){
    var para = prompt("Enter value in ponts")
    para = para.replace('.',"")
    document.write(para)
}

// 13
function usererror(){
    var username = prompt("Enter username")
    for (var i =0; i < username.length; i++){
        if(username[i].charCodeAt() === 33 || username[i].charCodeAt() === 44 || username[i].charCodeAt() === 46 || username[i].charCodeAt() === 64){
            document.write("Invalid Username")
        break}
        
}
}

// 14
function bakeryItems(){
    var items = ["Cake", "Apple pie", "Cookie", "Chips", "Patties"]
    var search = prompt("What do you want to eat")
        firstChar = search.slice(0,1);
        otherChar = search.slice(1);
        firstChar = firstChar.toUpperCase();
        otherChar = otherChar.toLowerCase();
        search = firstChar + otherChar ;
for(var i =0; i<search.length; i++){
    if(items.indexOf(search) !== -1)    {
        document.write(search + " is avaialbe at Index " + items.indexOf(search))
    break;
}
    else{
        document.write("We are sorry")
    break;
}
}}

// 15



// 16
function wordbrk(){
    var university = "University of Karachi"; 
    arr = university.split("")
    for(var i =0; i<arr.length; i++)
    document.write(arr[i] + "<br>")
}

// 17
function returnlastIndx(){
    var userInput = prompt("Enter something")
    userInput = userInput.charAt(userInput.length-1)
    document.write(userInput)
}

// 18
function occurances(){
    var text = "the quick brown fox jumps over the lazy dog!"
    var count = (text.match(/the/g) ).length
    document.write(count)    
}

function heading(){
    var text = "<h1>" + "The quick brown fox jumps over the lazy dog" +"</h1>"
    document.write(text)
}


// *********************    Chapter 26 - 30     *************************
// 1
function mathDot(){
    var positiveNum = prompt("Enter a decimal positive value")
    document.write("Number: "+positiveNum + "<br>")
    var roundOff = Math.round(positiveNum)
    document.write("Round off: "+ roundOff + "<br>")
    var floorVal = Math.floor(positiveNum)
    document.write("Floor Value : "+ floorVal + "<br>")
    var ceilVal = Math.ceil(positiveNum)
    document.write("Ceil Value : "+ floVal + "<br>")
}

function mathDotNegative(){
    var negativeNumber = prompt("Write a Negative number")
    var roundOf = Math.round(negativeNumber)
    var floorval = Math.floor(negativeNumber)
    var ceilval = Math.ceil(negativeNumber)

    document.write("Number: " + negativeNumber + "<br>"  )
    document.write("Round of number: " + roundOf + "<br>"  )
    document.write("Floor number: " + floorval + "<br>"  )
    document.write("Ceil number: " + ceilval + "<br>"  )

}
// 3
function absoluteVal(){
    var normval = prompt("enter value");
    var absval = Math.abs(normval);

    document.write("Your Value is: " + normval +"<br>"+ " and it's absolute value is: " + absval)

}

// 4
function dice(){
    var dice1 = prompt("Enter player1 username")
    

    var dice = Math.random()*6.6
    dice = Math.floor(dice)

    document.write("Random Dice value is: " + dice + " " + dice1 +"<br>")

}
// 5
function coin(){
    
var userHead = prompt("Enter Head user name")
var tailHead = prompt("Enter Tail user name")

var toss = Math.random()*2
toss = Math.floor(toss)
if(toss === 0){
    document.write("It's Head: " + toss + " " + userHead +" Won the toss" +"<br>")

}else{
    document.write("It's Tail "+ toss + " " + tailHead +" Won the toss")
}
}

// 6
function randomnum(){
    var random = Math.random()*100
random = Math.round(random)
document.write("Randome value between 1 and 100: " + random)

}

// 7
function userWeight(){
    var userWeight = prompt("Enter your weight in Kilograms ")
userWeight = parseInt(userWeight);

document.write ("The weight of User is: " + userWeight + " Kilograms")

}

// 8
function luckynum(){
    var userValue = prompt("Enter your number between 1 to 10")
if(userValue == 6 ){
    document.write ("Congratulations you hit the right number ")
}else{
    document.write("Try again")
}
}


// *********************    Chapter 31 - 34     *************************
// 1

function currentDate(){
    var date = new Date();
    document.write(date)
}

// 2
function currentMonth(){
    var month =  ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    var now = new Date();
    var theMonth = now.getMonth();
    var nameoftheMonth = month[theMonth]
    document.write(nameoftheMonth)
}

// 3
function currentDay(){
    var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
    var now = new Date();
    var theDay = now.getDay();
    var nameOfTheDay = days[theDay]
    document.write(nameOfTheDay)
}

// 4
function currentDayAction(){
    var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
    var now = new Date();
    var theDay = now.getDay();
    var nameOfTheDay = days[theDay]
    
    switch(nameOfTheDay){
        case "Sat":
            alert("It's Fun Day");
            break;
        case "Sun":
            alert("It's Fun Day");
            break;
        default:
            alert("Shoot me now")
    }
}

// 5
function currentDateAction(){
    var fullDate = new Date();
    var date = fullDate.getDate();

    if(date > 16){
        document.write("Last fifteen days of Month")
    }
    else {
        document.write("First fifteen days of Month")
    }
}

// 6
function dateSince70(){
    var currentDate = new Date();
    var time70 = currentDate.getTime()
    var min70 = time70 /(1000*60)
    var hrs70 = min70 /60
    var days70 = hrs70 /24
    var month70 = days70/30
    var year70 = month70/12

    document.write("Current Date: " + currentDate + "<br>")
    document.write("Elapsed Miliseconds Since Jan 1 1970: "+"<b>" + time70 +"</b>" + "<br>")
    document.write("Elapsed Minutes Since Jan 1 1970: " +"<b>"+ min70 +"</b>" + "<br>")
    document.write("Elapsed Hours Since Jan 1 1970: "+"<b>" + hrs70 +"</b>" + "<br>")
    document.write("Elapsed Days Since Jan 1 1970: "+"<b>" + days70 +"</b>" + "<br>")
    document.write("Elapsed Months Since Jan 1 1970: "+"<b>" + month70 +"</b>" + "<br>")
    document.write("Elapsed Years Since Jan 1 1970: "+"<b>" + year70 +"</b>" + "<br>")
    
}

// 7
function amPm(){
    var time = new Date();
    var todayHours = time.getHours();
    if(todayHours>12){
        document.write("It's Pm")
    }
    else{
        document.write("It's Am")
    }
}

// 8
function laterDate(){
    var laterDate = new Date("Dec 31, 2020")
    document.write(laterDate)
}

// 9
function Ramdandate(){
    var currentdate = new Date();
    var ramdanDate = new Date("jun 18, 2015")
    var diff = currentdate - ramdanDate
    diff = diff/(1000*60*60*24)
    diff = Math.floor(diff)
    document.write(diff)
}
// 10
function secondPassed(){
    var currentdate = new Date();
    var yearStarted = new Date("jan 1, 2020")
    var diff = currentdate - yearStarted
    diff = diff/(1000)
    diff = Math.floor(diff)
    document.write("Seconds has passed Since Jan 1, 2020 " +diff)
}
// 11
function oneHourback(){
    var currentDate = new Date();
    var hourBack = new Date();
    hourBack.setMinutes(-1)
    document.write("Current time is: " + currentDate + "<br>" + "1 hours back it was: " + hourBack)
}
    

// 12
function centuryback(){
    var now = new Date();
    var centuryback = new Date()
    centuryback.setFullYear(1920)
    document.write("It was " + centuryback)
}

// 13
function ageCal(){
    var useryear = prompt("Enter your birth year","jan 1, 1970")
    var userage = new Date(useryear)
  
    var now = new Date()
  
    var msuserAge =  userage.getTime()
    var msnow = now.getTime()
  
    var msdiff = msnow-msuserAge
    var yeardiff = msdiff/(1000*60*60*24*30*12)
    yeardiff = Math.floor(yeardiff)
    birthyear = userage.getFullYear()
    birthMonth = userage.getMonth()
    birthDay = userage.getDay()
    document.write("Your Current Age is: " + yeardiff + "<br>" + "And your birth year is: " + birthyear +"<br>")
    document.write("Your Birth Month is : " + birthMonth + "<br>" + "And your birth Day is: " + birthDay +"<br>")
}

// 14
function keBill(){
    var Months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    var now = new Date();
    var TheMonth = now.getMonth()
    var NameofMonth = Months[TheMonth]

    var userName = prompt("Enter your Name ")
    var CurrentMonth = NameofMonth
    var Units = prompt("Enter your Units")
    var unitCharges = 16
    var lateCharges = 350;
    var onDate = (Units*unitCharges)
    var dueDate = (Units*unitCharges)+350

    document.write("Costumer Name: " +"<b>"+ userName +"</b>"+ "<br>")
    document.write("Month: " +"<b>"+ CurrentMonth +"</b>"+ "<br>")
    document.write("Number of Units: " +"<b>"+ Units +"</b>"+ "<br>")
    document.write("Charges per unit: " +"<b>"+ unitCharges +"</b>"+ "<br>")
    document.write("<br>")
    document.write("Net Amount Payable (Within Due Date): "+"<b>"+ onDate  +"</b>"+ "<br>")
    document.write("Late Payment Surcharges: " +"<b>" + lateCharges +"</b>"+ "<br>")
    document.write("Gross Amount Payable (After Due Date): "+"<b>"+ dueDate  +"</b>"+ "<br>")

}

// *********************    Chapter 35 - 38     *************************
// 1

function currentTIme(){
    var now = new Date()
    document.write (now)
}

// 2

function greetUSer(){
    var firstName = prompt(" Enter First Name ");
    var lastName = prompt(" Enter Last Name ");
    var greet = firstName + " "+ lastName
    alert(greet)
}
// 3
function addnum(){
    var a = +prompt("Enter num 1")
    var b = +prompt("Enter num 2")
    var add = a + b;
    document.write("Sum of: "+  a + "+" + b + " is: "+ add)
}

// 4
function CALculator(){
    var a = +prompt("Enter Num 1");
    var opr = prompt("Enter Operator");
    var b = +prompt("Enter Num 2");
    
    if(opr === "+"){
        document.write("Sum of " + a + "+" + b + " is: " + (a+b) )
    }
    else if (opr === "-"){
        document.write("Subtraction from " + a + "-" + b + " is: " + (a-b) )
    }

    else if (opr === "*"){
        document.write("Product of " + a + "*" + b + " is: " + a*b )
    }
    
    else if (opr === "/"){
        document.write("Division from " + a + "/" + b + " is: " + a/b )
    }
    else {
        document.write("Numerical error")
    }
}

// 5
function SQuare(){
    var a = prompt("Which value do you want to multiply exponantially");
    var b = prompt("Enter power")
    document.write(Math.pow(a,b))
}

// 6

function COunting(){
    var startCount = prompt("Enter number where you want to START counting")
    var endCount = prompt("Enter number where you want to END counting")

    for (var i = startCount; i<=endCount; i++){
        document.write( i + "<br>" )
    }
}

// 7

function rectangle(w,h){
    var a = (w*h)
    document.write("area of rectange is " +a)
}

// 8
function Palindrome(){
    var word = prompt("Enter a word to check weather it is a palindrome word or not")
    var check = ""

    for(var i =word.length -1; i>=0; i--){
        check += word[i]
    }
    if(check === word){
        document.write( word+"  is palindrome word")
    }
    else {
        document.write(word + " is not a palindrome word")
    }
}

function largestWord(){
    var word = ("Web Development tutorial")
    word = w }


    // ************************ LOTS OF PROBLEM IN CHAP 35-38 ********************


    // *********************    Chapter 38 - 42     *************************
// 1

function POWer(a,b){
    document.write(a*b)
}

// 2

function leapYear(){
    var year  =  prompt("Enter a year")
    for (var i = 0; i < year; i = i+4 )
    document.write(year[i])
}

// 3



// 4
function mainFunction(){
    // problem in code
    var sub1 = prompt("Enter subject 1 obtained marks")
    var sub2 = prompt("Enter subject 2 obtained marks")
    var sub3 = prompt("Enter subject 3 obtained marks")
    var tot1 = prompt("Enter subject 1 total marks")
    var tot2 = prompt("Enter subject 2 total marks")
    var tot3 = prompt("Enter subject 3 total marks")
    var obt = sub1+sub2+sub3
    var tot = tot1+tot2+tot3
        
    function average(){
        var avg = (sub1+sub2+sub3)/3
        return avg 
    }
    function percentAGE(){
       var perc = obt/tot*100
       return perc 
    }
    document.write("average marks: " + avg + "<br>")
    document.write("Percentage: " + perc)
}

// 5
function OwnIndexCode(){
    var city = ("WINCHESTER")
    document.write("Last num is 'R' and it's index num is: " + city.indexOf("R"))
}

// 6
function onlyConsonent(){
    var paragraph = ("The quick brown fox jumps over the lazy dog")
    var nonvow = ""
    for(var i = 0; i<paragraph.length; i++){
        var c = paragraph[i];
        if("aeiou".match(c.toLowerCase()) == null){
            nonvow += c;
        }
    }
      
    document.write(nonvow)
}

// 7
// not yet solved

// 8
function distanceConvertor(){
    var distanceKm = prompt("Write distance from one city to another in KM")
    var distanceM = distanceKm*1000
    var distanceFt = distanceKm*3280.84
    var distanceIn = distanceKm*39370.08
    var distanceCm = distanceKm*100000
    document.write("Distance in Meter: " +distanceM +"m"+ "<br>")
    document.write("Distance in Feet: " +distanceFt +"ft"+ "<br>")
    document.write("Distance in Inches: " +distanceIn +"in"+ "<br>")
    document.write("Distance in Centi meter: " +distanceCm +"cm"+ "<br>")
}

// 9
function overTime(){
    
    var overtimePay;
    var workingHours = 40 
    var actualHours = prompt("Enter hours you worked")
    var netOvertime = actualHours-workingHours
    if(actualHours > 40){
        (overtimePay = netOvertime*12)
    }
    else{
        overtimePay = 0
    }
    document.write("Over Time is 12Rs per hour" + "<br>"+"Your Net amount of overtime is " + overtimePay + "RS")
}

// 10
function CurrencyNotes(){

    var required = prompt("Enter amount you want")
    var hundredRs = 100
    var fiftyRs = 50
    var tenRs = 10

    if(required >= 10 && required <50 ){    
        alert ("You need " + required/tenRs + "Ten notes")
    }
    else if(required >=50 && required <100){
        if(required === 50)
        alert("You need " + required/fiftyRs + " hundred notes")
    }
    else if(required >=100){
        alert ("You need " + required/tenRs + " hundred notes")
    }
}



    // *********************    Chapter 43 -  48   *************************
// 1

function alertBox(thanks){
    alert("Thank you for shopping")
}    

// 3
function delet(){
    
}

// 4
function changePic(){
    var background = document.getElementById("background")
    background.src = "https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-1.2.1&w=1000&q=80"
}

function mouseOut(){
    var background = document.getElementById("background")
    background.src =  "https://images.unsplash.com/photo-1508349937151-22b68b72d5b1?ixlib=rb-1.2.1&w=1000&q=80"
}

// 5
function COunter(){
    var increase = document.getElementById("increase")
    increase = increase+1
    var inp = document.getElementById("inp")
    inp.innerHTML = increase
}

    // *********************    Chapter 49 -  52   *************************
// 1
function validation(){
    var user = document.getElementById("user").value
    var pass = document.getElementById("pass").value
    var conpass = document.getElementById("conpass").value
    var mobileNumber = document.getElementById("mobileNumber").value
    var emails = document.getElementById("emails").value

    if(user == ""){
        document.getElementById("username").innerHTML = "Please fill the username field";
        return false;   
    }
    if(!isNaN(user)){
        document.getElementById("username").innerHTML = "Only characters are allowed "
        return false
    }
    if(user.length <=6 || user.length > 20){
        document.getElementById("username").innerHTML = "User length must be between 6 to 20 "
        return false
    }
    

    if(pass == ""){
        document.getElementById("passwords").innerHTML = " ** Please fill the Password field";
        return false;   
    }
    if(pass.length <=6 || pass.length > 20){
        document.getElementById("passwords").innerHTML = " ** Password length must be between 6 to 20 "
        return false
    }


    if(conpass == ""){
        document.getElementById("confirmPassword").innerHTML = " ** Please fill the confirm password field";
        return false;   
    }
    if(pass !=conpass){
        document.getElementById("confirmPassword").innerHTML = " ** Password are not same"
        return false;
    }


    if(mobileNumber == ""){
        document.getElementById("mobileNo").innerHTML = " ** Please fill the Mobile number field";
        return false;   
    }
    if(isNaN(mobileNumber)){
        document.getElementById("mobileNo").innerHTML = " ** User must write digits not characters"
        return false;
    }
    if(mobileNumber.length !=11){
        document.getElementById("mobileNo").innerHTML = " ** Mobile number must be 11 digits"
        return false
    }

    if(emails == ""){
        document.getElementById("emailId").innerHTML = " ** Please fill the Email id field";
        return false;   
    }
    if(emails.indexOf("@") <= 0 ){
        document.getElementById("emailId").innerHTML = " ** @ Invalid position";
        return false;   
    }
    if(emails.charAt(emails.length-4)!= "." && emails.charAt(emails.length-3)!= "."){
        document.getElementById("emailId").innerHTML = " ** Email address is incomplete";
        return false;   
    }

    document.write("Username: " + user + "<br>")
    document.write("Password: " + pass + "<br>")
    document.write("Confirm Password: " + conpass + "<br>")
    document.write("Mobile Number: " + mobileNumber + "<br>")
    document.write("Email id: " + emails + "<br>")
}

// 2
function ReadMore(){
    var text = ("Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, modi id dolorem dolorum optio praesentium quos ad alias adipisci placeat omnis nihil tenetur pariatur fuga aut eveniet molestias consequuntur accusantium?")
    var Paragraph = document.getElementById("Paragraph").innerHTML = text
}

// 3
// Not solved Yet

// *********************    Chapter 53 -  57   *************************
// Word file not opening


// *********************    Chapter 58 -  67   *************************
// 1
// function getById(){
    // var mainContent = document.getElementById("main-content")
    // console.log(mainContent)
    var render = document.getElementsByClassName("render")
    document.write(render + "<br>")
    console.log(render)
// }