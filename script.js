"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colours: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log('Test');
    }
};

options.makeTest ();

// const {border, bg} = options.colours;
// console.log(border);


// console.log(Object.keys(options).length); // Показывает количество свойств в объекте

// console.log(options.name); - показывает значение свойства

// delete options.name; - удаляет свойство в объекте

// console.log(options['colours']['border']); // выводит свойство вложенного объекта

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`); 
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
    
// }

// console.log(counter);