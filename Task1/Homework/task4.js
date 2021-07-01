var ronald = {
    age: 20,
    paid: true,
    blocked: false,
    name: 'Ronald Reagan',
    isAdmin: true
}
var putin = {
    age: 17,
    paid: false,
    blocked: true,
    name: 'Vladimir Putin',
    isAdmin: false
}
function check_person(person) {
    if (person.age < 18) {
        console.log('Ещё несовершеннолетний')
    }
    else{
        console.log('Уже совершеннолетний')
    }
    if (person.name == 'Vladimir Putin') {
        console.log('Имя содержит недопустимые слова')
    }
    if (person.paid == true){
        console.log('Успешно оплачено')
    }
    else{
        console.log('Не оплачено')
    }
    if (person.blocked == true) {
        console.log('Юзер в ЧС')
    }
    if (person.isAdmin == true ) {
        console.log('Юзер - админ')
    }
    else{
        console.log('Не админ')
    }
}
check_person(ronald);
check_person(putin);