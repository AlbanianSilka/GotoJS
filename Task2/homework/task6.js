my_array = ['George Washington', 'John Kennedy', 'Ronald Reagan', 'Harry Truman'];

function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

console.log(shuffle(my_array));