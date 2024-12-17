'use strict';
//                                             MODUL 3. ARRAY (МАСИВ)
// Масив — це впорядкована структура даних, яка використовується для зберігання колекції елементів. Масиви можуть містити елементи різних типів даних, таких як числа, рядки, булеві значення тощо. Для створення масиву в JavaScript використовується літерал масиву: квадратні дужки [].
// Щоб отримати доступ до значення елемента масиву, ми використовуємо синтаксис квадратних дужок:
// arrayName[index]
const planetss = ['Earth', 'Mars', 'Venus'];
console.log(planetss[0]); // 'Earth'
console.log(planetss[1]); // 'Mars'
// Результат звернення до елемента масиву можна зберегти у змінну і використовувати його надалі.
const planetsss = ['Earth', 'Mars', 'Venus'];
const firstElement = planetsss[0];
console.log(firstElement); // 'Earth'

// Перевизначення значення елемента - Елементи масиву можна змінювати, звернувшись до них за індексом і присвоївши нове значення.
const planets = ['Earth', 'Mars', 'Venus', 'Uranus'];
planets[0] = 'Jupiter';
planets[2] = 'Neptune';
console.log(planets); // ['Jupiter', 'Mars', 'Neptune', 'Uranus']
// Довжина масиву -  кількість його елементів, зберігається у властивості length. Це динамічна величина, яка автоматично змінюється під час додавання або видалення елементів.
const planets44 = ['Earth', 'Mars', 'Venus'];
console.log(planets44.length); // 3

const yhuuu = ['a', 'b', 'c'];
//                             [1] = "b"
console.log(yhuuu[yhuuu.length - 2]);
// ex Функція приймає  параметр array - масив довільних значень.  щоб вона повертала новий масив з двох елементів: - перший елемент - це індекс останнього елементу у масиві array; - другий елемент - це значення останнього елементу у масиві array
function getLastElementMeta(array) {
  const newArray = [array.length - 1, array[array.length - 1]];
  return newArray;
}
console.log(getLastElementMeta(['a', 'b', 'c', 'd']));
// ex щоб вона повертала масив з двох елементів - першого і останнього елементів параметра array.
function getExtremeElements(array) {
  const newArray = [array[1], array[array.length - 1]];
  return newArray;
}
console.log(getExtremeElements(['strange', 'wild', 'wakcy', 'freak']));
//                                      METHODS OF ARRAYS
// join(delimiter) об'єднує елементи масиву в рядок
// split(delimiter) - перетворити рядок на масив
// slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву/ не змінює вихідний масив
// splice(індекс з якого почати, к-ть елементів які вирізати , елемент який хочемо додати) - вирізає і повертає елементи з масиву, ЗМІНЮЄ ВИХІДНИЙ МАСИВ,/ або просто додає елементи (2, 0, "новий елемент/-и")
// concat(arr1, arr2, ..., arrN) - для об'єднання двох або більше масивів.
// indexOf(elem) використовується для визначення індексу першого входження елемента elem у масиві
// push()  для додавання одного або більше елементів у кінець масиву. ВІН ПОВЕРТАЄ ДОВЖИНУ нового масиву
// .pop() вирізає останній елемент масиву і повертає його (присвоївши новій змінній )
// shift() -- видаляє елемент із початку,
// unshift() - додає елементи на початок.
// splice(index, deleteIndex, ...arr) -- починаючи з індексу index, видаляє deleteIndex елементів і вставляє arr.
// includes() використовується для перевірки наявності певного елемента в масиві.  повертає л true, або false.
// Array.from(), який створить масив із псевдомасиву
// toReversed() - повертає новий масив з елементами у зворотньому порядку.
//  УНАРНИЙ ПЛЮС (поставити +перед зиінною) - можна замість методу Number() для перетворення рядка на число але краще Number.parseFloat(value)

// Цикл for...of — це зручний спосіб перебору масиву. Тіло циклу буде виконуватися на кожному елементі масиву. Це гарна заміна циклу for, якщо не потрібен доступ до лічильника.Цикл for...of завжди перебирає масив від першого і до останнього елемента, задати умову припинення циклу не можна. Якщо необхідно закінчити виконання циклу передчасно, використовується оператор break.
// Ітерація по масиву з використанням циклу for дозволяє перебрати елементи масиву і виконати певну дію для кожного елемента.
//

// METHOD масиву join(delimiter) об'єднує елементи масиву в рядок. У результуючому рядку елементи будуть розділені символом або групою символів, зазначених у delimiter.
const words2 = ['JavaScript', 'is', 'amazing'];
console.log(words2.join('')); // 'JavaScriptisamazing'
console.log(words2.join(' ')); // 'JavaScript is amazing'
console.log(words2.join('-')); // 'JavaScript-is-amazing'

// METHOD Метод рядків split(delimiter) - перетворити рядок на масив, розбивши його за вказаним роздільником delimiter. Якщо роздільник є порожнім рядком (рядком, у якому нема символів), то вийде масив окремих символів рядка.
const name = 'Mango';
const letters = name.split(''); // ["M", "a", "n", "g", "o"]

const message2 = 'JavaScript essentials';
const words = message2.split(' '); // ["JavaScript", "essentials"]

const slug = 'amazing*french*recipes';
const slugParts = slug.split('*'); // ["amazing", "french", "recipes"]

console.log(letters, words, slugParts);

// Метод масиву slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву, не змінюючи його. Копія створюється від індексу begin до, але не включаючи індекс end.
const planets54 = ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'];
planets54.slice(0, 2); // ['Earth', 'Mars']
planets54.slice(0, 4); // ['Earth', 'Mars', 'Venus', 'Jupiter']
planets54.slice(1, 3); // ['Mars', 'Venus']
// Якщо не вказати параметри begin і end, буде створено повну копію вихідного масиву:
const planets2 = ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'];
planets2.slice(); // ["Earth", "Mars", "Venus", "Jupiter", "Saturn"]
// Якщо не вказати end, копіювання відбуватиметься від begin до кінця масиву:
const planets3 = ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'];
planets3.slice(1); // ["Mars", "Venus", "Jupiter", "Saturn"]
planets3.slice(2); // ["Venus", "Jupiter", "Saturn"]
// Якщо значення begin негативне, а end не вказано, будуть скопійовані останні begin елементів (тобто стільки елементів з кінця, скільки вказано в параметрі begin):
const planets4 = ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'];
planets4.slice(-2); // ["Jupiter", "Saturn"]

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// ex1 firstTwoEls - масив із перших двох елементів, nonExtremeEls - масив з усіх елементів, крім першого та останнього, lastThreeEls - масив із трьох останніх елементів:
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, fruits.length - 1);
const lastThreeEls = fruits.slice(-3);

// Метод concat(arr1, arr2, ..., arrN) - для об'єднання двох або більше масивів.

let firstArray = ['Mercury', 'Venus'];
let secondArray = ['Mars', 'Jupiter'];
let result2 = firstArray.concat(secondArray); // ["Mercury", "Venus", "Mars", "Jupiter"];
// Зверни увагу, що вихідні масиви firstArray і secondArray залишаються незмінними після виклику concat(). Метод concat() створює і повертає новий масив, що містить усі елементи об'єднаних масивів.
// Порядок аргументів методу визначає порядок розташування елементів у новому масиві.
firstArray = ['Mercury', 'Venus'];
secondArray = ['Mars', 'Jupiter'];
let thirdArray = ['Saturn', 'Neptune'];

console.log(firstArray.concat(secondArray, thirdArray));
// ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Neptune'];

console.log(firstArray.concat(thirdArray, secondArray));
// ['Mercury', 'Venus', 'Saturn', 'Neptune', 'Mars', 'Jupiter', ];

// Метод масиву indexOf(elem) використовується для визначення індексу першого входження елемента elem у масиві. Він повертає індекс елемента, якщо він знайдений, або -1, якщо елемент не знайдений. Метод indexOf() виконує сувору рівність (===) при порівнянні елементів.
const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi', 'Poly'];
console.log(clients.indexOf('Poly')); // 2
console.log(clients.indexOf('Monkong')); // -1
// ex Доповни код функції getSlice(array, value) так, щоб вона виконувала пошук значення value у масиві array і повертала: - порожній масив, якщо в array немає елемента зі значенням value; - підмасив, що починається з початку array і до елемента зі значенням value включно, якщо такий елемент є в array
function getSlice(array, value) {
  if (array.indexOf(value) === -1) {
    const newArray = [];
    return newArray;
  } else {
    const indexValue = array.indexOf(value) + 1;
    const newArray = array.slice(0, indexValue);
    return newArray;
  }
}
console.log(
  getSlice(['You', 'are', 'a', 'freak', 'like', 'everyone', 'else'], 'freak')
);
console.log(
  getSlice(['You', 'are', 'a', 'freak', 'like', 'everyone', 'else'], 'uhh')
);
console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Ajax'));

// Метод масиву push() використовується для додавання одного або більше елементів у кінець масиву.
let planetsS = ['Earth', 'Mars', 'Venus'];
planetsS.push('Jupiter');
console.log(planetsS); // ['Earth', 'Mars', 'Venus', 'Jupiter']

planetsS.push('Saturn', 'Neptune');
console.log(planetsS); // ['Earth', 'Mars', 'Venus', 'Jupiter', "Saturn", "Neptune"]
// За допомогою циклу ми можемо виконувати повторювані операції і використовувати метод push для додавання нових елементів у масив на кожній ітерації. Це дуже корисно, коли нам потрібно створити масив з елементами, які можна динамічно додавати.
const tags = [];
for (let i = 0; i < 3; i += 1) {
  tags.push(`tag-${i}`);
}
console.log(tags); // ["tag-0", "tag-1", "tag-2"]

const friends = ['Rachel', 'Monika', 'Phoebe', 'Joey', 'Chandler', 'Ross'];
for (let i = 0; i < friends.length; i++) {
  friends[i] += '!';
}
console.log(friends); // ["Rachel!", "Monika!", "Phoebe!", "Joey!", "Chandler!","Ross!"]

// ex щоб вона повертала масив усіх цілих чисел від значення min до max включно.
function createArrayOfNumbers(min, max) {
  let numbers = [];
  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }
  return numbers;
}
console.log(createArrayOfNumbers(1, 3));

//  Ітерація по масиву з використанням циклу for дозволяє перебрати елементи масиву і виконати певну дію для кожного елемента.
const planets7 = ['Earth', 'Mars', 'Venus'];
for (let i = 0; i < planets7.length; i += 1) {
  console.log(planets7[i]);
}
// ex параметр order - масив чисел. Функція, щоб  поверта загальну суму елементів з масиву order.
function calculateTotalPrice(order) {
  let sum = 0;
  for (let i = 0; i < order.length; i += 1) {
    console.log(order[i]);
    sum += order[i];
  }
  return sum;
}
console.log(calculateTotalPrice([15, 20, 15]));
// ex Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами. Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end. Якщо жодного парного числа немає, то масив має бути пустим. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0). Використовуй цикл for.
// function getEvenNumbers2(start, end) {
//   let arry = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       arry.push(i);
//       console.log(arry);
//     } else {
//       arry = [];
//     }
//   return arry;
// }
// }
// console.log(getEvenNumbers2(2, 10));

// Метод масиву includes() використовується для перевірки наявності певного елемента в масиві. Він повертає логічне значення true, якщо елемент знайдено в масиві, і false, якщо елемент відсутній.
const planetas = ['Earth', 'Mars', 'Venus'];

console.log(planetas.includes('Earth')); // true
console.log(planetas.includes('Mars')); // true
console.log(planetas.includes('Venus')); // true
console.log(planetas.includes('Jupiter')); // false
// ex Функція checkStorage(storage, item) приймає два параметри: - storage - масив рядків, що описує доступні товари на складі; - item - рядок з назвою товара, наявність якого потрібно перевірити. Доповни код функції таким чином, щоб вона перевіряла, чи присутній такий товар в масиві storage і повертала: - рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено; - рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві/    Зроби так, щоб пошук за ім'ям товару був незалежний від регістру, тобто наприклад "plum" і "pLuM" мають бути знайдені у масиві ["apple", "plum", "pear"].
// function checkStorage(storage, item) {
//   const storageNorm = storage.toLowerCase;
//   const itemNorm = item.toLowerCase;
//   const message = storageNorm.includes(itemNorm) ? `${item} is available to order!` : 'Sorry! We are out of stock!';
//   return message;
// }

// function checkStorage2(storage2List, itemm) {
//   let storage2ListNorm = storage2List.toLowerCase;
//   let itemmNorm = itemm.toLowerCase;
//   const message = storage2ListNorm.includes(itemmNorm) ? `${itemmNorm} is available to order!` : 'Sorry! We are out of stock!';
// return message;
// }

// function checkStorage2(storage2List, itemm) {
//   let storage2ListNorm = storage2List.toLowerCase;
//   console.log(storage2ListNorm);

//   let itemmNorm = itemm.toLowerCase;
//   if (storage2ListNorm.includes(itemmNorm)) {
//     return `${itemmNorm} is available to order!`;
//   }  else {
//   return 'Sorry! We are out of stock!';
//   }
// }
// console.log(checkStorage2(["a", "b", "c"], "C"));
//   console.log(checkStorage2(["a", "b", "c"], "t"));

// Цикл for...of — це зручний спосіб перебору масиву. Тіло циклу буде виконуватися на кожному елементі масиву. Це гарна заміна циклу for, якщо не потрібен доступ до лічильника.Цикл for...of завжди перебирає масив від першого і до останнього елемента, задати умову припинення циклу не можна. Якщо необхідно закінчити виконання циклу передчасно, використовується оператор break.
const planetsSS = ['Earth', 'Mars', 'Venus'];
for (const planet of planetsSS) {
  console.log(planet);
}
// ex функція, що поверта загальну суму чисел в масиві order. Використай цикл for...of для перебору масиву.
function calculateTotalPrice21(order) {
  let total = 0;
  for (const item of order) {
    total += item;
  }
  return total;
}
console.log(calculateTotalPrice21([21, 44, 6, 78, 53]));

// Псевдомасив arguments - Доступ до списку всіх аргументів можна отримати за допомогою спеціальної змінної arguments.  Змінна arguments автоматично створюється всередині функції під час виклику функції з аргументами і заповнюється переданими значеннями аргументів..
// Ця колекція схожа на масив, але насправді є псевдомасивом, тобто: - у неї є деякі властивості масивів, наприклад length; - у неї є можливість звернутися до елемента за індексом; - у неї немає методів для роботи з масивом; - її можна перебирати за допомогою циклів.
// arguments потрібен нам коли в аргументах під час виклику функції довільна їх кількість тоді через arguments ми можемо створити їх псевдомасив потім через Array.from() перетворити псевдомасив на масив і працювати вже з ним
function multiply() {
  let total = 1;
  for (const arg of arguments) {
    total *= arg;
  }
  return total;
}
console.log(multiply(1, 2, 3)); //  6
console.log(multiply(1, 2, 3, 4)); //  24
console.log(multiply(1, 2, 3, 4, 5)); //  120

// метод Array.from(), який створить масив із псевдомасиву, якщо під час роботи з arguments потрібно використовувати методи масиву.
// метод Array.isArray(те що перевірятиметься ) - використовують щоб перевірити що це масив, він поверне тру якщо це масив і фолс якщо ні
function makeArrayofArguments() {
  // У змінній args буде повноцінний масив з усіх аргументів
  const args = Array.from(arguments);
  return args.join('-');
}
console.log(makeArrayofArguments(1, 2, 3)); // Поверне "1-2-3"

//  метод масиву toReversed() - повертає новий масив з елементами у зворотньому порядку.
// ex функція приймає довільну кількість аргументів і повертає масив усіх аргументів, які ідуть у зворотному порядку.
function createReversedArray() {
  const ars = Array.from(arguments);
  return ars.toReversed();
}
console.log(createReversedArray('битися', 'не можна', ',', 'відступити'));

//                                             FUNCTION'S PROPERTIES
// Параметри за замовчуванням - необов'язкові параметри. Ці значення використовуються в тому випадку, якщо функція викликається без передавання відповідного аргументу для цього параметра. Значенням за замовчуванням може бути будь-який тип даних.
function greet(username = 'Guest') {
  console.log(`Hello, ${username}!`);
}
greet('Jacob'); // "Hello, Jacob!"
greet(); // "Hello, Guest!"
// ex amount - число, сума від якої потрібно обчислити податок (oбов'язковий параметр).taxRate - число, податкова ставка(nеобов'язковий параметр). За замовчуванням його значення має бути 0.2.функція повертає суму податку
function calculateTax(amount, taxRate = 0.2) {
  return amount * taxRate;
}

// Функціональний вираз (function expression) — звичайне оголошення змінної, значенням якої буде функція. Це альтернативний спосіб оголошення функції.
// const multiply = function (x, y, z) {
//   console.log(x * y * z);
// };
// Синтаксис оголошення функції, який ти вже знаєш (function declaration):
function multiplyY(x, y, z) {
  console.log(x * y * z);
}
// Різниця в тому, що function expression не можна викликати до місця його створення, тільки після, тому що це буквально оголошення const змінної. A оголошення функції (function declaration) можна викликати до місця її створення в коді.
// Не важливо, який синтаксис використовувати, головне, щоб код у проєкті був однорідним. Тобто необхідно намагатися не змішувати оголошення функції (function declaration) з функціональними виразами (function expression), щоб писати більш стандартизований зрозумілий код.

//                                        SCOPE (Область видимості)
// Область видимості (scope) — механізм, який визначає доступність змінних у коді, що виконується.
// Ланцюжок областей видимості (scope chain) — області видимості утворюють ієрархію, так що дочірні області мають доступ до змінних із батьківських областей, але не навпаки.
// Інтерпретатор намагається спочатку знайти змінну в тій області видимості, в якій до неї звернулися. Якщо такої змінної в локальній області видимості немає, то він виходить назовні, на один рівень за спробу, доки не знайде значення або не дійде до самої верхньої області видимості (глобальної) і зрозуміє, що змінну з таким ідентифікатором неможливо знайти, тому що її просто немає, тоді буде помилка про те, що змінна не оголошена.

//                                              Стек викликів

// JavaScript — однопотокова мова, тобто в одну одиницю часу може виконуватися тільки одна інструкція. Це означає, що вже викликані функції, які не закінчили своє виконання, повинні чекати виконання функцій, викликаних усередині себе, для того щоб продовжити свою роботу.
// Стек викликів(call stack) -  механізм зберігання списку функцій, які були викликані, але ще не закінчили своє виконання, і механізм управління послідовністю виконання цих функцій, щоб код працював контрольовано й очікувано.
// Стек — структура даних, яка працює за принципом LIFO (Last-In-First-Out), тобто останнім прийшов — першим вийшов. Останнє, що додається на стек, буде видалено з нього першим, значить, можна додати або видалити елементи тільки з верхівки стека.
// Стек викликів (call stack) — це структура даних, яка допомагає інтерпретатору відстежувати послідовність і стан викликів функцій у програмі. Він показує, яка функція зараз виконується і яка буде викликана наступною.
// 1) в коді викликається функція, інтерпретатор додає її в стек викликів і починає виконання. 2)Будь-які функції, викликані виконуваною функцією, додаються до стеку викликів і виконуються, щойно відбувається їхній виклик. 3)Коли виконання функції завершено, інтерпретатор знімає її зі стеку викликів і відновлює виконання коду з тієї точки, де зупинився до цього. 4)Далі починає виконуватися функція, запис якої лежить наступною на стеку.
// Stack frame (кадр стека, запис стека) — структура, яка додається на стек при виклику функції, вона зберігає службову інформацію (ім'я функції та номер рядка, у якому стався виклик).
// Переповнення стека (stack overflow) - помилка в консолі "Uncaught RangeError: Maximum call stack size exceeded", стек викликів не безмежний, йому відводиться кінцевий обсяг пам'яті.
// Рекурсія - функція викликає сама себе, якщо йдуть нескінченні виклики функцій і результат не повертається, то стек збільшується. По досягненню межі кількості записів стека і виникне  помилка переповнення стека, і скрипт "падає".

// Шпаргалка з оголошення функцій у JS:
// Функціональний вираз (function expression)
// const greet = function (name) {
//  return `Hello, ${name}`;
// };
// Оголошення функції (function declaration)
// function greet(name) {
//  return `Hello, ${name}!`;
// }
// Для того, щоб щось повернути з функції/методу або умови, можна використовувати оператор return. Також з функції можна повертати відразу будь-який тип даних, наприклад return 'hello' // (повернемо рядок) чи return true // (повернемо буль) чи return [1, 2] // (повернемо масив)
// Паттерн раннє повернення, говорить про те, що якщо умова всередині нашего if повертає true, то нам одразу же треба щось повернути із тіла цієї умови, з допомогою return.
// Не забувайте, що оператор = це оператор присвоєння, а не порівняння.
// Декілька лайфхаків при роботі з масивами.
// Як швидко очистити масив
// const fruits = ['banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple'];
// fruits.length = 0;
// console.log(fruits); // поверне []
// Як об'єднати більше двох масивів
// const fruits = ['apple', 'banana', 'orange'];
// const meat = ['poultry', 'beef', 'fish'];
// const vegetables = ['potato', 'tomato', 'cucumber'];
// const food = [...fruits, ...meat, ...vegetables];
// console.log(food); // поверне ["apple", "banana", "orange", "poultry", "beef", "fish", "potato", "tomato", "cucumber"]
// Як отримати рандомне значення масиву
// const fruits = [ 'banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple', ];
// const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
// console.log(randomFruit); // поверне рандомний фрукт із масиву

//                                                   Lections modul #3
// ex напиши скрипт для обчислення площі прямокутника сторони якого подаються у типі рядка , цифри розділені пробілом.
function squareOfRectangle(valueLengthOfFigure) {
  const arrayValue = valueLengthOfFigure.split(' ');
  let square = 0;
  for (let i = 0; i < arrayValue.length; i += 1) {
    square =
      Number.parseFloat(arrayValue[0]) * Number.parseFloat(arrayValue[1]);
  }
  return `The square of rectangle is ${square}`;
}
console.log(squareOfRectangle('5см 7.2см'));

// скрипт пыдраховуэ суму всых парних елементів у масиві
function totalOfElementss(array) {
  let total = 0;
  for (const element of array) {
    // або !(element % 2)
    if (element % 2 === 0) {
      total += element;
    }
  }
  return total;
}
console.log(totalOfElementss([2, 3, 4, 5]));
// варіант 2 - якщо непарне число то воно потрапляє в дужки иф де оператор континью тобто переходимо до наступного елемента, якщо він парний то в тіло іф не потрапляє а потрапляє в тіло фор і додається в суму парних чисел
function totalOfElementssі(array) {
  let total = 0;
  for (const element of array) {
    if (element % 2 !== 0) {
      continue;
    }
    total += element;
  }
  return total;
}

// скрипт виводить ім*я та телефон користувача , у змінних name, phone зберігаються рядки розділені комами.Порядковий номер тел та імені відповідні і кількість їх однакова.
const namee = 'Neo, Clar, Jacob';
const phonee = '0956717633, 0990345678, 0632456766';
const arrayNamee = namee.split(',');
const arrayPhonee = phonee.split(',');
for (let i = 0; i < arrayNamee.length; i++) {
  console.log(`${arrayNamee[i]} - ${arrayPhonee[i]}`);
}

// скрипт виводить у консоль всі слова рядка крім першого і останнього, результуючий рядок не повинен починатися або закінчуватися символом пробілу.
const stringS =
  '  Це різниця між (function expression) та (function declaration) в тому, що function expression не можна викликати до місця його створення, тільки після, тому що це буквально оголошення const змінної';
const stringApdate = stringS.trim().split(' ');
const shifted = stringApdate.shift();
const popped = stringApdate.pop();
console.log(stringApdate);
const strinGGG = stringApdate.join(' ').trim();
console.log(strinGGG);
// ex
function numberOfItemsFromArray(items) {
  for (let i = 0; i < items.length; i++) {
    console.log(`${i + 1} - ${items[i]}`);
  }
}
console.log(numberOfItemsFromArray(['mango', 'apple', 'peach', 'banana']));

// ex функція переведе кількість хвилин у рядок у форматі годин та хвилин ХХ:ХХ
function formatTime2(totalMinutes) {
  const hourS = Math.floor(totalMinutes / 60);
  const minuteS = totalMinutes % 60;
  const hoursString = String(hourS).padStart(2, '0');
  const minutesString = String(minuteS).padStart(2, '0');
  return `${hoursString}:${minutesString}`;
}
console.log(formatTime2(1030));
// функція розбиває масив на потрібну кількість елементів розділяючи на декілька масивів , приймає 2 параметри - масив і потрібну к-ть ел в масиві. Повертає масив масивів.
function arrayCut(arrar, count) {
  const arrayCommun = [];
  for (let i = 0; i < arrar.length; i += count) {
    const arraySubordinate = arrar.slice(i, i + count);
    arrayCommun.push(arraySubordinate);
  }
  return arrayCommun;
}
console.log(
  arrayCut(
    [
      'apple',
      'banana',
      'orange',
      'poultry',
      'beef',
      'fish',
      'potato',
      'tomato',
      'cucumber',
    ],
    3
  )
);
