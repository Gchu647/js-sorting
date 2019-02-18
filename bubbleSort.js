let unsorted = [8, 5, 1, 9, 7, 4, 6, 2, 3];

function bubbleSort(arr) {
  let temp,
    len = arr.length;
  
  // the first loop ensure we will go through arr 9 times
  for (let i = 0; i < len; i++) {
    // but the second loop will have to shrink everytime we go an iteration of the first loop
    // and j is not related to i
    for (let j = 0; j < len - i; j ++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

let sorted = bubbleSort(unsorted);
console.log(sorted);