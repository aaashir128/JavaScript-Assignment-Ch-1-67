
// Chap 1

function greet (){
    alert ("GOOD DAY SENOR")
}

function passcode(){
    alert("Error! Please enter a valid password.")
}

function welcome(){
    alert ("Welcome to JS Land.... \n Happy  Coding!")
}

function welcomeSequence(){
    alert ("Welcome to JS Land....")
    alert ("Happy  Coding!")
}

function inConsole(){
    console.log("Hello... I can run JS through my web browser's console")
}

// Chap 2 Variables

// 1
// var username ;

// 2
// var myName = 'Muhammad Ashir Khan'
// document.write(myName)

// 3
// var message ;
// message = "Hello World"
// alert (message)

// 4
function StudentBio(){
var Name = prompt("Enter your Name")
var age = prompt("Enter your Age")
var Qualification = prompt("Enter your Qualification")
var studentBio = [Name,age,Qualification]
alert (studentBio[0])
alert (studentBio[1])
alert (studentBio[2])
}

// 5
// alert("PIZZA \nPIZZ \nPIZ \nPI \nP" )

// 6
// var email = prompt("enter your email")
// var concat = email + "@gmail.com"
// alert (concat)

// 7
// var book = ("A smarter way to learn JavaScript")

// alert("I am trying to learn from the Book " + book)

// 8
// document.write ("Yah! I can write HTML content through JavaScript")

// 9
// alert ("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬” ")


// Chap 3
// 1
// var age = prompt("enter your age")
// alert ("I am "+ age + " Year old")

// 2
// var n =  15
// alert ("You have visited this site "+ n + " times")

// 3 
// var DOB = prompt("Enter your Birth Year")
// document.write ("My bith year is " + DOB )

// 4
// var name = prompt("Enter your Name")
// var product = prompt("What do you want")
// var qty = prompt("Enter quantity")

// document.write (name + " Ordered " + qty + " " + product + " from XYZ Clothing Store")



// ************ Chap 4 ************


// 1
function multiVar(){
var a = 256;
var b = 128;
var c = a + b;
alert(c)
}

// 2
// legal variables
// var yo_man  = ("how you doing")
// var aye$ = ("how are you")
// var nigga_ = ("whats up")
// var man = ("whats going on")
// var man32 = "Hello"

// // Illegal Variables
// var 1 
// var 123man
// var $yo = "what"
// var *eww
// var 5%

// alert ($yo)

// 3
// function varlegals(){
//     var heading = "<h1>"+ "Rule of Naming JS Variabls" +"</h1>" +"<br>" +"<br>"+"<br>"
    
//     document.write()
// }


// ************ Chap 5 ************

// 1
function addingNum(){
    var a = +prompt("Enter number 1")
    var b = +prompt("Enter number 2")
    var c = a + b
    document.write("Sum of "+ a +" and " + b + " is "+ c)
}

// 2
function minusfunct(){
    var a = +prompt("Enter number 1")
    var b = +prompt("Enter number 2")
    var minus = a - b
    
    document.write("Subtraction of "+ a +" from " + b + " is "+ minus)
    
}
function multifunct(){
    var a = +prompt("Enter number 1")
    var b = +prompt("Enter number 2")
    var multi = a * b
    document.write("product of "+ a +" and " + b + " is "+ multi)
}
function dividfunct(){
    var a = +prompt("Enter number 1")
    var b = +prompt("Enter number 2")
    var divid = a / b
    document.write("division of "+ a +" to " + b + " is "+ divid)
}

// 3
// var num1;
// document.write("value after variable declearation is: "+ num1 + "<br>") 
// num1 = prompt ("enter number");
// document.write("Initial value is: " + num1 + "<br>")
// num1++
// document.write("Value after increment is: " + num1 + "<br>")
// num1 = num1+7
// document.write("Value after addition is: " + num1 + "<br>")
// num1--
// document.write("Value after decrement is: " + num1 + "<br>")
// num1 = num1%7
// document.write("Value after Remainder is: " + num1 + "<br>")
// document.write("The Remainder is: " + num1% + "<br>")


// 4

// function ticketprice(){
// var ticketPrice = prompt("Enter Ticket price");
// var numOfTicket = prompt("Enter number of Tickets");
// var totalBill = ticketPrice*numOfTicket
// document.write("total cost to buy Ticket " + numOfTicket + " is: " + totalBill + " PKR")
// }

// 5
function table(){
var table = prompt("Which table do you want?")
document.write(table + " x " + " 1 " + " = " + table*1 + "<br>")
document.write(table + " x " + " 2 " + " = " + table*2 + "<br>")
document.write(table + " x " + " 3 " + " = " + table*3 + "<br>")
document.write(table + " x " + " 4 " + " = " + table*4 + "<br>")
document.write(table + " x " + " 5 " + " = " + table*5 + "<br>")
document.write(table + " x " + " 6 " + " = " + table*6 + "<br>")
document.write(table + " x " + " 7 " + " = " + table*7 + "<br>")
document.write(table + " x " + " 8 " + " = " + table*8 + "<br>")
document.write(table + " x " + " 9 " + " = " + table*9 + "<br>")
document.write(table + " x " + " 10 " + " = " + table*10 + "<br>")
}

// 6
function tempC(){
var temperatureC = prompt("Enter temperature in C")
var cToF = (temperatureC*9/5)+32
document.write(temperatureC + "C is: " + cToF + "F")
}
function tempf(){
var temperatureF = prompt("Enter temperature in F")
var fToC = (temperatureF-32)*5/9
document.write(temperatureF + "F is: " + fToC + "C")
}

function eCommerce(){
    var priceItem1 = prompt("Enter price of item 1")
    var qtyItem1 = prompt("Enter quantity of item 1")
    var priceItem2 = prompt("Enter price of item 2")
    var qtyItem2 = prompt("Enter quantity of item 2")
    var ShippingExp = 100
    var totalCost = (priceItem1*qtyItem1)+(priceItem2*qtyItem2)+ShippingExp

    document.write("Price of Item 1 is Rs" + priceItem1 + "<br>")
    document.write("Quantity of Item 1 is: " + qtyItem1 + "<br>")
    document.write("Price of Item 2 is Rs" + priceItem2 + "<br>")
    document.write("Quantity of Item 2 is: " + qtyItem2 + "<br>")
    document.write("Shipping Charges: " + ShippingExp + "<br>")
    document.write("Total cost of your order is " + totalCost)
}

function marks(){
    var ObtMarks = prompt("Enter marks you obtained")
    var totMarks = prompt("Enter Total Marks")
    var perc = (ObtMarks/totMarks)*100.
    perc = perc.toFixed()
    
    document.write ("Total marks: " + totMarks + "<br>")
    document.write ("Obtained marks: " + ObtMarks + "<br>")
    document.write ("Percentage: " + perc +"%" +  "<br>")
}

function currencyConvertor(){
    var currencyUS = prompt("Currency in US$")
    var currencySArab = prompt("Currency in Saudi Riyal")
    var usValue = 167*currencyUS
    var sArabValue = 44.52*currencyUS
    var pkr = 1

    var usToPkr = pkr + usValue
    var sArabToPkr = pkr + sArabValue
    var totalInPkr = usValue + sArabValue

    document.write("Total currency in PKR: " + totalInPkr)
    
}

function airthmetic(){
    var ordinaryNum = +prompt("Enter a number")
    document.write("Your number is: "+ ordinaryNum + "<br>")
    ordinaryNum = ordinaryNum + 5;
    document.write("After adding 5 your number is: " + ordinaryNum + "<br>")
    ordinaryNum = ordinaryNum*10;
    document.write("After multiply by 10 your number is: " + ordinaryNum + "<br>")
    ordinaryNum = ordinaryNum/2
    document.write("After dividing by 2 your number is: " + ordinaryNum + "<br>")
}

function ageCal(){
    var currentyear = prompt("Enter current Year")
    var birthYear = prompt("Enter your BIRTH year")
    var age = currentyear-birthYear
    document.write("Current year is: " + currentyear + "<br>")
    document.write("Birth year is: " + birthYear + "<br>")
    document.write("Your Age is: " + age + "<br>")
}

function lifeTimeSnacks(){
    var FavSnacks = prompt("Enter your Favorite Snack")
    var Age = prompt("Enter your Current Age")
    var maxAge = prompt("Enter Max age","Max avg age is 67 Years")
    var perDayUsage = prompt("Enter quantity you are going to have","I'd have 5 per day")
    var totalconsumption = (maxAge - Age) *perDayUsage*(30*12)

    document.write("You will need " + totalconsumption + " " + FavSnacks + " to last you until the ripe old age of "+maxAge)
}


// ************ Chap 6 - 9 ************

// 1

function simAirth(){
    var a = +prompt("Enter a number")
    document.write ("Result:" + "<br>")
    document.write ("The Value of 'a' is: " + a + "<br>" + "<br>" )

    ++a
    document.write ("The Value of '++a' is: " + a + "<br>")
    document.write ("Now the Value is: " + a + "<br>"+ "<br>")
    a++
    document.write ("The Value of 'a++' is: " + a + "<br>")
    document.write ("Now the Value is: " + a + "<br>"+ "<br>")
    --a
    document.write ("The Value of '--a' is: " + a + "<br>")
    document.write ("Now the Value is: " + a + "<br>"+ "<br>")
    a--
    document.write ("The Value of 'a--' is: " + a + "<br>")
    document.write ("Now the Value is: " + a + "<br>"+ "<br>")
}

// 2
function explain(){
    var a = 2, b = 1;
    var result = --a - --b + ++b + b--;

    document.write("At stage '--a': the value is first decremented and become '1'" + "<br>")
    document.write("At stage '--a - --b': the value which already become 1 is further subtracted with '--b' which means '--b' is become '0:' means '1-0 = 1'" + "<br>")
    document.write("At stage '--a - --b + ++b': the value which was become '1' is now further added with 'Pre incremented b', means '1 + 2 = 3'" + "<br>")
    document.write("At stage '--a - --b + ++b + b--': Now '3' is further dcremented but this is post decremented that's why it has no impact on that stage" + "<br>")
    document.write("Final result is: " + result)
}

// 3
function userGreet(){
    var name = prompt("Your good name ")
    document.write("Hello " + name)
}

// 5
function tablefun(){
    var table = prompt("Which table do you want to display?")
    var length = prompt("Length of table do you want to display?")
   
    if (isNaN(table)){
        for(var i =1; i<=10; i++){
            document.write(5 + " * " + i + " = ", (i*5) + "<br>")
        }
    }
    else if(table === ""){
        for(var i =1; i<=10; i++){
            document.write(5 + " * " + i + " = ", (i*5) + "<br>")
                  
    }
}
    else{
        for(var i =1; i<=length; i++){
            document.write(table + " * " + i + " = ", (i*table) + "<br>")
        }    
    }

}

// 6

function marking(){
var sub1 = prompt("Enter Subject 1 Name")
var sub2 = prompt("Enter Subject 2 Name")
var sub3 = prompt("Enter Subject 3 Name")
var totalsub1 = 100
var totalsub2 = 100
var totalsub3 = 100
var obtsub1 = +prompt("Enter obtained marks of subject " )
var obtsub2 = +prompt("Enter obtained marks of subject " )
var obtsub3 = +prompt("Enter obtained marks of subject " )
var perc1 = (obtsub1/totalsub1)*100
var perc2 = (obtsub2/totalsub2)*100
var perc3 = (obtsub3/totalsub3)*100
var total = totalsub1 + totalsub2 + totalsub3
var obtTotal = obtsub1 + obtsub2 + obtsub3
var percTotal = perc1+perc2+perc3


document.write("<table>")
document.write("<tr>"+"<th>" + "Subjects" + "</th>")
document.write("<th>" + "Total Marks" + "</th>")
document.write("<th>" + "Obtained Marks" + "</th>")
document.write("<th>" + "Percentage" + "</th>"+"<tr>")


document.write("<tr>"+"<td>" + sub1 + "</td>")
document.write("<td>" + totalsub1 + "</td>")
document.write("<td>" + obtsub1 + "</td>"  )
document.write("<td>" + perc1 +"%"+ "</td>"+"<tr>"  )

document.write("<tr>"+"<td>" + sub2 + "</td>")
document.write("<td>" + totalsub2 + "</td>")
document.write("<td>" + obtsub2 + "</td>"  )
document.write("<td>" + perc2 +"%"+ "</td>"+"<tr>"  )

document.write("<tr>"+"<td>" + sub3 + "</td>")
document.write("<td>" + totalsub3 + "</td>")
document.write("<td>" + obtsub3 + "</td>"  )
document.write("<td>" + perc3 +"%"+ "</td>"+"<tr>"  )

document.write("<tr>"+"<th>"+ "</th>")
document.write("<th>" + total + "</th>")
document.write("<th>" + obtTotal + "</th>")
document.write("<th>" + percTotal + "%" + "</th>"+"<tr>")

document.write("</table>")
}



// ************ Chap 9 - 11 ************

// 1

function citygreet(){
var city = prompt("Enter city name")
if(city === "Karachi"){
    alert ("Welcome to city of lights")
}
else{
    alert("Welcome to " + city)
}
}

function gendergreet(){
    var gender = prompt("Enter you gender")
    if(gender === "male"){
        alert("Good Morning Sir")
    }
    else if(gender === "female"){
        alert("Good Morning Ma'am")
    }
    else {
        alert("Good Morning " + gender)
    }
}

function roadSignals(){
    var light = prompt("Enter Light color")
    if(light === "Red"){
        alert("Must Stop")
    }
    else if(light === "Yellow"){
        alert("Ready to move")
    }
    else if(light === "Green") {
        alert("Move now")
    }
    else {
        alert("Invalid color")
    }
}
function fuelSignal(){
    var fuel = prompt("how much fuel in your car?")
    if(fuel < 0.25){
        alert("Please refill the fuel in your car")
    }
     else {
        alert("Good to Go")
    }
}
function marksheet(){

var totalsub1 = 100
var totalsub2 = 100
var totalsub3 = 100
var obtsub1 = +prompt("Enter obtained marks of subject 1" )
var obtsub2 = +prompt("Enter obtained marks of subject 2" )
var obtsub3 = +prompt("Enter obtained marks of subject 3" )
var total = totalsub1 + totalsub2 + totalsub3
var obtTotal = obtsub1 + obtsub2 + obtsub3
var Percentage = (obtTotal / total) * 100
var grade ; 
{if(Percentage >= 80 && Percentage <=100){
    (grade = "A+")
}
else if(Percentage >= 70 && Percentage <=80){
    (grade = "A")
}
else if(Percentage >= 60 && Percentage <=70){
    (grade = "B")
}else if(Percentage < 60){
    (grade = "Fail")
}}
if(grade === "A+"){
    document.write("Total Marks: "+ total + "<br>")
    document.write("Obtained Marks: "+ obtTotal + "<br>")
    document.write("Percentage: "+ Percentage +"%" + "<br>")
    document.write("Grade: "+ grade + "<br>")
    document.write("Excellent")
}
else if(grade === "A"){
    document.write("Total Marks: "+ total + "<br>")
    document.write("Obtained Marks: "+ obtTotal + "<br>")
    document.write("Percentage: "+ Percentage + "%" + "<br>")
    document.write("Grade: "+ grade + "<br>")
    document.write("Good")
}
if(grade === "B"){
    document.write("Total Marks: "+ total + "<br>")
    document.write("Obtained Marks: "+ obtTotal + "<br>")
    document.write("Percentage: "+ Percentage +"%" + "<br>")
    document.write("Grade: "+ grade + "<br>")
    document.write("You need to improve")
}
if(grade === "Fail"){
    document.write("Total Marks: "+ total + "<br>")
    document.write("Obtained Marks: "+ obtTotal + "<br>")
    document.write("Percentage: "+ Percentage +"%" + "<br>")
    document.write("Grade: "+ grade + "<br>")
    document.write("Sorry")
}

}

// 7
function guessNum(){
var secretNum = 3
var userNum = prompt("Try your luck","Enter Number from 1-10")
if(secretNum == userNum){
    alert("Bingo! Correct Answer ")
}
else if(userNum == ++secretNum){
    alert("Close enough to the correct answer. ")
}
else if(userNum == 2){
    alert("Too Close !!! ")
}
else {
    alert ("Try Again")
}
}

// 8
function checkdivison(){
var c = prompt("Enter a number and chech weather it is divided by 3 or not")
if(c %3 === 0){
    alert("Yes "+c + " can be divided by 3")
}
else{
    alert("This cannot be divded by 3")
}
}

// 9
function evenOdd(){
var b = prompt("Enter a number and chech weather it is divided by 3 or not")
if(b %2 == 0){
    alert(b + " is an EVEN number ")
}
else{
    alert(b + " is an ODD number")
}
}

// 10
function temp(){
    var temperature = prompt("Enter temperature")
    if(temperature >= 40){
        alert ("It is too HOT outside")
    }
    else if(temperature >= 30){
        alert ("The weather today is NORMAL")
    }
    else if(temperature >= 20){
        alert ("Today weather is COOL")
    }
    else if(temperature >= 10){
        alert ("“OMG! Today’s weather is so Cool.")
    }
    else{
        alert("It is FREEZING Outside")
    }
}

// 11
function calculator(){
    var val1 = +prompt("Enter 1st value")
    var opr = prompt("Enter Operator")
    var val2 = +prompt("Enter 2nd value")

    if(opr ==="+"){
        document.write(val1 +" + " + val2 +  " = " + (val1+val2))
    }
    else if(opr ==="-"){
        document.write(val1 +" - " + val2 +  " = " + (val1-val2))
    }
    else if(opr ==="*"){
        document.write(val1 +" x " + val2 +  " = " + (val1*val2))
    }
    else if(opr ==="/"){
        document.write(val1 +" / " + val2 +  " = " + (val1/val2))
    }

}

// ************ Chap 12 - 13 ************

// 1
function charcode(){
var char = prompt("Enter a String or Number")
if(char.charCodeAt() === 65 || char.charCodeAt() === 90|| char.charCodeAt() === 97 || char.charCodeAt() === 122){
    alert(char.charCodeAt())
}
else {
    alert("Invalid")
}
}

// 2
function cap(){
    var x = prompt("Enter a variable")
    var y = prompt("Enter another variable")
    var capx = x.toUpperCase()
    var capy = y.toUpperCase()

    document.write(x + " You type "+ capx +" Auto capitalize" + "<br>")
    document.write(y + " You type "+ capy +" Auto capitalize" )
}

// 3
function postiveNumber(){
    var userNum = prompt("Enter a Positive Number")
    if(userNum > 0 ){
        alert("yes " + userNum + " Is a positive number")
    }
    
    else if(userNum == 0 ){
        alert("It is " + userNum )
    }
    
    if(userNum < 0 ){
        alert("No " + userNum + " Is a NEGATIVE number")
    }
    
}

// 4
function vowel(){
    var vowel = prompt("Enter a Vowel")
        if(vowel === 'a'||vowel ==='e'||vowel ==='i'||vowel ==='o'||vowel ==='u'||vowel ==='A'||vowel ==='E'||vowel ==='I'||vowel ==='O'||vowel ==='U'){
            alert("That's True")
        }
        else {
            alert("False")
        }
    }

// 5

function correctCode(){
    var correctPassword =  ("Alpha909")
    var password = prompt("Enter Password")
    if(correctPassword === password){
        alert ("Correct! the password you entered matches with the original")
    }
    else if (password ===""){
        alert ("Please Enter your password")
    }
    else {
        alert("Incorrect password")
    }
}

// 6
function timegreet(){
    var greeting; 
    var hour = 12; 
        if (hour < 18) {
            alert (greeting = "Good day"); 
        }else{ 
            alert (greeting = "Good evening"); } 
}

// 7
function hrsformat(){
    var time = prompt("Enter time in 24 hrs format")
    if(time >= 0000 && time < 1200 ){
        document.write("Good Morning")
    }
    else if(time >= 1200 && time < 1700 ){
        document.write("Good Afternoon")
    }
    else if(time >= 1700 && time < 2100 ){
        document.write("Good Evening")
    }
    else if(time >= 2100 && time <= 2359 ){
        document.write("Good Night")
    }
}


// ************ Chap 14 - 16 ************

// 1
var students;

// 2
var stundents = []

// 3
var str = ["Welcome","To","JavaScript"]

// 4
var num = [1,2,3,4]

// 5

// 6

var mixArray = [1,"Stay Home ", 2 , "Stay Safe "]


// 7
function Educ(){
var qualification = ["1) SSC","2) HSC","3) BSC","4) BS","5) BCOM","6) MS","7) M.Phil","8) Ph.D"]
alert(qualification)
}

// 8
function studentsScore(){
 students = ["Michael","John","Tony"]
 var score = [350,420,170]
 var totalScore =[500,500,500]

var perc1= (students[0]+ " is " +score[0] +" "+ "and Percentage is : " + (score[0]/totalScore[0]*100 + " " + " % "))
var perc2 =(students[1]+ " is " +score[1] +" "+ "and Percentage is : " +  (score[1]/totalScore[1]*100 + " " + " % "))
var perc3 =(students[2]+ " is " +score[2] +" "+ "and Percentage is : " +  (score[2]/totalScore[2]*100 + " " + " % "))

document.write ("Score of " + perc1 + "<br>")
document.write ("Score of " + perc2 + "<br>")
document.write ("Score of " + perc3 + "<br>")
}

// 9
function colorChoice(){
    colorNames  = [ " Blue "," Yellow "," Green "]

userChoice1 = prompt("Which color do you want to add at the start ?")
colorNames.unshift(userChoice1)

alert (colorNames)

userChoice2 = prompt("Which color do you want to add at the end ?")
colorNames.push(userChoice2)
alert (colorNames)

userChoice3 = [prompt("Add 2 more color, that will display at the start "),prompt("Add another color")]
colorNames.unshift(userChoice3)
alert (colorNames)

colorNames.shift(colorNames[0])
alert("First color has been deleted. Remaining are " + colorNames)

colorNames.pop()
alert ("Last color has been deleted,\n remainings are " + colorNames)


userindex1 = prompt("In which index do you want to add color")
userChoice4 = prompt("which color do want to add")
colorNames.splice(userindex,0,userChoice4)
alert (colorNames)

userindex2 = prompt("In which index do you want to delete colors")
colorNames.splice(userindex2,1)
alert(colorNames)
}

//  10
function inAscending(){
    var scores = [320,230,480,120]
    var inOrder = scores.sort()
    document.write("In Random: " + scores +"<br>" + "In Ascending order: " + inOrder)
}

// 11
function selectionOfCities(){
var cityNames = [" Karachi "," Lahore "," Islamabad "," Quetta "," Peshawar ",]
SelectedCities = cityNames.slice(0,3)
alert (SelectedCities)
}

// 12
function joining(){
var arr = ["This" , " is ", " my ", " cat"]

document.write (arr.join(""));
}

// 13
function FIFOorder(){
    device = ["Keyboard","mouse","printer","monitor",]
document.write (device+ "<br>")

}
// 14
function LIFOorder(){
    device = ["Keyboard","mouse","printer","monitor",]
document.write (device.reverse())

}
// 15
function mobileChoice(){
var phone = ["Apple","Samsung","Huawei","Motorolla","Haier","Sony",]
document.write("<select>")

for(var i = 0; i<phone.length; i++){
    document.write("<option>"+ phone[i] + "</option>")
}
document.write("</select>")
}

// ************ Chap 17 - 20 ************

// 1
var multiArray = [
    []
]

// 2
multi = [
        [0, 1, 2, 3],
        [1, 0, 1, 2],
        [2, 1, 0, 1]
    ]


// 3
function loopCount(){
    for (var i = 0; i<=100; i++){
        document.write(i + "<br>")
    }
}

// 4
function Tablef(){
    var tbl = prompt ("Enter a number you want to display a table ")
    var lngt = prompt ("Enter a number you want to display a table length ")
    for (var i = 1; i<=lngt; i++){
        document.write(tbl + " x " + i + " = " + (tbl*i) + "<br>")
    }
}
// 5
function fruit(){
    var fruits =["Apple","Mango","Banana","Strawberry","Orange"] 
    for (var i = 0; i<fruits.length; i++){
        document.write("Element at index " + i + " is " + fruits[i] + "<br>")
    }
}

// 6
function countingSys(){
    document.write("Counting " + "<br>"+ "<br>")
    for(var i =0; i<=15; i++){
        document.write(i + ", ")
    }
    document.write( "<br>"+ "<br>"+"Reverse Counting ")
    for(var i =10; i>=0; i--){
        document.write(i + ", ")
    }
    document.write( "<br>"+ "<br>"+"Even number ")
    for(var i =0; i<=20; i=i+2){
        document.write(i + ", ")
    }
    document.write( "<br>"+ "<br>"+"Odd number ")
    for(var i =1; i<=20; i=i+2){
        document.write(i + ", ")
    }
    document.write( "<br>"+ "<br>"+"Even number ")
    for(var i =2; i<=20; i=i+2){
        document.write(i + "k, ")
    }
}

// 7
function bakeryItems(){
    items = ["cake", "apple pie", "cookie", "chips", "patties"] 
var search = prompt("What are you looking for ?");
for (var i = 0; i< items.length; i++){
    if(items.indexOf(search) !== -1 ){
        document.write (search + " is Available in our Bakery at Index " +items.indexOf(search)  )
    break;
    }
    else{
        document.write("We are sorry. " + search +" is not available in our Bakery")
    break;
    }
}
}

// 8 AND 9

function largestSmallest(){
    var values = [24, 53, 78, 91, 12];

var max = values[0]
var min = values[0]

for (i = 0; i<values.length; i++){
    if (values[i]>max){
        max = values[i]
    }
    else if (values[i]<min){
        min = values[i]
    }
}
document.write ("Max value is : "+ max + "Min value is :" + min)


}


// 10
function fivetimes(){
    for(var i = 5; i<=100; i=i+5){
        document.write(i + ",")
    }
}