"use strict";


// -------------------------Практика ч1.---------------------


// const numberOfFilms = +prompt("сколько фильмов вы уже посмотрели?", '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies : {},
//     actor: {},
//     genres: [],
//     privat : false
// };

// const a = prompt("Один из последних просмотренных фильмов?", ''),
//       b=  prompt("На сколько оцените его?", ''),
//       c= prompt("Один из последних просмотренных фильмов?", ''),
//       d = prompt("На сколько оцените его?", '');

//       personalMovieDB.movies[a] = b;   
//       personalMovieDB.movies[c] = d;


// console.log(personalMovieDB);

// -------------------------------Условия---------------------------

// if (4 == 9){
//     console.log("ok");
// } else {
//     console.log("Error");
// }



// if (num < 49){
//     console.log("Error");
// }else if (num >100){
//     console.log("Слишком много")
// }else{
//     console.log("OK");
// }

//------------------------------------ Тернарное выражение--------------------------------

// (num === 50) ? console.log ("ok!") : console.log("Error");      
 
// const num = 50;

// switch (num){
//     case 49: 
//         console.log("Неверно");
//         break;
//     case 100:
//         console.log("Неверно");
//         break;
//     case 51:
//         console.log("В точку");
//         break;
//     default:
//         console.log("Не в этот раз");
//         break
// }

// ----------------------------Циклы---------------------------

// let num = 50;

// while (num <= 55){
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while(num <= 55);

// for (let i = 1; i < 10; i++){
// if(i===6){
//     // break
//     continue
// }
//     console.log(i);
// }

// ------------------------------------------------------------- Практика ч2.-------------------------------

const numberOfFilms = prompt("сколько фильмов вы уже посмотрели?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies : {},
    actor: {},
    genres: [],
    privat : false
};

for (let i =0; i <2; i++){
    const a = prompt("Один из последних просмотренных фильмов?", ''),
          b=  prompt("На сколько оцените его?", '');
          

        if(a != null && b != null && a != '' && b != '' && a.length < 50 ){
            personalMovieDB.movies[a] = b; 
            console.log("Done !");
        }else {
            console.log("Error!!!");
            i--;
        }

<<<<<<< HEAD
        if(personalMovieDB.count< 10){
            console.log("Просмотренно довольно мало фильмов");
        }else if(personalMovieDB.count >=10 && personalMovieDB.count <30){
            console.log("Вы классический зритель");
        }else if(personalMovieDB.count >= 30){
            console.log("Вы киноман");
        }else {
            console.log("Произошла ошибка");
        }

=======
>>>>>>> 7d6a8740f19ac8549c810cdca70c01687d349edc
}
console.log(personalMovieDB);












