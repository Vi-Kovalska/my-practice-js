'use strict';
//                                                        MODUL 4 - OBJECTS
// У JavaScript є 8 основних типів даних.
// Сім примітивних типів даних:
// number для будь-яких чисел: цілих або з рухомою точкою. Цілі числа обмежені до ±(253-1).
// bigint для цілих чисел довільної довжини.
// string для рядків. Рядок може мати нуль або більше символів, немає окремого типу для одного символу.
// boolean для true/false.
// null для невідомих значень- автономний тип, який має єдине значення null.
// undefined для не присвоєних значень - автономний тип, який має єдине значення undefined.
// symbol для унікальних ідентифікаторів.

// І один непримітивний тип даних:
// object для складних структур даних.
// На противагу цьому, об*єкти використовуються для зберігання ключів різних колекцій даних та складніших об*єктів.
// Для оголошення об*єкта використовуються фігурні дужки {} — літерал об'єкта.
// При створенні об'єкта до нього відразу можна додати властивості, але це не обов*язково. Кожна властивість обов*язково складається з пари ключ: значення.
// Ключ також називають ім'ям властивості і це зазвичай рядок, якщо в імені більше 1 слова то його поміщають у лапки"".
// Значенням властивості можуть бути будь-які типи: примітиви, масиви, об'єкти, булі, функції тощо.
// Властивості між собою розділяються комою.
// об*єкт apartment містить дані про квартиру і значення ключа owner - це об*єкт з ключами про інформацію власника
const apartment = {
  'img Url': 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};
// Доступ до властивостей через крапку - використовується тоді, коли ми заздалегідь знаємо ім'я (ключ) властивості, до якої хочемо отримати доступ. СИНТАКСИС objectName.key.На місце звернення буде повернуте значення властивості з таким ключем.
const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.38,
};

const bookTitle = book.title;
console.log(bookTitle); // "The Last Kingdom"
const bookGenres = book.genres;
console.log(bookGenres); // ["historical prose", "adventure"]
const bookPrice = book.price;
console.log(bookPrice); // undefined

// Для доступу до вкладених властивостей
// якщо вкладений об*єкт - використовується ланцюжок звернень «через крапку».Тобто «крапка» вказує наступну вкладеність.
const user = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: {
    country: 'Jamaica',
    city: 'Ocho Rios',
  },
  hobbies: ['swimming', 'music', 'sci-fi'],
};

let location22 = user.location;
console.log(location22); // {country: "Jamaica", city: "Ocho Rios"}

const country = user.location.country;
console.log(country); // "Jamaica"

// Якщо значення властивості — це масив, то в нашому прикладі вище звернення до цього масиву буде: user.hobbies
const hobbies = user.hobbies;
console.log(hobbies); // ["swimming", "music", "sci-fi"]
// Отримати доступ до елементів масиву можна через квадратні дужки та індекс: user.hobbies[0];
const firstHobby = user.hobbies[0];
console.log(firstHobby); // "swimming"
// Можна використовувати властивості й методи масиву, наприклад отримати значення його довжини з властивості length: user.hobbies.length;
const numberOfHobbies = user.hobbies.length;
const lastHobies = user.hobbies[hobbies.length - 1];
console.log(numberOfHobbies); // 3

const apartment2 = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

const ownerName = apartment2.owner.name;
const ownerPhone = apartment2.owner.phone;
const ownerEmail = apartment2.owner.email;
const numberOfTags = apartment2.tags.length;
const firstTag = apartment2.tags[0];
// const lastTag = apartment2.tags[tags.length - 1];

//  Другий спосіб отримати доступ до властивості об'єкта через квадратні дужки — це синтаксис objectName["key"]. ВІн використовується якщо назва ключа більша за 1 слово ("назва ключа"). Також такий спосіб спрацює з будь-яким ім*ям властивості:
const book3 = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.38,
};

console.log(book3.title); // "The Last Kingdom"
console.log(book3['title']); // "The Last Kingdom"

console.log(book3.genres); // ["historical prose", "adventure"]
console.log(book3['genres']); // ["historical prose", "adventure"]

const propKey = 'author';
console.log(book3.propKey); // undefined
console.log(book3[propKey]); // "Bernard Cornwell"
// Після того як об'єкт створений, значення його властивостей можна змінити.Для цього необхідно звернутися до них за ключем, наприклад, «через крапку», і присвоїти нове значення.
book3.rating = 9;
book3.isPublic = false;
book3.genres.push('drama');
// ex
const apartment3 = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};
apartment3.price = 5000;
apartment3.rating = 4.7;
apartment3.owner.name = 'Henry Sibola';
apartment3.tags.push('trusted');
// Додавання властивостей об*єкта нічим не відрізняється від зміни значення вже існуючої властивості. Якщо під час запису значення за ключем така властивість відсутня в об'єкті, вона буде створена.
// якщо ви спробуєте додати властивості у ще не створеного об*єкта (властивості) то ви отримаєте помилку. Спочатку ініціалізуйте об*єкт-властивість як порожній об'єкт, а потім додавайте до нього властивості.
book3.pageCount = 836;
book3.originalLanguage = 'en';
book3.translations = ['ua', 'ru'];

book3.price = {};
book3.price = {
  hardcover: 39,
  softcover: 29,
};
console.log(book3.price);

// Іноді під час створення об'єкта значення властивості необхідно взяти зі змінної або параметра функції з таким самим ім'ям, як і сама властивість.
// Синтаксис коротких властивостей (shorthand properties) вирішує цю проблему, дозволяючи використовувати ім'я змінної як ім'я властивості, а її значення як значення властивості.
// Тобто під час оголошення об'єкта достатньо вказати тільки ім'я властивості, а значення буде взято зі змінної з аналогічним ім'ям.
const name4 = 'Henry Sibola';
const age4 = 25;

const user4 = {
  name4,
  age4,
};
console.log(user4);

// Обчислювальні властивості
// Бувають ситуації, коли під час оголошення об'єкта необхідно додати властивість з ім'ям, яке ми заздалегідь не знаємо, тому що воно зберігається як значення змінної або як результат виконання функції.
// Синтаксис обчислювальних властивостей (computed properties) допомагає уникнути зайвого коду і в деяких випадках спростити його. Значенням обчислювальної властивості може бути будь-який валідний вираз.
const propName = 'name';
const user5 = {
  age: 25,
  // ключ цієї властивості буде взято зі значення змінної propName
  [propName]: 'Henry Sibola',
};
console.log(user5.name); // "Henry Sibola"

//                                                      ПЕРЕБІР ОБ*ЄКТА
//                                               - Цикл for...in
// На відміну від масиву або рядка, об'єкт — це не ітерабельна сутність, тобто його не можна перебрати циклами for або for...of.
// Для перебирання об'єктів використовується спеціальний цикл for...in, який перебирає ключі об'єкта object. ВІн має свої побічності - наприклад перебирає ключі прототипа через це додають перевірки.
const book5 = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  rating: 8.38,
};

for (const key in book5) {
  console.log(key); // Ключ
  console.log(book5[key]); // Значення властивості з таким ключем
}
// ex Перебери об'єкт apartment, використовуючи цикл for...in, і запиши в масив keys всі його ключі, а в масив values всі значення його властивостей.
const apartment4 = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};

const keys = [];
const values = [];
for (const key in apartment4) {
  keys.push(key);
  values.push(apartment[key]);
}

console.log(keys, values);
//          - Метод Object.keys(object) приймає об'єкт і повертає масив ключів його властивостей. Якщо в об'єкті немає властивостей, метод поверне порожній масив.
// Скомбінувавши результат Object.keys() і цикл for...of, можна зручно перебрати властивості об'єкта, не вдаючись до використання циклу for...in.
const book6 = {
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  rating: 8.38,
};
const keysArrayOfBook6 = Object.keys(book6);

for (const key of keysArrayOfBook6) {
  console.log(key); // Ключ
  console.log(book6[key]); // Значення властивості
}
// ex Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of. Запиши у змінну keys масив ключів властивостей об'єкта apartment, і додай в масив values всі значення його властивостей.
const apartment6 = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
const apartmentArrayKeys = Object.keys(apartment6);
console.log(apartmentArrayKeys);

const values2 = [];
const keys2 = [];

for (const key of apartmentArrayKeys) {
  values2.push(apartment6[key]);
  keys2.push(key);
}

console.log(values2, keys2);

// Метод hasOwnProperty() возвращает логическое значение, указывающее, содержит ли объект указанное свойство.

// ex РЕФАКТОРИНГ - використати метод Object.keys() і цикл for...of замість циклу for...in. Функція має повернути кількість властивостей в об'єкті object.
// function countProps(object) {
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   return propCount;
// }
function countProps(object) {
  let propCount = 0;
  const arraysKeysOfObject = Object.keys(object);

  const keysObject = [];
  const propertyObject = [];

  for (const key of arraysKeysOfObject) {
    keysObject.push(key);
    propertyObject.push(object[key]);
  }
  propCount = propertyObject.length;
  return propCount;
}
const humanity = {
  species: 'Homo sapiens',
  height: {
    male: 1.7,
    female: 1.6,
  },
  'speed running': {
    male: '13km/h',
    female: '10km/h',
  },
};
console.log(countProps(humanity));

//  метод Object.values(object) повертає масив значень його властивостей. Якщо в об'єкті відсутні властивості, метод Object.values(object) поверне порожній масив. Масив значень властивостей також можна перебрати циклом for...of, наприклад для отримання загальної суми числових значень.
// ex Функція countTotalSalary(salaries) приймає об'єкт зарплат (salaries) в якості параметра. Кожна властивість об'єкта salaries — це ключ, що містить ім'я співробітника, та значення - його відповідна зарплатня. function поверта загальну суму зарплат всіх співробітників.
function countTotalSalary(salaries) {
  let totalSalary = 0;
  const arraySal = Object.values(salaries);
  for (const sal of arraySal) {
    totalSalary += Number.parseFloat(sal);
  }
  const arrayEmployee = Object.keys(salaries);
  return `The total salaries ${totalSalary}$ for ${arrayEmployee.length} employees`;
}
const salariesObject = {
  Kate: '3200$',
  Petya: '4500$',
  Misha: '6700$',
  Anna: '5900$',
};
console.log(countTotalSalary(salariesObject));

//                                                          ARRAY OF OBJECTS
// Для опису групи сутностей використовується масив об'єктів.
// Mасив однотипних об'єктів - всі об'єкти в масиві гарантовано мають однаковий набір властивостей, але з різними значеннями.
// Для перебору такого масиву використовується стандартний цикл for...of.

// Значення властивостей кожного об'єкта можна отримати, використовуючи синтаксис «через крапку» (CONST VALUE = OBJECT.KEY), оскільки в кожному об'єкті набір властивостей та їх імена будуть однакові, відрізнятимуться тільки значення.
// for (const book of books) {
//   console.log(book); // Об'єкт книги
//   console.log(book.title); // Назва
//   console.log(book.author); // Автор
//   console.log(book.rating); // Рейтинг
// }
// ex Масив colors містить колекцію кольорів (objects). Кожен колір представлений об'єктом і має властивості hex і rgb з відповідними для цього формату і кольору значеннями.Перебери масив об'єктів colors, використовуючи цикл for...of. Додай у масив hexColors значення властивостей hex, а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];
const hexColors = [];
const rgbColors = [];
for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}
console.log(hexColors, rgbColors);

// Пошук об'єкта за значенням властивості. Наприклад, потрібно знайти книгу за її автором. Для цього необхідно:
// - перебрати масив у циклі;
// - додати умову, виконання якої означатиме успішний результат пошуку.
const books6 = [
  { title: 'The Last Kingdom', author: 'Bernard Cornwell' },
  { title: 'Beside Still Waters', author: 'Robert Sheckley' },
  { title: 'The Dream of a Ridiculous Man', author: 'Fyodor Dostoevsky' },
];
const authorToSearchFor = 'Robert Sheckley';
for (const book of books6) {
  if (book.author === authorToSearchFor) {
    console.log(book);
    console.log(book.title);
  }
}

// ex Функція getProductPrice(productName) приймає один параметр productName - назва продукту. Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість. Доповни код функції так, щоб вона шукала об'єкт продукту з певним ім'ям (властивість name) в масиві products і повертала його ціну (властивість price). Якщо продукт з такою назвою не знайдений, функція повинна повертати null.
function getProductPrice(productName) {
  const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
  ];
  let price;
  for (const product of products) {
    if (productName === product.name) {
      price = product.price;
    }
  }
  return price;
}
console.log(getProductPrice('Radar'));

//РІЗНИЦЯ МІЖ FOR...IN TA FOR...OF
// Новый синтаксис добавлен для перебора итерируемых коллекций. Можете написать свою коллекцию с реализацией итератора и использовать for..of для ее перебора.
let arr = [`a`, `b`, `c`, `d`, `e`];

for (const elem in arr) {
  console.log(elem); // 0 1 2 3 4
}

for (const elem of arr) {
  console.log(elem); // a b c d e
}

// масив всіх значень певної властивості об'єктів. Наприклад, взяти з масиву об'єктів, які описують книги, усі назви або рейтинг.
// Для цього необхідно:
// Створити новий порожній масив для зберігання значень властивостей.
// Перебрати масив об'єктів у циклі.
// На кожній ітерації додати в новий масив значення необхідної властивості.

// ex Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. Функція повинна повернути масив усіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.
function getAllPropValues(propName) {
  const products = [
    { nameE: 'Radar', price: 1300, quantity: 4 },
    { nameE: 'Scanner', price: 2700, quantity: 3 },
    { nameE: 'Droid', price: 400, quantity: 7 },
    { nameE: 'Grip', price: 1200, quantity: 9 },
  ];
  let array = [];

  for (const product of products) {
    if ('nameE' === propName) {
      array.push(product.nameE);
    } else if ('price' === propName) {
      array.push(product.price);
    } else if ('quantity' === propName) {
      array.push(product.quantity);
    } else {
      array = [];
    }
  }
  return array;
}
console.log(getAllPropValues('quantity'));
// ex Функція calculateTotalPrice(productName) приймає один параметр productName- назва товару. Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість. Function поверта загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.Якщо продукту з такою назвою немає, то функція повинна повертати рядок "Product <productName> not found!" , де <productName> — це ім'я товару.
function calculateTotalPrice4(productName) {
  const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
  ];
  let totalPrice;
  for (const product of products) {
    if (productName === product.name) {
      return (totalPrice = product.price * product.quantity);
    }
  }
  return `Product ${productName} not found!`;
}
console.log(calculateTotalPrice4('Raar'));

//                                                 METHODS OF OBJECTS
// Об'єкти можуть зберігати не тільки дані, але й функції для роботи з цими даними.
// Метод об*єкта - це звичайна функція, оголошена як властивість об'єкта, а не як окрема змінна. Для звернення до методу об'єкта використовується стандартний синтаксис із крапкою.
// const obj = {
// 	method(value) {
// 		console.log(`I'm a method with ${value}!`);
// 	}
// };
// obj.method(5); // "I'm a method with 5!"
// obj.method(10); // "I'm a method with 10!"
// Об'єкти, які пов'язують дані та методи для роботи з цими даними, можна назвати «моделями».
// ex
const atTheOldToad = {
  potions: [],
  getPotions() {
    return 'List of all available potions';
  },
  addPotion(potionName) {
    return `Adding ${potionName}`;
  },
};
// Виклик методу atTheOldToad.getPotions() повертає рядок "List of all available potions"
// Виклик методу atTheOldToad.addPotion("Invisibility") повертає рядок "Adding Invisibility"

// Для доступу до об'єкта в методі використовується не ім'я змінної цього об*єкта, наприклад bookShelf, а ключове слово this. Ключове слово this в середині методу містить посилання на об'єкт, що його викликав.
// Для доступу до властивостей об'єкта в методах звертаємось до нього через this і далі, стандартно, «через крапку» до властивостей.

// ex Об'єкт atTheOldToad має наступні властивості: -potions — масив рядків, з назвами зілль; - getPotions() — метод, який повертає рядок "List of all available potions". Зміни код метода об'єкта getPotions() так, щоб він повертав значення властивості potions
const atTheOldToad2 = {
  potions: ['Speed potion', 'Stone skin'],
  getPotions() {
    return this.potions;
  },
};
console.log(atTheOldToad2.getPotions());

//   ex
const atTheOldToad21 = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Stone skin', price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    return this.potions.push(newPotion);
  },
  getTotalPrice() {
    let totalPrice = 0;
    for (const potion of this.potions) {
      totalPrice += potion.price;
    }
    return totalPrice;
  },
};
console.log(atTheOldToad21.addPotion({ e: 'tt', u: 'yi' }));
console.log(atTheOldToad21.potions);

//                                            Масив об*єктів
const bookShelf = {
  books: [
    { title: 'The Last Kingdom', rating: 8 },
    { title: 'The Mist', rating: 6 },
  ],
  getBooks() {
    return this.books;
  },
  addBook(newBook) {
    this.books.push(newBook);
  },
};
bookShelf.addBook({ title: 'Dream Guardian', rating: 9 });
// При переборі масиву у властивості books треба пам'ятати, що це масив об'єктів.

// Наприклад, додамо метод getAverageRating(), який повертатиме середній рейтинг книг. Для цього:
// - Оголосимо новий метод getAvarageRating в об'єкті.
// -  Оголосимо змінну totalRating для зберігання загального рейтингу.
// - Переберемо масив книг за посиланням this.books у циклі for...of.
// - На кожній ітерації додамо до загального рейтингу - рейтинг книги.
// - Після завершення циклу повернемо результат ділення загального рейтингу на кількість книг.
const bookShelf2 = {
  books: [
    { title: 'The Last Kingdom', rating: 8 },
    { title: 'The Mist', rating: 6 },
    { title: 'Dream Guardian', rating: 9 },
  ],
  getAvarageRating() {
    let totalRating = 0;
    for (const book of this.books) {
      totalRating += book.rating;
    }
    return totalRating / this.books.length;
  },
};

bookShelf2.getAvarageRating(); // 7
//   ex додали метод що поверта суму із властивості ціни
const atTheOldToad23 = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Stone skin', price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    this.potions.push(newPotion);
  },
  getTotalPrice() {
    let totalPrice = 0;
    for (const potion of this.potions) {
      totalPrice += potion.price;
    }
    return totalPrice;
  },
};

//   Зміна об'єкта в масиві
// Процес зміни властивостей об*єкта в масиві починається з таких кроків:
// 1) Перебір масиву об'єктів у циклі, наприклад for...of.
// 2) Додавання перевірки збігу значення властивості об'єкта на поточній ітерації і заданого значення.
// 3) При виконанні if ми можемо бути впевнені, що на даній ітерації в змінній book знаходиться посилання на необхідний нам об'єкт, оскільки об'єкти передаються за посиланнями. Тепер достатньо звернутися до властивості цього об'єкта і прирівняти йому нове значення.
const bookShelf24 = {
  books: [
    { title: 'The Last Kingdom', rating: 8 },
    { title: 'The Mist', rating: 6 },
  ],
  changeRating(bookName, newRating) {
    for (const book of this.books) {
      if (book.title === bookName) {
        book.rating = newRating;
      }
    }
  },
};

bookShelf24.changeRating('The Mist', 9);
bookShelf24.changeRating('The Last Kingdom', 4);
//   ex метод updatePotionName(oldName, newName) , щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.
const atTheOldToad25 = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Stone skin', price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      if (oldName === potion.name) {
        potion.name = newName;
      }
    }
    return newName;
  },
};

//                                             Синтаксис spread і rest
// Залишкові параметри
// Ми вже знаємо, що викликати функцію можна з будь-якою кількістю аргументів незалежно від того, як її було визначено. Зайві аргументи не викличуть помилку.
function multiply(a, b) {
  console.log(a, b);
}
multiply(1, 2); // 1 2
multiply(1, 2, 3); // 1 2
multiply(1, 2, 3, 4); // 1 2
// У прикладі вище проблема в тому, що аргументів більше, ніж параметрів. І будуть використані лише перші два аргументи — за кількістю оголошених параметрів. Ми вже вміємо розв'язувати такі завдання, використовуючи псевдомасив ------ arguments, у який збираються всі передані аргументи.
function multiply3() {
  console.log(arguments);
}
multiply3(1, 2); // псевдомасив [1, 2]
multiply3(1, 2, 3); // псевдомасив [1, 2, 3]
multiply3(1, 2, 3, 4); // псевдомасив [1, 2, 3, 4]

// Починаючи зі стандарту ES6, з'явилася концепція залишкових параметрів (...rest). Cинтаксис (...rest). який дозволяє зібрати групу незалежних елементів у масив. Вільні параметри можуть бути позначені через три крапки .... Буквально це означає: "збери параметри, що залишилися, і поклади їх у масив". Ім'я параметра може бути довільним. Найчастіше його називають args або rest
function multiply2(numb1, numb2, ...args) {
  console.log(args);
}

multiply2(1, 2, 3, 4, 5); //[3, 4, 5]

//   ex Використовуючи синтаксис залишкових параметрів, доповни код функції add() так, щоб вона приймала будь-яку кількість аргументів у параметр args і повертала їхню суму.
function add(...args) {
  let totalRest = 0;
  for (const item of args) {
    totalRest += item;
  }
  return totalRest;
}

console.log(add(15, 27));
console.log(add(1, 2, 3));

//  Функція addOverNum() приймає довільну кількість аргументів чисел.Доповни код функції таким чином, щоб вона обчислювала суму тільки тих аргументів, які більші за задане число. Це число завжди буде передано першим аргументом.
function addOverNum(first, ...args) {
  let total = 0;
  for (const item of args) {
    if (item > first) total += item;
  }
  return total;
}

//  Входження параметрів
// Інколи потрібно зробити протилежне — передати масив поелементно у функцію, яка викликається. Наприклад, є вбудована функція Math.max(), яка шукає та повертає найбільший з аргументів (чисел), тобто очікує не масив значень, а довільну кількість аргументів.
// оператор розпилення ...spread - при використанні при виклику функції, він перетворює масив на список аргументів.
const temps = [14, -4, 25, 8, 11];

console.log(...temps); // 14 -4 25 8 11  набір окремих чисел

// ✅ Передамо колекцію елементів у якості окремих аргументів
console.log(Math.max(...temps)); // 25

// ex Функція getExtremeScores(scores) приймає масив оцінок (чисел) у параметрі scores; вона поверта об'єкт із двома властивостями:- best має містити найбільше число з масиву scores; - worst має містити найменше число з масиву scores Використовуй оператор (...spread) і методи Math.max() і Math.min().
function getExtremeScores(scores) {
  const best = Math.max(...scores);
  const worst = Math.min(...scores);
  const object = {
    best,
    worst,
  };
  return object;
}
console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));

//                      Створення копії масиву
// Операція ...spread дозволяє створити копію масиву або «склеїти» довільну кількість масивів в один новий. Досі для цього використовувалися методи slice() і concat(), але операція розпилення дозволяє зробити те саме в коротшій формі.
const arrayNumb = [14, -4, 25, 8, 11];
// Це точна, але незалежна копія масиву temps
const copyOfarrayNumb = [...arrayNumb];
console.log(copyOfarrayNumb); // [14, -4, 25, 8, 11]

//                      Склеювання 2х і більше масивів в один
const array1 = [14, 25, 11];
const array2 = [23, 17, 18];
const commonArray = [...array1, ...array2];
console.log(commonArray); // [14, 25, 11, 23, 17, 18]

// ex
// У змінній allScores зберігався масив всіх результатів від першої до третьої групи включно.
// У змінній bestScore був найвищий загальний бал.
// У змінній worstScore був найнижчий загальний бал.
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [
  ...firstGroupScores,
  ...secondGroupScores,
  ...thirdGroupScores,
];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);
//                                       Створення об'єкта
// Операція spread дозволяє розпилити властивості довільної кількості об'єктів в один новий.
let object1 = { A: 5, B: 10 };
let object2 = { C: 15 };
let object3 = { ...object1, ...object2 };
console.log(object3); // { A: 5, B: 10, C: 15 }
// Порядок розподілу має значення. Імена властивостей об'єкта — унікальні, тому властивості об'єкта, що розпиляються, можуть перезаписати значення вже існуючої властивості, якщо їх імена збігаються.
object1 = { A: 5, B: 10, C: 50 };
object2 = { C: 15, D: 20 };

object3 = { ...object1, ...object2 };
console.log(object3); // { A: 5, B: 10, C: 15, D: 20 }

let object4 = { ...object2, ...object1 };
console.log(object4); // { A: 5, B: 10, C: 50, D: 20 }

// Під час розпилення можна додавати властивості в довільне місце. Головне пам'ятати про унікальність імені властивості і про те, що її значення може бути перезаписане.
const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15 };

const third = { propB: 20, ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 }

const fourth = { ...first, ...second, propB: 20 };
console.log(fourth); // { propA: 5, propB: 20, propC: 15}

// ex Виконано
// В конструкторі можна створювати нові тести, для яких є налаштування за замовчуванням, які зберігаються у змінній defaultSettings. Під час створення тесту, усі або частину налаштувань можна перевизначити, користувацькі налаштування зберігаються у змінній overrideSettings.

// Для того щоб отримати фінальні налаштування тесту, необхідно взяти налаштування за замовчуванням і поверх них застосувати перевизначені користувацькі налаштування. Доповни код таким чином, щоб у змінній finalSettings утворився об'єкт фінальних налаштувань тесту.
const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};

const finalSettings = { ...defaultSettings, ...overrideSettings };
console.log(finalSettings);

// ex banking's APP - переписати таски ы виконати )
// const trasactionType = {
//     deposit: "deposit",
//     withdraw: "withdraw",
// };

// const account = {
// balance: 0,
// transactions: [],
// createTransaction(amount, type) {},
// deposit (amount) {},
// withdraw(amount) {},
// getBalance() {},
// getTransactionDetails(id) {},
// getTransactionTypeTotal(type) {},

// };

//                                                       PRACTICE
// EX 1 функція створює і повертає масив за вказаною довжиною і наповнює вказаним значенням
function createArrey(length, value) {
  const arrayJust = [];
  for (let i = 0; i < length; i++) {
    arrayJust.push(value);
  }
  return arrayJust;
}
console.log(createArrey(3, 'a'));

// EX 2 функція що створ новий масив в якому не буде значень що приводяться до фалс
function clearArray(...values) {
  const clearArray = [];
  for (const value of values) {
    // замість if (Boolean(value) === !false)
    if (value) {
      clearArray.push(value);
    }
  }
  return clearArray;
}
console.log(clearArray(null, 1, undefined, 0, false, 3));

// EX3 скрипт порівнює два масива і виводить результат тру якщо всі елементи однакові і фалс в ін випадку
function arrayComparison(arr1, arr2) {
  let message;
  for (let i = 0; i < arr1.length; i++) {
    // якщо порядок не важливий
    if (arr1.length === arr2.length && arr1.includes(arr2[i])) {
      //      ((arr1.length === arr2.length) && (arr1[i] === arr2[i])) якби порядок був важливий
      message = true;
    } else {
      message = false;
    }
  }
  return message;
}
const arr11 = [1, 3, 2, 4];
const arr21 = [1, 2, 3, 4];
console.log(arrayComparison(arr11, arr21));
// другий варіант щоб швидше працював 1 - порівнюєм довжини 2 - порівнюєм самі елементи
function arrayComparison2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (const item of arr1) {
    if (!arr2.includes(item)) {
      return false;
    } else {
      return true;
    }
  }
}
console.log(arrayComparison2(arr11, arr21));
// EX 4 функцыя приймаэ довыльну к-ть аргументыв ы повертаэ ъх середнэ значення до того ж перевыряэ щоб це були числа
function calculateAvarage(...rest) {
  let total = 0;
  let numbers = 0;
  for (const item of rest) {
    if (typeof item === 'number') {
      total += item;
      numbers += 1;
    }
  }
  const avarage = total / numbers;
  return `The avarage of arguments is ${avarage}`;
}
console.log(calculateAvarage(1, 2, '8', 3, true, '', 4, 5, 6, 'what', 7));

// EX 5
const book7 = {
  title: 'To kill a Mockingbird',
  author: 'Harper Lee',
  genre: 'Southern gothic',
  yearPublished: 1960,
  isBestseller: true,
};
book7.rating = 4.8;
book7.genre = 'Classic fiction';
book7.isBestseller = false;

const keysOfBook7 = Object.keys(book7);
for (const item of keysOfBook7) {
  console.log(`${item} : ${book7[item]}`);
}

// EX 6 функція приймає 2 парам - об*єкт і ключ , перебирає об*єкт і якщо він містить цей ключ то повертає тру в іншому випадку - фолс
function checkKeyInObject(obj, key2) {
  for (const key1 in obj) {
    if (key1 === key2) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(checkKeyInObject(book7, 'Genre'));
// EX 6 другий варіант
function checkKeyInObject2(obj, key) {
  const check = Object.keys(obj).includes(key);
  return check;
}
console.log(checkKeyInObject2(book7, 'Genre'));

// EX 7 add the method in the object
const user6 = {
  name: 'Peter',
  surname: 'Parker',
  age: 27,
  potions: 'spider-man',
  getInfo() {
    const arr = [];
    for (const key in this) {
      arr.push(`${key}:${this[key]}`);
    }
    return arr.join(',');
  },
};
console.log(user6.getInfo());

// EX 8
const calculator = {
  read(a, b) {
    return (this.a = a) && (this.b = b);
  },
  sum() {
    let total = 0;
    const arrayOfValue = Object.values(this);
    for (const value of arrayOfValue) {
      if (typeof value === 'number') {
        total += value;
      }
    }
    return total;
  },
  mult() {
    let mult = 1;
    const arrayOfValue = Object.values(this);
    for (let i = 0; i < arrayOfValue.length; i++) {
      if (typeof arrayOfValue[i] === 'number') {
        mult *= arrayOfValue[i];
      }
    }
    return mult;
  },
};
console.log(calculator.read(9, 10));
console.log(calculator.sum());
console.log(calculator);
console.log(calculator.mult());

// EX 9 Визначити загальну суму замовлення у змінну . якщо об*єкт порожній результат буде 0
const cart = {
  apple: 50,
  banana: 38,
  orange: 40,
  total() {
    let totalCost = 0;
    for (const value in this) {
      console.log(`${this[value]} - ${value}`);
      if (typeof this[value] === 'number') {
        totalCost += this[value];
      }
    }
    return totalCost;
  },
  // total() {
  //     let totalCost = 0;
  //     const arr = Object.values(this);
  //     console.log(arr);

  //     for (const value of arr) {
  //         if (typeof value === "number") {
  //         totalCost += value;
  //         }
  //     }
  //     return totalCost;
  // },
};
console.log(cart.total());
// EX 10 розраз заг суму всіх замовлень в масиві об*єктів та вивести її у шаблонний рядок
const orders = [
  { id: 1, item: 'футболка', quantity: 2, price: 15 },
  { id: 2, item: 'шорти', quantity: 3, price: 20 },
  { id: 3, item: 'кросівки', quantity: 1, price: 50 },
];
function totalOrders() {}
let totalAmount = 0;
for (const order of orders) {
  totalAmount += order.quantity * order.price;
}
console.log(`Загальна сума всіх замовлень: ${totalAmount}`);
