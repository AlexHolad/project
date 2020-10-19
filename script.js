"use strict";

const arr = [1, 10, 8, 4, 5];
arr.sort(compareNum);
console.log(arr);

function compareNum (a, b) {
    return a - b;
}
// arr[99] = 0;
// console.log(arr.length); // кол-во элементов массива + 1
// console.log(arr);

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`)
}); 

//arr.pop();  // - удаляет последний элемент массива


// arr.push(10); // - добавляет в конец массива 10
// console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}


const str = prompt("", "");  // - вписать свойство в строку
const products = str.split(", "); // - строку разбить в массив
products.sort(); // - отсортировать в алфавитном порядке как строки
console.log(products.join(';')); // - объединить в строку