const nestedArray = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9]
  ];
  
  // Use nested loops to print elements in inner arrays in reverse
  for (let i = 0; i < nestedArray.length; i++) {
    const innerArray = nestedArray[i];
    for (let j = innerArray.length - 1; j >= 0; j--) {
      console.log(innerArray[j]);
    }
  }
  