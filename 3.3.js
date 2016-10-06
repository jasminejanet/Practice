function countChar(string, ch) {
    var counter = 0;
    for (var i = 0; i < string.length; i++)
        if (string.charAt(i) == ch)
            counter += 1;
    return counter;
}
function countCs(string) {
    return countChar(string, "C");
}
console.log(countCs("BSCCECD", "C"));