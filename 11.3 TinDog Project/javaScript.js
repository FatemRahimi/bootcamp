/*name =["apple", "orange", "cherry", "pear", "tengarin", "pulm" ];

lengthArray = name.length;
arrayRandom = Math.random()*lengthArray;
arrayRandom1 = [arrayRandom];
console.log(arrayRandom1);*/



/*second exercise*/

var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}
