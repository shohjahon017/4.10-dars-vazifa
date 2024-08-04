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
