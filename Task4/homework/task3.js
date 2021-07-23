var Human = function(name, lastName, location, phoneNumber) {
    this.name = name;
    this.lastName = lastName;
    this.location = location;
    this.phoneNumber = phoneNumber;

    this.eat = function() {
        console.log(this.name, this.lastName, 'поел суши с пиццой.')
    };

    this.sleep = function() {
        console.log(this.name, this.lastName, 'лёг спать.')
    };

    this.friendCall = function(friend_number, friend_name) {
        console.log(`${this.name} решил позвонить своему другу по имени ${friend_name} на телефон ${friend_number}, 
        тому пришёл звонок от ${this.name} по номеру ${this.phoneNumber}`)
    };
};

var CurrentEmployee = function(position, startDate, baseSalary, salaryCurrency) {
    this.position = position;
    this.startDate = startDate;
    this.baseSalary = baseSalary;
    this.salaryCurrency = salaryCurrency;

    this.writeReport = function() {
        console.log(`Будучи на позиции ${this.position} ${this.name} написал доклад.`)
    };

    this.organizeMeeting = function() {
        console.log(this.name, 'начал митинг в своём отделе.')
    };
};

CurrentEmployee.prototype = new Human('Johny', 'Liebnitz', 'Utah', '+3806823500');

johny = new CurrentEmployee('Senior Ruby on rails developer', '22.03.2021', '8000', '₴');

johny.eat();
johny.friendCall('+3805235614', 'Thomas');
johny.sleep();
johny.writeReport();
johny.organizeMeeting();

RetiredEmployee = function(endDate) {
    this.endDate = endDate;

    this.retire = function() {
        console.log(`${this.name} решил покинуть свою компанию ${this.endDate}`)
    }

    this.vacation = function() {
        console.log(this.name, 'решил отдохнуть и уехал отдыхать на Гавайи.')
    }
};

RetiredEmployee.prototype = new CurrentEmployee();

johny = new RetiredEmployee('12.01.2025');

johny.retire();
johny.sleep();
johny.vacation();