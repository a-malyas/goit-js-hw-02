const formatString = function (string) {
    
    let stringSplit = string.split('');
    let argToDelete;
    let shortString;

    for (let i = 0; i < stringSplit.length; i++) {
            
        if (stringSplit.length > 40) {
            argToDelete = stringSplit.length - 39;
            stringSplit.splice(39, argToDelete, '...');
            shortString = (stringSplit.join(' '));
            return shortString;
        } else {
            return string;
        }
    }
}

//  * Вызовы функции для проверки работоспособности твоей реализации.

//console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//   ),
// );
// вернется форматированная строка