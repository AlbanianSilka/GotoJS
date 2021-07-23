var Rectangle = function(a_side, b_side, c_side, d_side) {  
    this.a_side = a_side;
    this.b_side = b_side;
    this.c_side = c_side;
    this.d_side = d_side;

    this.countPerimetr = function() {
        console.log('Периметр вашей фигуры - ', Number(a_side) + Number(b_side) + Number(c_side) + Number(d_side))
    }
};

Rectangle.prototype = {
    countRecArea: function() {
        console.log('Площадь вашего прямоугольника - ', Number(this.a_side) * Number(this.c_side));
    }
};

const my_rectangle = new Rectangle(5, 5, 10, 10);
my_rectangle.countPerimetr();
my_rectangle.countRecArea();

Square = function() {
    this.countSquareArea = function(a_side) {
        console.log('Площадь вашего квадртара - ', Number(a_side) * Number(a_side))
    }
};

Square.prototype = new Rectangle(10, 10, 10, 10);

my_square = new Square();
my_square.countPerimetr();
my_square.countSquareArea(10);