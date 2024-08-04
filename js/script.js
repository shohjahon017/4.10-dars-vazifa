//String metodlariga oid masalalar
//1-masala
// let str = "salom bolalar";
// function countLetter(arg) {
//   let count = 0;
//   arg.split("").forEach((element) => {
//     if (element === "a") {
//       count++;
//     }
//   });
//   return count;
// }
// console.log(countLetter(str));

//2-masala
// let str = "salom";
// function threeElement(arg) {
//   return arg.slice(-3);
// }
// console.log(threeElement(str));

//3-masala
// let arr = "salom bolalar yaxshimisizlar";
// function toCapitalize(arg) {
//   let res = arg.split(" ").map((element) => {
//     return element[0].toUpperCase() + element.slice(1);
//   });
//   return res.join(" ");
// }
// console.log(toCapitalize(arr));

//4-masala
// let str = "hello wor ld";
// function removeSpace(arg) {
//   let res = arg.replaceAll(" ", "");
//   return res;
// }
// console.log(removeSpace(str));

//5-masala
// let str = "hello";
// function reverseElment(arg) {
//   let res = arg.split("").reverse();
//   return res.join("");
// }
// console.log(reverseElment(str));

//6-masala
// let str = "salom";
// function countSymbol(arg) {
//   return arg.length;
// }
// console.log(countSymbol(str));

//7-masala
// let str = "salom ";
// function repeatThreeTimes(arg) {
//   return arg.repeat(3);
// }
// console.log(repeatThreeTimes(str));

//8-masala
// let str = "1sal3o2m";
// function getNumber(arg) {
//   return arg.replace(/\D/g, "");
// }
// console.log(getNumber(str));

//9-masala
// let str = "salom bolalar";
// function firstWord(arg) {
//   return arg.split(" ")[0];
// }
// console.log(firstWord(str));

//10-masala
// let str = "js dasturlash tili";
// function findElement(arg) {
//   let res = arg.includes("js");
//   return res;
// }
// console.log(findElement(str));

//Massivlarga oid masalalar
//1-masala
// let arr = [1, 2, 3, 6, 9, 5];
// function maxElement(arg) {
//   let max = arg[0];
//   for (const element of arg) {
//     if (element > max) {
//       max = element;
//     }
//   }
//   return max;
// }
// console.log(maxElement(arr));

//2-masala
// let arr = [2, 6, 5, 9, 7, 8];
// function evenElement(arg) {
//   let res = [];
//   for (const element of arg) {
//     if (element % 2 == 0) {
//       res.push(element);
//     }
//   }
//   return res;
// }
// console.log(evenElement(arr));

//3-masala
// let arr = [2, 1, 8, 3, 6, 9, 7];
// function sumElements(arg) {
//   let sum = 0;
//   arg.forEach((element) => {
//     sum += element;
//   });
//   return sum;
// }
// console.log(sumElements(arr));

//4-masala
// let arr = [1, 2, 3, 6, 9];
// function twoEqual(arg) {
//   let res = arg.map((element) => {
//     return element * 2;
//   });
//   return res;
// }
// console.log(twoEqual(arr));

//5-masala
// let arr = [2, 3, -6, 9, 5, -8, -1];
// function removeNegative(arg) {
//   let res = arg.filter((element) => {
//     return element > 0;
//   });
//   return res;
// }
// console.log(removeNegative(arr));

//6-masala
// let arr = [1, 3, 6, 3, 6, 8, 5, 7];
// function uniqueElement(arg) {
//   let unique = [];
//   for (const element of arg) {
//     if (arg.indexOf(element) === arg.lastIndexOf(element)) {
//       unique.push(element);
//     }
//   }
//   return unique;
// }
// console.log(uniqueElement(arr));

//7-masala
// let arr1 = [1, 2, 3, 6, 9];
// let arr2 = [9, 3, 6, 7, 8];
// function concatElement(arg1, arg2) {
//   let res = arg1.concat(arg2);
//   return res;
// }
// console.log(concatElement(arr1, arr2));

//8-masala
// let arr = [1, 2, 6, 8, 9];
// function reverseArray(arg) {
//   arg.reverse(function (a, b) {
//     return a - b;
//   });
//   return arg;
// }
// console.log(reverseArray(arr));

//9-masala
// let arr = [9, 5, 7, 8, 2, 3];
// function oddIndexElement(arg) {
//   let res = arg.filter(function (value, index) {
//     return index % 2 == 1;
//   });
//   return res;
// }
// console.log(oddIndexElement(arr));

//10-masala
// let arr = [22, 85, 2, 3, 6, 8, 10, 90];
// function averageElement(arg) {
//   if (arg.length === 0) {
//     return 0;
//   }

//   let sum = 0;
//   for (let i = 0; i < arg.length; i++) {
//     sum += arg[i];
//   }

//   return sum / arg.length;
// }
// console.log(averageElement(arr));

//Obyekt va Massivlarga oid masalalar
//1-masala
// const people = [
//   { name: "Ali", age: 25 },
//   { name: "Vali", age: 30 },
//   { name: "Hasan", age: 28 },
// ];
// function getOldestPersonName(people) {
//   let oldMen = people[0];
//   for (let i = 0; i < people.length; i++) {
//     if (people[i].age > oldMen.age) {
//       oldMen = people[i];
//     }
//   }
//   return oldMen.name;
// }
// console.log(getOldestPersonName(people));

//2-masala
// const people = [
//   { name: "Ali", age: 25 },
//   { name: "Vali", age: 30 },
//   { name: "Hasan", age: 28 },
// ];
// function getPeopleOlderThanAge(people, age) {
//   let olderPeople = people.filter((element) => element.age > age);
//   return olderPeople;
// }
// console.log(getPeopleOlderThanAge(people, 27));

//3-masala
// const people = [
//   { name: "Ali", age: 25 },
//   { name: "Vali", age: 30 },
//   { name: "Hasan", age: 28 },
// ];
// function getNames(people) {
//   let res = people.map((element) => {
//     return element.name;
//   });
//   return res.join(" ");
// }
// console.log(getNames(people));

//4-masala
// const people = [
//   { name: "Ali", age: 25 },
//   { name: "Vali", age: 30 },
//   { name: "Hasan", age: 28 },
// ];
// function getTotalAge(people) {
//   let sum = 0;
//   people.forEach((element) => {
//     sum += element.age;
//   });
//   return sum;
// }
// console.log(getTotalAge(people));

//5-masala
// const people = [
//   { name: "Ali", age: 25 },
//   { name: "Vali", age: 30 },
//   { name: "Hasan", age: 28 },
// ];
// function getPersonByName(people) {
//   let res = people.filter((element) => {
//     return element.name;
//   });
//   return res;
// }
// console.log(getPersonByName(people));

//6-masala
// const people = [
//   { name: "Ali", age: 25 },
//   { name: "Vali", age: 30 },
//   { name: "Hasan", age: 28 },
// ];
// function getAverageAge(people) {
//   let Age = 0;
//   for (const element of people) {
//     Age += element.age;
//   }
//   return Age / people.age;
// }
// console.log(getAverageAge(people));

//7-masala
// const people = [
//   { name: "Ali", age: 25, gender: "male" },
//   { name: "Vali", age: 30, gender: "male" },
//   { name: "Hasan", age: 28, gender: "male" },
//   { name: "Salima", age: 22, gender: "female" },
// ];
// function getFemales(people) {
//   let res = people.filter((element) => {
//     return element.gender == "female";
//   });
//   return res;
// }
// console.log(getFemales(people));

//8-masala
// const people = [
//   { name: "Ali", age: 25 },
//   { name: "Vali", age: 30 },
//   { name: "Hasan", age: 28 },
// ];
// function incrementAges(people) {
//   let res = people.map((element) => {
//     return element.age + 1;
//   });
//   return res;
// }
// console.log(incrementAges(people));
