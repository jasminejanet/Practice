function arrayToList(arr) {
    var list = null;
    for (var i = arr.length - 1; i >= 0; i--)
        list = {value: arr[i], rest: list};
    return list;
}

function listToArray(list) {
    var arr = [];
    for (var node = list; node; node = node.rest)
        arr.push(node.value);
    return arr;
}
function nth(list, n) {
    if (n == 0)
        return list.value;
    else if (!list)
        return undefined;
    else
        return nth(list.rest, n - 1);
}
function prepend(value, list) {
    return {value: value, rest: list};
}
console.log(arrayToList([10,20,30]));
console.log(listToArray(arrayToList([10,20,30,40])));
console.log(nth(arrayToList([10, 20, 30]), 2));
console.log(prepend(20,prepend(30, null)));