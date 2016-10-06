function reverseArray(arr) {
    var Answer = [];
    for (var i = arr.length - 1; i >= 0; i--)
        Answer.push(arr[i]);
    return Answer;
}
console.log(reverseArray(["a", "b", "d"]));