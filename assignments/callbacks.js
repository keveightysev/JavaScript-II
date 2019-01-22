// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

getLength(items, function(arr){
  console.log(arr);
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}

last(items, function(last){
  console.log(last);
});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  const sum = x + y;
  return cb(sum);
}
sumNums(28, 687, function(answer){
  console.log(answer);
})

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  const product = x * y;
  return cb(product);
}

multiplyNums(32, 87, function(answer){
  console.log(answer);
});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  for (let i = 0; i < list.length; i++){
    if (item === list[i]) {
      return cb(true);
    } else {
      return cb(false);
    }
  }
}

contains('Pencil', items, function(item){
  if (item === true) {
    console.log(`That item is in the array`);
  } else if (item !== true) {
    console.log(`That item is NOT in the array`);
  }
});

contains('bottle', items, function(item){
  if (item === true) {
    console.log(`That item is in the array`);
  } else if (item !== true) {
    console.log(`That item is NOT in the array`);
  }
});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let first = {};
  let unique = [];
  let j = 0;
  for (let i = 0; i < array.length; i++){
    let name = array[i];
    if (first[name] !== 1) {
      first[name] = 1;
      unique[j++] = name;
    }
  }
  return cb(unique);
}

let names = ['Linda', 'Roberta', 'Richard', 'Lisa', 'Thomas', 'Lori', 'Dora', 'LynDel', 'Linda', 'Janice', 'Jacqueline', 'Sharon', 'Charles', 'LaVern', 'Ronald', 'Rudolph', 'Donald','Richard']

let kevin = ['Kevin', 'Kevin', 'Kevin', 'Kevin', 'Kevin', 'Kevin', 'Kevin']

removeDuplicates(names, function(item){
  console.log(item);
});

removeDuplicates(kevin, function(item){
  console.log(item);
});