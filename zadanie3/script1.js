'use strict';

let money, time;

function start(){
    
    money = +prompt("Ваш бюджет на месяц?",0);
    time = prompt("Введите дату в формате YYYY-MM-DD","YYYY-MM-DD");

    while(isNaN(money) || money=="" || money ==null){
        money = +prompt("Ваш бюджет на месяц?",0);
    }
}

start();

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses(){
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
}
}
chooseExpenses();


function detectDayBudget(){
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    return alert("Ежедневный бюджет: " +appData.moneyPerDay);
}
detectDayBudget();




function detectLevel(){

if (appData.moneyPerDay < 100) {
    return "Минимальный уровень достатка";
}else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    return "Средний уровень достатка";
}else if (appData.moneyPerDay > 2000){
    return "Высокий уровень достатка";
}else{
    return "Ошибка";
}

}

console.log(detectLevel());

function chooseOptExpenses(){

    for (let i = 0; i < 3; i++) {
        let a = prompt("Статья необязательных расходов?","");
        let b = +prompt("Во сколько обойдется?",0);
        
        if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.optionalExpenses[a] = b;
        }else{
        i = i-1;
        }
        
    };

}

function checkFreeMoney(){
    let sav = confirm("У вас есть накопления?");
    appData.savings = sav;
}
checkFreeMoney();

function checkSavings(){

    if (appData.savings == true){
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " +appData.monthIncome);
    }
}
checkSavings();
