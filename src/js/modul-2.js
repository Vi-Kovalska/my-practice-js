'use strict';
// const username = "Vika";
// const age = 25;
// const message = `Hello ${username}! Your age is ${age}.`;
// console.log(message);
// const agePets = null;
// console.log(typeof typeof agePets);

// Statement if
function checkPassword(password, userName) {
  const truePassword = 'hellokitty21';
  if (password === truePassword) {
    return `Welcome ${userName}!`;
  }
}

const result1 = checkPassword('hsgirl37', 'Kris');
const result = checkPassword('hellokitty21', 'Viktoriia');
console.log(result);
console.log(result1);

// Statement if...else - якщо умова (condishion) перетворюється до true то виконується код блоку if (if block statments); якщо умова (condishion) перетворюється до false то виконується код блоку else (else block statments);
function checkAccountBalance(cashBalance) {
  if (cashBalance > 250) {
    return 'You can to connect a Premium subscription.';
  } else {
    return 'Top up your account with $250 to activate a premium subscription.';
  }
}
const cheking1 = checkAccountBalance(0);
const cheking2 = checkAccountBalance(400);

console.log(cheking1, cheking2);

//  Statement else...if використовуємо коли більше 1 умови. Як тільки якась умова задовільняється то інструкція припиняється.
function checkStorage(available, ordered) {
  if ((available > 0, ordered === 0)) {
    return 'There are no products in the order!';
  } else if (ordered > available) {
    return 'Your ordered is too large, there are not enough items in stock!';
  } else {
    return 'The ordered is accepted, our manager will contact you.';
  }
}
let a = checkStorage(3, 0);
let b = checkStorage(30, 50);
let c = checkStorage(60, 10);

console.log(a, b, c);

//  Тернарний оператор - коротша заміна if...else, у нього може бути тільки 2 сценарія - condition ? expression if condition is TRUE : expression if condition is FALSE
let type;
const age = 20;
if (age >= 18) {
  type = 'adult';
} else {
  type = 'child';
}
console.log(type);
// EXAMPLE 1
const yourAge = 20;
const yourType = age >= 18 ? 'adult' : 'child';
console.log(yourType);
// EXAMPLE 2
function checkPassword2(password) {
  const correctPassword = 'jqueryismyjam';
  return password === correctPassword
    ? 'Access granted'
    : 'Access denied, wrong!';
}
const a1 = checkPassword2('incorrectPassword');
const a2 = checkPassword2('jqueryismyjam');

console.log(a1, a2);

// Operator switch - дозволяє виконувати різні дії залежно від значення виразу (expression). Якщо значення виразу відповідає значенню в блоці case то виконується код цього блоку. Оператор break, щоб вийти зі switc (це запобігає виконанню клоду у наступних блоках case). Якщо жодне значення не відповідає виразу то виконується код з блоку default в самому кінці (якщо він є).
function yourCountry(country) {
  switch (country) {
    case 'Ukraine':
      console.log('Вітаю, як ся маєш?');
      break;
    case 'England':
      console.log('Hello, how are you?');
      break;
    case 'Spain':
      console.log('Hola, cómo estás?');
      break;
    case 'Belgium':
      console.log('Hallo, hoe gaat het?');
      break;
    case 'Germany':
      console.log('Hallo, wie geht es dir?');
      break;
    case 'France':
      console.log('Salut comment vas-tu?');
      break;
    default:
      console.log('Hello, how are you?');
  }
}
yourCountry('Spain');
yourCountry('Ukraine');
yourCountry('Belgium');

//  fall-through - провалювання коду, якщо не вказати оператор break у блоці switch то виконання коду продовжиться у наступному  case; це якщо потрібно щоб кілька блоків case виконували один і той самий код
const expression = 10 - 5;
switch (expression) {
  case 2:

  case 5:
    console.log('The result is less than 8');
    break;

  case 8:
    console.log('The result is 8');
    break;
  default:
    console.log('The result does not exist');
}
// The result is less than 8

// Boolean operators: &&(і) ||(або) !(ні) ??
// expression1 && expression2 - бінарний оператор і зліва направо перевіряє почергово обидва операнди на істинність та повертає або значення останнього істинного (тільки правого) операнда, або першого хибного (лівого чи правого) на якому він запнувся. Якщо операндами є вирази то спочатку обчисл вирази а потім їх порівнюють
function typeScreen(screenWidth) {
  const sm = 320;
  const md = 768;
  const lg = 1200;

  if (screenWidth <= sm) {
    return 'Mobile screen';
  } else if (screenWidth > sm && screenWidth <= md) {
    return 'Tablet screen';
  } else if (screenWidth > md && screenWidth <= lg) {
    return 'Desktop screen';
  } else {
    return 'Godzilla screen';
  }
}
const ba = typeScreen(200);
const bb = typeScreen(420);
const bc = typeScreen(980);
const bd = typeScreen(1800);

console.log(ba, bb, bc, bd);
// EXAMPLE 2 && - функція повертає результат входження числаNumber у числовий проміжок від start до end
function isNumberInRange(start, end, number) {
  return number >= start && number <= end;
}

const ca = isNumberInRange(20, 150, 40);
const cb = isNumberInRange(25, 35, 15);

console.log(ca, cb);
// expression1 || expression2 - бінарний оператор або перетворює всі операнди до логічного типу (true або false) і повертає значення одного з них. Як тільки оператор або знайшов  перший операнд що перетворюється на true він зупиняється та пповертає його значення. Якщо всі операнди перетворюються на false то результатом буде значення крайнього правого операнда
const f = 'mango' || 0;
console.log(f, typeof f);

const v = undefined || 2;
console.log(v, typeof v);

const y = true || false;
console.log(y, typeof y);

const g = '' || null;
console.log(g, typeof g);
// EXAMPLE 1
function checkAccess(subType) {
  return subType === 'pro' || 'vip';
}
const h = checkAccess('pro');
const j = checkAccess('super');

console.log(h, j, typeof h, typeof j);
// !expression - унарний (один операнд) логічний оператор ні приводить до логічного значення (true або false) і потім заперечує його(змінює на протилежне значення).
console.log(!true);
console.log(!false);
console.log(!'');
console.log(!3);
console.log(!null);
console.log(!undefined);
console.log(!'Masha');
// На практиці логчне заперечення викор для перевірки від зворотнього, напр можна дозволити написати повідомлення в чаті лише якщо користувач НЕ заблокований
function chat(isBlocked) {
  const canChat = !isBlocked;
  if (canChat) {
    return 'Can type in chat.';
  } else {
    return 'Blocked from typing in chat!';
  }
}

const la = chat(false);
const lo = chat(true);

console.log(la, lo);

// Оператор нульового злиття (??) - Це логічний оператор, що повертає значення правого операнда, якщо значення лівого операнда містить null або undefined, інакше повертається значення лівого операнда.
let firstName = null;
let nickName = 'Super';
console.log(firstName ?? nickName ?? 'Anonim');
console.log(nickName ?? firstName ?? 'Anonim');

const foo = null ?? 'string';
const valB = '' ?? 'B';
console.log(foo);
console.log(valB); // "" (поскольку пустая строка не приравнивается к null или undefined)

const valC = 42 ?? 0;
const baz = 0 ?? 42;
console.log(valC); // 42
console.log(baz); // 0

// Methods of strings:
// The method indexOf() - для пошуку першого входження підрядка в рядок. Він повертає: -індекс першого входження (індекс першого символу) підрядка, якщо він знайдений або: -1, якщо підрядок не виявлено.
// The method slice() - для створення копії частини або всього рядка без зміни оригінального рядка. Він дозволяє витягувати підрядок з вихідного рядка, вказуючи початковий та кінцевий індекси. str.slice(startIndex, endIndex), де: str — вихідний рядок, з якого робитиметься копія. startIndex — індекс, з якого починається копіювання елементів рядка.endIndex — індекс, до якого (не включаючи) йде копіювання елементів рядка. Якщо викликати метод slice() без аргументів, він створює точну копію рядка і повертає її.
function getFileName(file) {
  const fileCheck = file.indexOf('.');
  if (fileCheck === -1) {
    return file.slice();
  } else {
    return file.slice(0, file.indexOf('.'));
  }
}
const yy = getFileName('index.app');
const xx = getFileName('script');
console.log(yy, xx);

//   Methods toLowerCase() та toUpperCase() використовуються для зміни регістру символів у рядку. Обидва методи не змінюють вихідний рядок, а повертають новий рядок у відповідному регістрі. Нормалізація введення - можна зробити «нормалізацію» введеного користувачем рядка, тобто перетворити всі його символи у верхній або нижній регістр:
const brandName = 'samsung';
const userInput = 'saMsUng';
const lowercaseInput = userInput.toLowerCase();
// EXAMPLE of using methods
function normalizeInput(input, to) {
  switch (to) {
    case 'upper':
      return input.toUpperCase();
      break;
    case 'lower':
      return input.toLowerCase();
      break;
  }
}
const rr = normalizeInput("This ISN'T SpaM", 'lower');
const dd = normalizeInput("This ISN'T SpaM", 'upper');
console.log(rr, dd);

//   The method includes() - використовується для перевірки наявності підрядка у рядку. Він повертає логічне значення true, якщо підрядок знайдено, і false, якщо підрядок відсутній.
// Example 1
const message = 'Please buy our stuff!';
const hasSpam = message.includes('buy');

if (hasSpam) {
  console.log('Warning: This message contains forbidden words.');
} else {
  console.log('You can safely open this message.');
}
// Ex 2
function checkForName(fullName, firstName) {
  fullName = fullName.toUpperCase();
  firstName = firstName.toUpperCase();
  return fullName.includes(firstName);
}

// Methods startsWith() і endsWith() - призначені для перевірки початку й закінчення рядка відповідно. Вони повертають булеве значення true або false, залежно від того, чи відповідає початок або кінець рядка заданому значенню. Чутливі до регістру (зроби нормалізацію).
function checkFileExtension(fileName, ext) {
  if (fileName.endsWith(ext)) {
    return 'File extension matches';
  } else {
    return 'File extension does not match';
  }
}
const jj = checkFileExtension('styles');
const uu = checkFileExtension('script', '.js');
const ll = checkFileExtension('index.html', '.html');
console.log(jj, uu, ll);
// The method trim() - для видалення початкових і кінцевих пробілів із рядка. Це дозволяє "очистити" рядок від зайвих пробілів.
function createFileName(name, ext) {
  const pureName = name.trim();
  const pureExt = ext.trim();
  return `${pureName}.${pureExt}`;
}
const hh = createFileName('  index   ', '   html');
console.log(hh);

// Області видимості - глобальна (її змінні буде видно в локальних) та локальна (її значення доступні тільки в її області і їх не видно в глобальній обл). Коли ми викликаємо якусь змінну то система перевіряє її видимість тільки піднімаючись по вкладеності на вищі рівні - тобто якщо локальна обл №2 вкладена в локальну обл №1 то буде видно змінну з локальної№1 у локальній№2 але не буде видно локальну#2 e kjrfkmysq #1.
if ('#1') {
  const a = 5;

  if ('#2') {
    const b = 7;
    console.log(a);
  }
}
// Cicles
// Цикл — керуюча конструкція, призначена для організації багаторазового виконання набору інструкцій. Тіло циклу — послідовність інструкцій, призначена для багаторазового виконання. Ітерація — одиничне виконання тіла циклу. Умова виходу — вираз, що визначає, чи буде в черговий раз виконуватися ітерація, або цикл завершиться.

// Цикл while - kонструкція while створює цикл, який виконує блок коду в тілі циклу, поки умова для виходу оцінюється як true.Якщо умова оцінюється як false, виконання циклу переривається і скрипт продовжує виконувати інструкції після циклу. Цикл while часто використовується, коли точна кількість ітерацій заздалегідь не відома. Отже, цикл має виконуватися до виконання певної умови.      Цикл while — це цикл з передумовою, тобто він виконується доки істинна певна умова, зазначена перед його початком. Цю умову перевіряють до виконання тіла циклу, тому тіло може бути не виконано жодного разу, якщо умова від самого початку хибна.
// EXAMPLE of cicle while
let count = 0;
while (count < 10) {
  console.log(`Count: ${count}`);
  count += 1;
}
// Ex 2
let clientRoom = 18;
const maxRooms = 25;
while (clientRoom < maxRooms) {
  console.log(clientRoom);
  clientRoom += 1;
}
// Ex3 Функція calculateSum(number) приймає ціле число (параметр number). Доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.
function calculateSum(number) {
  let counter = 0;
  let total = 0;
  while (counter <= number) {
    total += counter;
    counter++;
  }
  return total;
}
const pf = calculateSum(3);
console.log(pf);

// Цикл do…while - відмінність від while - код у тілі циклу виконується принаймні один раз, навіть якщо умова не виконується з самого початку. Блок коду всередині do виконується в перший раз незалежно від виконання умови, потім після кожної ітерації, перевіряється умова. Якщо умова оцінюється як true, цикл продовжує виконуватися; якщо — як false, цикл завершується.
// do {
//   statement // код, який буде виконуватися
// } while (condition);

// let numb = 0;

// do {
// 	console.log(`Numb: ${numb}`);
// 	numb += 1;
// } while (numb < 5);

// Цикл for на відміну від циклів while і do…while -  має змінну-лічильник. Змінна-лічильник оголошується за допомогою ключового слова let (const видасть помилку). На кожній ітерації після виконання коду з тіла циклу вона змінює своє значення від заданого початкового до кінцевого з певним кроком. Синтаксис циклу for:
// for (initialization; condition; afterthought) {
//   statement // Тіло циклу
// }
// Ініціалізація — виконується один раз перед початком циклу. Тут оголошується змінна-лічильник і вказується її початкове значення.
// Умова — це вираз, який оцінюється перед кожною ітерацією (повторенням) циклу. Якщо умова перетворюється на**true**, то виконується тіло циклу. Якщо умова перетворюється на false, то цикл завершується.
// Пост-вираз — це вираз, який виконується в кінці кожної ітерації циклу, перед перевіркою умови. Використовується для оновлення значення змінної-лічильника.
// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }
// У наведеному прикладі циклу for змінна i ініціалізується значенням 0. Цикл виконується доти, доки i менша або дорівнює 20. Після кожної ітерації значення i збільшується на 5. У результаті в консоль будуть виведені числа 0, 5, 10, 15 і 20.
// Example calculateTotal(number) приймає ціле число (параметр number) Використовуючи цикл for, доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.
function calculateTotal(number) {
  let sum = 0;
  for (let i = 1; i <= number; i += 1) {
    sum += i;
  }
  return sum;
}
const yeh = calculateTotal(3);
console.log(yeh);
// EXAMPLE CYCLE FOR - функція рахує суму(тотал) чисел що кратні 2(діляться націло на 2) і знаходять в діапазоні від мін до мах
function Calc(min, max) {
  let total = 0;
  for (let i = min; i <= max; i++) {
    if (i % 2 === 0) {
      total += i;
    }
  }
  return total;
}

let ghhg = Calc(0, 5);
console.log("OMG it's total!", ghhg);

// Виводимо НЕПАРНІ ЧИСЛА за допомогою  логічного заперечення ! та нічого з ними не робимо а через оператор контінью просто продовжуємо ітерацію циклю таким чином ми будемо збільшувати непарні числа на крок 1 і матимемо ПАРНІ ЧИСЛА. після завершення циклу рахуємо суму
function Calc2(min, max) {
  let total = 0;
  for (let i = min; i <= max; i++) {
    if (i % 2 !== 0) {
      continue;
    }
    console.log(i);
    total += i;
  }
  return total;
}

let pppp = Calc2(0, 5);
console.log("OMG these're numbers!", pppp);

// EXAMPLE виводимо індекси символів із рядка за допомогою цикла FOR
function strJust(justString) {
  for (let i = 0; i < justString.length; i++) {
    console.log(justString[i], i);
  }
}
const justSymbolsOfString = strJust(
  'You are the better version yourself today'
);

// //
// function calculateEvenTotal(number) {
//   let sum = 0;
//   let count = 1;
//   for (let i = 1; i <= number; i += 1) {
//     count++;
//     if (count % 2 === 0) {
//       sum += count;
//     }
//   }
//   return sum;
// }
// const www = calculateEvenTotal(18);
// console.log(www);

// Інкремент постфіксний - спочатку матем вираз рахується потім інкремент змінної (+1). При наступному використанні ця змінна буде збільшена вже на одиницю
function calcNum(f, d, b) {
  //          2 + 9 = 11
  const sum = f++ + d * b;
  //         11 + (2+1) = 14
  return sum + f;
}
const yee = calcNum(2, 3, 3);
console.log(yee);

// // Інкремент префіксний - спочатку (змінна +1) потім рахується математ вираз
function calcNum2(f, d, b) {
  //       (2+1) +   9    = 12
  const sum = ++f + d * b;
  //       12  + 3 = 15
  return sum + f;
}
const yee2 = calcNum2(2, 3, 3);
console.log(yee2);

//                                             CONTENT OF THE WORK
function communication(client, status, age) {
  let speech;
  if ((status = 'smokes cigarettes' && age >= 18)) {
    switch (client) {
      case 'premium':
        return (speech =
          'В наявності Marlboro Tach у чорному дизайні та новому форматі у 6 та 4 мг за ціною 100 грн. Продукти мають фільтр з повітряною камерою та ущільненою стінкою.');
      case 'medium' && 'capsuls':
        return (speech =
          "У L&M та Chesterfield з'явились новинки з капсулами за ціною 85 та 87 грн, вони мають фільтр з повітряною камерою та коричневу обгортку з відновленого тютюну.");
      case 'Philip Morris' && !'capsuls':
        return (speech =
          'У травні 2024 року компанія Філіп Морріс відновила власне виробництво в Україні! Перші продукти з нової фабрики вже в продажу.');
      default:
        return (speech =
          "Проходьте опитування за QR-кодом та залишайтесь на зв'язку зі своїм брендом. За витрачений час ви отримаєте поповнення мобільного на 30 грн.");
    }
  } else {
    return (speech = 'Гарного дня!');
  }
}

// function communication(client, status, age) {
// let speech1 = "В наявності Marlboro Tach у чорному дизайні та новому форматі у 6 та 4 мг за ціною 100 грн. Продукти мають фільтр з повітряною камерою та ущільненою стінкою.";
// let speech2 = "У L&M та Chesterfield з'явились новинки з капсулами за ціною 85 та 87 грн, вони мають фільтр з повітряною камерою та коричневу обгортку з відновленого тютюну.";
// let speech3 = "У травні 2024 року компанія Філіп Морріс відновила власне виробництво в Україні! Перші продукти з нової фабрики вже в продажу.";
// let speech4 = "Проходьте опитування за QR-кодом та залишайтесь на зв'язку зі своїм брендом. За витрачений час ви отримаєте поповнення мобільного на 30 грн.";
// let speech5 = "Гарного дня!";
//  if (status = "smokes cigarettes" && age >= 18) {
//   switch (client) {
//     case "premium":
//       return speech1;
//     case "medium" && "capsuls":
//       return speech2;
//     case "Philip Morris" && !"capsuls":
//       return speech3;
//     default:
//       return speech4;
//   }
// } else {
//   return speech5;
// }
// }

// function friendlyTalk(opposition) {
//   if (opposition = "Вже пробував Мальборо - мені не сподобалось") {
//     return "А що саме вам не сподобалось? Це нові пропозиції від бренду в абсолютно новому форматі та дизайні, можливо саме вони вас зацікавлять"
//   } else if (opposition = "Я вже пробував Мальборо Тач") {
//     return "Дійсно, бренд має Тач у компактному форматі, проте наші новинки мають довшу сигарету, фільтр з повітряною камерою та новий дизайн. Єдине що залишається незмінним - це оригінальний тютюн Мальборо."
//   } else if (opposition = "Що таке фільтр з повітряною камерою?") {
//     return "Це фільтр, що складається з 3 частин: ацетатної, вугільної та повітряної камери. Конструкція фільтру забезпечує самк тютюну більш м'яким та збалансованим."
//   } else if (opposition = "") {
//     return ""
//   } else if (opposition = "") {
//     return ""
//   }
// }

//                                                   PRACTICE MODUL 1-2
// eX1
function typeOF(parametr) {
  if (parametr === 'string') {
    return 'string';
  } else if (parametr === 'number') {
    return 'number';
  } else {
    return 'unknown';
  }
}
// ex2 функція визначає парне чи ні число
function doubleNum(number) {
  //або  number % 2 === 0
  return !(number % 2) ? 'Парне число' : 'Непарне число';
}
console.log(doubleNum(2));
console.log(doubleNum(3));
// ex3
function calculateSquare(value) {
  if (typeof value === 'number') {
    return `The square ${value} is ${Math.pow(value, 2)}`;
  } else if (!(typeof value === 'number') && !(typeof value === 'string')) {
    const valueNumb = Number(value);
    return `The square ${valueNumb} is ${Math.pow(valueNumb, 2)}`;
  } else if (typeof value === 'string' && value.includes('.')) {
    const valueNumb = Number.parseFloat(value);
    return `The square ${valueNumb} is ${Math.pow(valueNumb, 2)}`;
  } else if (!(typeof value === 'number')) {
    const valueNumb = Number(value);
    return `The square ${valueNumb} is ${Math.pow(valueNumb, 2)}`;
  } else {
    return 'Invalide square';
  }
}
console.log(calculateSquare(2));
console.log(calculateSquare(true));
console.log(calculateSquare(null));
console.log(calculateSquare(''));
console.log(calculateSquare('Hello'));
console.log(calculateSquare('3'));
console.log(calculateSquare('3.3px'));

// ex 3 (variable too is not so complex as you wrote...;/)
function calculateSquare2(value) {
  const valueNumb = Number.parseFloat(value);
  if (Number.isNaN(valueNumb)) {
    return 'Invalide square';
  } else {
    return `The square ${valueNumb} is ${Math.pow(valueNumb, 2)}`;
  }
}
console.log(calculateSquare2(10));
console.log(calculateSquare2(true));
console.log(calculateSquare2(null));
console.log(calculateSquare2(''));
console.log(calculateSquare2('Hello'));
console.log(calculateSquare2('3'));
console.log(calculateSquare2('3.3px'));

console.log(Number(''));
// Method isNan - Функция isNaN() определяет является ли литерал или переменная нечисловым значением (NaN) или нет. При работе с функцией необходимо проявлять осторожность так как она имеет свои особенности. В качестве альтернативы можно использовать метод Number.isNaN() из ECMAScript 6, или дополнительно проверять литерал или переменную на нечисловое значение при помощи typeof.
//  метод Math.pow() (степінь) повертає значення основи, піднесене до степеня. Тобто: 𝙼𝚊𝚝𝚑.𝚙𝚘𝚠(𝚡,𝚢) підведе х у степінь у. Або використати оператор **.
// ex4
function checkString(value) {
  if (typeof value === 'string' && !value.includes('$')) {
    return `The length of string is ${value.length} symbols`;
  } else {
    return 'Undefined value';
  }
}
console.log(checkString('Hello'));
console.log(checkString('Hello$'));
console.log(checkString(6));
// ex 5
const string = 'abcde';
if (string[1] === 'b') {
  console.log('Yes');
} else {
  console.log('No');
}
// ex6 вивели парні числа у проміжку 50-23
let max = 50;
let min = 23;
for (let i = max; i >= min; i--) {
  if (i % 2 === 0) {
    console.log(i);
  } else {
    ('Nothing');
  }
}
// ex7 знайшли суму всіх парних чисел у проміжку
max = 50;
min = 0;
let sum = 0;
for (let i = 0; i <= max; i++) {
  if (i % 2 === 0) {
    //      sum=sum+i
    console.log((sum += i));
  }
}
// ex8
sum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
    console.log(`Сума чисел, які діляться на 3 або на 5 від 1 до 100: ${sum}`);
  }
}
// ex9 задані хвилини виводимо у цілих годинах та залишок хвилин
function formatMinutesToTime(minutes) {
  // получаем часы из минут при помощи метода вывода целого числа
  const hours = Math.floor(minutes / 60);
  // приводимо до рядка щоб використати метод рядків padStart()для підставлення на початок рядка 00 замість одного 0
  let modHours = String(hours).padStart(2, '0');
  let modMinutes = minutes % 60;
  modMinutes = String(modMinutes).padStart(2, '0');
  return `${modHours}:${modMinutes}`;
}
console.log(formatMinutesToTime(61));

// метод рядків padStart() заполняет c начала текущую строку другой строкой (несколько раз, если нужно) так, что итоговая строка достигает заданной длины. Заполнение осуществляется в начале (слева) текущей строки. перше значення це загальна кількість символів що буде у рядку а друге значення - те що потрібно підставити
'abc'.padStart(10); // "       abc"
'abc'.padStart(10, 'foo'); // "foofoofabc"
'abc'.padStart(6, '123465'); // "123abc"
// Метод padEnd() дополняет с конца текущую строку с помощью заданной строки (в конечном счёте повторяя), так чтобы результирующая строка достигла заданной длины. Дополнение применяется в конце (справа) текущей строки.
'abc'.padEnd(10); // "abc       "
'abc'.padEnd(10, 'foo'); // "abcfoofoof"
'abc'.padEnd(6, '123456'); // "abc123"
// ex 10 Функція findNumber(start, end, divisor) приймає три параметра, які є цілими числами.Доповни код функції таким чином, щоб вона - повертала перше число у діапазоні від start до end включно, яке ділиться на divisor без остачі; -не використовуй оператор break
function findNumber(start, end, divisor) {
  for (let i = start; i <= end; i++) {
    console.log(i);
    if (i % divisor === 0) {
      return i;
    }
  }
}
console.log(findNumber(10, 100, 7));
// ex 10 Доповни код таким чином, щоб у змінну number записувалося перше число у проміжку від start до end, яке ділиться на 5 без остачі.
const start = 6;
const end = 17;
let number;
for (let i = start; i <= end; i++) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}
console.log(number);
