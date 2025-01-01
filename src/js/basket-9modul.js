'use strict';
// 3) Працюємо зі сторінкою корзини. переходимо у файл /js/basket-9modul.js Переміщаємо дані з localStorage на сторінку html корзини
const totalPriceTitle = document.querySelector('.js-total-price');
const containerBasket = document.querySelector('.js-list-basket');
const clearBasketBtn = document.querySelector('.js-clear-btn');

const LS_KEY = 'basket';
let totalCostBasket;
const productsArr = JSON.parse(localStorage.getItem(LS_KEY)) || [];
console.log(productsArr);

// productsArr.length > 0 (якщо масив не порожній - є додані товари)
if (productsArr.length) {
  // відображаєм кнопку очищення корзини
  clearBasketBtn.hidden = false;
}
// рахуєм заг суму товарів
totalCostBasket = productsArr.reduce(
  (acc, { quantity, price }) => (acc += quantity * price),
  0
);
// якщо сумма в булі тру (>0) відображаємо , якщо фолс - пишемо корзина пуста
totalPriceTitle.textContent = totalCostBasket
  ? `The total cost is ${totalCostBasket}$`
  : 'The cart is empty';

// 4) Відмальовуєм обрані тьовари з масиву productsArr у корзині
function createMarkup(arr) {
  return productsArr
    .map(
      ({ id, pic, price, quantity, name }) => `
    <li class="cart-item">
    <img src="${pic}" alt="${name}" class="product-img">
    <h2>${name}</h2>
    <label>Quantity: <input id="${id}" data-price="${price}" class="inp-qnt" type="number" min="1" max="100" step="1" value="${quantity}"></label>
    <p class="total-price-item">Total price: ${quantity * price}</p>
    </li>
    `
    )
    .join('');
}
containerBasket.insertAdjacentHTML('beforeend', createMarkup(productsArr));

//
clearBasketBtn.addEventListener('click', handleClearBasket);
function handleClearBasket(event) {
  containerBasket.innerHTML = '';
  localStorage.removeItem(LS_KEY);
  // повертаєм покупця на сторінку шопа
  window.location.href = '/index.html#shop';
}

// implement change quantity in basket by input ang change total cost
const inputQuantityBasket = document.querySelector('.inp-qnt');
const totalPriceItem = document.querySelector('.total-price-item');
inputQuantityBasket.addEventListener('input', handleChangeQntAndTotalCost);
function handleChangeQntAndTotalCost(event) {
  event.preventDefault();

  const itemId = +event.target.id;
  const objFromLS = productsArr.find(({ id }) => id === itemId);
  console.log(objFromLS.price);

  totalPriceItem.textContent = `${event.target.value * objFromLS.price}`;
  // // змінюєм к-ть товару в local Storage
  const indexInArray = productsArr.findIndex(({ id }) => id === itemId);
  console.log(indexInArray);
  if (indexInArray) {
    const currentProduct = productsArr[indexInArray];
    currentProduct.quantity = +event.target.value;
    productsArr.push(currentProduct);
    localStorage.setItem(LS_KEY, JSON.stringify(productsArr));
    console.log(localStorage.setItem(LS_KEY));
  }
}
