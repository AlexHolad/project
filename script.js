"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMouvieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false 
};

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

if (personalMouvieDB.count < 10) {
    console.log('Просмотрено слишком мало фильмов');
} else if (personalMouvieDB.count >= 10 && personalMouvieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMouvieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}
console.log(personalMouvieDB);