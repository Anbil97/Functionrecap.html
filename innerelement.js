const nestedArray = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9]
  ];
  
  // Use nested loops to print elements in inner arrays
  for (let i = 0; i < nestedArray.length; i++) {
    for (let j = 0; j < nestedArray[i].length; j++) {
      console.log(nestedArray[i][j]);
    }
  }
  