Object.create({})

const human = Object.create({}, {
    name: {
        value: 'John',
        // writable позволяет позже изменять значение параметра, например - из Джона в Томаса
        writable: true,
        // configurable позволяет создавать разные действия с параметром, например - удалять их
        configurable: true
    }
})

human.name = 'Thomas'

console.log(human.name)

// делается благодаря configurable, вывод в консоли - undefined
delete human.name 
console.log(human.name)

const clock = {
    getCurrentTime: function () {
        return new Date()
    }
};

console.log(clock.getCurrentTime())