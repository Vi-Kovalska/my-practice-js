'use strict';
//                                MODUL 5 - Перебираючі методи масиву

function greet(name) {
  return `Welcome ${name}!`;
}
// Викликаємо функцію greet і виводимо результат у змінну
const result23 = greet('Mango'); // "Welcome Mango!"

// Посилання на функцію greet передали у змінну, не викликаючи її
const funLink = greet; // ƒ greet() {return `Welcome ${name}!`}

//..................................................КОЛБЕK ФУНКЦІЇ
//........................................Функція зворотного виклику (callback, колбек) — це функція, яка передається іншій функції як аргумент через посилання, а та у свою чергу використовує передану функцію.
// У прикладі функції greet і notify — це колбек-функції, тому що ми передаємо їх як аргумент у функцію registerGuest. Ім'я параметра для колбека може бути довільним, головне пам'ятати, що значенням буде функція.
//........................................Функція вищого порядку (higher order function) — функція, яка приймає в якості параметрів інші функції або повертає функцію в якості результату.
// У прикладі це функція registerGuest, тому що вона очікує іншу функцію як параметр і викликає її.
function greet2(name) {
  console.log(`Welcome ${name}!`);
}
function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
}
function registerGuest(name, callback) {
  console.log(`Registering ${name}!`);
  callback(name);
}
registerGuest('Mango', greet2); // "Registering Mango!"
// "Welcome Mango!"
registerGuest('Mango', notify); // "Registering Mango!"
// "Dear Mango, your room will be ready in 30 minutes"
//..........................................................Інлайн-колбеки
// Інлайн-колбеки - callback функція оголошена безпосередньо на момент виклику функції, в яку передаємо колбек (якщо колбек-функція маленька і потрібна тільки для передачі аргументом). Вони будуть доступні тільки в якості значення параметра і більше ніде в коді.
function registerGuest2(name, callback) {
  console.log(`Registering ${name}!`);
  callback(name);
}
// Передаємо інлайн-функцію greet у якості колбека
registerGuest2('Mango', function greet(name) {
  console.log(`Welcome ${name}!`);
});
// Передаємо інлайн-функцію notify у якості колбека
registerGuest2('Poly', function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
});

//..................................................Метод forEach(callback)
// Метод forEach(callback) — це метод перебирання масиву, який використовується для заміни циклів for і for...of в роботі з колекцією.
// array.forEach(function callback(element, index, array) {
//   // Тіло колбек-функції
// });
// -Поелементно перебирає масив array
// -Викликає колбек-функцію для кожного елемента масиву
// -Повертає undefined, навіть якщо явно задати вираз після return
// Колбек-функція методу forEach() завжди отримує такі параметри: значення поточного елемента масиву element, його індекс index і власне посилання на вихідний масив array. Імена параметрів довільні, але дуже важлива їх послідовність!. Також не всі параметри обов*язково оголошувати. Якщо тобі потрібен тільки перший параметр element (це найчастіший випадок), то наступні параметри index та array можна не оголошувати.

// ex Доповни виклик метода forEach, передавши йому колбек-функцію, яка на кожній ітерації додає до totalPrice значення поточного елемента масива orderedItems.
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function (element) {
    totalPrice += element;
  });

  return totalPrice;
}
console.log(calculateTotalPrice([1, 2, 3]));

// ex
function filterArray(numbers, value) {
  const newArray = [];
  numbers.forEach(function callback(element) {
    if (element > value) {
      newArray.push(element);
    }
  });
  return newArray;
}
console.log(filterArray([1, 2, 3, 4, 5, 6], 3));

//................................................Стрілочні функції
// Стрілочні функції (сленг — “стрілки”) мають скорочений, лаконічніший синтаксис, що зменшує обсяг коду, особливо коли функція маленька або якщо вона використовується як колбек. Cтрілки створюються як функціональний вираз, і їх необхідно присвоювати змінній.
//   // Звичайне оголошення функції
// function classicAdd(a, b, c) {
//     return a + b + c;
//   }

//   // Те саме стрілочною функцією
//   const arrowAdd = (a, b, c) => {
//     return a + b + c;
//   };
// -Ключове слово function не використовується
// -Одразу зазначається оголошення параметрів
// -Після параметрів використовується символ => і тіло функції у фігурних дужках
// -Якщо параметр один, його можна оголошувати без круглих дужок.
// -Якщо параметри відсутні, то обов'язково повинні бути порожні круглі дужки.
const calculateTotalPrice2 = (quantity, pricePerItem) => {
  return quantity * pricePerItem;
};
//                                               У стрілочної функції:
//  1) явне повернення (explicit return) - запис функції з  фігурними дужками та обов*язково поставити return якщо вона має щось повернути.Такий синтаксис використовується в тому випадку, якщо в тілі функції потрібно виконати ще якісь інструкції, окрім повернення значення
const add8 = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};
// 2) неявне повернення (implicit return) - Якщо фігурні дужки відсутні, то повертається результат виразу, який стоїть після =>. return не використовується.він доречний тільки тоді, коли в тілі функції не потрібно виконувати жодних додаткових інструкцій, окрім повернення значення.
// До
function classicAdd(a, b, c) {
  return a + b + c;
}

// Після
const arrowAdd = (a, b, c) => a + b + c;

//   !!!!!!!!!!!!!!!!!!!!!!!!У стрілочних функцій немає локальної змінної arguments, що містить усі аргументи. Якщо необхідно зібрати всі аргументи в масив, використовується операція REST.
const add2 = (...args) => {
  console.log(args);
};
//   ex
const calculateTotalPrice33 = (...orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach(item => (totalPrice += item));

  return totalPrice;
};
console.log(calculateTotalPrice33(2, 3, 4, 5));

//.....................................................Методи map і flatMap
// ...............Функція з побічними ефектами — це функція, яка в процесі виконання може:
// -змінювати або використовувати глобальні змінні
// -змінювати значення аргументів посилального типу (arrays, objects)
// -виконувати операції введення-виведення тощо
// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// // Відбулася мутація вихідних даних - масиву numbers
// console.log(numbers); // [2, 4, 6, 8, 10]

// Функція dirtyMultiply(array, value) множить кожен елемент масиву array на число value. Вона змінює (мутує) вихідний масив за посиланням.

//...............Чиста функція (pure function) — це функція, результат якої залежить тільки від значень переданих аргументів. За умови однакових аргументів вона завжди повертає один і той самий результат і не має побічних ефектів, тобто не змінює значення аргументів.
// const pureMultiply = (array, value) => {
//     const newArray = [];

//     array.forEach(element => {
//       newArray.push(element * value);
//     });

//     return newArray;
//   };

//   const numbers = [1, 2, 3, 4, 5];
//   const doubledNumbers = pureMultiply(numbers, 2);

//   // Мутація вихідних даних не відбулася
//   console.log(numbers); // [1, 2, 3, 4, 5]
//   // Функція повернула новий масив зі зміненими даними
//   console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// ex
function changeEven(numbers, value) {
  const newArray = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      newArray.push(numbers[i] + value);
    } else {
      newArray.push(numbers[i]);
    }
  }
  return newArray;
}
console.log(changeEven([2, 8, 3, 7, 4, 6], 10));

//   ...............................................Перебираючі методи масиву
// У JavaScript є методи масивів, які прийшли з функціональних мов. Більшість із перебираючих методів масивів — це чисті функції. Вони створюють новий масив, заповнюють його, застосовуючи до значення кожного елемента зазначену колбек-функцію, після чого повертають цей новий масив.
// array.method(callback(currentValue, index, array))
// ......................................................Метод map()
// Метод map(callback) використовується для трансформації масиву. Він викликає колбек-функцію для кожного елемента вихідного масиву, а результат її роботи записує в новий масив, який і буде результатом виконання методу.
// array.map((element, index, array) => {
//   // Тіло колбек-функції
// });
// -Поелементно перебирає оригінальний масив
// -Не змінює оригінальний масив
// -Результат роботи колбек-функції записується в новий масив
// -Повертає новий масив такої ж довжини, як і в масиву, до якого він був застосований

// Його можна використовувати для того, щоб змінити кожен елемент масиву. Оригінальний масив використовується як еталон, на основі якого можна зробити іншу колекцію.
const planets29 = ['Earth', 'Mars', 'Venus', 'Jupiter'];

const planetsInUpperCase = planets29.map(planet => planet.toUpperCase());
console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

// ex щоб у змінній planetsLengths вийшов масив, що буде складатися з довжин назв кожної планети з масиву planets. Обов'язково використовуй метод map().
const planets45 = ['Earth', 'Mars', 'Venus', 'Jupiter'];

const planetsLengths = planets45.map(element => element.length);

// .......................Масив об'єктів
// map()
const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
];

const titles = books.map(element => element.title);
console.log(titles);

// ............................................Метод flatMap()
// Метод flatMap(callback) аналогічний методу map(), але застосовується у випадках, коли результат — це багатовимірний масив, який необхідно «розгладити».
// - Метод flatMap викликає колбек-функцію для кожного елемента вихідного масиву, а результат її роботи записує в новий масив. Відмінність від map() полягає в тому, що новий масив «розгладжується» на глибину, що дорівнює одиниці (одна вкладеність). Цей розгладжений (плоский) масив і є результатом роботи flatMap().
const students = [
  { name: 'Mango', courses: ['mathematics', 'physics'] },
  { name: 'Poly', courses: ['science', 'mathematics'] },
  { name: 'Kiwi', courses: ['physics', 'biology'] },
];
const mappedCourses = students.map(student => student.courses);
console.log(mappedCourses); // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

const flattenedCourses = students.flatMap(student => student.courses);
console.log(flattenedCourses); // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];

//   ex

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];
const getUserEmails = users.map(user => user.email);
console.log(getUserEmails);

//..............................................Метод filter()
// Метод filter(callback) використовується для єдиної операції — фільтрації масиву. Під фільтрацією масиву мається на увазі відбір усіх елементів з колекції за певним критерієм.

// array.filter((element, index, array) => {
//   // Тіло колбек-функції
// });
// -Не змінює оригінальний масив.
// -Поелементно перебирає оригінальний масив.
// -Повертає новий масив.
// -Додає в масив, що повертається, елементи, які задовольняють умову колбек-функції.
// -Якщо колбек повернув true, елемент додається в масив, що повертається.
// -Якщо колбек повернув false, елемент не додається в масив, що повертається.
// -Якщо жоден елемент не задовольнив умову, повертає ПОРОЖНІЙ МАСИВ.

const values4 = [51, -3, 27, 21, -68, 42, -37];
const positiveValues = values4.filter(value => value >= 0);
console.log(positiveValues); // [51, 27, 21, 42]
// до positiveValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були >= 0
// Отже, метод filter викликає колбек-функцію для кожного елемента вихідного масиву. Якщо результат її виконання true, поточний елемент додається в новий масив.
// ex
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
//                                             парні
const evenNumbers = numbers.filter(element => !(element % 2));
//                                           непарні
const oddNumbers = numbers.filter(element => element % 2);
console.log(evenNumbers, oddNumbers);
const arr45 = [2, 4, 6];
const result45 = arr45.filter(el => el * 2);
console.log(result45);
// ex
const books999 = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = 'Bernard Cornwell';

const topRatedBooks = books999.filter(book => book.rating >= MIN_RATING);
const booksByAuthor = books999.filter(book => book.author === AUTHOR);
console.log(topRatedBooks, booksByAuthor);
//   ex filter by color eyes
const users777 = [
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 14,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 29,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 60,
  },
];
const getUsersWithEyeColor = (users777, color) => {
  return users777.filter(user => user.eyeColor === color);
};
console.log(getUsersWithEyeColor(users777, 'green'));

// ex filter by age in еру кфтпу (diapasone) (min && max)
const getUsersWithAge = (users, minAge, maxAge) => {
  return users.filter(user => user.age >= minAge && user.age <= maxAge);
};
console.log(getUsersWithAge(users777, 22, 30));

//...............................................Метод find()
// Метод find(callback) дозволяє знайти і повернути перший відповідний елемент, що задовольняє умову, після чого перебирання масиву припиняється. Тобто він, на відміну від методу filter(callback), шукає до першого збігу.

// array.find((element, index, array) => {
//   // Тіло колбек-функції
// });

// -Не змінює оригінальний масив
// -Поелементно перебирає оригінальний масив
// -Повертає перший елемент, що задовольняє умову, тобто коли колбек повертає true
// -Якщо жоден елемент не задовольнив умову, тобто для всіх елементів колбек повернув false, метод повертає UNDEFINDED

// Метод find() використовується для одного завдання — пошуку першого елемента, який задовольняє умову. Наприклад, пошук користувача за поштою, автомобіля — за серійним номером, книги — за назвою тощо.
// ex find the obj with this title or this author
const books3333 = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
];
const bookTitel = 'The Dream of a Ridiculous Man';
const authorFind = 'Robert Sheckley';

const bookWithTitle = books3333.find(book => book.title === bookTitel);
const bookByAuthor = books3333.find(book => book.author === authorFind);

// ex find the obj with this email
const users888 = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
  },
];
const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};
console.log(getUserWithEmail(users888, 'careybarr@nurali.com'));
//...................................................................Метод every()
// Метод every(callback) перевіряє, чи задовольняють усі елементи умову колбек-функції.
// array.every((element, index, array) => {
//   // Тіло колбек-функції
// });

// -Не змінює оригінальний масив
// -Поелементно перебирає оригінальний масив
// -Повертає true, ЯКЩО ВСІ ЕЛЕМЕНТИ МАСИВУ ЗАДОВІЛЬНЯЮТЬ УМОВУ
// -Повертає false, якщо хоча б один елемент масиву не задовольняє умову
// -Перебирання масиву припиняється, якщо колбек повертає false
// ex перевіряємо, чи всі користувачі зараз активні (властивість isActive) і повертала true або false.
const isEveryUserActive = users => {
  return users.every(user => user.isActive === true);
};
console.log(isEveryUserActive(users888));

// .............................................Метод some()
// Метод some(callback) перевіряє, чи задовольняє хоча б один елемент умову колбек-функції.
// array.some((element, index, array) => {
//   // Тіло колбек-функції
// });

// Не змінює оригінальний масив
// Поелементно перебирає оригінальний масив
// Повертає true, якщо ХОЧА Б ОДИН ЕЛЕМЕНТ МАСИВУ ЗАДОВІЛЬНЯЄ УМОВУ
// Повертає false, якщо жоден елемент масиву не задовольняє умову
// Перебирання масиву припиняється, якщо колбек повертає true

// // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [-7, -20, 3, -10, -14].some(value => value >= 0); // true

// // Чи є хоча б один елемент, що менший від нуля? - ні
// [1, 2, 3, 4, 5].some(value => value < 0); // false

// ex
const isAnyUserActive = users => {
  return users.some(user => user.isActive === true);
};
console.log(isAnyUserActive(users888));

// ......................................................................Метод reduce()
// Метод reduce(callback, initialValue) використовується для послідовної обробки кожного елемента масиву із збереженням проміжного результату.
// array.reduce((previousValue, element, index, array) => {
//   // Тіло колбек-функції
// }, initialValue);

// -Не змінює оригінальний масив
// -Поелементно перебирає оригінальний масив
// -Повертає все, що завгодно (об*єкт, масив, рядок, число тощо)
// -Може замінити функціонал будь-якого іншого перебираючого методу масиву та навіть їх комбінацію

// Метод reduce() очікує 2 параметри:
// 1-й параметр (обов*язковий) — колбек-функція, яка "опрацьовує" кожен елемент масиву;
// 2-й параметр (не обов*язковий) — initialValue початкове значення акумулятора.

// Колбек-функція з параметра редьюса очікує в свою чергу чотири параметри. Ці параметри, так само як і в колбеках інших перебираючих методів масиву, можна не оголошувати, якщо вони вам не потрібні, але не можна порушувати їх послідовність:
// 1-й параметр (previousValue) — це акумулятор, тобто проміжний результат. Значення, яке поверне колбек-функція на поточній ітерації, буде значенням цього параметра на наступній ітерації;
// 2-й параметр — поточний елемент масиву;
// 3-й параметр — індекс поточної ітерації;
// 4-й параметр — посилання на вихідний масив.

// Найлегше уявити його роботу на прикладі підрахунку суми елементів масиву.
const total999 = [2, 7, 3].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);
console.log(total999); // 12
// -Початкове значення акумулятора 0
// -перша ітерація колбек-функції 0 + 2 поверне 2
// -друга ітерація колбек-функції 2 + 7 поверне 9
// -третя ітерація колбек-функції 9 + 3 поверне 12
// ----
// Результатом коду вище буде 12.
// ---
// Тобто метод reduce() використовується, коли необхідно взяти «багато» і привести до «одного». У повсякденних завданнях його застосування зводиться до роботи з числами.

// ex find общее время (total time) than find среднее время (average time)
const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]

const totalPlayTime = playtimes.reduce(
  (valueAcum, element) => valueAcum + element
);

const averagePlayTime = totalPlayTime / playtimes.length;

// ex розрахувати середній час, проведений в одній грі для кожного гравця, і отримати загальну суму цих значень часу у змінній totalAveragePlaytimePerGame. Розрахувати час для кожного з гравців можна, розділивши його час (властивість playtime) на кількість ігор (властивість gamesPlayed).
// Поради: -Використовуй метод reduce() для ітерації по масиву players та обчислення загальної суми середнього часу на одну гру. -Усередині колбек функції reduce(), поділи playtime гравця на gamesPlayed, щоб отримати середній час, витрачений на одну гру кожним гравцем. -Накопичуй результат у змінній acc і повертай його в кінці кожної ітерації. - Ініціалізуй параметр acc методу reduce() початковим значенням 0, щоб уникнути отримання NaN при виконанні обчислень.
const players90 = [
  { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
  { name: 'Poly', playtime: 469, gamesPlayed: 2 },
  { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
  { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players90.reduce((total, player) => {
  const acc = total + player.playtime / player.gamesPlayed;
  return acc;
}, 0);
console.log(totalAveragePlaytimePerGame);

// ex Доповни функцію calculateTotalBalance(users) таким чином, щоб вона рахувала і повертала суму всіх коштів (властивість balance), які зберігають користувачі з масиву users.
const calculateTotalBalance = users =>
  users.reduce((total, user) => {
    return total + user.balance;
  }, 0);

// .............................................Метод toSorted()
// Метод toSorted() сортує елементи масиву.
// array.toSorted();

// -Сортує вихідний масив
// -Повертає новий масив
// -За замовчуванням сортує за зростанням

//  за замовчуванням перед сортуванням метод toSorted() приводить усі елементи масиву до рядків, то фактично елементи сортуються як рядки, тобто на основі їхніх значень у таблиці Unicode. Стандартне сортування чисел виглядає незвично, коли ми думаємо про числа, але зрозуміло, якщо знати, що числа були перетворені на рядки.

const scores = [27, 2, 41, 4, 7, 3, 75];

console.log(scores.toSorted()); // [2, 27, 3, 4, 41, 7, 75]
// ........................Масив рядків
// Масив рядків сортується за алфавітом.
const studentsS = ['Jacob', 'Artemis', 'Solomon', 'Adrian', 'Kai', 'Ganymede'];
console.log(students.toSorted()); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

// Водночас порядковий номер великих літер менший, ніж у малих.
const letters7 = ['b', 'B', 'a', 'A', 'c', 'C'];
console.log(letters7.toSorted()); // ["A", "B", "C", "a", "b", "c"]

// ..................Свій порядок сортування чисел
// Для зазначення свого порядку сортування методу toSorted(compareFunction) потрібно передати колбек-функцію з двома параметрами:
// a — перший елемент для порівняння.
// b — другий елемент для порівняння.
// Це функція порівняння (compare function), порядок сортування залежить від її результату. Метод toSorted() буде викликати її для двох довільних елементів.
// array.toSorted((a, b) => {
//   // Callback function body
// });

// ............Сортування за зростанням
// Якщо виклик compareFunction(a, b) повертає будь-яке негативне значення, тобто a менше b, сортування поставить a перед b.
const scores3 = [61, 19, 74, 35, 92, 56];
const ascendingScores = scores3.toSorted((a, b) => a - b);
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// ...........Сортування за спаданням
// Якщо виклик compareFunction(a, b) повертає будь-яке позитивне значення, тобто b більше a, сортування поставить b перед a.
const scores4 = [61, 19, 74, 35, 92, 56];
const descendingScores = scores4.toSorted((a, b) => b - a);
console.log(descendingScores); // [92, 74, 61, 56, 35, 19]

// Якщо виклик compareFunction(a, b) поверне 0, сортування залишить a і b незмінними по відношенню один до одного, але відсортує їх по відношенню до всіх інших елементів.

// Зверни увагу, що при сортуванні масиву чисел і передачі в метод toSorted() кКОЛБЕК-ФУНКЦІЇ, числа вже не будуть приводитися до рядків, тобто їх сортування
// ex ascendingReleaseDates за зростанням, descendingReleaseDates за спаданням
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);

const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);

//                                                              метод рядків localeCompare()
//.............Свій порядок сортування рядків
// Для сортування рядків в алфавітному порядку, за зростанням або спаданням, використовується метод рядків localeCompare().
// firstString.localeCompare(secondString)
// Він викликається на рядку, який потрібно порівняти (firstString) з тим, що був переданий йому як аргумент (secondString).
'a'.localeCompare('b'); // -1
'b'.localeCompare('a'); // 1
'a'.localeCompare('a'); // 0
'b'.localeCompare('b'); // 0

// - Повертає негативне значення, якщо firstString повинен бути перед secondString
// - Повертає позитивне значення, якщо firstString повинен бути після secondString
// - Якщо рядки однакові, повертається нуль і їх послідовність по відношенню один до одного не змінюється

// Метод localeCompare() зручно використовувати для сортування рядків, оскільки метод toSorted() очікує такі самі значення від колбек-функції.

const students7 = ['Jacob', 'Artemis', 'Solomon', 'Adrian', 'Kai', 'Ganymede'];

const inAlphabetOrder = students7.toSorted((a, b) => a.localeCompare(b));
console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

const inReversedOrder = students7.toSorted((a, b) => b.localeCompare(a));
console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]

// ex сортування в алфавітному порядку та зворотньому
const authors99 = [
  'Tanith Lee',
  'Bernard Cornwell',
  'Robert Sheckley',
  'Fyodor Dostoevsky',
  'Howard Lovecraft',
];

const authorsInAlphabetOrder = authors99.toSorted((a, b) => a.localeCompare(b));

const authorsInReversedOrder = authors99.toSorted((a, b) => b.localeCompare(a));
console.log(authorsInAlphabetOrder, authorsInReversedOrder);

// ..........................................................Сортування об'єктів
// Під час роботи з масивом об'єктів сортування виконується за числовим або рядковим значенням певної властивості.
// ex відсортувати масив об'єктів за трьома різними сценаріями: 1)за зростанням кількості балів 2)за спаданням кількості балів 3)за ім'ям студента в алфавітному порядку
const students709 = [
  { name: 'Mango', score: 83, courses: ['mathematics', 'physics'] },
  { name: 'Poly', score: 59, courses: ['science', 'mathematics'] },
  { name: 'Ajax', score: 37, courses: ['physics', 'biology'] },
  { name: 'Kiwi', score: 94, courses: ['literature', 'science'] },
];

const inAscendingScoreOrder = students709.toSorted(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);

const inDescendingScoreOrder = students709.toSorted(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
);

const inAlphabeticalOrder = students709.toSorted(
  (firstStudent, secondStudent) =>
    firstStudent.name.localeCompare(secondStudent.name)
);

// ex сортуєм за алфавіт порядком авторів потім у зворотньому порядкуЖ та рейтинг книг за зростанням(a-b) потім за спаданням (b-a)
const sortedByAuthorName = books3333.toSorted((a, b) =>
  a.author.localeCompare(b.author)
);
const sortedByReversedAuthorName = books3333.toSorted((a, b) =>
  b.author.localeCompare(a.author)
);
const sortedByAscendingRating = books3333.toSorted(
  (a, b) => a.rating - b.rating
);
const sortedByDescentingRating = books3333.toSorted(
  (a, b) => b.rating - a.rating
);
console.log(
  sortedByAuthorName,
  sortedByReversedAuthorName,
  sortedByAscendingRating,
  sortedByDescentingRating
);

// ............................................................Ланцюжки методів
// Позбутися  «мертвих» (проміжних) змінних можна за допомогою групування викликів методів у ланцюжки. Кожний наступний метод буде виконуватися на основі результату роботи попереднього.

const names = students709
  .toSorted((a, b) => a.score - b.score)
  .map(student => student.name);

console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]
// 1)На масиві викликаємо метод toSorted()
// 2)До результату роботи методу toSorted() застосовуємо метод map()
// 3)Змінній names присвоюється результат роботи методу map() - oтримаємо масив унікальних відвідуваних предметів, відсортований за алфавітом.
const uniqueSortedCourses = students709
  .flatMap(student => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .toSorted((a, b) => a.localeCompare(b));

console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]
// 1)На вихідному масиві викликаємо flatMap() і робимо розгладжений масив усіх курсів
// 2)До результату методу flatMap() застосовуємо метод filter() для фільтрації унікальних елементів
// 3)На результаті методу filter() викликаємо toSorted()
// 4)Змінній uniqueSortedCourses присвоюється результат роботи методу toSorted()

// ex  змінній names вийшов масив імен авторів в алфавітному порядку, рейтинг книг яких більший за значення змінної MIN_BOOK_RATING. Використовуй ланцюжок методів.
const MIN_BOOK_RATING = 8;

const namesAuthor = books3333
  .filter(book => book.rating > MIN_BOOK_RATING)
  .map(book => book.author)
  .toSorted((a, b) => a.localeCompare(b));

console.log(namesAuthor);

//..........................................................PRACTICE
// КОЛБЕК ФУНКЦІЯ
function calc(a, b, callback) {
  return callback + a ** b;
}
function math(x, y) {
  return x ** y;
}

console.log(calc(3, 2, math(2, 3)));
// callback створюємо зовні і потім під час виклику функції вищого порядку просто передаємо колбек функцію як аргумент
function each(array, callback) {
  const newArr = [];
  for (const item of array) {
    const res = callback(item);
    newArr.push(res);
  }
  return newArr;
}
function easy(value) {
  return value * 2;
}

console.log(each([1, 2, 3, 4], easy));
//  передаємо колбек фунцію відразу як аргумент під час виклику функції вищого порядку
function calc2(a, b, callback) {
  const result = callback(a, b);
  console.log(result);
}
calc2(2, 3, function (x, y) {
  return x ** y;
});

// оголошуємо колбек функцію за допомогою синтаксису стрілочної функції під час виклику функції вищого порядку (менше коду)
const example = (a, b, callback) => {
  const result = callback(a, b);
  console.log(result);

  return result;
};
example(2, 3, (x, y) => {
  return x + y;
});
// те саме але стрілочна функція з неявним перетворенням (ще менше коду)
example(2, 34, (x, y) => x / y);

// метод forEach(callback)
// - поелементно перебирає вихідний масив
// -нічого не повертає
// - замінює класичний for, якщо не потрібно переривати цикл
// - стрілочну ф-цію зручно передавати у forEach()

// const arrey69 =[56, 34, 26, 49, 81, 93];
// let multy = 1;
// arrey69.forEach((element, index, array) => {
//   console.log(element, index, array);
//   multy *= element;
//   console.log(multy);
// });
// коротший запис, можна опустити () якщо у нас один параметр (нам не потрібен індекс та посилання на масив) + опустили {} неявне повернення стрілочної ф-ції
const arrey69 = [56, 34, 26, 49, 81, 93];
let multy = 1;
arrey69.forEach(element => (multy *= element));
console.log(multy);

// рефакторинг (forEach + arrow function)
const items = ['Mango', 'Kiwi', 'Apple', 'Orange', 'Grape'];
// function logItems(items) {
//   console.log(items);
//   for (let i=0; i<items.length; i++) {
//     console.log(`${i+1} - ${items[i]}`);
//   }
// }
// console.log(logItems(items));
items.forEach((element, index) => {
  console.log(`${index + 1} - ${element}`);
  return `${index + 1} - ${element}`;
});
// refactoring
// function printContactsInfo({names, phones}) {
//   const namesArr = names.split(",");
//   const phonesArr = phones.split(",");
//   for (let i=0; i<names.length; i++) {
//     console.log(`${namesArr[i]} : ${phonesArr[i]}`);
//   }
//   return "cycle for";
// }
// printContactsInfo({
//   names: "Jacob,William,Mark",
//   phones: "80956743333,80976743543,80509745558"
// });
//
const printContactsInfo = ({ names, phones }) => {
  const namesArr = names.split(',');
  const phonesArr = phones.split(',');
  namesArr.forEach((name, index) => {
    console.log(`${name} : ${phonesArr[index]}`);
  });
};
printContactsInfo({
  names: 'Jacob,William,Mark',
  phones: '80956743333,80976743543,80509745558',
});

//
const calculateAvarege = (...args) => {
  let total = 0;
  args.forEach(item => (total += item));
  return total / args.length;
};
console.log(calculateAvarege(23, 56, 41, 89));

// ф-ція поверта масив моделей машин з об*єкту
const carsObj = [
  {
    model: 'INFINITI QX80',
    year: 2025,
    price: 0,
    type: 'luxury SUV',
    quantity: 0,
  },
  {
    model: 'RANGE ROVER HSE',
    year: 2024,
    price: 7032687,
    type: 'SUV',
    quantity: 2,
  },
  {
    model: 'Peugeot Landtrek',
    year: 2024,
    price: 1467300,
    type: 'pickup truck',
    quantity: 3,
  },
];
const getArreyOfCarsModel = obj => {
  const arrModel = [];
  obj.forEach(car => {
    arrModel.push(car.model);
  });
  return arrModel;
};
console.log(getArreyOfCarsModel(carsObj));
// на відміну від форич метод .map() повертає новий масив (довжина така ж як у визідного) тому щоб не створювати пустий масив доя форич можна відразу присвоїти змінній результат роботи метoду .map()
const getArreyOfCarsModelMap = obj => {
  const result = obj.map(car => car.model);
  return result;
};
console.log(getArreyOfCarsModelMap(carsObj));
// ф-ція поверта новий масив об*єктів де прайс змінена на ціну зі знижкою
const makePriceWithDiscount = (arr, discount) => {
  return arr.map(car => {
    return {
      // розгорнули в масив всі об*єкти машин
      ...car,
      // переприсвоїли нову ціну у кожному об*єкті машини
      price: car.price * (1 - discount),
    };
  });
};
console.log(makePriceWithDiscount(carsObj, 0, 2));

// збільшити к-ть годин графця за id
const playerIdToUpdate = 'player-3';

const plaers7 = [
  { id: 'player-1', name: 'Poli', timePlayed: 230, online: true, grade: 3 },
  { id: 'player-2', name: 'Kiwi', timePlayed: 30, online: true, grade: 1 },
  { id: 'player-3', name: 'Banana', timePlayed: 170, online: false, grade: 2 },
];

const updateTimePlayed = plaers7.map(player => {
  if (player.id === playerIdToUpdate) {
    return {
      ...player,
      timePlayed: player.timePlayed + 100,
    };
  }
  return player;
});
console.log(updateTimePlayed);

// МЕТОД .filter()
// - поелементно перебирає оригінальний масив
// - повертає новий масив (з елементами або порожній)
// - додає в масив що повертається елементи які задовільняють умови колбек ф-ції:
//           - якщо колбек повернув true ел додається в NEWмасив
//            -                     false елемент НЕ додається в NEWмасив
const numbers41 = [21, 56, 89, 43];
const filtered = numbers41.filter((num, index) => {
  if (Number.isFinite(num)) {
    return true;
  } else {
    return false;
  }
});
console.log(filtered);

// Number.isFinite(num) -  функция определяет, является ли переданное значение конечным числом. Если необходимо, параметр сначала преобразуется в число.Если аргумент является NaN, положительной или отрицательной бесконечностью, метод вернёт false; иначе возвращается true.

// EX
const findPrice = 0;
// неявне повернення (implicit return)
const priceFiltered = (obj, x) => obj.filter(car => car.price === x);
console.log(priceFiltered(carsObj, findPrice));

// METHOD .find()
// - поелементно перебирає оригінальний масив
// - повертає першиЙ ЕЛЕМЕНТ що задовільняє умову або UNDEFINED  ЯКЩО НІЧОГО НЕ ЗАДОВІЛЬНЯЄ
const fined = numbers41.find(element => element > 15);
console.log(fined);

// METHOD .every()
//  - поелементно перебирає вихідний масив
// - поверта TRUE ЯКЩО ВСІ ЕЛЕМЕНТИ масиву задовільняють умову
// EX
const isOnline = plaers7.every(player => player.online);
console.log(isOnline);

// METHOD .some()
// - поелементно перебирає вихідний масив
// - поверта TRUE ЯКЩО ХОЧАБ ОДИН ЕЛЕМЕНТ масиву задовільняє умову
const some = plaers7.some(player => player.online && player.grade === 3);
console.log(some);

// METHOD .reduce()
// - поелементно перебирає вихідний масив
// - значення що повертається залежить від розробника
// - найчастіше викор щоб порах суму
// повертає наступне значення акумулятора
//                           акумулятор - місце збереження проміжного результату колбек ф-ції
//                                          другий параметр (не обов*язковий)- початкове значення акумулятора, якщо його не передати то ним стане ПЕРШИЙ ел масиву
const total0 = numbers41.reduce((acc, el, indx, arr) => {
  return acc + el;
}, 0);
console.log(total0);
// те саме але поч знач акк = 1 і рез став на 1 більше
const total01 = numbers41.reduce((acc, el, indx, arr) => {
  return acc + el;
}, 1);
console.log(total01);
// те саме але поч знач акк = 2 і рез став на 2 більше
const total002 = numbers41.reduce((acc, el, indx, arr) => {
  return acc + el;
}, 2);
console.log(total002);

// рахуємо зп
const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};
//              створ масив із об*єкту     рах суму
const total = Object.values(salary).reduce((acc, num) => acc + num, 0);
console.log(total);

// рах заг к-ть год гравців , приклад де краще вказати початкове значення акк бо в против випадку значення акк візьметься з першого ел масиву - це об*єкт і вийде не сума а об*єкт+числа
const totalTimePlaed = plaers7.reduce((acc, el) => acc + el.timePlayed, 0);
console.log(totalTimePlaed);
console.log(plaers7);

//
const cart35 = [
  { label: 'banana', price: 100, quantity: 30 },
  { label: 'pineapple', price: 200, quantity: 10 },
  { label: 'dragon-fruit', price: 250, quantity: 5 },
];
const getTotalOfCart = cart35.reduce((acc, el) => {
  return acc + el.price * el.quantity;
}, 0);
console.log(getTotalOfCart);

// METHOD .toSorted()
//  - за замовчуванням сортує за зростанням
//  - за замовч прирівнює елементи до рядка і сортує за табл Unicode
