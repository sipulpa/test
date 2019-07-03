'use strict';

let money = +prompt("Ваш бюджет на месяц?",0);
let time = prompt("Введите дату в формате YYYY-MM-DD","YYYY-MM-DD");

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};


for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце","");
    let b = +prompt("Во сколько обойдется?",0);
    
    if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    }else{
    i = i-1;
    }
    
};

// let i = 0;
// do {

//     let a = prompt("Введите обязательную статью расходов в этом месяце","");
//     let b = +prompt("Во сколько обойдется?",0);
    
//     if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
//         && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//         ++i;
//     }else{
//     i = i;
//     }
// }
// while (i < 2);

// let i = 0;
// while (i < 2) {

//     let a = prompt("Введите обязательную статью расходов в этом месяце","");
//     let b = +prompt("Во сколько обойдется?",0);
    
//     if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
//         && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//         i++;
//     }else{
//     i = i;
//     }

// };

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " +appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
}else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log("Средний уровень достатка");
}else if (appData.moneyPerDay > 2000){
    console.log("Высокий уровень достатка");
}else{
    console.log("Ошибка");
};


/* ответы на задание1
1. существует 7 типов данных : строка, число, символ, булевые, объект, инфините, андефине
2. коммандой console.log("тут что нужно вывести")
3. || - оператор ИЛИ возвращает тру ,если хотя бы 1 верно, && - оператор И возвращает тру, если все верны.
*/

