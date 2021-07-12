const Calc = function() {
    cache = []

    this.operations = {
        '+': (a, b) => +a + +b,
        '-': (a, b) => a - b
    };

    this.operation = (exp) => {

        let [a, operation, b] = exp.split(' ')
        let result = this.operations[operation](a, b)

        operands = [a, b]

        cache.push({operands: operands, operation: operation})
        console.log(result)

        return result
    };

    this.addOperation = (operation, func) => {
        this.operations[operation] = func
    };

    this.history = () => {
        console.log(cache)
    };

    this.clear_history = () => {
        cache.length = 0;
        console.log(cache, 'вы успешно очистили историю ваших вычислений')
    };
    
};

const Calculator = new Calc();

Calculator.operation('2 + 2');
Calculator.operation('100 - 50');

Calculator.addOperation('/', (a, b) => a / b);
Calculator.addOperation('*', (a, b) => a * b);

Calculator.operation('10 / 5');
Calculator.operation('14 * 88');

Calculator.history();

Calculator.clear_history();

Calculator.operation('3 + 3');

Calculator.history();