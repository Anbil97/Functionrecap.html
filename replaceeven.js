function replaceEvenIndicesWithEven(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        arr[i] = 'even';
      }
    }
    return arr;
  }
  
  const originalArray = [1, 2, 3, 4, 5, 6];
  const modifiedArray = replaceEvenIndicesWithEven(originalArray);
  
  console.log(modifiedArray); // Output: ['even', 2, 'even', 4, 'even', 6]
  