str = 'smth';

function first_task(my_string) {
    let str_array = my_string.split();
    do {
        console.log(str_array, str_array.length, 'string is lower case');
        break
    } while (my_string == my_string.toLowerCase());
}

first_task(str);