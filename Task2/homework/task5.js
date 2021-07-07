const employees = [
    {
     firstName: 'Lindon',
     lastName: 'Johnson',
     age: 54,
     salary: 7000,
     position: 'Architect'
    },
    {
     firstName: 'John',
     lastName: 'Kennedy',
     age: 31,
     salary: 4400,
     position: 'Software engineer',
    },
    {
     firstName: 'Ronald',
     lastName: 'Reagan',
     age: 20,
     salary: 10000,
     position: 'Manager'
    }
]

function count_chars() {
    employees_salary = employees.map(function (employee){
        return employee.salary
    });

    var total = 0;
    for(var i = 0; i < employees_salary.length; i++) {
         total += employees_salary[i];
        }
        var avg = total / employees_salary.length;

    console.log('Средняя зарплата всех сотрудников -', Math.round(avg * 100) / 100, 'гривен');

    const sortCallback = function(a, b) {
        if (a.salary < b.salary) {
            return -1
        } else if (a.salary > b.salary) {
            return 1
        } else {
            return 0
        }
    };

    const sortBySalary = employees.sort(sortCallback);

    console.log('Сотрудники по зарплатам от меньшей к большей:', sortBySalary);

    const filterCallback = function (item) {
        return (item.age > 25, item.salary < 5000)
    };

    const filteredList = employees.filter(filterCallback);

    console.log('Сотрудник, чей возраст больше 25 и зарплата меньше 5000 гривен', filteredList)
}

count_chars();