'use strict';
//                         localStorage and sessionStorage
// setItem(key, value) – сохранить пару ключ/значение.
// getItem(key) – получить данные по ключу key.
// removeItem(key) – удалить данные с ключом key.
// clear() – удалить всё.
// key(index) – получить ключ на заданной позиции.
//   length – количество элементов в хранилище.

// ex Implement saving value in textarea by user meanwhile the page was reload. The textarea is clearing after submit the form.
const form9 = document.querySelector('.feedback-form9');
const textarea = form9.querySelector('textarea');
// 1) отримуємо динамічно дані які ввів користувач в текстареа та зберігаємо їх в localStorage
textarea.addEventListener('input', handleSaveMessage);
function handleSaveMessage(event) {
  console.log(event.target.value);
  localStorage.setItem('message', `${event.target.value}`);
}

// 2) повертаємо збережений месседж з localStorage, якщо там щось було - оновлюємо DOM
function MessageGoBackAfterReloadThePage() {
  const messageByLocalStorage = localStorage.getItem('message');
  // якщо не пустий рядок то виводим збережений месседж (наприклад юзер не заповнив текстареа то буде null - нам не треба його виводити в текстареа)
  if (messageByLocalStorage) {
    textarea.value = messageByLocalStorage;
  }
}

MessageGoBackAfterReloadThePage();

// під час відправки форми - видаляємо месседж з текстареа та з localStorage
form9.addEventListener('submit', handleMessage);
function handleMessage(event) {
  event.preventDefault();
  // textarea.value = "";
  event.currentTarget.reset();
  localStorage.removeItem('message');
}
// ex
// Implement: 1)shop item on page by array of objects 2) the basket (other html page) where we can add items 3)
const jewelry = [
  {
    id: 1,
    name: 'Double Row Hinged Bangle',
    price: 8800,
    brand: 'Tyffany&Co',
    description: 'in Rose Gold',
    year: 2024,
    pic: '../images/double-row-hinged-bangle.jpg',
  },
  {
    id: 2,
    name: 'Milgrain Band Ring',
    price: 7980,
    brand: 'Tyffany&Co',
    description: 'in Platinum with Diamonds, 3.2mm Wide',
    year: 2024,
    pic: '../images/milgrain-band-ring.jpg',
  },
  {
    id: 3,
    name: 'Earrings',
    price: 4200,
    brand: 'Tyffany&Co',
    description: 'Earrings in 18k rose gold with round brilliant diamonds.',
    year: 2024,
    pic: '../images/earrings.jpg',
  },
];
const LS_KEY = 'basket';
const container9 = document.querySelector('.js-list');
// 1)відмальовуємо товари
function createMarkup9(arr) {
  return arr
    .map(
      ({ id, name, price, brand, description, year, pic }) => `
        <li class="item-card js-product" data-id="${id}">
        <div class="shop-div-pic"><img src="${pic}" width="450" height="450" alt="${name}"/></div>
        <div class="composition-text">
        <h4>${name}</h4>
        <p>By ${brand}</p>
        <p>${description}</p>
        <p>Price:${price}$</p>
        <p>Year of product ${year}</p>
        <button class="btn-add-basket js-btn">Add to the basket</button>
        </div>
        </li>
        `
    )
    .join('');
}
container9.insertAdjacentHTML('beforeend', createMarkup9(jewelry));
// 2)делегуємо події на всьому списку карток
// target єлемент по якому клікнули
// currentTarget батьківський контейнер на якому висить слухач події
container9.addEventListener('click', handleAddToTheBasket);
function handleAddToTheBasket(event) {
  // 3) наповнюємо ключ "basket" в localStorage масивом обраних карток
  // перевіряєм якщо є клас js-btn(кнопка) тоді додаємо до корзини картку
  if (!event.target.classList.contains('js-btn')) {
    return;
  } else {
    // отримуємо батьківський елемент кнопки по якій клікнули - лішку
    const parentItem = event.target.closest('.js-product');
    // витягаємо з нього значення data-id
    const itemId = +parentItem.dataset.id;
    console.log(itemId);
    // отримуємо весь об*єкт за знайденим id
    const currentProduct = jewelry.find(({ id }) => id === itemId);
    console.log(currentProduct);
    // отримуєм дані з localStorage - так як корзина може бути порожня - буде null(бо нічого не додано) || [] (поверне порожній масив щоб не повертати null)
    const productsArr = JSON.parse(localStorage.getItem(LS_KEY)) || [];
    console.log(productsArr);
    // далі звертаємось до масиву і шукаємо індекс картки товару, якщо його немає (порожній масив) -findIndex  поверне -1
    const indexByProductInArray = productsArr.findIndex(
      ({ id }) => id === itemId
    );
    // якщо масив товарів пустий - додаєм цей товар
    if (indexByProductInArray === -1) {
      currentProduct.quantity = 1;
      productsArr.push(currentProduct);
      // якщо товар є - звертаємось до об*жєкту по його індексу і збільшуємо його quantity в масиві (кошику)
    } else {
      productsArr[indexByProductInArray].quantity += 1;
    }
    // add array of Products in localStorage
    localStorage.setItem(LS_KEY, JSON.stringify(productsArr));
  }
}
// 3) Працюємо зі сторінкою корзини. переходимо у файл /js/basket-9modul.js Переміщаємо дані з localStorage на сторінку html корзини

// JSON – стандартний формат обміну даними між сервером та клієнтом. Дуже схожий на звичайні об'єкти JS, але ключі завжди в лапках. Для перетворення об'єкта чи масива в JSON-рядок використовується метод JSON.stringify(obj). Для зворотнього перетворення - JSON.parse(jsonString). JSON є основою для роботи з API та обміну даними в сучасних додатках.
// Для зберігання даних прямо у браузері використовують localStorage та sessionStorage. Першій зберігає дані навіть після закриття вкладки чи браузера, а другий - тільки поки відкрита вкладка. Використання вебсховища є корисним для створення зручного UX.
// Модульність дозволяє розбивати код на окремі, незалежні блоки, що полегшує його читабельність та масштабування. Це ключ до чистого та підтримуваного коду. Завдяки використанню import та export ми можемо розділяти проєкт на невеликі файли.
// Збірщики – це інструменти, які об’єднують різні файли вашого проєкту в один (або кілька) для більш ефективного завантаження у браузер. Уявіть, що у вас є багато файлів JavaScript, CSS, зображень тощо. Збірщик оптимізує їх, видаляє зайве та мінімізує для швидкої роботи вашого додатка в продакшені.
// Одними з найпопулярніших збірщиків є Webpack, Vite, Parcel.
