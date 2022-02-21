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

// ------------------------------------------------Циклы-------------------------------------------------

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

// const numberOfFilms = prompt("сколько фильмов вы уже посмотрели?", '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies : {},
//     actor: {},
//     genres: [],
//     privat : false
// };

// for (let i =0; i <2; i++){
//     const a = prompt("Один из последних просмотренных фильмов?", ''),
//           b=  prompt("На сколько оцените его?", '');
          

//         if(a != null && b != null && a != '' && b != '' && a.length < 50 ){
//             personalMovieDB.movies[a] = b; 
//             console.log("Done !");
//         }else {
//             console.log("Error!!!");
//             i--;
//         }

//         if(personalMovieDB.count< 10){
//             console.log("Просмотренно довольно мало фильмов");
//         }else if(personalMovieDB.count >=10 && personalMovieDB.count <30){
//             console.log("Вы классический зритель");
//         }else if(personalMovieDB.count >= 30){
//             console.log("Вы киноман");
//         }else {
//             console.log("Произошла ошибка");
//         }

// }
// console.log(personalMovieDB);

// 1) написать программу которая задаёт 2 раза вопросы:
//  "Из какой вы страны?"
// "Из какого вы Города?"
// 2) значения не должны быть пустыми и отменёнными, а так же не больше 10, 
// если страна не равна "Беларусь" вывести: "Вы не из Беларуси" и задать вопрос заново
// 3) Если город = Гомель вывести "Земляк, если Город "Минск" вывести "Столичный", если что-то другое вывести: "вы из другого города"

// const numberOfCity = prompt("в скольких городах вы побывали?", '');

// const personalCitiesDB = {
//     count: numberOfCity,
//     movies : {},
//     actor: {},
//     genres: [],
//     privat : false
// };

// for (let i=0; i<2; i++){
//     const a = prompt("Из какой вы страны?", ''),
//           b = prompt("Из какого вы Города?", '');


//       if(a != null && b != null && a != '' && b != '' && a.length < 10 && b.length < 10 && a <= "Беларусь"){
//         personalCitiesDB.movies[a] = b;
//         console.log("Вы Белорус");
//         console.log("Done!");
//       }else if (a != null && b != null && a != '' && b != '' && a.length < 10 && b.length < 10 && a != "Беларусь"){
//         console.log("Вы не Белорус");
//         console.log("Error!!!");
//         i--;
//       }else{
//         console.log("Что-то не чисто"); 
//       }

      

// }
// console.log(personalCitiesDB);





// ------------------------------------------------ Функции, Стрелочные ф-ции(ES6)-----------------------------------

// let num = 20;

// function showFirstMessage(text){
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }
// showFirstMessage("Hello Worlds!");
// console.log(num);


// function calc(a,b){
//     return (a+b);
// }
// console.log(calc(5,6));
// console.log(calc(10,6));


// function ret(){
//     let num =50;
//     return num;
// }
// const anythingNum = ret();
// console.log(anythingNum);

//--------- Function expression-------------

// const logger = function(){
//     console.log("Hello");
// };

// logger();


// -----------------------Методы и свойства строк и чисел-----------------------

// const str ="test";
// const arr = [1,2,3];

// console.log(str.length);
// console.log(arr.length);

// ------------------Методы:---------------

// const str = "TEST";
// console.log(str.toLowerCase());

// const fruit = "Some fruit";
// console.log(fruit.indexOf("u"));  

// const logg ="Hello World";
// console.log(logg.slice(6));


// const num =12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));

// Свойства не вызываются, пишутся через точку .length
// Методы вызываются и пишутся с ()

// ----------------------------------------------ч3.Используем функции-------------------------------

// let numberOfFilms;

// function start(){
//      numberOfFilms = +prompt("сколько фильмов вы уже посмотрели?", '');

//     while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
//         numberOfFilms = +prompt("сколько фильмов вы уже посмотрели?", '');
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies : {},
//     actor: {},
//     genres: [],
//     privat : false
// };

// function rememberMyFilms(){
//     for (let i =0; i <2; i++){
//         const a = prompt("Один из последних просмотренных фильмов?", ''),
//               b=  prompt("На сколько оцените его?", '');
              
//             if(a != null && b != null && a != '' && b != '' && a.length < 50 ){
//                 personalMovieDB.movies[a] = b; 
//                 console.log("Done !");
//             }else {
//                 console.log("Error!!!");
//                 i--;
//             }
//     }
// }

// // rememberMyFilms();

// function detectPersonalLevel(){
//     if(personalMovieDB.count< 10){
//         console.log("Просмотренно довольно мало фильмов");
//     }else if(personalMovieDB.count >=10 && personalMovieDB.count <30){
//         console.log("Вы классический зритель");
//     }else if(personalMovieDB.count >= 30){
//         console.log("Вы киноман");
//     }else {
//         console.log("Произошла ошибка");
//     }
// }

// // detectPersonalLevel();

// function showMyDB(hidden){
//     if(!hidden){
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres(){
//     for(let i = 1; i <=3; i++){
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i} ? `);
//     }
// }
// writeYourGenres();


// ------------------------------------------Callback-Функции-----------------------------------------------


// function first(){
//     setTimeout(function(){
//         console.log(1);
//     },1000);
// }
//  function second(){
//      console.log(2);
//  }
// first();
// second();


// function learnJS(lang, Callback){
//     console.log(`Я учу: ${lang}`);
//     Callback();
// }
// learnJS("JavaScript");


// function calc(one, callback){
//     console.log(`Сначала cделай это ${one}`);
//     callback();
// }

// function two(){
//     console.log("А затем вот это");
// }

// calc("действие", two);


// -----------------------------------------Объекты, деструктуризация объектов(ES6)-------------------------------------

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log("Test");
    }
};
options.makeTest();

// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;

// console.log(options);

// for (let key in options){
//     console.log(`Свойства ${key} имеет значение ${options[key]}`);
// }
// for(let key in options){
//     if(typeof(options[key]) === 'object'){
//         for (let i in options[key]){
//             console.log(`Свойства ${i} имеет значение ${options[key][i]}`); 
//         }
//     }else{
//         console.log(`Свойства ${key} имеет значение ${options[key]}`);
//     }
// }


















































