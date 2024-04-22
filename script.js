
// task 1

function Palindrom(str) {
    return str === str.split('').reverse().join('');
}

let sozumm = "madam";

if (Palindrom(sozumm)) {
    console.log(`'${sozumm}' bir polindromdur.`);
} else {
    console.log(`'${sozumm}' bir polindrom doul.`);
}


// task 2

let Stringim = "AkulaIsmayil";

if (Stringim.length >= 10 && Stringim.length <= 20) {
    console.log(Boolean = true);
} else {
    console.log(Boolean = false);
}

// task 3
 
let reqemler = [2, 4, 6, 8, 10];

let average = reqemler.reduce((a, b) => a + b, 0) / reqemler.length;

console.log(`Arraydə olan ədədlərin ədədi ortası: ${average}`);

