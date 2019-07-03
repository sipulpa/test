let num = 50;

/*
//------ цикл - while
while (num < 55){
    console.log(num);
    num++;
}
*/
/*
//------ цикл - do
do {
    console.log(num);
    num++;
}
while (num < 55);
*/

//------ цикл - for
for (let i =1; i < 8; i++) {
    if(i == 6) {
        // break;  //прервет цикл когда i станет 6
        continue;  //пропустит значение итерации когда i будет 6
    }
    console.log(i);
}