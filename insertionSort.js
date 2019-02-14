let unsorted = [8, 5, 1, 9, 7, 4, 6, 2, 3];

function insertionSort(arr) {
  let temp ;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j > 0; j--) {
      if(arr[j] < arr[j-1]) {
        temp = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

let sorted = insertionSort(unsorted);
console.log(sorted);