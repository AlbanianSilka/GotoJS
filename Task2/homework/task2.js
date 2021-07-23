function compare_arrays(a, b) {
    const equals = (a, b) =>
    a.length === b.length &&
    a.every((v, i) => v === b[i]);
  
  console.log(equals(a, b))
}

array1 = [1, 2, 3];
array2 = [1, 2, 3];
array3 = [4, 5, 6];

compare_arrays(array1, array2); // true
compare_arrays(array2, array3); // false