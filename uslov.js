let num = 50;

if (num < 49){
    console.log("Неверно!");
}else if(num > 100){
    console.log("Многовато!");
}else{
    console.log("Это так!");
}

(num == 50 ) ? console.log("Это так!") : console.log("Неверно!");

switch (num){
    case num < 49: 
        console.log("Неверно!");
        break;
    case num > 100:
        console.log("Многовато!");
        break;
    case num > 80:
        console.log("Еще Многовато!");
        break;
    case 50:
        console.log("Это так!");
        break;
    default:
        console.log("Что-то не так!");
        break;               
}