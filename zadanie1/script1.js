'use strict';

let money,
    time;

money = +prompt("Ваш бюджет на месяц?",0);
time = prompt("Введите дату в формате YYYY-MM-DD","YYYY-MM-DD");

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

var state = prompt("Введите обязательную статью расходов в этом месяце","");
var cena = +prompt("Во сколько обойдется?",0);

//appData.expenses = state;
appData.expenses.state = cena;

alert('Дневной бюджет = ' +appData.expenses.state);

console.log(appData.budget);
console.log(appData.expenses);




/* ответы на задание1
1. существует 7 типов данных : строка, число, символ, булевые, объект, инфините, андефине
2. коммандой console.log("тут что нужно вывести")
3. || - оператор ИЛИ возвращает тру ,если хотя бы 1 верно, && - оператор И возвращает тру, если все верны.
*/

