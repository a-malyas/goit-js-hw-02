let input;
let total = 0;
const numbers = [];
do {
    input = prompt('Введите, пожалуйста, число');
       
    
    if (isNaN(input)) {
        alert('Было введено не число, попробуйте еще раз');
    } else {
      numbers.push(input);
    }
} while (input !== null) {
    for (const number of numbers) {
        console.log(numbers);
        total += Number(number);
    }
}  
alert(`Общая сумма чисел равна ${total}`);

