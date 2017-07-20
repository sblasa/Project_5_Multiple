for (var i = 1; i <= 12; i++) {
    console.log ("This is the " + i + "'s table.");

    for (var j = 0; j < 13; j++ ) {
        console.log (i + "X" + j + " = " + i * j);

    }

    if(i < 12) {
        console.log("________________");

    }
}