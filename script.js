"use strict";

let a = 5,
    b = a;

    b = b + 5;

    console.log(b, a);

let obj = {
    a : 5,
    b : 10
};

// const copy = obj; // Ссылку на объект

// copy.a = 10;

// console.log(copy, obj);


function copy(mainObj) {                   //  Создание поверхносной копии объекта
    let objCopy = {};                      //
                                           //
    let key;                               //
    for (key in mainObj) {                 //
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}


const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.c.y = 10;
console.log(newNumbers, numbers);
console.log(numbers);

// Встраивание объекта в объект, создание поверхносной копии

const add = {
    d: 17,
    e: 22
};

const clone = Object.assign({}, add);

clone.d = 20;

// console.log(add);
// console.log(clone);

const oldArray = ['a','b','c'];
const newArray = oldArray.slice();

newArray[1] = 'dfxcgvhb';
console.log(oldArray);
console.log(newArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blog = ['livejournal', 'worldpress', 'blogger'],
      internet = [...video, ...blog, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a','b'];
const newAarray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

console.log(newObj);



