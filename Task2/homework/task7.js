Object.create({})

const human = Object.create({}, {
});

human.name = 'Alex';
human.last_name = 'Smith';
console.log(human)

human.name = 'Bob';
console.log(human)

delete (human.name)
delete (human.last_name)
console.log(human)