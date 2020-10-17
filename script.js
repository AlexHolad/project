"use strict";

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

// const personalMouvieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false 
// };

// for (let i = 0; i < +personalMouvieDB.count; i++) {
//     const   a = prompt('Один из последних просмотренных фильмов?',''),
//             b = prompt('На сколько оцените его?','');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50  ) {
//         personalMouvieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
     
//}


// while (personalMouvieDB.count > 0 && personalMouvieDB.count != '') {
//     const   a = prompt('Один из последних просмотренных фильмов?',''),
//             b = prompt('На сколько оцените его?','');
//     console.log();
//     personalMouvieDB.count--;
//      if (a != null && b != null && a != '' && b != '' && a.length < 50  ) {
//         personalMouvieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         personalMouvieDB.count++;
//     }
// }


// if (personalMouvieDB.count < 10) {
//     console.log('Просмотрено слишком мало фильмов');
// } else if (personalMouvieDB.count >= 10 && personalMouvieDB.count < 30) {
//     console.log('Вы классический зритель');
// } else if (personalMouvieDB.count >= 30) {
//     console.log('Вы киноман');
// } else {
//     console.log('Произошла ошибка');
// }
// console.log(personalMouvieDB);

// let logg = ("Hello World!");

// console.log(logg.indexOf('rld')); // Подстрочный поиск буквы, слова

// console.log(logg.slice(6, 11));   // Выдает часть строки с 6 по 10 символ 

// console.log(logg.substring(6, 11)); // Выдает часть строки с 6 по 10 символ, не поддерживает отрицательные

// console.log(logg.substr(6, 11)); // Выдает часть строки с 6, второй аргумент = длинна вырезаемой части

// let num = 12.3;

// console.log(Math.round(num)); // Округляет число

// const test = '12.3px';

// console.log(parseInt(test));  // Меняет систему исчислиния
// console.log(parseFloat(test)); // Достает цифры без округления

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

    while (numberOfFilms == '' ||  numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?',''); 
    }
    
}

start();

const personalMouvieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false 
};

function rememberMyFilms () {
    for (let i = 0; i < +personalMouvieDB.count; i++) {
        const   a = prompt('Один из последних просмотренных фильмов?',''),
                b = prompt('На сколько оцените его?','');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50  ) {
            personalMouvieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }

    }

}
     
//rememberMyFilms ();

function detectPersonalLevel () {
    if (personalMouvieDB.count < 10) {
        console.log('Просмотрено слишком мало фильмов');
    } else if (personalMouvieDB.count >= 10 && personalMouvieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMouvieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel ();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMouvieDB);
    } else {
        alert("Личная информация!");
    }
}

showMyDB (personalMouvieDB.privat);


function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        personalMouvieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером:${i}`);
    }       
}

writeYourGenres ();

