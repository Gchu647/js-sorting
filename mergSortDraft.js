var array = [8, 1, 9, 7];

function breakApart(arr) {
  let pivotPoint = (arr.length-1)/2;
  let arr1 = [];
  let arr2 = [];
  
  for(let i = 0; i < arr.length; i++) {
    if(i <= pivotPoint) {
      arr1.push(arr[i]);
    } else {
      arr2.push(arr[i]);
    }
  }
  
  let result1 = breakApart2(arr1);
  let result2 = breakApart2(arr2);
  let finalResult = putTogether(result1, result2);
  
  return finalResult;  
}

// This function breaks the last one apart, lets store it as numbers instead of arrays
function breakApart2(arr) {
  let pivotPoint = (arr.length-1)/2;
  let arr1 = [];
  let arr2 = [];
  
  
  for(let i = 0; i < arr.length; i++) {
    if(i <= pivotPoint) {
      arr1.push(arr[i]);
    } else {
      arr2.push(arr[i]);
    }
  }

  // let result = [arr1, arr2];
  // This was the point where arr1 and arr2 are single data array. I need to call function to sort.
  let result = putTogether(arr1, arr2); // we are going to throw in some stuff
  
  return result;
}

function putTogether(arr1, arr2) {
  let newArr = [];
  let index = 0;
  console.log("arr1: ", arr1);
  console.log("arr2: ", arr2);
  
  // Compares the first index of each array and push in the smaller one into a new array
  while((arr1.length !== 0 || arr2.length !== 0) && index <= 10) {
    index++;
    if(arr1.length === 0 && arr2.length > 0) {
      newArr.push(arr2[0]);
      arr2.shift();
      console.log("conditon 1: ", index);
    } else if(arr2.length === 0 && arr1.length > 0) {
      newArr.push(arr1[0]);
      arr1.shift();
      console.log("condition 2: ", index);
    } else if(arr1[0] < arr2[0]) {
      newArr.push(arr1[0]);
      arr1.shift();
      console.log("condition 3: ", index);
    } else if (arr2[0] < arr1[0]){
      newArr.push(arr2[0]);
      arr2.shift();
      console.log("condition 4: ", index);
    } else {
      console.log("it didn't work!");
      break;
    }

    /*
    if(arr1[0] < arr2[0]) {
      newArr.push(arr1[0]);
      arr1.shift();
    } else if (arr2[0] < arr1[0]){
      newArr.push(arr2[0]);
      arr2.shift();
    } else if(arr1.length === 0) {
      newArr.push(arr2[0]);
    } else if(arr2.length === 0) {
      newArr.push(arr1[0]);
    } else {
      console.log("it didn't work!");
      break;
    }
    */
  }
  
  console.log("Returning newArr: ", newArr);
  return newArr;
}

let sorted = breakApart(array);
// console.log("sorted: ", sorted);

/*
   if(arr < num2) {
     arr.push(num1);
     arr.push(num2);
   } else {
     arr.push(num2);
     arr.push(num1);
   }
*/