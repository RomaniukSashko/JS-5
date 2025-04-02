// Створіть змінну, що симулює вибір варіанта зі списку. 
// Виводьте повідомлення залежно від обраного варіанта: "Кава", "Чай" або "Сік". 
// Використайте switch

let message;
const choice = Number(prompt("Оберіть напій і введіть число, якщо 1 - кава, 2 - чай, а 3 - сік:").toLowerCase().trim());

switch (choice) {
    case 1:
        message = "Кава";
        break;

    case 2:    
        message = "Чай";
        break;

    case 3:
        message = "Сік";
        break;

    default:
        message = "Ви не обрали варіант";
}

alert(message);
console.log(message);

// Створіть змінну для зберігання введеного рядка, який може бути днем тижня. 
// Якщо це робочий день — виведіть повідомлення про робочий день, якщо вихідний — про вихідний

const dayOfWeek = String(prompt("Введіть день тижня:").trim().toLowerCase());

if (dayOfWeek === "понеділок" || dayOfWeek === "вівторок" || dayOfWeek === "середа" || dayOfWeek === "четвер" || dayOfWeek === "п'ятниця") {
    alert("На жаль, це робочий день");
    console.log("Робочий день");
} else if (dayOfWeek === "субота" || dayOfWeek === "неділя") {
    alert("На щастя, це вихідний день");
    console.log("Вихідний день");
} else {
    alert("У тижні є тільки 7 днів");
    console.log("Неправильне значення");
}

// Створіть змінну для зберігання номера місяця. 
// За номером місяця визначайте пору року і виводьте відповідне повідомлення

const monthNumber = Number(4);

if (monthNumber === 1 || monthNumber === 2 || monthNumber === 12) {
    alert("Зима");
    console.log("Зима");
} else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
    alert("Весна");
    console.log("Весна");
} else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
    alert("Літо");
    console.log("Літо");
} else if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
    alert("Осінь");
    console.log("Осінь");
} else {
    alert("У звичайному календарі є лиш 12 місяців")
    console.log("Неправильне значення");
}

// Створіть змінну для зберігання назви кольору. 
// Виводьте повідомлення відповідно до вибраного кольору: 
// якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати"

let action;
const colorName = String(" ЧЕРВОНИЙ ").toLowerCase().trim();

switch (colorName) {
    case "червоний":
        action = "стоп";
        break;

    case "жовтий":
        action = "чекати";
        break;

    case "зелений":
        action = "йти";
        break;

    default:
        action = "стояти";
}

alert(action);
console.log(colorName);
console.log(action);

// Створіть змінні для зберігання двох чисел та оператора (як у списку select). 
// Виконайте відповідну операцію та виведіть результат. 
// У випадку ділення на нуль — виведіть попередження.

const first = Number(prompt("Введіть перше число:").trim());
const second = Number(prompt("Введіть друге число:").trim());
const mathSymbol = prompt("Оберіть оперецію: додати, відняти, помножити або поділити").trim().toLowerCase();

if (mathSymbol === "додати") {
    alert(`Результат: ${first + second}`);
    console.log(`Результат: ${first + second}`);
} else if (mathSymbol === "відняти") {
    alert(`Результат: ${first - second}`);
    console.log(`Результат: ${first - second}`);
} else if (mathSymbol === "помножити") {
    alert(`Результат: ${first * second}`);
    console.log(`Результат: ${first * second}`);
} else if (mathSymbol === "поділити") {
    if (second === 0) {
        alert("На нуль ділити не можна");
        console.log("На нуль ділити не можна");
        
    } else {
        alert(`Результат: ${first / second}`);
        console.log(`Результат: ${first / second}`);
    }
} else {
    alert("Операцію виконати неможливо")
    console.log("Операцію виконати неможливо");
}