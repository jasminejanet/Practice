for (var n = 1; n <= 100; n++) {
    var Print = "";
    if (n % 3 == 0)
        Print = Print + "Fizz";
    if (n % 5 == 0)
        Print = Print + "Buzz";
    console.log(Print || n);
}