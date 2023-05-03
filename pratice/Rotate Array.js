let arr = [1,2,3,4,5]

function arrayRotate(arr, reverse) {
    if (reverse) arr.unshift(arr.pop());
    else arr.push(arr.shift());
    console.log(arr)
  }

arrayRotate(arr,9)