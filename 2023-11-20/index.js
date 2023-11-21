/* ******************************************************************* */
/* EVALUATION */

/*
- faire un tableau de nombres aléatoires

- faire une fonction qui qui prend un tableau en parametre et 
  retourne la concatenation.

- faire un tableau de tri des valeurs du tableau
*/

function randomNumbers() {
    let arr = [];
    for(i=0; i<10; i++) {
        arr.push(Math.floor(Math.random()*(i+10)));
    }
    return arr;
}
console.log('randomNumbers');
console.log(randomNumbers());

let randomnumbers = randomNumbers();

function sumNumbers() {
    let sum = 0;
    for (i=0; i<randomnumbers.length; i++) {
        sum += randomnumbers[i];
    }
    return sum;
}
console.log('sumNumbers');
console.log(sumNumbers());

function sortNumbers(a,b) {
    return randomnumbers.sort((a,b) => a-b);
}
console.log('sortNumbers');
console.log(sortNumbers());

let numbers = randomNumbers();

function sortNumbersWithourSort() {
    let sort = [];
    sort = numbers.map((a,b) => {
        if (a > b) {
            return b;
        } else {
            return a;
        }
    });
    // return a < b ? -1 : (a > b ? 1 : 0);
    //
    // for (i=0; i<numbers.length; i++) {
    //     if (numbers[i] < numbers[i-1]) {
    //         sort.push(numbers[i]);
    //     } else {
    //         sort.push(numbers[i-1]);
    //     }
    // }
    return sort;
}
console.log('sortWithoutSort');
console.log(numbers);
console.log(sortNumbersWithourSort());