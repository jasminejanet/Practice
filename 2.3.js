var Size = 8;

var Print = "";

for (var y = 0; y < Size; y++) {
    for (var x = 0; x < Size; x++) {
        if ((x + y) % 2 == 0)
            Print += " ";
        else
            Print += "#";
    }
    Print += "\n";
}

console.log(Print);