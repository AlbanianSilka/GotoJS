var MotorShip = function(type, engine_power, ship_material, color) {
    type = 'Motor ship';
    this.engine_power = engine_power;
    this.ship_material = ship_material;
    this.color = color;
};

var SailingShip = function(type, masts_number, sails_number) {
    type = 'Sail ship';
    this.masts_number = masts_number;
    this.sails_number = sails_number;
};

var Shipyard = function(shipyard_country) {  
    this.shipyard_country = shipyard_country;
};

Shipyard.prototype = {

    buildMotorShip: function(engine_power, ship_material, color) {
        shipyard_motor_ship = new MotorShip(engine_power, ship_material, color);
        console.log(`Моторный корабль был построен в ${this.shipyard_country}, его характеристики -`, shipyard_motor_ship)
    },

    buildSailingShip: function(masts_number, sails_number) {
        shipyard_sail_ship = new SailingShip(masts_number, sails_number)
        console.log(`Моторный корабль был построен в ${this.shipyard_country}, его характеристики -`, shipyard_sail_ship)
    },

    repair_sail_ship: function(your_ship) {
        if (your_ship.type = 'Sail ship') {
            console.log(`Вы починили парусный корабль:`)
            console.log(your_ship)
        }
        else {
            console.log('Такой корабль можно чинить только в порту Лос-Анджелеса!')
        };
    }
};

brugge_shipyard = new Shipyard('Belgium');
brugge_shipyard.buildMotorShip(100, 'steel', 'grey');
brugge_shipyard.buildSailingShip(2, 4);
brugge_shipyard.repair_sail_ship(shipyard_sail_ship);

Shipyard.prototype = {
    repaint_ship: function(your_ship, new_color) {
        your_ship.color = new_color;
        console.log('Вы перекрасили свой корабль, теперь его цвет -', new_color);
        console.log(your_ship);
    },

    repair_ship: function(your_ship) {
        if (your_ship.type = 'Motor ship') {
            console.log(`Вы починили моторный корабль:`)
            console.log(your_ship)
        }
        else {
            console.log('Такой корабль можно чинить только в порту Брюгге')
        };
    }
};

LAshipayrd = new Shipyard('USA');
LAshipayrd.repaint_ship(shipyard_motor_ship, 'green');
LAshipayrd.repair_ship(shipyard_motor_ship);