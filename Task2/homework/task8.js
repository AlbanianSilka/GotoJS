Object.create({})

const human = Object.create({}, {
    first_name: {
        value: 'Donald',
        // writable позволяет позже изменять значение параметра, например - из Джона в Томаса
        writable: true,
        // configurable позволяет создавать разные действия с параметром, например - удалять их
        configurable: true
    },
    last_name: {
        value: 'Trump',
        writable: true,
        configurable: true
    },
    birth_year: {
        value: 1946
    }
});

human.full_name = human.first_name + ' ' + human.last_name

current_year = new Date().getFullYear();

human.age = Number(human.current_year) - Number(human.birth_year)
console.log('Имя человека -', human.full_name, 'и его возраст -', Number(current_year - human.birth_year));