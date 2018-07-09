var unsorted = [8, 5, 1, 9, 7, 4, 6, 2, 3];

function mergeSort(arr) {
  if(arr.length <= 1) {
    return arr;
  } else {
    let pivotPoint = (arr.length-1)/2;
    let arr1 = [];
    let arr2 = [];
    
    // This for loop breaks apart the arr in to halves
    for(let i = 0; i < arr.length; i++) {
      if(i <= pivotPoint) {
        arr1.push(arr[i]);
      } else {
        arr2.push(arr[i]);
      }
    }

    arr1 = mergeSort(arr1);
    arr2 = mergeSort(arr2);
    let newArr = [];
    // console.log("arr1: ", arr1);
    // console.log("arr2: ", arr2);

     // Compares the first index of each array and push in the smaller one into a new array
    while(arr1.length !== 0 || arr2.length !== 0) {
      if(arr1.length === 0 && arr2.length > 0) {
        newArr.push(arr2[0]);
        arr2.shift();
        // console.log("conditon 1: ", index);
      } else if(arr2.length === 0 && arr1.length > 0) {
        newArr.push(arr1[0]);
        arr1.shift();
        // console.log("condition 2: ", index);
      } else if(arr1[0] < arr2[0]) {
        newArr.push(arr1[0]);
        arr1.shift();
        // console.log("condition 3: ", index);
      } else if (arr2[0] < arr1[0]){
        newArr.push(arr2[0]);
        arr2.shift();
        // console.log("condition 4: ", index);
      }
    }
    
    return newArr;
  }
}

let sorted = mergeSort(unsorted);
console.log(sorted);
