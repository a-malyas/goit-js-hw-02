

const logItems = function (array) {
    
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        let itemNumber = i + 1;
        let message = `${itemNumber} - ${item}`;
    
        console.log(message);
    }
}    

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

