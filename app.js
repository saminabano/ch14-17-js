 //assignment 3//
//Q1//
//var age=("I am 15 years old");
//alert (age);
//Q2//
//var totalVisite=("you have visite this site 14 times");
//alert(totalVisite);
//Q3//
//var birthYear=("my birth year is 1986");
//document.write(birthYear);
//var datatype=("data type of my declared variable is number");
//document.write("<br>");
//document.write(datatype);
//Q4//
 //var name=("john Doe");
//var title=("T shirt");
 //var quntity=("5");
 //var storename=("on XYZ clothing store");
//var information= name + title + quntity + storename
//document.write("<br>");
//document.write(information);

//Chapter 4//
//Q1//
//var num1=("sana ");
//var num2=("samina ");
//var num3=("sumaira");
//var num4=(num1 + num2 + num3);
//console.log(num4);
//Q2//
//5 legal & 5 illegal variable names//
//5 legal variables//
//& _ camelcase any number in between variable
//5 illegal variables//
//space # % number cannot start in starting of any variable

//Q3//
//b//
//numbers,$,_,letters//
//c//

//letters ,$ ,_//

//d//
//sensitive//

//e//
//keywords//

// assignment chapter 5//
//Q1//
//var num1=5;
//var num2=3;
//var num3=(num1 + num2);
//console.log(num3);
//var totalnum=("sum of 5 and 3 is 8");
//document.write("<br>");
//document.write(totalnum);
//Q2//

//var num1=5;
//var num2=3;
//var num3=(num1 * num2);
//console.log(num3);
//var totalnum=("multiplication of 5 and 3 is 15");
//document.write("<br>");
//document.write(totalnum);

//var num1=5;
//var num2=3;
//var num3=(num1 - num2);
//console.log(num3);
//var totalnum=("subtraction of 5 and 3 is 2");
//document.write("<br>");
//document.write(totalnum);

//var num1=5;
//var num2=3;
//var num3=(num1 / num2);
//console.log(num3);
//var totalnum=("multiplication of 5 and 3 is 1.6");
//document.write("<br>");
//document.write(totalnum);

//Q3//
///q//
//var x;
//b//
//var delaration=("value after declaration is");
//document.write("<br>");
//document.write(delaration);
//c,d,e//
//var x=5;

//var intitilize=("variable vale is 5");
//document.write("<br>");
//document.write(intitilize);

//var newnum=x++;
//console.log(newnum);
//g,h,i//
//var x=5;
//var y=7;
//var z=x + y;Q
//console.log(z);
//document.write("<br>");
//var xyz=("value after addition is 12");
//document.write(xyz);
//var desnum=--x;
//console.log(desnum);

//assignment chapter 14-16//
// Q1 //
let student= [];
// Q2 //
let students=new Array();
// Q3 //
var starting= ["a","b","c"];
//Q4//
var NumArr= [1,2,3,4,5];
//q5//

//Q6//
var MixArr = [1, "mixed" ,"now is" ,true];
document.write("<br>");

//Q7//
var education=["SSC" ,"HSC","BCS" ,"BS","BCOM","MS","M.Phil","PHD"];
for (var i in education)
{
console.log("row" + i);
for (var j in education[i])
{
document.write("" +education[i][j]);
}
}
//Q8//
var st_name=["Michael" , "John" , "Tony"]
var st_score=[320,230,480]

var i=(0);
while ( i <3){
var result = (st_score[i]/500 ) *100;
document.write( "Student Name:" , st_name[i] , "Student Score:" , result , "%", "<br>" );
i++;
}
//Q9//

var colour=["Red","Orange","Yellow","Green","Blue","Violet"]
document.write(colour, "<br>");
var ans = prompt("Which colour do you want at the beginning");
colour.unshift(ans);
document.write(colour, "<br>");
var ans2 = prompt("What colour do you want at the end?");
colour.push(ans2);
document.write(colour);
document.write("<br>");
colour.unshift("Black","White");
document.write(colour,"<br>");
colour.shift();
document.write(colour,"<br>");
colour.pop() ;
document.write(colour,"<br>");
var ans3 = prompt("At which index do you want to add colour?");
var ans4 = prompt("What colour name do you want to be added?");
colour.splice (ans3,0,ans4);
document.write(colour,"<br>");
var ans5 = prompt("At which index do you want to remove colours?");
var ans6 = prompt("How many colours do you want to remove?");
colour.splice(ans5,ans6);
document.write(colour,"<br>");

//Q10
var score = [320,230,480,120];
document.write("Scores of Students:",score);
score.sort();
document.write("<br>","Ordered Scores of Students",score);

//Q11
var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
var selectedcities = cities.slice(2,4);
document.write("<br>",cities,"<br>",selectedcities,"<br>");

//Q12
var arr = ["This", "is", "my", "cat"];
let text = arr.join(" ");
document.write(text);

//Q13
var arr = [];
arr[0] = "Keyboard";
arr[1] = "Mouse";
arr[2] = "Printer";
arr[3] = "Monitor";
var i=(0);
while(i!==4) {
document.write("Out:",arr[i]);
i++;
}

//Q14
var arr = [];
arr[0] = "Keyboard";
arr[1] = "Mouse";
arr[2] = "Printer";
arr[3] = "Monitor";
var i=(3);
while(i>=0) {
document.write("Out:",arr[i]);
i--;
}

//Q15
var manf = ["Apple","Samsung","Motorolla","Nokia","Sony","Haier"];










