'use strict';
//                                         the information from mentor
// Делегування подій – потужна техніка для оптимізації роботи з подіями. Замість того, щоб призначати події кожному елементу окремо, ми можемо призначити обробник події спільному предку, а подія "спливатиме" через DOM. Це зручно, коли у нас є багато однотипних елементів або елементи додаються динамічно.
// Основні підходи до делегування подій включають:
// Використання event.target для перевірки цільового елемента, через nodeName.
// document.querySelector('ul').addEventListener('click', function(event) {
//   // Перевіряємо, чи подія відбулася на елементі <li>
//   if (event.target.nodeName === 'LI') {
//     console.log('Натиснуто на елемент списку:', event.target.textContent);
//   }
// });
// Використання класів або атрибутів для точного визначення елемента.
// document.querySelector('.parent').addEventListener('click', function(event) {
//   // Перевіряємо, чи елемент має клас 'button'
//   if (event.target.classList.contains('button')) {
//     console.log('Натиснуто на кнопку:', event.target.textContent);
//   }
// });
// Використання методу closest() для роботи з ієрархією DOM.
// document.querySelector('.container').addEventListener('click', function(event) {
// // Шукаємо найближчого предка елемента, що відповідає певному селектору
//   const button = event.target.closest('.button');
//   if (button) {
//     console.log('Натиснуто на кнопку:', button.textContent);
//   }
// });
// Бібліотеки в JS допомагають спростити складні або рутинні операції. Ви можете знайти багато цікавих і корисних бібліотек для вирішення своєї задачі, використовуючі такі популярні ресурси, як cdn чи npm, або просто погугливши (тут ви обов’язково знайдете потрібне рішення).
// Документація до бібліотеки зазвичай поділяється на кілька основних розділів. Важливо вміти з нею працювати, щоб швидко знайти потрібну інформацію: Огляд, Інсталяція, Використання, API Reference, Параметри, Приклади.
// Деструктуризація — це зручний спосіб "розпаковки" значень з масивів або властивостей з об’єктів у змінні. Вона спрощує код, особливо коли потрібно працювати з великими масивами чи об'єктами.
// :pushpin: Важливі моменти:
// Розберіться, як працюють обробники подій і чому делегування подій може бути корисним у певних ситуаціях.
// Починайте читати документацію бібліотек, це не так просто як може здатись, але до цього необхідно звикати

// ..........................................................event propagation
// Поширення подій (event propagation) — це термін, що описує життєвий цикл події, який має три етапи:
//  Занурення (capture phase) - подія починається на window і тоне (проходить через усі елементи-предки) до найглибшого цільового елемента, на якому відбулася подія і етап на цьому елементі закінчується.
//  Таргетинг (target phase) - Цей етап містить тільки повідомлення елемента про те, що на ньому відбулася дія.
// //  Спливання (bubble phase) - кінцева фаза, подія спливає від найглибшого, цільового елемента, через усі елементи-предки до window.
// <div id="parent">
//   Parent
//   <div id="child">
//     Child
//     <div id="descendant">Descendant</div>
//   </div>
// </div>
// Спливання гарантує, що клік по #descendant викличе обробник кліка в такому порядку:
// спочатку на самому #descendant -> потім на елементі #child -> далі на елементі #parent -> і так далі, вгору по ланцюжку предків до window.
// //   ................................................Цільовий елемент
// Цільовий елемент — це елемент, на якому відбулася подія, він доступний як event.target. Це завжди найглибший елемент, з якого починається спливання.

// event.target — це посилання на вихідний елемент, на якому відбулася подія, у процесі спливання вона — незмінна.
// event.currentTarget — це посилання на поточний елемент, до якого прив’язаний поточний обробник події, і до якого в результаті спливання дійшла прослуховувана подія.

// важливо розуміти різницю між елементом, де подія фактично відбулася (event.target), та елементом, до якого подія спливла, і обробник її перехопив (event.currentTarget).

//                                             Припинення спливання
// Зазвичай подія буде спливати вгору до елемента window, викликаючи всі наявні обробники на своєму шляху.
// // Будь-який проміжний обробник може зупинити спливання цієї події за допомогою методів об’єкта події (event):
// event.stopPropagation()
//    -Зупиняє "спливання" події в DOM-дереві. Це означає, що жоден батьківський елемент не зможе відловити цю подію.
//    - Не заважає іншим обробникам подій виконуватися на тому ж самому елементі.
// event.stopImmediatePropagation()
//     -Зупиняє "спливання" події так само, як event.stopPropagation().
//     - зупиняє виконання всіх інших обробників подій, які слухають цю ж подію на даному елементі, навіть якщо вони були зареєстровані перед цим.

//     // !!!!!!!!!!!!!Не припиняйте спливання без необхідності.
//  Припинення спливання створює свої підводні камені, які потім доводиться обходити. Наприклад, вебаналітика використовує спливання, щоб відстежувати дії користувача на сторінці, тому якщо зупинити спливання подій, то це унеможливить збір цієї інформації.

// //                                                    Делегування подій
// Делегування реалізується у три прості кроки.
// 1. Визначити спільного предка групи елементів для відстеження подій.
// 2. Зареєструвати на елементі-предку обробник події, яку ми хочемо відловлювати з групи елементів.
// 3. В обробнику використовувати event.target для вибору цільового елемента, на якому безпосередньо відбулась подія.
//                               Перевірка типу цільового елемента події - властивість nodeName.
// Перевіряти цільовий елемент події під час делегування треба,об виключити обробку подій для непотрібних типів елементів
// ex В обробнику події кліка використовуємо event.target, щоб отримати елемент, на якому безпосередньо відбулася подія, і пов'язаний з ним колір. Інформацію про колір будемо зберігати в атрибуті data-color.
// Обов'язково перевіряємо цільовий елемент події click.
// Це точно має бути кнопка, в іншому разі ми випадково можемо обробити клік, коли користувач клікне між кнопками, що може викликати помилку.
const colorPalette = document.querySelector('.color-palette');
const outputColor = document.querySelector('.output-text');

colorPalette.addEventListener('click', selectColor);

// This is where delegation «magic» happens
function selectColor(event) {
  console.log(event.target.nodeName);

  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const selectedColor = event.target.dataset.color;
  console.log(selectedColor);
  outputColor.textContent = `The selected color is ${selectedColor}`;
}

// Some helper functions to render palette items
createPaletteItems();

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < 50; i++) {
    const color = getRandomHexColor();
    const item = document.createElement('button');
    item.type = 'button';
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add('item');
    items.push(item);
  }
  colorPalette.append(...items);
}

function getRandomHexColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

//                                             Бібліотека
// Бібліотеки — це набір попередньо написаних функцій, методів і класів, який надає розробнику готові інструменти для вирішення певних завдань.
// // Приклади популярних бібліотек у JavaScript:
// Chart.js: Бібліотека для створення інтерактивних графіків і діаграм.
// Lodash: Бібліотека для роботи з масивами, об'єктами, рядками тощо, що надає безліч зручних функцій.

// Важливо обирати бібліотеки, які найкраще підходять для вашого проєкту, і стежити за їхніми оновленнями, щоб використовувати останні покращення та виправлення помилок.
//                                                 CDN
// CDN (Content Delivery Network) — це географічно розподілена мережева інфраструктура. Вона забезпечує швидку доставку контенту (такого як стилі, скрипти, зображення та інші ресурси) користувачам вебсервісів і сайтів. Сервери, що входять до складу CDN, географічно розташовуються в різних частинах світу таким чином, щоб зробити час відповіді для користувачів сайту/сервісу мінімальним.

//                                                 Деструктуризація
// Деструктуризація (Destructuring) — це особливий синтаксис, що дозволяє витягти значення зі структур даних, такі як об'єкти або масиви, і присвоїти їх змінним. Це зручний спосіб дістати потрібні дані зі складних структур і використовувати їх у коді.
// Після ключового слова const або let ставимо фігурні дужки, як і у випадку з оголошенням об'єкта.

// Усередині дужок, через кому, вказуємо імена змінних, яким будуть задані відповідні значення властивостей деструктуризованого об’єкта.
// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };

//   // Деструктуризуємо
//   const { title, author, isPublic, rating } = book;

// Використовуємо
//   const accessType = isPublic ? "pulbic" : "private";
//   const message = `Book ${title} by author ${author} with rating ${rating} is in ${accessType} access!`;
// Деструктуризація завжди знаходиться в лівій частині операції присвоювання.
// Змінним усередині фігурних дужок присвоюються значення однойменних властивостей об'єкта з відповідними іменами.
// Послідовність оголошення змінних у фігурних дужках не важлива.

//                                               Деструктуризація неіснуючих властивостей
// Коли в об'єкті немає властивості з таким ім'ям, змінній буде присвоєно undefined.

// З метою уникнення присвоєння undefined під час деструктуризації неіснуючих властивостей, можна задати змінним значення за замовчуванням, використовуючи знак =. Це значення буде присвоєно тільки у випадку, коли в об'єкті відсутня властивість із таким ім'ям.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
// };

// // Додамо зображення обкладинки, якщо вона відсутня в об'єкті книги
// const {
//   title,
//   author,
//   coverImage = "https://via.placeholder.com/640/480"
// } = book;

// console.log(title); // "The Last Kingdom"
// console.log(author); // "Bernard Cornwell"
// console.log(coverImage); // "https://via.placeholder.com/640/480"

//                                         Перейменування змінної

// Під час деструктуризації можна перейменувати змінну, в яку розпаковується значення властивості, використовуючи :.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// // Деструктуризуємо
// const { title, author: bookAuthor, isPublic, rating: bookRating } = book;
// console.log(title); // "The Last Kingdom"
// console.log(bookAuthor); // "Bernard Cornwell"
// console.log(isPublic); // true
// console.log(bookRating); // 8.38
//                                              Значення за замовчуванням
// При перейменуванні змінної, в яку ми розпаковуємо значення властивості об'єкта, також можна присвоїти значення за замовчуванням.

// Для цього після нового імені ставимо дорівнює = і вказуємо її значення за замовчуванням.

// const book = {
//   title: "The Last Kingdom",
//   coverImage:
//     "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
// };

// const {
//   title,
//   coverImage: bookCoverImage = "https://via.placeholder.com/640/480",
// } = book;

// console.log(title); // "The Last Kingdom"
// console.log(bookCoverImage); // "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg"

// // Якщо така властивість існує в об'єкті, у змінну буде присвоєно її значення.В іншому випадку змінній буде присвоєно значення за замовчуванням.

// //                                                  Деструктуризація в циклах
// // Під час ітерації по масиву об'єктів циклом for...of відбуваються багаторазові звернення до властивостей об'єкта.
//   for (const book of books) {
//     console.log(book.title);
//     console.log(book.author);
//     console.log(book.rating);
//   }
// //   Для того щоб скоротити кількість повторень, можна деструктуризувати властивості об'єкта в локальні змінні в тілі циклу.
// for (const book of books) {
//     const { title, author, rating } = book;

//     console.log(title);
//     console.log(author);
//     console.log(rating);
//   }
// // Якщо об'єкт містить небагато властивостей, деструктуризацію можна виконати безпосередньо в місці оголошення змінної book.
// for (const { title, author, rating } of books) {
//     console.log(title);
//     console.log(author);
//     console.log(rating);
//   }
//                                          Деструктуризація параметрів
// Під час передачі об'єктів у функції, можна деструктуризувати об'єкти
//        Без деструктуризації об'єкта:
// function printUserInfo(user) {
//     console.log(`Name: ${user.name}, Age: ${user.age}, Hobby: ${user.hobby}`);
//   }

//   printUserInfo({
//       name: "Alice",
//       age: 25,
//       hobby: "dancing"
//   }); // Name: Alice, Age: 25, Hobby: dancing

// //         З деструктуризацією об'єкта в тілі функції:
// function printUserInfo(user) {
// const { name, age, hobby } = user
//   console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
// }

// printUserInfo({
// 	name: "Alice",
// 	age: 25,
// 	hobby: "dancing"
// }); // Name: Alice, Age: 25, Hobby: dancing

// //          з деструктуризацією об'єкта в місці оголошення параметрів:
// function printUserInfo({ name, age, hobby }) {
//   console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
// }

// printUserInfo({
// 	name: "Alice",
// 	age: 25,
// 	hobby: "dancing"
// }); // Name: Alice, Age: 25, Hobby: dancing
//                                                Патерн «Об'єкт параметрів»
// Якщо функція приймає більше 2-3 параметрів, дуже просто заплутатися, в якій послідовності і що передавати.
// Патерн «Об'єкт параметрів» допомагає вирішити цю проблему.

// Він заміняє набір параметрів всього одним — об'єктом з іменованими властивостями.

// function doStuffWithBook(book) {
//   // Робимо щось з властивостями об'єкта
//   console.log(book.title);
//   console.log(book.pages);
//   // І так далі
// }

// // Таким чином, під час її виклику передаємо один об'єкт з необхідними властивостями.
// // ✅ Все зрозуміло
// doStuffWithBook({
//   title: "The Last Kingdom",
//   pages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// });

// // Ще одна перевага в тому, що можна деструктуризувати об'єкт у параметрі book. Це можна зробити в тілі функції.
// function doStuffWithBook(book) {
//   const { title, pages, downloads, rating, isPublic } = book;
//   console.log(title);
//   console.log(pages);
// }

// // Або в сигнатурі (підписі) функції — різниці немає.
// function doStuffWithBook({ title, pages, downloads, rating, isPublic }) {
//   console.log(title);
//   console.log(pages);
// }

//                                     //  Глибока деструктуризація
// // Найчастіше дані будуть представлені об'єктами з більш ніж одним рівнем вкладеності.

// // 1)Для деструктуризації властивостей вкладених об'єктів використовуються ті самі принципи. Для початку напишемо код деструктуризації властивостей об'єкта користувача.
// const user = {
//   name4: "Jacques Gluke",
//   tag4: "jgluke",
//   stats: {
//     followers2: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const { name4, tag4, stats } = user;

// console.log(name3); // Jacques Gluke
// console.log(tag3); // jgluke
// console.log(stats); // { followers: 5603, views: 4827, likes: 1308 }
// // 2) Tепер додамо глибоку деструктуризацію властивостей об'єкта stats.
// // Для цього в деструктуризації після імені властивості ставимо двокрапку : та починаємо деструктуризацію об'єкта для цієї властивості.
// const {
//     name,
//     tag,
//     stats: { followers2, views, likes },
//   } = user;

//   console.log(name); // Jacques Gluke
//   console.log(tag); // jgluke
//   console.log(followers); // 5603
//   console.log(views); // 4827
//   console.log(likes); // 1308

// //   Під час глибокої деструктуризації також можна змінювати імена змінних і присвоювати значення за замовчуванням, використовуючи вже знайомий тобі синтаксис.

//   const {
//     name3,
//     tag3,
//     stats: { followers = 0, views: userViews = 0, likes: userLikes = 0 },
//   } = user;
// //                                           Деструктуризація масивів
// // Синтаксис
// // Деструктуризоване присвоювання можна використовувати  для масивів, але з деякими особливостями.
// // Змінним, зазначеним у квадратних дужках [], будуть послідовно присвоюватися значення елементів масиву.
// const color = [200, 255, 100];
// const [ red, green, blue ] = color;

// console.log(`rgb(${red}, ${green}, ${blue})`); // “rgb(200, 255, 100)"
// //                                               Значення за замовчуванням
// // Якщо змінних оголошено більше, ніж елементів масиву, їм буде присвоєно undefined. Щоб запобігти цьому, можна вказувати значення за замовчуванням.
// // Синтаксис: після імені змінної ставимо = і значення за замовчуванням.

// const color2 = [200, 100, 255];
// const [ red2, green2, blue2, alfa = 0.3 ] = color2;

// console.log(rgba(${red2}, ${green2}, ${blue2}, ${alfa})); // “rgba(200, 255, 100, 0.3)"

//                                                       Часткова деструктуризація
// Іноді з масиву необхідно деструктуризувати тільки перші N елементів, а інші зберегти в одну змінну у вигляді масиву.

// Деструктуризуючи масив, можна розпакувати перші необхідні елементи і присвоїти іншу частину елементів масиву змінній, використовуючи операцію ...rest.
// const color = [200, 255, 100];

// const [ red, ...otherColors ] = color;

// console.log(red); // 200
// console.log(otherColors); // [255, 100]

// При цьому оригінальний масив не змінюється, у змінній otherColor буде новий масив із копіями зібраних значень.

// З об'єктами, до речі, це теж працює. Можна деструктуризувати певні властивості в окремі змінні, а решту зібрати в новий об'єкт.
// const user = {
// 	name: "Jacob",
// 	age: 32,
// 	email: "j.cob@mail.com",
// 	isOnline: true
// };

// const { name, isOnline, ...otherProps } = user;
// console.log(name); // "Jacob"
// console.log(isOnline); // true
// console.log(otherProps); // {age: 32, email: "j.cob@mail.com"}

// При цьому оригінальний об'єкт не змінюється, у змінній otherProps буде новий об'єкт із копіями зібраних властивостей.
//                                       Пропуск значень
// На відміну від іменованих властивостей об'єкта, елементи масиву — це набір індексованих значень. Якщо необхідно деструктуризувати тільки, наприклад, третій елемент, перші два необхідно пропустити.

// Припустимо, з масиву color необхідно взяти тільки останнє значення. Для цього в деструктуризації необхідно відокремити комами елементи, що пропускаються.
// const rgb = [200, 100, 255];

// const [, , blue] = rgb;

// console.log(`Blue: ${blue}`); // "Blue: 255"
//                                             Деструктуризація параметрів
// Під час передачі масиву у функцію, можна деструктуризувати його елементи.

// Без деструктуризації:
// function printFruits(fruits) {
//   console.log(fruits[0], fruits[1], fruits[2]);
// }
// printFruits(["apple", "banana", "orange"]); // "apple banana orange"

// Із деструктуризацією в місці оголошення параметрів:
// function printFruits([firstFruit, secondFruit, thirdFruit]) {
//   console.log(firstFruit, secondFruit, thirdFruit);
// }
// printFruits(["apple", "banana", "orange"]); // "apple banana orange"

//                                            Practice
// Event deligation - addEventListener on father element and and automatically get an event handler (обробник подій, функція) on his children
// ex
const container = document.querySelector('.parent-box');
// for example like we don't know about the event deligation we must addEventListener for everyone children in the parent element - так не роблять це не оптимально
// розгорнули ...rest оперетором із псевдомасиву дітей у масив дітей
// console.log([...container.children]);

// [...container.children]
// .forEach(box => {box.addEventListener("click", handleClick)});
// function handleClick(event) {
//      console.log("You addEventListener for everyone children in the parent element but you can use Event deligation that don't do it");
//     const color = event.target.dataset.color;
//     console.log(`The color of this box is ${color}`);

// }
// comlete this task with Event deligation
container.addEventListener('click', handleClick);
function handleClick(event) {
  // робим перевірку якщо клікнули не на дів то припинити роботу ф-ції
  if (!event.target.classList.contains('box')) {
    return;
  }

  console.log(event.target.nodeName);
  // currentTarget - елемент на якому викликали addEventListener
  console.log(event.currentTarget);
  // target - елемент на якому відбулась подія click
  console.log(event.target);

  // берем колір із data атрибута
  const color = event.target.dataset.color;
  console.log(`The color of this box is ${color}`);
}

//                                                               PRACTICE
//..................... METHOD SEARCHE THE NAME OF CLASS IN HTML BY PARCIALY (ЧАСТИНОЮ) NAME
const kittyElementBtn = document.querySelector("[class *= 'kitty-go']");
console.log(kittyElementBtn);
kittyElementBtn.style.setProperty('color', 'red');
// події які не спливають (нема фази capturing phase):
// -focus
// -blur
// -load

// EX Show in output zone the value of input meanwhile (під час) button "Show me" is pressing
const inputShow = document.querySelector('.input-show');
const btnShow = document.querySelector('.btn-show');
const btnClear = document.querySelector('.btn-clear');
const spanOutput = document.querySelector('.output-show');

btnShow.addEventListener('click', handleShow);
function handleShow(event) {
  spanOutput.textContent = inputShow.value;
  console.log(`${inputShow.value}`);
}

btnClear.addEventListener('click', handleClear);
function handleClear(event) {
  inputShow.value = '';
  spanOutput.textContent = '';
}

// ex The value of input need change on dote (крапки) and change the textContent of button on "Show" meanwhile the button "Hide"  is pressing
//             за замовчуванням якщо в інпуті стоїть тип password - символи приховуються
// console.dir(елемент) показує об*єкти тегів що є на елементі
const inputAlert = document.querySelector('#alertInput');
const btnAlert = document.querySelector('#alertButton');
console.dir(inputAlert);
btnAlert.addEventListener('click', handleChange);

function handleChange(event) {
  if (inputAlert.type === 'text') {
    btnAlert.textContent = 'Show';
    inputAlert.type = 'password';
  } else if (inputAlert.type === 'password') {
    btnAlert.textContent = 'Hide';
    inputAlert.type = 'text';
  }
}

// EX The button "Decrease"(зменшити) must to decrease the size by div on 10px. The button "Increase"(збільшити) must to increase the size by div on 10px.
const boxBySize = document.querySelector('#box');
const btnDecrease = document.querySelector('#decrease');
const btnIncrease = document.querySelector('#increase');
// offsetWidth - значення поточної ширини обраного елемента в console.dir()
// offsetHeight
console.dir(boxBySize);
btnDecrease.addEventListener('click', handleDecrease);
function handleDecrease(event) {
  boxBySize.style.width = `${boxBySize.offsetWidth + 10}px`;
  boxBySize.style.height = `${boxBySize.offsetHeight + 10}px`;
}
btnIncrease.addEventListener('click', handleIncrease);
function handleIncrease(event) {
  boxBySize.style.width = `${boxBySize.offsetWidth - 10}px`;
  boxBySize.style.height = `${boxBySize.offsetHeight - 10}px`;
}
// ex Double values in items meanwhile the button "Double" is pressing.
const listOfItems = document.querySelector('.list');
const btnDouble = document.querySelector('#double');
const itemAll = Array.from(document.querySelectorAll('.list-item'));

btnDouble.addEventListener('click', handleDouble);
function handleDouble(event) {
  itemAll.forEach(el => (el.textContent *= 2));
}
// ex Remuve seleckted items in form meanwhile (at the same time when в той час як) button "Filter" is pressed
// коли є форма ми вішаємо слухача події на форму
const form = document.querySelector('.checkboxForm');
form.addEventListener('submit', handleFormSubmit);
const divCheckbox = document.querySelectorAll('.checkboxWrapper');
console.log(...divCheckbox);
// const testCheckbox = document.querySelector("#test")
// console.dir(testCheckbox.checked === false);

function handleFormSubmit(event) {
  event.preventDefault();
  //                                оберуться елементи у яких властивість checked === true
  const checkboxTrue = [...divCheckbox].filter(
    item => item.lastElementChild.checked
  );
  checkboxTrue.forEach(el => el.remove());
}

// EX Implement(реалізуй) search (filter) for first or last name in this list
const listContacts = document.querySelector('.contactsList');
const allContacts = [...listContacts.children];
const inputFilter = document.querySelector('.contactsFilter');

inputFilter.addEventListener('input', handleFilter);
function handleFilter(event) {
  const inputVal = inputFilter.value;
  const searchedItem = allContacts.filter(contact =>
    contact.textContent.toUpperCase().includes(inputVal.toUpperCase().trim())
  );
  listContacts.innerHTML = '';
  //                 розгорнули масив
  listContacts.append(...searchedItem);
}
// wherePast.innerHTML = " " приймає і вставляє рядок
// wherePast.append(вузол) приймає і вставляє вузол(елемент)

// ex We have array of objects with popular movies and the search form by film's name.
// 1. Users must saw the film's list as soon as the page has the firs load (title, year, reit, country).
// Use the Template literals (неофіційно Template strings) (шаблонні рядки) and the method incertAdjacentHTML ("beforeeend", `Template literals`) for rendering markup.
// 2. Implement the serching of film by name. Films stay in list which has full or partial coincidence (котрі мають повне або часткове співпадіння) by name, meanwhile the button "Search" is pressed.
const movieList = [
  {
    title: 'Movie 1',
    genres: ['Action', 'Crime', 'Drama'],
    rating: 9,
    country: 'Australia',
    year: 2019,
  },
  {
    title: 'Movie 2',
    genres: ['Action', 'Comedy'],
    rating: 8,
    country: 'USA',
    year: 2017,
  },
  {
    title: 'Movie 3',
    genres: ['Drama', 'Horror'],
    rating: 8.5,
    country: 'Belgium',
    year: 2020,
  },
  {
    title: 'Movie 4',
    genres: ['Crime', 'Drama'],
    rating: 8.9,
    country: 'France',
    year: 2021,
  },
];

const moviesForm = document.querySelector('#searchForm');
const moviesList = document.querySelector('#moviesList');
const markupFilms = movieList
  .map(
    obj =>
      `<li>><h2>The title:${obj.title}</h2> <p>The rating: ${obj.rating}</p> <p>The country: ${obj.country}</p> <p>The year:${obj.year}</p></li>`
  )
  .join();
moviesList.insertAdjacentHTML('beforeend', markupFilms);

moviesForm.addEventListener('submit', handleSearchFilm);
function handleSearchFilm(event) {
  event.preventDefault();
  const itemFilms = [...moviesList.children];
  const inputValue = event.currentTarget.searchInputByTitle.value.toLowerCase();

  const filmCoincidenced = itemFilms.filter(item =>
    item.textContent.toLocaleLowerCase().includes(inputValue)
  );

  moviesList.innerHTML = '';
  moviesList.append(...filmCoincidenced);
}

// 2 варіант вирішення задачі - робимо пошук співпадінь (.filter) на вихідному масиві фільмів а не на масиві фільмів створеної розмітки
