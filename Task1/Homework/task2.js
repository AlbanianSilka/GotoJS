// Подсчёт букв в слове 'hello' (задание №1)
my_string = "hello"
console.log("В вашем слове", my_string.length, "букв");

// ---------------
// Функция для реверса слова hello
function reverse_word(str) {
    var split_word = str.split("");
    var reverse_str = split_word.reverse();
    var join_str = reverse_str.join("");
    console.log("Ваше ревёрснутое слово -", join_str)
}
reverse_word("HELLO");

