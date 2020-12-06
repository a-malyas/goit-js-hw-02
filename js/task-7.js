let login = prompt('Введите логин');

const isLoginValid = function (login) {
    
    if (login.length < 4 || login.length > 16) {
        alert('Ошибка! Логин должен быть от 4 до 16 символов');
        return false;
    } 
    return true;
}
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
const isLoginUnique = function (logins, login) {
    
    if (logins.includes(login)) {
        alert('Такой логин уже используется!');
        return false;
    }
    return true;
} 
const addLogin = function (logins, login) {
    
    if (isLoginValid(login) && isLoginUnique(logins, login)) {
        alert('Логин успешно добавлен!');
        logins.push(login);
    } 
    return login;
}
//console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
//console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
//onsole.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
//console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'