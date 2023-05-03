let s = ('abccaaa')

function maxChar(str) {
 
    let arr = {};
    let max
    let count = 0;
    for(let char of str) {
        arr[char] = arr[char] + 1 || 1
    }
    for(let char in arr) {
        if(arr[char] > count) {
            count = arr[char];
            max = char;
        }
    }
    console.log(max)
}

maxChar(s)
