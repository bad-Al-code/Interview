function removeElement(arr) {
  const result = [];

  for (let element of arr) {
    if (element % 2 !== 0) {
      result.push(element);
    }
  }

  return result
}

function removeElementUsingFilter(arr) {
  return arr.filter(element => element % 2 !== 0);
}

console.log(removeElement([1, 2, 3, 4, 5, 6]))
console.log(removeElementUsingFilter([1, 2, 3, 4, 5, 6]))

// Merge two Sort
function mergeArrays(arr1, arr2) {
  // return arr1.concat(arr2).sort();
  return [...arr1, ...arr2].sort((a, b) => a - b)
}

function mergeArraysOptimize(arr1, arr2) {
  let result = [];

  let i = j = 0;
  while ((i < arr1.length) && (j < arr2.length)) {
    if (arr1[i] < arr2[j]) { result.push(arr1[i]); i++ }
    else { result.push(arr2[j]); j++ }
  }

  if (i <= arr1.length - 1) {
    arr1.splice(0, i);
    result = result.concat(arr1);
  }
  else if (i <= arr2.length - 1) {
    arr2.splice(0, j)
    result = result.concat(arr2)
  }

  return result;
}

console.log(mergeArrays([1, 2, 3], [6, 5, 4]))
console.log(mergeArrays([4, 5, 6], [-2, -1, 0, 7]))
console.log(mergeArraysOptimize([4, 5, 6], [-2, -1, 0, 7]))

// Find Sum 
function findSum(arr, value) {

  arr.sort(function (a, b) {
    return a - b
  })

  var index1 = 0,
    index2 = arr.length - 1,
    result = [],
    sum = 0;

  while (index1 != index2) {
    sum = arr[index1] + arr[index2]

    if (sum < value) {
      index1++;
    } else if (sum > value) {
      index2--;
    } else {
      result.push(arr[index1]);
      result.push(arr[index2]);
      return result;

    }
  }
  return result;
}


console.log(findSum([1, 2, 3, 4], 5))
console.log(findSum([1, 2, 3, 4], 10))



function findMinimum(arr) {
  let temp = arr[0]

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < temp) {
      temp = arr[i]
    }
  }

  return temp;
}

console.log(findMinimum([9, 2, 3, 6]))

