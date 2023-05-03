let miss = [1,3, 5, 6, 7, 10]

var missing = new Array();
let max = 0
for (i = 0; i <= miss.length; i++) {
    if (i == miss.length) {
        max = miss[i-1]
        m(max)
    }
}

function m(max) {
    for (i = 1; i <= max; i++) {
        if (miss.indexOf(i) == -1) {
            missing.push(i);
        }
    }
}
console.log(missing)