// Find the Maximum Number in an Array

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax([4, 2, 8, 9, 1, 3, 6]));  
