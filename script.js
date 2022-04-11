"use strict";

// -----------------------------------простое общение с пользователем--------------------------------------------------

// const result = confirm('aree you here?');
// console.log(result);

// const answer = +prompt("Вам есть 18?",18);
// console.log(answer + 5);

// const answers = [];

// answers[0]= prompt('как ваше имя?', '');
// answers[1]= prompt('как ваша фамилия?', '');
// answers[2]= prompt('сколько вам лет?', '');

// document.write(answers);



// -------------------------Практика ч1.---------------------

// const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", '');

// const personalMovieDB = {
//       count: numberOfFilms,
//       movies: {},
//       actors: {},
//       genres: [],
//       privat: false
// };

// for(let i =0; i<2;i++){
// const a = prompt("Один из последних просмотренных фильмов?", ''),
//       b = prompt('На сколько оцените его?', '');

//       personalMovieDB.movies[a]=b;
// }

// console.log(personalMovieDB.movies);
// console.log(personalMovieDB.count);

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

// const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", '');

// const personalMovieDB = {
//       count: numberOfFilms,
//       movies: {},
//       actors: {},
//       genres: [],
//       privat: false
// };

// for(let i =0; i<2;i++){
// const a = prompt("Один из последних просмотренных фильмов?", ''),
//       b = prompt('На сколько оцените его?', '');

//       if(a, b != '' && a,b != null && a.length <50 ){
//             personalMovieDB.movies[a]=b;
//             console.log('Done');
//       }else {
//             console.log('Error');
//             i--;
//       }
// }

// console.log(personalMovieDB);

// if(personalMovieDB.count<10){
//       alert("Просмотрено довольно мало фильмов");
// } else if(personalMovieDB.count<30 && personalMovieDB.count>=10){
//       alert("Вы классический зритель");
// }else if(personalMovieDB.count >30){
//       alert('Вы киноман');
// }else{
//       alert('Произошла ошибка');
// }




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

// ----------Стрелочная функция--------------

// const calc = (a, b) => a + b;


// function min(a, b){
//     if (a < b){
//         return a;
//     }else {
//         return b;
//     }
// }

// min(5, 4);


// --------------------------------------------Методы и свойства строк и чисел------------------------------------------

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
//       numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", '');

//       while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//             numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", '');
//       }
// }
// start();

// const personalMovieDB = {
//       count: numberOfFilms,
//       movies: {},
//       actors: {},
//       genres: [],
//       privat: false
// };

// function rememberMyFilms(){
//       for(let i =0; i<2;i++){
//             const a = prompt("Один из последних просмотренных фильмов?", ''),
//                   b = prompt('На сколько оцените его?', '');

//                   if(a != '' && b != '' && a != null && b != null && a.length <50 ){
//                         personalMovieDB.movies[a]=b;
//                         console.log('Done');
//                   }else {
//                         console.log('Error');
//                         i--;
//                   }
//             }
// }
// rememberMyFilms();

// function detectPersonalLevel(){
//       if(personalMovieDB.count<10){
//             alert("Просмотрено довольно мало фильмов");
//       } else if(personalMovieDB.count<30 && personalMovieDB.count>=10){
//             alert("Вы классический зритель");
//       }else if(personalMovieDB.count >30){
//             alert('Вы киноман');
//       }else{
//             alert('Произошла ошибка');
//       }
// }
// detectPersonalLevel();

// console.log(personalMovieDB);

// function showMyDB(hidden){
//       if(!hidden){
//             console.log(personalMovieDB);
//       }
// }
// showMyDB(personalMovieDB.privat);

// function writeYourGenres(){
//       for(let i=1; i<=3; i++){
//             personalMovieDB.genres[i - 1] =prompt(`Ваш любимый жанр под номером ${i}`);
//       }
// }
// writeYourGenres()
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

// function done(){
//     console.log("Я прошёл этот урок!");
// }

// learnJS("JavaScript", done);


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

// ----------Удалить свойства из объекта---------------
// delete options.name;

// console.log(options);


// ------------------ Перебор---------------------

// for (let key in options){
//     if(typeof(options[key]) == 'object'){
//         for(let i in options[key]){
//             console.log(`свойства ${i} имеет значение ${options[key][i]}`);
//         }
//     }else {
//         console.log(`свойства ${key} имеет значение ${options[key]}`);
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
//     let objCopy = {};

//     let key;
//     for (key in mainObj){
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a:2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

//     const newNumbers = copy(numbers);

//     newNumbers.a = 10;

//     console.log(newNumbers);
//     console.log(numbers);

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

// ----------------------spread операторы-------------

// const video= ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

//       console.log(internet);

// -----
// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// ------поверхностная копия объекта------

// const array = ['a', 'b'];

// const newArray = [...array];

// --------
// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};

// console.log(q);

// ------------------------------------------ООП------------------------------

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function(){
//         console.log('hello');
//     }
// };
// //  создали объект john который будет прототипно наследоваться от soldier:
// const john = Object.create(soldier);

// const john = {
//     health: 200
// };

//  установили прототип для john от солдата

// Object.setPrototypeOf(john, soldier);

// console.log(john.armor);

// john.sayHello();

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

// Что-то превратить в строку (To String)
// Вариант №1 (самый старый и редко используемый)

// console.log(typeof(String(null)));   // string
// console.log(typeof(String(4)));     // string

// Вариант №2) Конкатенация(когда что-то складываем со строкой) при сложении со строкой получаем строку

// console.log(typeof(5 + "")); // string

// const num = 5;
// console.log("https://vk.com/catalog/" + num);

// const fontSize = 26 + 'px';
// --------------------------------------------
// Что-то превращается в число(To Number) 
//Вариант №1)(не используют)
// console.log(typeof(Number('4')));

// Вариант №2) унарный плюс
// console.log(typeof(+'5'));

// Вариант №3)
// console.log(typeof(parseInt('15px', 10)));

// let answ = +prompt('Hello World!', '');
// --------------------------------------------
// Превращает в булиновое значение(To boolean)

// 0, '', null, undefined, Nan;  // false  
// Вариант №1)
// let swither = null;

// if (swither){
//     console.log('Working...');
// }

// swither = 1;


// if (swither){
//     console.log('Working...');
// }

// Вариант №2)  почти никогда не используется

// console.log(typeof(Boolean('4')));

// Вариант №3)

// console.log(typeof(!!'4'));

// ---------------ЗАДАЧИ ДЛЯ СОБЕСЕДОВАНИЯ------------

// console.log([] +1 + 2);

// console.log(2 && 1 && null && 0 && undefined);  // И запинается на false, ИЛИ запинается на true

// console.log(!!(1 && 2 ) == (1 && 2));


// --------------------------------------------------Получение элементов со страницы----------------------------------------------
// Получение элементов через ID
// const box = document.getElementById('box');
// console.log(box);

// // Получение элементов через название Тега 
// const btns = document.getElementsByTagName('button');
// // получение одного элемента из HTML-коллекции
// console.log(btns[2]);

// // Получение элементов через классы
// const circles = document.getElementsByClassName('circle');
// console.log(circles);

// // // Получение элементов через селекторы 
// const hearts = document.querySelectorAll('.heart');
// console.log(hearts);

// // Используем метод forEach()
// hearts.forEach(item => {
//     console.log(item);
// });

// // Для получения первого элемента querySelector
// const oneHeart = document.querySelector('div');
// console.log(oneHeart);


// -----------------------------------------Действия с элементами на странице-----------------------------------------------

// const box = document.getElementById('box'),
//       btns = document.getElementsByTagName('button'),
//       circles = document.getElementsByClassName('circle'),
//       hearts = document.querySelectorAll('.heart'),
//       oneHeart = document.querySelectorAll('.heart');

//  обращение и изменение одного конкретного элемента
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
// btns[1].style.borderRadius = '100%';
// circles[0].style.backgroundColor = 'red';

//  назначать несколько inline стилей
// box.style.cssText = 'background-color: blue; width: 500px';

//  Над несколькими элементами произвести одни и теже действия(Цикл, for of, forEach)

// Через циклы, почти не используют
// for (let i = 0; i< hearts.length; i++){
//     hearts[i].style.backgroundColor = 'blue';
// }

// методом forEach
// hearts.forEach(item => {
//     item.style.backgroundColor = 'green';
// });

// --------Основные методы для работы с элементами на странице
// создание элементов через метод .createElement(); 
// const div = document.createElement('div');
// const text =document.createTextNode('Тут был я'); //используется крайне редко

//.classList умеет: удаление, добавление, переключение, проверка на содержание, определение количества примененных классов к элементу....
//classList.method
// добавляем стили для созданного элемента div
// div.classList.add('black');
//класс black добавлен к нашему div, но на странице его по-прежнему нет.

// ОПИСАНИЕ МЕТОДА .append .prepend//
// .prepend - добавляет элемент на страницу ПЕРЕД указанным dom-узлом.
// .append - добавляет элемент на страницу ПОСЛЕ указанного dom-узла
// схема: к-кому-обращаемся-глобально.родитель.метод(элемент);
// document.body.prepend(div); //- добавим элемент в самое начало верстки.
// document.body.apppend(div); //- добавим элемент в самый конец верстки.

// wrapper.prepend(div);

//.after
//.before
// аналог prepend\append. если нужно добавить элемент перед\после какого-то конкретного элемента внутри родителя.
// hearts[0].before(div);
// hearts[0].after(div);

// Удаление элементов на странице 
// remove
// circles[0].remove();

// один элемент заменить другим .replaceWith();
// какой элемент заменить.replaceWith(каким элементом заменить);
// hearts[1].replaceWith(circles[0]);

// раньше было так(что вставляем, куда вставляем)
// wrapper.insertBefore(div, hearts[0]);

// станет тегом
// div.innerHTML = '<h5>hello World</h5>';
// Тегом не станет
// div.textContent = '<h5>hello World</h5>';


// ------------------------------------------------------События и их обработчики-----------------------------------------------------------

// Можем назначить в HTML коде (Не используется)
// onclick ="alert('Click')"

// Свойства дом-дерево
// минус в том, что при назначении нового обработчика старый не работает
// const btn = document.querySelector('button');

// const btn = document.querySelectorAll('button'),
//     overlay = document.querySelector('.overlay');

// btn.onclick = function(){
//       alert('click');
// };

// btn.onclick = function(){
//       alert('Second click');
// };

// btn.addEventListener('mouseenter', (e)=>{
//     console.log(e);
//     console.log("Hoverr");
// });

// btn.addEventListener('click', ()=>{
//     alert('Second click');
// });

// можно получать данные с которым мы взаимодействуем добавить объект событие(event) передается как аргумент в callback функцию
// btn.addEventListener('mouseenter', (e)=>{
//     console.log(e);
//     // console.log("Hover");
// });

//  Можно добавить target чтобы обратиться напрямую к HTML коду можно изменять
// btn.addEventListener('mouseenter', (e)=>{
//     console.log(e.target);
//     e.target.remove();
//     e.target.remove();
//     console.log("Hover");
// });

// Можно удалять обработчики
// let i = 0;
// const deleteElement = (e) =>{
//     console.log(e.target);
//     i++;
//     if (i == 1){
//         btn.removeEventListener('click', deleteElement);
//     }
// };

// btn.addEventListener('click', deleteElement);

// Всплытие событий, сначала срабатывает обработчик на вложенном элементе, а потом вверх по иерархии на родителе

// const deleteElement = (e) =>{
//     console.log(e.target);
//     console.log(e.type);
// };
// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

// отмена стандартное поведение браузера

// const link = document.querySelector('a');

// link.addEventListener('click', (event)=>{
//     event.preventDefault();

//     console.log(event.target);
// });

// Навесить обработчики на несколько элементов 
// используем forEach перебор
// btn.forEach(item =>{
//     item.addEventListener('click', deleteElement);
// });

// Опции события например использовать один раз {once: true}

// btn.forEach(item => {
//     item.addEventListener('click', deleteElement, {once: true});
// });

// ------------------------------------------Навигация по DOM-элементам,data-атрибуты, преимущества for/of

// Взять элемент обратиться к родителю или к след. элементу и поменять класс
// получить body/head 
// console.log(document.body);
// console.log(document.head);

// получить всё в head
// console.log(document.documentElement);
// узлы которые являются детьми у body
// console.log(document.body.childNodes);

// элементы которые можно путешествовать по dom-дереву
// первый ребенок
// console.log(document.body.firstChild);  //тут получаем text 
// console.log(document.body.firstElementChild); //тут получаем wrapper
// последний ребенок
// console.log(document.body.lastChild);
// console.log(document.body.lastElementChild);

// от любого места на странице
// родителя 
// console.log(document.querySelector('#current').parentNode);
// console.log(document.querySelector('#current').parentElement);

// console.log(document.querySelector('#current').parentNode.parentNode);
// соседей

// детей

// data-атрибуты назначить что-то свойственное
// получить следующий за ним элемент
// console.log(document.querySelector('[data-current="3"]').nextSibling);

// получить предыдущий за ним элемент
// console.log(document.querySelector('[data-current="3"]').previousSibling);

// чтобы не наткнуться на text
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// console.log(document.querySelector('#current').parentElement);

// создание вручную for of
// перебрать все childNodes в body и избавиться от text
// continue останавливает повторение цикла и начинает заново  
// for (let node of document.body.childNodes){
//       if(node.nodeName == '#text'){
//             continue;
//       }
//       console.log(node);
// }

// ---------------------------------------37. ClassList и делегирование событий-----------------------------------------------
// ClassList - обратиться к списку классов

// const btns = document.querySelectorAll('button');

// Узнать сколько классов есть 
// console.log(btns[0].classList.length); // выдаёт 2 класса

// метод .item(здесь )
// console.log(btns[0].classList.item(0));

// добавить определенные классы
// console.log(btns[0].classList.add('red', 'qwerty'));

// удалять ненужные классы 
// console.log(btns[0].classList.remove('blue'));

// toggle - если класса нет - добавляет, если есть - убирает
// console.log(btns[0].classList.toggle('blue'));
// contains - проверяет наличие класса и возвращает boolean значение
// console.log(btns[1].classList.add('red'));

// if (btns[1].classList.contains('red')) { // если есть red, то true
//     console.log('Red'); 
// };


// btns[4].classList.toggle('blue');

// btns[0].addEventListener('click', () => {
    // if(!btns[1].classList.contains('red')){
    //     btns[1].classList.add('red');
    // }else{
    //     btns[1].classList.remove('red');
    // }
    // тоже самое
//     btns[1].classList.toggle('red');
// });

// className устарело, не надо использовать, выводит все классы в строку
// console.log(btns[0].className);

// делегирование страницы
// const wrapper = document.querySelector('.btn-block');

// wrapper.addEventListener('click', (event) =>{
    // if(event.target && event.target.tagName == 'BUTTON'){
        // console.log("Hello");
    // }
// });
// добавляем элемент динамически 
// const btn =document.createElement('button'); //
// btn.classList.add('red');
// wrapper.append(btn);



