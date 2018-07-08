// This is a draft that tested out my codes

let unsorted = [2, 8, 4, 6, 9, 7, 3, 1, 5];
let index = 0;

function sortNums1(arr) {
  let lastIndex = arr.length - 1;
  let pivot = arr[lastIndex];
  let arr1 = [];
  let arr2 = [];
  let pivotArr = [];
    
    // Pushing arr values in to separate index
    for(i = 0; i <= lastIndex; i++ ) {
      let shiftResult = arr.shift();
      
      if(shiftResult === pivot) {
        pivotArr.push(shiftResult);
      } else if (shiftResult < pivot) { // take out the five and keep it somewhere
        arr1.push(shiftResult);
      } else {
        arr2.push(shiftResult);
      }
      
    }
  
  let result1 = sortNums2(arr1);
  let result2 = sortNums2(arr2);
  
  return result1.concat(pivotArr, result2);
}

function sortNums2(arr) {
  let lastIndex = arr.length - 1;
  let pivot = arr[lastIndex];
  let arr1 = [];
  let arr2 = [];
  let pivotArr = [];
    
    // Pushing arr values in to separate index
    for(i = 0; i <= lastIndex; i ++) {
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
    console.log("Index: ", index);
    console.log("pivot: ", pivot);
    console.log("arr1: ", arr1);
    console.log("arr2: ", arr2);
  
    return arr1.concat(pivotArr, arr2);
}

let sorted = sortNums1(unsorted);
