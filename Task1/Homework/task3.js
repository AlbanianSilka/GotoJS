// Реализуем цикл перебирающий числа от одного до 20 и выводящий каждое четное значение на экран

// Реализация через for
function count1() {
    for(let i = 1; i < 22; i++){
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}
console.log('Первая функция')
count1();

// Реализация того же самого через do... while...
function count2() {
    let i = 1;
    do {
        i = i + 1
        if (i % 2 == 0) {
            console.log(i);
        }
    } while (i < 20)
}
console.log('Вторая функция')
count2();

// Реализация того же самого через while...
function count3() {
    let i = 1
    while (i < 20) {
        i++
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}
console.log('Третья функция')
count3();