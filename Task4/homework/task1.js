var states = ['Utah', 'California', 'New York', 'Colorado', 'Texas', 'Arizona']

Array.prototype.shuffle = function(array){
    var currentIndex = array.length,  randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
};

console.log(states.shuffle(states));