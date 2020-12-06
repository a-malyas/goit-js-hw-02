let input;
let total = 0;
const numbers = [];
do {
    input = prompt('Введите, пожалуйста, число');
       
    if (isNaN(input)) {
        alert('Было введено не число, попробуйте еще раз');
    }
    numbers.push(input);
    
} while (input !== null & input !== '');

        for (const number of numbers) {
            total += Number(number);
        }
alert(`Общая сумма чисел равна ${total}`);