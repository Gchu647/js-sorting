var unsorted = [8, 5, 1, 9, 7, 4, 6, 2, 3];

function selectionSort(arr) {
  let minIdx, temp, 
    len = arr.length;

  for (let i = 0; i < len; i++) {
    minIdx = i;

    for(let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }

    temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }

  return arr;
}

var sorted = selectionSort(unsorted);
console.log(sorted);