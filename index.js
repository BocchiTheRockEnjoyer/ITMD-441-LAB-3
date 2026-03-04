// Ronal Rajesh
// ITMD 441-02 Undergraduate Student

// Exercise #1
console.log("\nExercise #1 - A function that takes an array of numbers as the only\n" +
    "parameter and outputs the following string to the browser console when run.\n");
function minMaxAverage(arr) {
    const totalNumbers = arr.length;
    const minVal = Math.min(...arr);
    const maxVal = Math.max(...arr);
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    const average = sum / totalNumbers;
    console.log(`Total Numbers: ${totalNumbers}, Min Value: ${minVal}, Max Value: ${maxVal}, Average: ${average}`);
}
// Demonstrations for #1
minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]);
minMaxAverage([1, 5, 3, 5, 10, 12, 8, 6]);
minMaxAverage([10, 20, 30, 40, 50]);

// Exercise #2
console.log("\nExercise #2 - A function that takes a string as input parameter and returns\n" +
    "the number of vowels in the string.\n");
function countVowels(word) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of word) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return `${word}: ${count} vowels`;
}
// Demonstrations for #2
console.log(countVowels("Winter"));
console.log(countVowels("JavaScript"));
console.log(countVowels("Education"));



// Exercise #3
console.log("\nExercise #3 - A function that takes an array of numbers as the only\n" +
    "parameter and returns the array sorted from smallest to largest.\n");
function sortNumbers(arr) {
    const sorted = [...arr].sort((a, b) => a - b);
    return `Original Array: [${arr}] Sorted Array: [${sorted}]`;
}
// Demonstrations for #3
console.log(sortNumbers([9, 4, 6, 2]));
console.log(sortNumbers([100, 2, 55, 14, 1]));
console.log(sortNumbers([6, -5, 0, 14, 3]));



// Exercise #4
console.log("\nExercise #4 - that takes a temperature in Celsius as a\n" +
    "number parameter and converts it to Fahrenheit.\n");
function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    console.log(`${celsius.toFixed(1)} Celsius = ${fahrenheit.toFixed(1)} Fahrenheit`);
}
// Demonstrations for #4
celsiusToFahrenheit(30);
celsiusToFahrenheit(0);
celsiusToFahrenheit(-10.5);