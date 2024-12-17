'use strict';
// ........................................JavaScript у браузері
// Коли JavaScript виконується у браузері, у нього є додатковий функціонал для роботи з вкладкою. Цей функціонал складається з таких модулів: ECMAScript, DOM, BOM.
// - ECMAScript (скорочено ES) — це стандарт, який описує мову програмування JavaScript. Цей стандарт визначає синтаксис і семантику мови, а також набір вбудованих об'єктів і функцій для роботи з даними, текстом, датами та іншими аспектами програмування. ECMAScript надає основну структуру мови, на якій базується JavaScript. Різні версії JavaScript реалізуються через різні версії стандарту ECMAScript. Наприклад, ES5, ES6 (або ES2015), ES2016, ES2017 тощо — це різні версії ECMAScript,
//  - Об'єктна модель документа (Document Object Model) — незалежний інтерфейс для роботи з HTML-документом. Ця модель містить набір властивостей і методів, що дозволяють шукати, створювати й видаляти елементи, реагувати на дії користувача і багато іншого, тобто поєднує сторінку з мовою програмування.
//                    DOM — це відображення HTML-документа. Виглядає як деревоподібна структура, у якій кожен вузол — це JavaScript-об'єкт із властивостями та методами, що становить частину HTML-документа. Кожен елемент у документі, весь документ в цілому, заголовок, посилання, абзац — це частини DOM цього документа, тому всі вони можуть бути змінені з JavaScript-коду.
// - Об'єктна модель браузера (Browser Object Model) — незалежний від мови інтерфейс для роботи з браузером. Містить набір властивостей і методів, що дозволяють отримати доступ до ряду функцій браузера. Саме завдяки BOM можна отримувати розміри вікна браузера, читати URL, працювати з історією навігації, місцем розташування тощо.
// ..........................Як складається DOM-дерево?
// Щоб відобразити HTML-документ, браузер спочатку перетворює його у формат, який він розуміє — DOM. Інтерпретатор браузера має спеціальний фрагмент коду — HTML-парсер, який використовується для перетворення HTML у DOM.
// Браузер будує DOM поступово, щойно надходять перші фрагменти коду, він починає парсити HTML, додаючи вузли в деревоподібну структуру.Після того як DOM-дерево побудовано, у ньому можна знайти елемент за допомогою JavaScript. Оскільки кожен елемент має інтерфейс із безліччю властивостей і методів, з ним можна виконувати необхідні дії.

// ......................................Пошук елементів
// Група методів elem.querySelector* — це сучасний стандарт для пошуку елементів. Вони дозволяють знайти елемент або групу елементів за CSS-селектором.
// Доступ до DOM починається з об'єкта document, з нього можна дістатися до будь-яких елементів. Об’єкт document — це частина глобального об'єкта window, який доступний у скрипті, коли він виконується в браузері. Так само як alert, console.log і багато інших.
// ......................................Навігація по DOM
// Елементи DOM-дерева мають ієрархічне відношення один до одного. Для опису відносин використовуються терміни предок (ancestor), нащадок (descendant), батько (parent), дитина (child) і сусід (sibling).

// Найвищий елемент називається кореневим (root node).
// Кожен елемент, крім кореневого, має тільки один батьківський.
// В елемента може бути скільки завгодно дітей.
// Сусіди — це елементи зі спільним батьківським елементом.
// Дочірні елементи (діти) — елементи, що безпосередньо вкладені в поточний елемент (елементи першого рівня вкладеності).
// Нащадки — усі елементи, які знаходяться в поточному елементі, разом з їхніми дітьми, дітьми їхніх дітей тощо. Тобто все на зразок дерева.

//                                            element.querySelector(selector)
// - Використовується, якщо необхідно знайти тільки один, найчастіше унікальний елемент.
// - Повертає посилання на перший знайдений елемент усередині element, що відповідає рядку CSS-селектора selector.
// - Якщо нічого не знайдено, то поверне null
const selector = document.querySelector('.header');
const image = document.querySelector('img');
console.log(selector, image);

//                                            element.querySelectorAll(selector)
// - Використовується, якщо необхідно знайти колекцію елементів, тобто отримати масив посилань на елементи з однаковим селектором. Наприклад, усі елементи списку з класом list-item.
// - Повертає псевдомасив усіх елементів всередині element, які відповідають CSS-селектору selector
// - Якщо нічого не знайдено, поверне порожній масив
const allSelectors = document.querySelectorAll('img');
const allDivisions = document.querySelectorAll('.picture-div');
console.log(allSelectors, allDivisions);
// ...................................................Властивості та атрибути
// Під час побудови DOM-дерева деякі стандартні HTML-атрибути стають властивостями елементів, тобто властивостями DOM-об’єктів.

// Наприкладб якщо в HTML є <a></a>,то у JavaScript коді можна прочитати значення його атрибута href, отримавши посилання на елемент, тобто об'єкт, використовуючи querySelector, і звернутися до його властивості href. Значення атрибутів можна змінювати, перевизначивши їм нове значення прямо з JavaScript коду, і під час виконання скрипта значення в HTML, тобто в DOM-дереві, зміниться.
// const link = document.querySelector(".link");
// console.log(link.href); // "https://goit.global"
// link.href = "https://neo.goit.global";
// console.log(link.href); // "https://neo.goit.global"
// .............................................................Властивість textContent
// повертає весь текстовий контент усередині елементів (власних і вкладених елементів).
// Для отримання текстового контенту елемента, як завжди, отримуємо посилання на елемент і звертаємося до властивості через крапку.
const header = document.querySelector('h1');
console.log(header.textContent);
// можем змінювати значення що поверне textContent і воно змінниться в HTML and DOM
// header.textContent = "Relax";
// console.log(header);

// PSEUDO array -> метод Array.from(), який створить масив із псевдомасиву,
const spanHeader = Array.from(document.querySelectorAll('span'));
// Array.isArray(те що перевірятиметься ) - використовують щоб перевірити що це масив, він поверне тру
console.log(Array.isArray(spanHeader));
const arraySpanHeader = [];
for (const item of spanHeader) {
  arraySpanHeader.push(item.textContent);
}
console.log(arraySpanHeader);

// ..................................................властивысть el.children
// поверне псевдомасив із всіма дітьми елемента
// el.children[0] - поверне 1 дитину
// ....властивість el.firstChild and el.lastChild поверне 1 /останній дочірній елемент
// властивість el.childNode - поверне dв псевдомасиві  всі дочірні ел включаючі текстові ноди(пробіли #text)
// el.previousElementSibling - поверне попередній елемент (той що вище у коді)
//  el.nextElementSibling - поверне наступний ел (той що нижче у коді)
//                                Властивість classList

// Для того щоб із JavaScript коду прочитати, додати, видалити або перевірити наявність CSS-класу в елемента, у властивості classList зберігається об'єкт із методами для роботи з CSS-класами елемента.
//         Властивість classList — це спеціальний тип об’єкта, який подібний до масиву. Зверни увагу, що він схожий, але не є нативним JavaScript-масивом, який ми вивчали раніше. Він зберігає в собі весь перелік класів DOM-елемента, властивість length і властивість value.

// властивість value містить точне значення атрибута class
// властивість length — кількість класів в елемента
const link = document.querySelector('img');
console.log(link.classList);
//                                                Метод classList.contains(className)
// Метод очікує аргументом рядок з іменем класу та повертає true або false, залежно від наявності класу className в елемента.
// Зверни увагу, що className передаємо як рядок без крапки (без селектора класу).
const hasActiveClass = link.classList.contains('title'); // false
//                                                 Метод classList.add(className)
// Метод очікує аргументом рядок з іменем класу та додає клас className до списку класів елемента.
// Можна додавати більше одного класу, вказавши кілька аргументів через кому.
//                                                 Метод classList.remove(className)
// Метод очікує аргументом рядок з іменем класу та видаляє клас className зі списку класів елемента.
//                                                 Метод classList.toggle(className)
// Метод працює як перемикач:
// якщо клас className відсутній, то додає його в кінець списку класів
// і навпаки, якщо клас className присутній — видаляє його
//                                                 Метод classList.replace(oldClassName, newClassName)
// Метод очікує 2 аргументи рядка (перший — стара назва класу, другий — нова назва класу) та замінює існуючий клас oldClassName на вказаний newClassName.
// !Якщо спробувати поміняти клас, якого не існує на елементі, то це не викличе помилку. Просто нічого не поміняється.

// ................................................Властивість style
// Властивість style використовується для читання та зміни вбудованих стилів з DOM-елементів. Вона повертає об'єкт, який містить список лише всіхВБУДОВАНИХ ВЛАСТИВОСТЕЙ (в HTML) елемента, а не увесь CSS.

// Під час запису властивості вони записуються в camelCase нотації, замість дефісів, які зазвичай використовуються в CSS, тобто background-color перетворюється на backgroundColor.
// На практиці стилізація елементів зазвичай виконується шляхом додавання CSS-класів.

// !!!!Властивість style використовується для додавання будь-яких динамічних стилів, наприклад, якщо посилання на фонове зображення невідомо заздалегідь і приходить з бекенда.

// ....................................................Доступ до атрибутів
// - Метод element.hasAttribute(nameAttribute) - приймає один аргумент — рядок nameAttribute, який містить ім’я атрибута для перевірки та повертає результат перевірки його наявності на елементі element — true чи false.
console.log(image.hasAttribute('src')); // true
// - Метод element.getAttribute(nameAttribute) - меод отримує один аргумент — рядок nameAttribute з іменем атрибута, і повертає значення цього атрибута для вказаного HTML-елемента element. Якщо атрибут не знайдено, метод повертає null.
console.log(image.getAttribute('alt'));
// - Метод element.setAttribute(nameAttribute, value) - приймає два аргументи: рядок nameAttribute з іменем атрибута, який потрібно встановити або змінити, та value зі значенням, яке цьому атрибуту треба присвоїти. Метод встановлює або змінює значення зазначеного атрибута для вказаного HTML-елемента element.
image.setAttribute('alt', 'Amazing nature');
console.log(image.getAttribute('alt')); // Amazing nature
// - Метод element.removeAttribute(nameAttribute) - приймає один аргумент — рядок nameAttribute з іменем атрибута, який потрібно видалити зі вказаного HTML-елемента element — та видаляє його. Якщо зазначеного атрибута немає на елементі, метод не викликає жодних помилок та не робить нічого.
image.removeAttribute('alt');
console.log(image.hasAttribute('alt')); // false
// Отримати доступ або змінити значення деяких атрибутів елемента можна безпосередньо, звернувшись до них як до властивостей DOM-об'єкта. Це буде менш затратно за кількістю коду.

// А ось видалити або перевірити наявність буде зручніше, використовуючи відповідний метод.

// створюємо атрибут для елемента
//  el = document.querySelector(`.className[href="значення атрибута"]`);
// ......................................................Власні атрибути
// Власні data-атрибути -  дозволяють додати до тегу довільний атрибут і отримати його значення в JavaScript.  коли нам потрібно зберегти певну інформацію на тезі, наприклад, вказати тип дії кнопки, щоб потім у певний момент часу мати можливість отримати до неї доступ.
/* <button type="button" data-action="save">Save text</button>
<button type="button" data-action="close">Close editor</button> */
//                                                         Отримання значень
// Для отримання значення data-атрибута - властивість dataset, після якої через крапку пишеться ім'я атрибута без data-. Тобто data- відкидається, а інша частина імені записується як ім'я властивості об'єкта.
// const saveBtn = document.querySelector('button[data-action="save"]');
// console.log(saveBtn.dataset.action); // "save"
//                                                           Зміна значень
// Змінити значення існуючого data-атрибута або додати новий можна так само, як і будь-якої іншої властивості об'єкта в JavaScript. Щоб це зробити, треба отримати доступ до DOM-елемента, а потім змінити/задати значення властивості в об'єкті dataset.
// // Змінюємо значення data-action для кнопки saveBtn
// saveBtn.dataset.action = "update";

// // Додаємо новий data-атрибут data-role
// saveBtn.dataset.role = "admin";
//...................................................Створення та видалення елементів
// DOM API (Document Object Model Application Programming Interface) має широкий функціонал. За його допомогою можна:
// вибирати або змінювати вже існуючі елементи
// видаляти елементи
// створювати нові елементи й додавати їх у документ

// Розглянемо, як створити новий елемент:
// document.createElement(tagName)

// створює елемент з ім'ям tagName і повертає посилання на його об’єкт як результат свого виконання.
// tagName — це рядок, що вказує тип елемента, який створюється.
// Елемент створюється в пам'яті, у DOM його ще немає.

// const heading = document.createElement("h1");
// Після створення елемента heading отримуємо ПОСИЛАННЯ на його об’єкт у пам'яті. З цього моменту можна звертатися до властивостей цього об’єкта і змінювати їх ще до того, як вставимо цей елемент у DOM.

// const heading = document.createElement("h1");
// heading.classList.add("title");
// heading.textContent = "This is a heading";
// console.log(heading); // <h1 class="title">This is a heading</h1>

//                                                 Додавання елементів

// Щоб створений елемент відображався на сторінці, його необхідно додати до вже існуючого елемента в DOM-дереві.

// elem.append(el1, el2, ...) — додає один або декілька елементів після всіх дітей елемента elem.
// elem.prepend(el1, el2, ...) — додає один або декілька елементів перед усіма дітьми елемента elem.

// У всіх цих методах el — це елементи або рядки, у будь-якому поєднанні та кількості. Рядки додаються, як текстові вузли.
// Зверни увагу! Якщо елемент для додавання вже знаходиться в DOM, то він видаляється зі свого старого місця й додається у нове. Отже, є правило: один і той самий елемент не може бути одночасно у двох місцях.
//                                                         Видалення елементів
//  метод element.remove().

// <p class="text">Random text content</p>

// Він викликається на елементі element, який необхідно видалити.

// const text = document.querySelector(".text")
// text.remove();
//        ......................................................Властивість innerHTML
// Існує ще один спосіб створити DOM-елементи і помістити їх у DOM-дерево.Для цього треба використати рядки з тегами і дозволити браузеру зробити всю важку роботу.
// Властивість innerHTML зберігає вміст елемента, включно з тегами, у вигляді рядка. Значення, що повертається, — це завжди валідний HTML-код.

// !!!!!!!!!!!!!!!!!!!!!!!!!Використовуй властивість element.innerHTML для додавання тільки у разі,
// — коли елемент element порожній щоб не було додаткових витрат на повторне створення вже існуючої розмітки або
// — якщо потрібно повністю замінити вміст element

// Зміна
// Властивість innerHTML доступна і для читання, і для запису. Якщо записати в неї рядок з HTML-тегами, то браузер під час парсингу рядка перетворить його у валідні елементи і додасть у DOM-дерево.

// !!!!ростий і швидкий спосіб видалення всього вмісту - якщо у властивість innerHTML записати порожній рядок, то вміст елемента буде очищено.
// // ..........Однотипна (шаблонна) розмітка створюється із масиву даних.
// Прийом полягає в перебиранні цього масиву та створенні одного рядка з HTML-тегами, який потім записуємо в innerHTML елемента. Якщо ти будеш це робити за допомогою методу map(), не забудь, що він повертає масив. Отже, перед тим як додавати розмітку в DOM, цей масив треба привести до рядка за допомогою методу join()
// HTML
// <section>
//   <h2>Popular technologies</h2>
//   <ul class="list"></ul>
// </section>
// Java Script
// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join("");

// // Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // Adding all the markup in one operation
// list.innerHTML = markup;

// Нове значення для element.innerHTML повністю видалить і повторно створить усіх нащадків елемента element. Якщо елемент спочатку не був порожній, то виникнуть додаткові витрати на повторне створення вже існуючої розмітки, а це погано.
// HTML і не порожній елемент артикль
// <article class="article">
//   <h2>Article title</h2>
// </article>
// JavaScript
// const article = document.querySelector(".article");
// const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
//    <a class="link" href="#">Read more...</a>`;

// // Replace += with = operator. See the difference?
// // Article title is lost because we overwrite element content.
// article.innerHTML += htmlString;

// Властивість innerHTML у JavaScript встановлює або отримує HTML-вміст елемента.

//................................................Метод insertAdjacentHTML()
// Метод insertAdjacentHTML() — це сучасний метод для додавання рядка з HTML-тегами перед, після або всередину елемента. Він вирішує проблему innerHTML з повторною серіалізацією вмісту елемента під час додавання розмітки до вже існуючої.

// element.insertAdjacentHTML(position, string)

// Аргумент position — це рядок, який визначає позицію щодо елемента element. Він приймає одне з чотирьох значень.

// "beforebegin" — перед element
// "afterbegin" — всередині element, перед усіма дітьми
// "beforeend" — всередині element, після усіх дітей
// "afterend" — після element

// Значення "beforebegin" і "afterend" працюють тільки тоді, коли element вже знаходиться в DOM-дереві. Обмеження зумовлене тим, що неможливо дізнатися, куди вставляти розмітку, доти, доки елемент не буде перебувати в DOM-дереві.
// HTML
// <ul class="list">
//   <li class="list-item">HTML</li>
//   <li class="list-item">CSS</li>
//   <li class="list-item">JavaScript</li>
// </ul>
// Java Script додаємо ще лішки після створених лішок і додаємо заголовок перед списком
// const list = document.querySelector(".list");

// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies
//   .map((technology) => `<li class="list-item new">${technology}</li>`)
//   .join("");

// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");

// ЕХ створюємо та додаємо новий пункт меню
//              створ лышку ы додали клас
const navItemElement = document.createElement('li');
navItemElement.classList.add('nav-item');
// створ посилання ы додали атрибут та класс і додали текст в тег а
const navItemLink = document.createElement('a');
navItemLink.href = 'https://github.com/Vi-Kovalska';
navItemLink.classList.add('nav-item-link');
navItemLink.textContent = 'Click me';
// вкладаємо тег а в тег li
navItemElement.append(navItemLink);
// отримуємо тег ul щоб додати туди тег li>a
const menu = document.querySelector('ul');
// додаєм створений тег li в список ul
menu.append(navItemElement);

// EX на основі масиву об*єктів  у <div class="color-picker"></div> створюєм тег button для кожного обєкта з назвою що міститься у label
const options = [
  { label: 'darkred', color: '#8b0000' },
  { label: 'greenyellow', color: '#adff2f' },
  { label: 'brown', color: '#a52a2a' },
  { label: 'orchid', color: '#da70d6' },
];
// // отримуємо дів ел
// const divContainer = document.querySelector(".color-picker")
// //           перебираєм масив і витягаємо значенння із об*єкту
// const elements = options.map(option => {
//      //         створюєм кнопку
// const buttonEl = document.createElement("button");
// buttonEl.classList.add("btn-color")
// //                додаєм текст для кнопки із властивості об*єкту
// buttonEl.textContent = option.label;
// //             додаєм колір кнопки із властивості об*Єкту
// buttonEl.style.backgroundColor = option.color;
// return buttonEl;
// });
// console.log(elements);
// // додаємо елементи методом .append() розгорнувши спред оператором значення із масиву
// divContainer.append(...elements);

// EX переписуєм попередній код у функцію щоб автоматизувати
// const divContainer = document.querySelector(".color-picker")
const divContainer = document.querySelector('.color-picker');
const createButtons = array => {
  return array.map(option => {
    const buttonEl = document.createElement('button');
    buttonEl.classList.add('btn-color');

    buttonEl.textContent = option.label;

    buttonEl.style.backgroundColor = option.color;
    return buttonEl;
  });
};
divContainer.append(...createButtons(options));

// EX є шапка таблиці в HTML,  в JavaScript дописуємо дані в таблицю взявши їх з масиву об*єктів
const allKeys = Array.from(document.querySelectorAll('th'));
const textForAllKeys = allKeys.map(key => key.textContent);
console.log(textForAllKeys.join(' '));

const accounts = [
  {
    id: 509766,
    amount: 3900,
    date: '24.03.2014',
    who: 'Arnold',
    transactionType: 'deposit',
    accountName: 'hfhdjfhj',
    accountNumber: 9548976,
  },
  {
    id: 509766,
    amount: 3900,
    date: '24.03.2014',
    who: 'Arnold',
    transactionType: 'invoice',
    accountName: 'hfhdjfhj',
    accountNumber: 9548976,
  },
  {
    id: 509766,
    amount: 3900,
    date: '24.03.2014',
    who: 'Arnold',
    transactionType: 'payment',
    accountName: 'hfhdjfhj',
    accountNumber: 9548976,
  },
];
const transactionTable = document.querySelector('.transaction-table');
const createMarkup = arr => {
  return arr
    .map(
      obj =>
        `<tr class="tr">
     <td class="td">${obj.id}</td>
     <td class="td">${obj.amount}</td>
     <td class="td">${obj.date}</td>
     <td class="td">${obj.who}</td>
     <td class="td">${obj.transactionType}</td>
     <td class="td">${obj.accountName}</td>
     <td class="td">${obj.accountNumber}</td>
    </tr>`
    )
    .join('');
};
transactionTable.insertAdjacentHTML('beforeend', createMarkup(accounts));

// звернемось до всіх tr td і додамо їм бордер
const tr = Array.from(document.querySelectorAll('tr'));
tr.map(el => (el.style.border = '1px solid #fff'));
const td = Array.from(document.querySelectorAll('td'));
td.map(el => (el.style.border = '1px solid #fff'));

// ................................................Події (events)
// Події використовуються для реакції на дії користувача й виконання коду, пов'язаного з певною подією.
// Для того щоб елемент реагував на дії користувача, до нього необхідно додати слухача події та визначити йому обробника.
//                                          Метод addEventListener()
// - додає слухача події на елемент.
// element.addEventListener(event, handler, options)
// event — рядок, що містить ім'я події, наприклад, "click"
// handler — колбек-функція, яка буде викликана під час настання події
// options — необов'язковий об'єкт параметрів із розширеними налаштуваннями
//                                         removeEventListener()
// видаляє слухача події з елемента. Aргументи аналогічні методу addEventListener()
// !!!!!!!!!!!!!!!важливо використовувати ту саму функцію-обробник, яка була призначена в addEventListener. З цієї причини рекомендовано для обробників подій використовувати іменовані функції, які можна легко передавати як аргументи.

//                                                    Об'єкт події
// Кожна подія — це об'єкт, який містить інформацію про деталі події та автоматично передається першим аргументом в обробник події. Усі події відбуваються з базового класу Event.
// Параметр event — це і є об'єкт події, який автоматично передається першим аргументом під час виклику колбек-функції. Ми можемо називати його як завгодно, але, як правило, його оголошують як e, evt або event.
//        Деякі властивості об'єкта події:
// = event.type — тип події.
// = event.currentTarget — елемент, на якому виконується обробник події.

//                                           Події клавіатури
// Існує дві основні події клавіатури:
// keydown — подія, що відбувається при натисканні клавіші
// keyup — подія, що відбувається, коли клавішу відпустили

// На відміну від інших подій, події клавіатури обробляються на документі, а не на конкретному елементі. Об'єкти подій клавіатури походять від базового класу KeyboardEvent.

// document.addEventListener("keydown", event => {
//   console.log("Keydown: ", event);
// });

//
// Події keydown і keyup спрацьовують при натисканні будь-якої клавіші, включно зі службовими (Ctrl, ShiftAltEscape тощо).

// На практиці переважно обробляють тільки подію keydown, оскільки вона відбувається швидше за keyup і користувач раніше бачить результат натискання.

//                            Властивості key і code
// - Властивість об’єкта події key повертає символ, згенерований натисканням клавіші на клавіатурі. Ця властивість враховує:
// стан клавіш-модифікаторів, наприклад Shift
// поточну мову

// Властивість об’єкта події code повертає код фізичної клавіші на клавіатурі й не залежить від мови та стану клавіш-модифікаторів.

// document.addEventListener("keydown", event => {
//   console.log("key: ", event.key);
//   console.log("code: ", event.code);
// });
// ex
const clearLogBtn = document.querySelector('.js-clear');
const logList = document.querySelector('.log-list');
let keypressCounter = 1;

console.log(clearLogBtn);

document.addEventListener('keydown', logMessage);
document.addEventListener('keyup', logMessage);
clearLogBtn.addEventListener('click', reset);

function logMessage({ type, key, code }) {
  const markup = `<div class="log-item">
    <span class="chip">${keypressCounter}</span>
    <ul>
      <li><b>Event</b>: ${type}</li>
      <li><b>Key</b>: ${key}</li>
      <li><b>Code</b>: ${code}</li>
    </ul>
  </div>`;

  logList.insertAdjacentHTML('afterbegin', markup);

  if (type === 'keyup') {
    incrementKeypressCounter();
  }
}

function reset() {
  keypressCounter = 1;
  logList.innerHTML = '';
}

function incrementKeypressCounter() {
  keypressCounter += 1;
}

//                                                     Події елементів форм
//                                             Подія submit відправка <form></form>
// Подія submit відбувається безпосередньо на формі (тег form), тому обробник подій слід встановлювати саме на ній.
// Відправлення форми відбувається:
//              -при кліку на кнопку з атрибутом type="submit"
// Або
//              - при натисканні клавіші Enter під час перебування в будь-якому її текстовому полі форми
// Подію submit можна застосувати для валідації (перевірки) форми перед відправленням, оскільки на об'єкті події існує багато корисних властивостей, пов'язаних з елементами форми.                                      //
// const form = document.querySelector("form");

// form.addEventListener("submit", event => {
// 	event.preventDefault();
// });

//                                             метод preventDefault()
// Для скасування дії браузера за замовчуванням в об'єкта події

// ЕХ  створює простий журнал подій для подій "keydown" і "keyup”. Клікни мишею по вікну з прикладом, щоб навести на нього фокус. Відстеження подій клавіатури вже знаходиться на елементі document. Надрукуй щось на клавіатурі, щоб побачити результат їх обробки.
const registerForm = document.querySelector('.form');

registerForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  //   Властивість elements DOM-елемента форми містить об'єкт з посиланнями на всі її елементи, які мають атрибут name. Саме тому в прикладі ми отримуємо значення полів, звертаючись до event.target.elements.login.value і event.target.elements.password.value.
  const login = form.elements.login.value;
  const password = form.elements.password.value;

  if (login === '' || password === '') {
    return console.log('Please fill in all the fields!');
  }

  console.log(`Login: ${login}, Password: ${password}`);
  form.reset();
}

//                                   Подія change
// Подія change відбувається після зміни елемента форми.

// - Для текстових полів або textarea подія відбудеться не на кожному введенні символу, а після втрати фокусу. Це не завжди зручно. Уяви, що користувач набирає щось у текстовому полі — подія відсутня. Щойно фокус пропав, відбудеться подія change.

// - Для select, чекбоксів і радіокнопок, подія change спрацьовує відразу під час вибору значення.

// Dластивості при роботі з елементом <select>:
// value - значення в атрибуті value в елементі опції в HTML
// selectedIndex - індекс опції у списку (від 0)
// options - текстова назва опціїї
// ЕХ
const select = document.querySelector('.pizza-select');
const textOutput = document.querySelector('.text-output');
const valueOutput = document.querySelector('.value-output');

select.addEventListener('change', setOutput);

function setOutput(event) {
  const selectedOptionValue = event.currentTarget.value;
  console.log(selectedOptionValue);
  const selectedOptionIndex = event.currentTarget.selectedIndex;
  console.log(selectedOptionIndex);
  const selectedOptionText =
    event.currentTarget.options[selectedOptionIndex].text;
  console.log(selectedOptionText);

  textOutput.textContent = selectedOptionText;
  valueOutput.textContent = selectedOptionValue;
}

//                                                Подія input
// відбувається тільки на текстових полях і textarea.

// Вона створюється щоразу при зміні значення елемента, не чекаючи втрати фокусу. На практиці input — це найголовніша подія для роботи з текстовими полями форми.
// ex
const textInput = document.querySelector('.text-input');
const output = document.querySelector('.output');

textInput.addEventListener('input', event => {
  output.textContent = event.currentTarget.value;
});

// Порівняємо події input і change на текстових полях і textarea
// Подія input:
// -відбувається при кожній зміні значення (при введенні або видаленні)
// -не залежить від втрати фокусу
// Подія change: відбувається після втрати фокусу за умови, що відбулася зміна значення в елементі

//                                      Подія focus і blur
// Елемент отримує фокус під час кліку миші або переходу клавішею Tab.

// Момент отримання і втрати фокусу дуже важливий. Отримуючи фокус, ми можемо завантажити дані для автозаповнення, почати відстежувати зміни тощо.
// Під час втрати фокусу — перевірити введені дані.

// подія focus відбувається під час фокусування на елементі
// подія blur відбувається при втраті фокусу, наприклад, користувач клікає в іншому місці екрана
// Фокус може бути тільки на одному елементі сторінки за одиницю часу.
// document.activeElement - gоточний елемент, на якому знаходиться фокус,

// Більшість елементів не можуть отримати фокус. Наприклад, якщо клікнути по <div>, то фокусування на ньому не відбудеться, тому що це не інтерактивний елемент.
// ex
const textInputt = document.querySelector('.text-input-2');
const setFocusBtn = document.querySelector('[data-action="set"]');
const removeFocusBtn = document.querySelector('[data-action="remove"]');

setFocusBtn.addEventListener('click', () => {
  textInputt.focus();
});

removeFocusBtn.addEventListener('click', () => {
  textInputt.blur();
});

textInputt.addEventListener('focus', () => {
  textInputt.value = 'This input has focus';
});

textInputt.addEventListener('blur', () => {
  textInputt.value = '';
});

// Пошук DOM-елементів
// element.querySelector(selector) - повертає перший елемент, який відповідає вказаному CSS селектору всередині елемента element.
// element.querySelectorAll(selector) - повертає всі елементи, які відповідають вказаному CSS селектору всередині елемента element.

// Властивості DOM-елемента
// element.textContent - містить текстовий вміст елемента element, ігноруючи всі теги HTML всередині.
// element.innerHTML - містить HTML-вміст елемента element.
// element.style - об'єкт, що містить вбудовані стилі елемента element, які можна змінювати динамічно з JavaScript.

// CSS класи на DOM-елементах
// element.classList.contains(className) - перевіряє, чи міститься вказаний клас className на елементі element.
// element.classList.add(className) - додає клас className до списку класів елемента element.
// element.classList.remove(className) - видаляє клас className зі списку класів елемента element.
// element.classList.toggle(className) - додає клас className, якщо його немає, або видаляє, якщо він вже присутній, на елементі element.
// element.classList.replace(oldClassName, newClassName) - замінює клас oldClassName на newClassName в списку класів елемента element.

// Створення та видалення DOM-елементів
// document.createElement(tagName) - створює новий HTML-елемент з вказаним ім'ям тегу tagName.
// element.append(el) - додає вміст (або елемент) до кінця списку дочірніх елементів element.
// element.prepend(el) - додає вміст (або елемент) до початку списку дочірніх елементів element.
// element.remove() - видаляє DOM-елемент з DOM дерева.
// insertAdjacentHTML(position, string) - додає вказаний рядок HTML після, перед, всередині або перед вказаним елементом.

// Події
// element.addEventListener(event, handler) - додає обробник події handler для події event на елемент element.
// element.removeEventListener(event, handler) - видаляє обробник події handler для події event на елементі element.
// keydown - подія, яка виникає, коли клавіша на клавіатурі натиснута.
// submit - подія, яка виникає при відправці форми.
// change - подія, яка виникає при зміні значення елемента форми.
// input - подія, яка виникає при введенні даних в текстове поле.
// focus - подія, яка виникає, коли елемент отримує фокус.
// blur - подія, яка виникає, коли елемент втрачає фокус.

// ex work with form - it's must have
const formComment = document.querySelector('.js-form');
formComment.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  // вимкнули дефолтне перезавантаж сторінки при натисканні на кнопку сабміт
  event.preventDefault();
  // заходим у властивості подіїї event > target > elements > ключ > value (бачим там всі елементи форми і ключі взяті з атрибута HTML name="" звернувшись до яких ми маєм ще один спосіб отримати дані що ввів користувач у поля)
  console.log(event);
  const elements = event.target.elements;
  const emailValue = elements.email.value;
  const passwordValue = elements.password.value;
  const textareaValue = elements.comment.value;

  if (emailValue === '' || passwordValue === '' || textareaValue === '') {
    return alert('All fields must be filled in!');
  } else {
    const info = {
      login: emailValue,
      password: passwordValue,
      comment: textareaValue,
    };
    console.log(info);
    // можемо вивести об*єкт в алерт
    alert(JSON.stringify(info));
  }
  // очищаємо форму від даних користувача після збереженнчя
  event.target.reset();
}

// EX обробка комбінацій клавіш - при натисканні ctrl+C текст не буде копіюватися з document (html page)
document.addEventListener('keydown', handleKeyPress);
function handleKeyPress(event) {
  if (event.ctrlKey && event.code === 'KeyC') {
    console.log('copyrityng on page' + '!');
    // вимкнули дефолтне значення клавіш ctrl+C і копіювання не відбудеться
    event.preventDefault();
  }
}

//                                  Події миші
// - mouseenter (навели мишку на об*єкт події) and mouseleave (вивели мишку з об*єкта події)
// - mousover and mouseout - те саме але ці властивості чутливі до вкладених елементів (зайшли на елемент - mousover, якщо натрапили на вкладений елемент спочатку відбудеться вихід з батьківського ел -mouseout а потім вхід у дочірній елемент   mousover)
// - mousemove (chatty event - балакуча подія) - подія відбув під час кожного руху мишки, показує точні координати знаходження мишки

// коли mouseenter - наводимо на div (об*єкт події) - додаємо класс ".box-active" що робить back-ground іншого кольору ; коли виводимо мишку mouseleave з об*єкта події видаляємо клас .box-active" і back-ground стає як був до створення цього класу
const box = document.querySelector('.box-1');
const box2 = document.querySelector('.box-2');

box.addEventListener('mouseenter', addClass);
box.addEventListener('mouseleave', remuvClass);

box2.addEventListener('mouseenter', addClass);
box2.addEventListener('mouseleave', remuvClass);

function addClass(event) {
  console.log('Attention mouseenter');
  box.classList.add('box-active');
  box2.classList.add('box2-active');
}

function remuvClass(event) {
  console.log('Ops...mouseleave');
  box.classList.remove('box-active');
  box2.classList.remove('box2-active');
}
// Ex створюєм із масива фото-колекцію карток в список
const cars = [
  {
    brand: 'INFINITI',
    type: 'Luxury SUV QX80',
    year: '2025',
    price: ' ',
    src: './images/infiniti-qx80.jpg',
  },
  {
    brand: 'Volkswagen',
    type: 'Electric SUV  ID.4',
    year: 2024,
    price: '$39,735',
    src: './images/volkswagen-id-4.jpg',
  },
  {
    brand: 'Toyota',
    type: 'Truck Tundra i-FORCE MAX',
    year: '2025',
    price: '$72,510',
    src: './images/toyota-tundra-i-force-max.jpg',
  },
];
function createMarkup2(arr) {
  return arr
    .map(
      car =>
        `<li class="car-card">
  <img src="${car.src}" alt="${car.type}" class="img-car" width="500" height="400"/>
  <h2 class="car-titel">${car.brand} - ${car.year}</h2>
  <h3 class="car-type">${car.type}</h3>
  <p class="car-price">${car.price}</p>
  </li>`
    )
    .join('');
}

const ulCars = document.querySelector('.cars-list');
const liCar = document.querySelector('.car-card');

ulCars.insertAdjacentHTML('beforeend', createMarkup2(cars));

const formCars = document.querySelector('.car-search');
formCars.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();

  const query = event.target.elements.query;
  const options = event.target.elements.options;
  console.log(event.target.elements.query);
  console.log(event.target.elements.query.value.toLowerCase());

  //  the bag - properties query.value (input's value) and options.value (value in <select value="car" or value="brand"></select>) are undefined . Why?

  const result = cars.filter(car => {
    // чи включає значення з select те що написано в інпуті користувачем +для правильного порівняння нормалізували до нижнього регістру
    return (
      car[event.target.elements.options.value].toLowerCase() ===
      car[event.target.elements.query.value].toLowerCase()
    );
    //  об*єкт.ключ(обере в select).значення
  });
  // поміщаємо отриманий об*єкт/-ти в список стираючи перед тим відображені всі інші автомобілі методом innerHTML
  ulCars.innerHTML = createMarkup2(result);
}
// ЕХ
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  if (amount >= 1 && amount <= 100) {
    let size = 30;
    for (let i = 1; i <= amount; i++) {
      const coloredDiv = document.createElement('div');
      coloredDiv.style.width = `${size}px`;
      coloredDiv.style.height = `${size}px`;
      coloredDiv.style.backgroundColor = getRandomHexColor();
      boxes.appendChild(coloredDiv);
      size += 10;
    }
  }
}
const input = document.querySelector('#amountInput');
const btnCreate = document.querySelector('#btnCreate');
const btnDestroy = document.querySelector('#btnDestroy');
const boxes = document.querySelector('#boxes');

function create(event) {
  event.preventDefault();
  boxes.innerHTML = '';

  const amount = input.value;
  createBoxes(amount);
}
btnCreate.addEventListener('click', create);

const destroyBoxes = () => {
  boxes.innerHTML = '';
  input.value = '';
};
btnDestroy.addEventListener('click', destroyBoxes);
// ex
const btnMoveKitty = document.querySelector('.btn-move-the-box');
const btnGoBackKitty = document.querySelector('.kitty-go-back');
const divKitty = document.querySelector('.box');

btnMoveKitty.addEventListener('click', handleMove);
let step = 0;
function handleMove(event) {
  step += 50;
  divKitty.style.marginTop = `${step}px`;
  divKitty.style.marginLeft = `${step}px`;
  console.log(step);

  return step;
}
btnGoBackKitty.addEventListener('click', handleGoBack);
function handleGoBack(event) {
  step -= 50;
  divKitty.style.marginTop = `${step}px`;
  divKitty.style.marginLeft = `${step}px`;
}
//                                            Information from mentor
// DOM (Document Object Model) – це спосіб, за допомогою якого JavaScript може взаємодіяти з HTML-елементами на сторінці. Це основа для створення динамічних інтерфейсів користувача.
// Кожен елемент на веб-сторінці представлений у вигляді об'єкта, з яким можна працювати через JS. Для того, щоб отримати доступ до елемента, використовуються методи, як-от:
// document.getElementById('id') – шукає елемент за його id.
// document.querySelector('.class') – повертає перший елемент, що відповідає CSS-селектору.
// document.querySelectorAll('tag') – повертає всі елементи, що відповідають певному тегу або селектору.
// В більшості випадків вам будуть корисні наступні селектори для пошуку елементів в ДОМ (насправді це звичайні селектори, якими ви користуєтесь в css):
// .myClass - селектор класу
// #myId - id селектор
// div.myClass - комбінований селектор (в цьому прикладі <div>з класом myClass )
// div > p - дочірній селектор (<p>, що є безпосередніми дочірніми елементами <div>)
// div p - селектор нащадків (<p> всередині <div>)
// [attribute] - селектор атрибута (елемент з наявністю атрибута)
// [attribute="value"] – елемент з конкретним значенням атрибута.
// Події – це дії, що відбуваються на сторінці (наприклад, клік мишею, натискання клавіші тощо). Щоб "слухати" події, ми використовуємо метод addEventListener. Це дозволяє виконувати певний код, коли подія відбувається.
// Основні події, які варто знати:
// click – спрацьовує при натисканні на елемент.
// input – реагує на введення даних у текстове поле.
// submit – спрацьовує при відправці форми.
// keydown та keyup – реагують на натискання і відпускання клавіші.
// Що варто знати про обробники подій:
// Можна додавати кілька обробників до одного елемента.
// Є можливість "зупинити" виконання стандартної поведінки браузера за допомогою event.preventDefault(), наприклад, для блокування перезавантаження сторінки при відправці форми.
