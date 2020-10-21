"use strict";

const soldier = {
    health: 400,
    armor: 80,
    sayHello: function() {
        console.log("Hello!");

    }
};

const johny = Object.create(soldier);

// const johny = {
//     armor: 130
// };

// Object.setPrototypeOf(johny, soldier);  // передаем прототип объекту
//johny.__proto__ = soldier; // старый способ передачи прототипа объекту

johny.sayHello();




