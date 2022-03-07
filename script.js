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

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function(){
//         console.log("Test");
//     }
// };
// options.makeTest();

// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;

// console.log(options);


// ------------------ Перебор---------------------


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


// ---------------------------------------------Массивы и Псевдомассивы----------------------------------------


// const arr = [1,22,13,6,18];


// arr.forEach(function(item, i, arr){
//     ++i;
//     console.log(`под номером ${i++}: находится ${item} внутри массива с данными: ${arr}`);
// });


// arr.sort(compareNum);

// console.log(arr);

// function compareNum (a,b){
//     return a-b;
// }

// arr[99]=0;
// console.log(arr.length);
// console.log(arr);

// 1.Цикл

// for (let i=0; i<arr.length;i++){
//     console.log(arr[i]);
// }

// 2. Перебор
// for (let value of arr){
//     console.log(value);
// }

//3.forEach 
// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });


// arr.pop();
// arr.push(10);

// console.log(arr);



// const str = prompt('', '');
// const prod = str.split(', ');
// prod.sort();
// console.log(prod.join(' | '));


// -------------------------------------------Передача по ссылке или по значению,Spread оператор-----------------------------


// let a = 5, 
//     b = a;
// b = b + 5;

// console.log(b);
// console.log(a);



// const obj = {
//     a:5,
//     b:1
// };

// const copy = obj; // Скопировали Ссылку  на этот объект
// copy.a = 10;

// console.log(copy);
// console.log(obj);

// ----------------поверхностное Копирование объекта-----------------

// function copy(mainObj){
//     let objCopy ={};

//     let key;
//     for (key in mainObj){
//         objCopy[key]= mainObj[key];
//     }return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y:4
//     }
// };

// const newNumbers = copy(numbers);
// newNumbers.a =10;
 
// console.log(numbers);
// console.log(newNumbers);

// -----------------------------------object assign соединение объектов----------


// const add ={
//     d: 17,
//     e:20
// };

// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add);
// console.log(clone);


// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1]= 'asdfdfsdf';
// console.log(newArray);
// console.log(oldArray);

// const video= ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

//       console.log(internet);

// ----------------------spread операторы-------------
// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ['a', 'b'];

// const newArray = [...array];

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};

// console.log(q);

// -----------------------------------------Практика ч4. Используем объекты---------------------------------


// const personalMovieDB = {
//     count: 0,
//     movies : {},
//     actor: {},
//     genres: [],
//     privat : false,
//     start: function() {
//         personalMovieDB.count = +prompt("сколько фильмов вы уже посмотрели?", '');
   
//        while(personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
//         personalMovieDB.count = +prompt("сколько фильмов вы уже посмотрели?", '');
//        }
//    },
//     rememberMyFilms: function(){
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
// },

//     detectPersonalLevel: function(){
//     if(personalMovieDB.count< 10){
//         console.log("Просмотренно довольно мало фильмов");
//     }else if(personalMovieDB.count >=10 && personalMovieDB.count <30){
//         console.log("Вы классический зритель");
//     }else if(personalMovieDB.count >= 30){
//         console.log("Вы киноман");
//     }else {
//         console.log("Произошла ошибка");
//     }
// },

//     showMyDB: function (hidden){
//     if(!hidden){
//         console.log(personalMovieDB);
//     }
// },

//     writeYourGenres: function(){
//     for(let i = 1; i <=2; i++){

//         let genres =  prompt("Введите ваши любимые жанры через запятую").toLowerCase();

//     if (genres == '' || genres == null){
//             console.log("Вы ввели некорректные данные");
//             i--;
//         }else {
//             personalMovieDB.genres = genres.split(', ');
//             personalMovieDB.genres.sort();
//         }
//     }
//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр № ${i + 1} - это ${item}`);
//         });
// },

//     toggleVisibleMyDB: function(){
//                   if(personalMovieDB.privat){
//                     personalMovieDB.privat = false;
//         }else{
//             personalMovieDB.privat = true;
//         }
// }
// };
// -----------------------------------------Динамическая типизация----------------------------------------------

// To String
// 1)
// console.log(typeof(String(null)));
// console.log(typeof(String(4)));

// 2) конкотонация

// console.log(typeof(5 + ""));

// const num = 5;

// console.log("https://vk.com/catalog/" + num);

// const fontSize = 26 + 'px';

// To Number 
// 1)
// console.log(typeof(Number('4')));

// // 2) унарный плюс

// console.log(typeof(+'5'));

// // 3)
// console.log(typeof(parseInt('15px', 10)));


// let answ = +prompt('Hello World!', '');

//  To boolean

// 0, '', null, undefined, Nan;  // false  
// 1)
// let swither = null;

// if (swither){
//     console.log('Working...');
// }

// swither = 1;


// if (swither){
//     console.log('Working...');
// }

// // 2)  почти никогда

// console.log(typeof(Boolean('4')));

// // 3)

// console.log(typeof(!!'4'));



// console.log([] +1 + 2);

// console.log(2 && 1 && null && 0 && undefined);  // И запинается на false, ИЛИ запинается на true

// console.log(!!(1 && 2 ) == (1 && 2));


// --------------------------------------------------Получение элементов со страницы----------------------------------------------









 
































































































