function cache() {
    return function(x, y) {
        console.log(x**y)
    }
};

const calculate = cache();

calculate(2, 2);
calculate(3, 2);
calculate(4, 3);