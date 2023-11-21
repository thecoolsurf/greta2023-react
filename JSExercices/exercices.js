/*
Ecrire une fonction qui prend en parametre 2 nombres
 qui sont aditionnés ensemble
*/
const addNums = (a, b) => {
    return a + b;
};
// console.log(addNums(2,3));

/*
Ecrire une fonction qui prend en parametre un tableau de nombre
et qui retourne la somme des nombres
*/
const addArray = (myArray) => {
    let accumulator = 0;
    for (let i = 0; i < myArray.length; i++) {
        accumulator += myArray[i];
    }
    return accumulator;
}
const exemple = [2, 4, 6, 2];
console.log(addArray(exemple));

/*
Ecrire une methode qui prend un tableau de nombres et qui 
tri les valeurs de facon croissante
*/

// highervalue

const getHigherValue = (arr) => {
    let highervalue = 0;
    for (let i = 0; i < arr[i].length; i++) {
        if (arr[i] > arr[i - 1]) {
            highervalue = arr[i];
        }
    }
    return highervalue;
}

const sortArray = (arr) => {
    let highervalue = 0;
    for (let i = 0; i < arr[i].length; i++) {
        if (arr > highervalue) {

        }
    }
    return highervalue;
}
const values = [];
console.log('sortArray');
console.log(sortArray(values));
