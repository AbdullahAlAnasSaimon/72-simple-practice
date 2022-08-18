/* 1) Harry’s mom gave him tk 1000 and asked him to buy some oranges and apples. Write a program to help Harry calculate how much money the shopkeeper will return. The total cost of 1 kg of oranges and 1 kg of apples is tk 700.
 */

/* let apples = 300, orange = 400;
let totalCost = apples + orange;
let momGave = 1000;
let willReturn = momGave - totalCost;
console.log(willReturn); */


/* 2) Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student. */

/* let mathematics = 95, biology = 89, chemistry = 75, physics = 85, bangla = 95;
let averageMark = (mathematics + biology + chemistry + physics + bangla) / 2;
console.log(Math.round(averageMark)); */


/* 3) John’s teacher gave him two variables. Each variable contains a string. John’s teacher asked him to combine these two strings(‘I am going to be’ and ‘an awesome web developer’) and print them in one line. Help John write the program. */

/* let str1 = "I am going to be", str2 = " an awesome web developer";
console.log(str1 + str2); */


/* 4) Sarah’s mother is teaching her mathematics. She gave Sarah the number 119 and asked her what the remainder would be if she divided the number by 5. Help Sarah write the program. */

/* const num = 119;
let reminder = num % 5;
console.log(reminder); */


/* 5) নিচের ভেরিয়েবল ডিক্লেয়ার এ ক োনটার মধ্যে কি কি সমস্যা আছে । দেখত ো বের করতে
পার ো কি না? */

/* Var price = 33 // var price = 33;
var name - Shabana // var name = "shabana";
var boxName = ‘Cocola; // var bocName = "Cocola";
var 88_price = 34; // var price_88 = 34;
var enum = -1; // var number = -1;
var _$box’78 = ‘Monika’; // var _$box78 = "Monika";
var home-address = “kochu khet”; // var homeAddress = "kochu khet"; */


/* 6) You are given an array: var fruits = ['Apple', 'Banana', 'Orange'];
a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
b) Remove ‘Orange’ and add ‘Watermelon’.
 */


/* let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits.indexOf("Banana"));
fruits[1] = "Mango";
// console.log(fruits);
fruits.pop();
// console.log(fruits);
fruits.push("Watermelon");
console.log(fruits); */


/* 7) You and your friends Tom, Jane, Peter and John got their final exam results. Your total score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56 and John’s total score is 40. The grading
chart is
          80 or above A grade
          60 or above B grade
          50 or above C grade
          40 or above D grade
          39 or less => F grade
Write a program to find your and your friends’ grades using if-else. */


/* let markArray = [85, 66, 95, 56, 40];
for(let i = 0; i < markArray.length; i++){
  // console.log(markArray[i]);

  let marks = markArray[i];

  if(marks >= 80 && marks <= 100){
    console.log("A");
  }
  else if(marks >= 60 && marks <= 79){
    console.log("B");
  }
  else if(marks >= 50 && marks <= 59){
    console.log("C");
  }
  else if(marks >= 40 && marks <= 49){
    console.log("D");
  }
  else if(marks <= 39 && marks >= 0){
    console.log("F");
  }
  else{
    console.log("invalid input");
  }
} */



/* 8) You are given three numbers 13, 79, and 45. Write a program that will print the largest number using if-else. */

/* let num1 = 13, num2 = 79, num3 = 45;
if(num1 > num2 && num1 > num3){
  console.log(num1, "is largest");
}
else if(num2 > num1 && num2 > num3){
  console.log(num2, "is largest");
}
else{
  console.log(num3, "is largest");
} */



/* 9) You are given a triangle with the sides 9, 8, 9. Write a program to check whether a triangle is Isosceles or not using if-else.
                                  Isosceles => two sides are equal
 */

/* let a = 10, b = 9, c = 9;
if((a === b && b !== c) || (a === c && b !== c) || (c === b && c!== a)){
  console.log("The triangle is isosceles!");
}else{
  console.log("not isosceles!");
} */


/* 10) ক্লাস সেভে র এর ফাইনাল এক্সাম এ তুমি ফার্স্ট হয়েছ। ত োমার বন্ধু আলিয়া, ডালিয়া, সালিয়া, মালিয়া, লিলিয়া আর জ্বালাইয়া - তাদের grade তুমি জান ো না। তবে তাদের নম্বর জান ো. আলিয়া 95 পেয়েছে , ডালিয়া 66 পেয়েছে , সালিয়া 80 পেয়েছে , মালিয়া পেয়েছে 59, লিলিয়া পেয়েছে 47, জ্বালাইয়া পেয়েছে 77। তুমি JS code দিয়ে তাদের grade বের করে
দিতে পারবে ?

১) যারা ৫০ এর নিচে পেয়েছে , তাদের grade F.
২) যারা ৫০ বা তার উপরে পেয়েছে , অথবা ৬০ এর নিচে পেয়েছে , তাদের grade D.
৩) যারা ৬০ বা তার উপরে পেয়েছে , অথবা ৭০ এর নিচে পেয়েছে , তাদের grade C.
৪) যারা ৭০ বা তার উপরে পেয়েছে , অথবা ৮০ এর নিচে পেয়েছে , তাদের grade B.
৫) যারা ৮০ বা তার উপরে পেয়েছে , অথবা ৯০ এর নিচে পেয়েছে , তাদের grade A.
৬) যারা ৯০ বা তার উপরে পেয়েছে , তাদের grade A+ */

/* let getMarks = [95, 66, 80, 59, 47, 77];

for(let i = 0; i < getMarks.length; i++){
  let checkMark = getMarks[i];

  if(checkMark >= 90 && checkMark <= 100){
    console.log("A+");
  }
  else if(checkMark >= 80 && checkMark <= 89){
    console.log("A");
  }
  else if(checkMark >= 70 && checkMark <= 79){
    console.log("B");
  }
  else if(checkMark >= 60 && checkMark <= 69){
    console.log("C");
  }
  else if(checkMark >= 50 && checkMark <= 59){
    console.log("D");
  }
  else if(checkMark >= 0 && checkMark <= 49){
    console.log("Fail");
  }
  else{
    console.log("Invalid Input!");
  }
} */



/* 11) তাড়াহুড়া করে স্কুলে র জন্য বে র হচ্ছ কি ন্তু রাস্তা পার হওয়ার সময় দে খলে , ট্রাফি ক সি গন্যাল লাল রং। এই অবস্থায় যদি তুমি রাস্তা পার হওয়ার চে ষ্টা কর, তাহলে ডে ঞ্জার হতে পারে । যদি হলদু রং হয় তাহলে ত োমার থে মে যাওয়া উচি ত। আর যদি ট্রাফি ক সি গন্যাল গ্রি ন হয় তাহলে ত োমার রাস্তা পার হওয়া উচি ত। তাই একটা ক োড লি খে ফে ল ো। যে খানে আমরা signal নামে একটা ভে রি য়ে বল থাকবে । সে টার মান green, yellow বা red হতে পারে । সে ই অনসুারে ডি ফারে ন্ট ডি ফারে ন্ট কাজ হবে । ত ো, সে ই ক োড ফটাফট লি খে ফে ল ো। */

/* let signal = "green";

if(signal === "green"){
  console.log("you can cross the road :)");
}else if(signal === "yellow"){
  console.log("you should wait a little! :|");
}else if(signal === "red"){
  console.log("you should wait for the green signal :(");
}else{
  console.log("Invalid! -Check Input");
} */


/* 12) প্রতি দি ন ত োমার কাজ কি ?
          ১) রাত ৮ টা বাজে মডি উল আনলক কর ো
          ২) ফটাফট ভি ডি ও দে খে দে খে প্রাকটিস কর ো
          ৩) ভি ডি ও দে খতে দে খতে ন োটস নাও
          ৪) মডি উল শে ষ হলে পুরা মডি উল নি জে নি জে প্রাকটিস কর ো
          ৫) ক োন কি ছুবঝু তে না পারলে (চি ন্তা করে দে খ ো এইখানে কি ন্তু একটা শর্ত আছে ), সাপ োর্ট সে শনে
          জয়ে ন কর ো
এখন ত োমার কাজ হচ্ছে একটা for লপু ১০ বার চালি য়ে উপরে র জি নি সগুলা আউটপুট হি সে বে
দে খান ো।
 */


/* let work1 = "raat 8 tay module unlock kora", work2 = "fotafot video dekha", work3 = "nots newa", work4 = true;
for(let i = 0; i < 10; i++){
  console.log(work1, work2, work3);
  if(work4 === false){
    console.log("Module bucchi");
  }else{
    console.log("Module buchinai.");
  }
} */

// 13) আবার একই জি নি স while লপু চালি য়ে ১০ বার দে খান ো।

/* let work1 = "raat 8 tay module unlock kora", work2 = "fotafot video dekha", work3 = "nots newa", work4 = true, i = 0;
while(i < 10){
  console.log(work1, work2, work3);
  if(work4 === true){
    console.log("Module bucchi");
  }else{
    console.log("Module buchinai.");
  }
  i++;
} */


// 14) উপরে র প্রব্লে মটাই while লপু রি ভার্স ওয়ে তে (decremental হি সে বে )করে দে খাও

/* let work1 = "raat 8 tay module unlock kora", work2 = "fotafot video dekha", work3 = "nots newa", work4 = true, i = 10;
while(i > 0){
  console.log(work1, work2, work3);
  if(work4 === true){
    console.log("Module bucchi");
  }else{
    console.log("Module buchinai.");
  }
  i--;
} */



// 15) উপরে র প্রব্লে মটাই for লপু রি ভার্স ওয়ে তে (decremental হি সে বে )করে দে খাও

/* let work1 = "raat 8 tay module unlock kora", work2 = "fotafot video dekha", work3 = "nots newa", work4 = true;
for(let i = 10; i > 0; i--){
  console.log(work1, work2, work3);
  if(work4 === false){
    console.log("Module bucchi");
  }else{
    console.log("Module buchinai.");
  }
} */



/* 16) ত োমার কাছে : ৮০০০০ টাকার বে শি হলে তুমি mac কি নবে , ৬০ টাকার বে শি হলে gaming ল্যাপটপ
কি নবে , ৪০ হাজার টাকার বে শি হলে lenovo yoga কম্পি উটার কি নবে , ২০ হাজার টাকার বে শি হলে পুরান
ল্যাপটপ কি নবে । না হয় তুমি ম োবাইল দি য়ে কাজ চালাবে । */

/* let money = 35000;
if(money >= 80000){
  console.log("Mac kinbo");
}
else if(money >= 60000 && money < 59000){
  console.log("Gaming Laptop kinbo");
}
else if(money >= 40000 && money < 39000){
  console.log("Lenovo Laptop kinbo");
}
else if(money >= 20000){
  console.log("Puran mobile e vorosha");
}else{
  console.log("ja fokir");
} */



// 17) আসকে আমার মন ভাল ো নে ই এই কথা ৩৯ বার আউটপুট হি সে বে দে খাও।

/* for(let i = 1; i < 40; i++){
  console.log(i, "ajke amar mon valo nei");
} */



// 18) while লপু কি ভাবে কাজ কর
 
/* initialization
while keyword (condition){
  statement
  increment/decrement
 } */


 
//  19) একটা ক োড লি খে ৫৮ থে কে ৯৮ পর্যন্ত যত সংখ্যা আছে সে গুলাকে দে খাও

/* for(let i = 58; i <= 98; i++){
  console.log(i);
} */



// 20) একটা ক োড লি খে ৪১২ থে কে ৪৫৬ পর্যন্ত যত জ োর সংখ্যা আছে সে গুলাকে দেখাও

/* for(let i = 412; i <= 456; i += 2){
  console.log(i);
} */



// 21) একটা ক োড লি খে ৫৮১ থে কে ৬২৩ পর্যন্ত যত বি জ োড় সংখ্যা আছে সে গুলাকে দেখাও

/* for(let i = 581; i <= 623; i += 2){
  console.log(i);
} */



/* 22) তুমি এতদিন যা যা জিনিস শিখছ ো সে গুলার নাম দি য়ে একটা array বানাও। তারপর একটা for লপু দি য়ে সে ই array এর সব উপাদান কে আউটপুট হি সে বে দে খাও। */

/* let skill = ["html", "css", "javascript", "dom", "bootstrap", "tailwind"];
for(let i = 0; i < skill.length; i++){
  console.log(i, skill[i]);
} */


/* 23) তুমি এতদি ন পর্যন্ত যে যে মডে লে র ম োবাইল ফ োন ইউজ করে ছ ো সে গুলার নাম দি য়ে একটা
array বানাও। তারপর একটা while লপু দি য়ে সে ই array এর উপাদান গুলা একটা একটা করে
আউটপুট হি সে বে দে খাও */

/* let phone = ["galaxy s dous 2", "galaxy grand prime +", "galaxy a10s", "symphony d44", "galaxy a2 core"];
let i = 0;
while(i < phone.length){
  console.log(phone[i]);
  i++;
} */


/* 24) একটা ফর লপু চালাও। ৩০ থে কে ৮৬ পর্যন্ত। আর এই লপু ৪৪ এ গে লে ব্রে ক করবে । সে ই
জি নি স ক োড করে দে খাও */

/* for(let i = 30; i <= 86; i++){
  if(i === 44){
    break;
  }
  console.log(i);
} */


/* 25) ত োমার যত বই আছে সে গুলার দাম নি য়ে একটা array লি খে ফে ল ো। যে বই গুল োর দাম ২০০
টাকার উপরে সে গুলাকে স্কি প করবে । অর্থাৎ সে গুলাকে আউটপুট হি সে বে দে খাবে না। বাকি দে র কে
আউটপুট হি সে বে দে খাবে । দে খ ো করতে পার ো কি না। */

/* let booksPrice = [150, 120, 180, 90, 200, 220, 170, 250, 80, 160];
for(let i = 0; i < booksPrice.length; i++){
  if(booksPrice[i] > 200){
    continue;
  }
  console.log(booksPrice[i]);
} */


/* 26) Write a function called foo() which prints “foo” and a function called bar()
which prints “bar”. Call function bar() in the foo() function after printing. What
will be the output? Now call the foo() to see the output. */

/* function foo(){
  console.log("foo");
  bar();
}

function bar(){
  console.log("bar");
}

foo(); */


/* 27) Write a function called make_avg() which will take an three integers and
return the average of those values */

/* function make_avg(a, b, c){
  let avg = (a + b + c) / 3;
  console.log(avg);
}

make_avg(7, 5, 12); */


/* 28) Challenging: Write a function called make_avg() which will take an array of
integers and the size of that array and return the average of those values. */

/* function make_avg(arrayInteger){
  // console.log(arrayInteger.length);
  let total = 0, avg;
  for(let i = 0; i < arrayInteger.length; i++){
    let container = arrayInteger[i];
    total += container;
    avg = total / arrayInteger.length;
  }
  return avg;
}

let integer = [7, 3, 4, 8, 20, 13, 18, 21, 1, 6];
console.log(make_avg(integer)); */



/* 29) Write a function called odd_even() which takes an integer value and tells
whether this value is even or odd. You need to do it in 4 ways:
            ● Has return + Has parameter
            ● No return + Has parameter 
*/

/* function odd_even(value){
  if(value % 2 === 0){
    console.log(value, "is even!");
  }else{
    console.log(value, "is odd!");
  }
  // return value;
}

odd_even(22); */



/* 30) You are in a hurry to go to your school on time. But when you are crossing
the road, the traffic signal is red coloured. In this situation, if you try to cross the
road, you may be in danger.If you notice a yellow coloured traffic signal, you
should stop. If you notice a green coloured traffic signal, you should cross the
road. So write a JS code, where there is a variable called signal. Its value can
be green, yellow or red & we will get different activities as output depending on
the variable. So, hurry up. */

/* let signal = "red";
if(signal === "green"){
  console.log("you can cross the road");
}
else if(signal === "yellow"){
  console.log("you should wait a while");
}
else{
  console.log("the signal is red");
} */


// 31) একটা ফাংশন লি খবা যে টা ১৩ এর নামতা (multiplication table) আউটপুট হি সে বে দেখাবে ।

/* function multiplication_table(multiply){
  for(let i = 1; i <= multiply; i++){
    // console.log(i);
    for(let j = 1; j <= 10; j++){
      let multiplication = i * j;
      console.log(i, "*", j, "=", multiplication);
    }
  }
}

multiplication_table(13); */


/* 32) একটা ফাংশন লি খবা যে টা যে ক োন নামকে uppercase বা রে গুলার কে ইস হি সে বে নি বে আর
আউটপুট হি সে বে সে ই নাম lowercase করে রি টার্ন করবে । */

/* function toLowerCaseText(upperCaseP){
  let lowerCase = upperCaseP.toLowerCase();
  return lowerCase;
}

let text = 'SAIMON';
console.log(toLowerCaseText(text)); */


/* 33) fullName নামে একটা ফাংশন তৈ রী কর যে টা ত োমার নামে র প্রথম অংশ এবং ত োমার
নামে র শে ষে র অংশ প্যারামি টার হি সে বে নি বে । আর ত োমার নামে র দইু অংশ জ োড়া দি য়ে আউটপুট
হি সে বে ত োমার পূর্ন নাম রি টার্ন করে দি বে । যে মন ধর ো, hablu এবং kanto ইনপুট প্যারামি টার
হি সে বে দি লে আউটপুট হি সে বে hablu kanto রি টার্ন করবে । */

/* function fullName(firstName, lastName){
  let fullNam = firstName + " " + lastName;
  return fullNam;
}

console.log(fullName('Abdullah', 'Saimon')); */


/* 34) একটা ফাংশন লি খবা যে টাকে তুমি ক োন সংখ্যাকে ইনপুট হি সে বে দি লে সে সে ই সংখ্যার square করে সে ই square কে রি টার্ন করবে । অর্থাৎ তুমি ইনপুট হি সে বে 5 দি লে সে টাতে স্কয়ারে হি সে বে 25 আউটপুট হি সে বে পাবে । */

/* function square(number){
  let numberSquare = number * number;
  return numberSquare;
}

let output = square(9);
console.log(output); */


// 35) Write a function that will take hour as the input parameter and will convert it into minutes and will return the result in minutes.

/* function toMinute(hour){
  let minute = hour * 60;
  return minute;
}

console.log(toMinute(5)) */


/* 36) Write a function findLeapYear() that will take the array [2023, 2024, 2025, 2028, 2030] as the input parameter and will check if each year is a leap year. If a year is a leap year insert that year in a new array, return the new array and print the result. */

/* function findLeapYear(year){
  for(let i = 0; i < year.length; i++){
    let yearIndex = year[i];
    if((yearIndex % 4 === 0) && (yearIndex % 100 !== 0) || (yearIndex % 400 === 0)){
      console.log(yearIndex, "is leap year")
    }
    else{
      console.log(yearIndex, "is not leap year");
    }
  }
  return "completed";
}

let years = [2023, 2024, 2025, 2028, 2030];
let yearOut = findLeapYear(years);
console.log(yearOut); */


// 37) Write a function findOddSum() that will take the array [ 5, 7, 8, 10, 45, 30 ] as the input parameter and will return the sum of the odd numbers.

/* function findOddSum(number){
  let oddSum = 0;
  for(let i = 0; i < number.length; i++){
    let indexNumber = number [i];
    if(indexNumber % 2 !== 0){
      oddSum = oddSum + indexNumber;
      // console.log(oddSum);
    }
    else{
      console.log(indexNumber, "even");
    }
  }
  return oddSum;
}

let numberArray = [ 5, 7, 8, 10, 45, 30 ];
console.log("Sum of odd:", findOddSum(numberArray)); */


/* 38) leapYear() নামে ফাংশন লি খ ো এবং নে ক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সে টা চে ক কর ো। Leap year হলে ফাংশন true রি টার্ন করবে আর leap year না হলে false রি টার করবে । */

/* function leapYear(year){
 if((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
  return true;
 }
 else{
  return false;
 }
}

leapYear(2024); */


/* 39) ত োমার বয়স কি odd নাকি even সংখ্যা সে টা চে ক কর একটা ফাংশন দি য়ে । সে ই ফাংশনকে ক োন সংখ্যা প্যারামি টার হি সে বে দি লে , সে ই সংখ্যা Even হলে ফাংশন true রি টার্ন করবে আর Odd হলে false রি টার্ন করবে । */

/* function checkAge(age){
  if(age % 2 === 0){
    return true;
  }
  else{
    return false;
  }
}

console.log(checkAge(22)); */


/* 40) এমন একটা ফ্যাংশনা লি খ ো যে টাকে তুমি ঘন্টাকে ইনপুট প্যারামি টার হি সে বে দি বে । আর সে সে ই ঘন্টাকে সেকেন্ডে কনভার্ট করে সেকেন্ড রি টার্ন করবে । */

/* function toSecond(hour){
  let second = hour * 60 * 60;
  return second;
}

console.log(toSecond(24), "seconds"); */


// 41) একটা লপু লি খতে হবে যে টা ১ থে কে ১০০ পর্যন্ত যত সংখ্যা আছে সে টা দে খাবে ।

/* for(let i = 1; i <= 100; i++){
  console.log(i);
} */


// 42) ৫০ থে কে ৮০ এর মধ্যে যত ো বি জ োড় সংখ্যা আছে সে গুলাকে দে খাবে ।

/* for(let i = 51; i <= 80; i += 2){
  console.log(i)
} */