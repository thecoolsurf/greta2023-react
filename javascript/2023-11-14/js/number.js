/* ********************************************************* */
/* NUMBER */

// enleve ce qui est après un nombre ddecimal
Number.parseFloat('12.4px'); // 12.4

// enleve les chiffres après la virgule
Number.parseInt('12.4px'); // 12
Number.parseInt('12.4'); // 12

// on peu choisir le nombre de chiffre apres la virgule
12.45977.toFixed(2); // 12.45
12.45987.toFixed(1); // 12.4

// transformer une STRING de caractere en NUMBER
Number('4');
+'4';
'4'*1;
Number.parseInt('4');
