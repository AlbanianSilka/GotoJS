const MoneyBox = function(coins){
    this.coins = coins;
};

function addCoin(box) {
    box.coins = box.coins + 1
    console.log(`Вы положили одну монетку в копилку, теперь у вас ${box.coins} монеток`)
};

const Box1 = new MoneyBox(0);
const Box2 = new MoneyBox(30);

addCoin(Box1);
addCoin(Box1);
addCoin(Box2);