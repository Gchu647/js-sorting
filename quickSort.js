let unsorted = [2, 8, 4, 6, 9, 7, 3, 1, 5];
let index = 0;

function quickSort(arr) {
  if(arr.length < 1) { // if array index 0 is not empty
    return arr;
  } else {
    let lastIndex = arr.length - 1;
    let pivot = arr[lastIndex];
    let arr1 = [];
    let arr2 = [];
    let pivotArr = [];
     
    // Pushing arr values in to separate index
    for(i = 0; i <= lastIndex; i++) {
      let shiftResult = arr.shift();
       
      if(shiftResult === pivot) {
        pivotArr.push(shiftResult);
      } else if (shiftResult < pivot) { // take out the five and keep it somewhere
        arr1.push(shiftResult);
      } else {
        arr2.push(shiftResult);
      }
       
    }

    index++;
    // console.log("Index: ", index);
    // console.log("pivot: ", pivot);
    // console.log("arr1: ", arr1);
    // console.log("arr2: ", arr2);
   
  let result1 = quickSort(arr1);
  let result2 = quickSort(arr2);
   
  // return result2;
  return result1.concat(pivotArr, result2);
  }
}

let sorted = quickSort(unsorted);
console.log(sorted);