var unsorted = [8, 5, 1, 9, 7, 4, 6, 2, 3];

function selectionSort(arr) {
  let newArr = [];

  while (arr.length !== 0) {
    let smaller = arr[0];
    // 1 loop
    for (let i = 1; i < arr.length; i++) {
      if (smaller <= arr[i]) {
        continue;
      } else {
        smaller = arr[i];
      }
    }

    newArr.push(smaller);
    let index = arr.indexOf(smaller);
    arr.splice(index, 1);
  }

  return newArr;
}

var sorted = selectionSort(unsorted);
console.log(sorted);