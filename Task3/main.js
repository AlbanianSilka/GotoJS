const dog = {
    name: 'Alex',
    age: 13
};

const cat = {
    name: 'Bob',
    age: 5
};

// const greet = function () {
//     console.log(`Hello, I am ${this.name} and I am a ${this.age} years old`)
// };

// cat.greet = greet;

// cat.greet();

// greet.apply(cat);
// greet.call(cat);

// const bindGreet = greet.bind(cat);

// Вне зависимости от того, что будет прописано в скобках - всегда будут вызываться свойства cat
// bindGreet();

const Animal = function(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
    this.greet = () => {
        console.log(`Hello, I am ${this.name} and I am a ${this.age} years old`)
    }

    // в случае, если прописать в конце return Animal, то это просто сделает наш Animal пустым
}

// new для конструктора обязателен
const Alex = new Animal('Alex', 10, 'dog');
const John = new Animal('John', 2, 'Lizard')
// console.log(Alex);
// console.log(John);

John.greet();