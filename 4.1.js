function range(start, end, step) {
    if (step == null) step = 1;
    var arr = [];
    if (step < 0) {
        for (var i = start; i >= end; i += step)
            arr.push(i);
    } else {
        for (var i = start; i <= end; i += step)
            arr.push(i);
    }
    return arr;
}

function sum(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++)
        total += arr[i];
    return total;
}
console.log(sum(range(2,6)));