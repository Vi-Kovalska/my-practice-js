'use strict';
// npm install axios

import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// Бібліотека Axios — це простий HTTP-клієнт, що базується на Promise і автоматизує багато рутинних завдань при роботі з HTTP-запитами, а саме дозволяє:

// ⭐️Axios є зручною альтернативою стандартному Fetch API.
// Синтаксис запиту:
// 1)Запити можна робити, викликавши axios і передаючи відповідний об'єкт конфігурації. Напишемо код, який виконує GET-запит.
// Після виконання функції axios ми отримуємо проміс, який обробляємо стандартними методами then і catch.

axios({
  method: 'get',
  url: 'https://jsonplaceholder.typicode.com/users',
})
  .then(response => console.log(response))
  .catch(error => console.log(error));
// 2)or Псевдоніми методів запиту
// У бібліотеці Axios існують псевдоніми (однойменні методи) для всіх підтримуваних методів запиту, які спрощують синтаксис запиту та додають стандартні налаштування.

axios
  .get('https://jsonplaceholder.typicode.com/users')
  .then(response => console.log(response))
  .catch(error => console.log(error));
// ⭐️ метод axios.get потребує обов'язково лише адреси запиту, а метод GET автоматично підставляється сам.
// ⭐️ Axios додає до запиту стандартні HTTP-заголовки, наприклад, Accept, у якому вказує application/json, оскільки найчастіше ми очікуємо саме JSON від сервера.

//                        ⭐️Об'єкт відповіді на запит
// {
//   data: {},
//   status: 200,
//   statusText: 'OK',
//   headers: {},
//   config: {},
//   request: {}
// }
// ⭐️data — відповідь, надана сервером;
// status — код стану HTTP з відповіді сервера;
// statusText — повідомлення про стан HTTP від відповіді сервера;
// headers — заголовки HTTP, з якими відповів сервер;
// config — конфігурація, яка була надана Axios для запиту;
// request — запит, який створив цю відповідь;

// У методі then ти отримаєш наступні властивості в об'єкті відповіді.
axios
  .get('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  })
  .catch(error => {
    console.log(error);
  });

// Зверни увагу, на властивість data, у якій зберігаються дані відповіді.

// ⭐️не потрібно парсити дані відповіді методом response.json().Це робиться автоматично і додається до властивості data.
// ⭐️не потрібно перевіряти статус відповіді у властивості response.ok.Бібліотека Axios робить це автоматично і відхиляє проміс з помилкою для будь - якого невдалого HTTP - коду відповіді, включаючи 404.

//                                        Конфігурація за замовчуванням
// Можна вказати стандартні налаштування конфігурації у властивості axios.defaults, які будуть застосовані до кожного
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

// axios.get('/users').then().catch();

// axios.get('/posts').then().catch();

// axios.get('/images').then().catch();

//                                                 Заголовки за замовчуванням
// Наприклад, якщо у тебе є унікальний ключ API, який необхідно додавати до кожного запиту у вигляді HTTP-заголовка, ти можеш додати його до властивості axios.defaults.headers.common.

const myApiKey = 'secret-api-key-for-every-request';

axios.defaults.headers.common['header-name'] = myApiKey;

// Замість рядка "header-name" вказуємо потрібну назву заголовка у вигляді рядка.
// Іншими словами, ми буквально додаємо нову властивість із ключем "header-name" до об'єкта axios.defaults.headers.common. Після цього Axios автоматично додасть цей заголовок із вказаним значенням до кожного запиту.

//                                               Параметри рядка запиту
// -вказати їх у URL.
// - використати клас URLSearchParams
// -Axios надає нам зручніший спосіб. В об'єкті конфігурації (параметр config) ти можеш вказати об'єкт параметрів у властивості params.
axios.get('https://jsonplaceholder.typicode.com/users', {
  params: {
    _limit: 7,
    _sort: 'name',
  },
});

//                                                 Асинхронні функції
// Синтаксис async/await — це зручний спосіб написання асинхронного коду, був доданий до стандарту ECMAScript 2017 (ES8) і став дуже популярним
// Для оголошення асинхронної функції додається async
// -перед ключовим словом function
async function fetchData() {
  // ...
}
//-y функціональному виразі також перед ключовим словом function додається async.
const fetchData6 = async function () {
  // ...
};
// -y стрілкової функції перед списком параметрів
const fetchData7 = async () => {
  // ...
};
// -y методу об'єкта async додається перед іменем методу.
const user = {
  async getUsername() {
    // ...
  },
};
// В основі async/await лежать проміси, тому він не блокує основний потік виконання програми. По суті, це сучасний спосіб роботи з промісами всередині функції, і це є альтернативою конструкції then/catch.

// будь - яке значення, що повертається з функції(return), стане значенням проміса.
// Якщо не вказувати значення для повернення, буде створений проміс зі значенням undefined.

//                                                           Оператор await
// ТІЛЬКИ всередині АСИНХРОННИХ функцій можна використовувати оператор await, розмістивши його праворуч від будь-якого виразу, який повертає проміс.
// Коли інтерпретатор зустрічає await, він ПРИЗУПИНЯЄ ВИКОНАННЯ Ф-ЦІЇ і чекає, ДОКИ ЗАВЕРШИТЬСЯ ВИКОНАННЯ ПРОМІСУ, який  ПРАВОРУЧ від await.
//
// Підсумуємо:
// ⭐️Оператор await можна використовувати тільки всередині асинхронних функцій (async).
// ⭐️await не може використовуватись без async, але async може використовуватися без await.
// ⭐️Оператор await призупиняє виконання функції до завершення відповідного промісу (fulfilled або rejected).
// ⭐️Якщо проміс завершується успішно (fulfilled), оператор await повертає його значення.
// ⭐️Якщо проміс завершується з помилкою (rejected), оператор await генерує помилку.
// ⭐️Асинхронна функція завжди повертає проміс, отже, будь-яке значення, що повертається, стає значенням цього промісу.
// ⭐️Якщо не вказати значення для повернення, буде створений проміс зі значенням undefined.

// HTTP-запити
// Використаємо синтаксис async/await при роботі з HTTP-запитами, щоб зробити код більш читабельним.
// ЕХ перепишемо функцію fetchUsers, використовуючи синтаксис async/await
// const fetchUsers = () => {
//   axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
//     console.log(response.data);
//   });
// };
//1) додаємо ключове слово async
// 2)використовуємо оператор await, щоб зачекати завершення axios.get та отримати об'єкт відповіді у змінну response
// 3) поверни значення результатy HTTP-запитуз асинхронної функції та оброби його в методі then, якщо потрібно використовувати в зовнішньому коді
const fetchUsers = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  console.log(response.data);
  return response.data;
};

fetchUsers().then(users => console.log(users));

//                                                         Конструкція try…catch
// Конструкція try...catch — це механізм обробки винятків.Конструкція try...catch виконує код у блоці try, і якщо в цьому блоці виникає помилка (виняток), виконання коду у try зупиняється, і контроль передається до блоку catch.
// Параметр error представляє об'єкт помилки, в якому зазвичай міститься інформація про помилку, така як повідомлення про помилку.

// try {
//   const result = 10 / 0;
//   console.log(result); // Цей рядок не виконається через помилку
// } catch (error) {
//   // Обробимо помилку
//   console.error(error.message);
// }
//                                              ОТЖЕ ОБРОБКА ПОМИЛОК:
// ⭐️Якщо результат асинхронної функції (проміс) НЕ ВИКОРИСТОВУЄТЬСЯ В ЗОВН КОДІ, помилки оброблюються у самому тілі функції за допомогою конструкції ⭐️TRY...CATCH . Значення параметра error у блоці catch — це помилка, яку генерує await, якщо проміс був відхилений.
const fetchUsers2 = async () => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
//⭐️Якщо результат асинхронної функції (проміс) ВИКОРИСТОВУЄТЬСЯ В ЗОВН КОДІ, тобто за межами інших асинхронних функцій, помилки оброблюються методом CATCH() колбеку. Значення параметра error ⭐️у методі catch() — це помилка, яку генерує await, якщо проміс буде відхилений.
const fetchUsers3 = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return response.data;
};

fetchUsers3()
  .then(users => console.log(users))
  .catch(error => console.log(error));
//⭐️Якщо результат асинхронної функції ВИКОР В ІНШІЙ АСИНХРОННІЙ Ф-ЦІЇ, помилки оброблюються конструкцією ⭐️TRY...CATCH. Значення параметра error у блоці catch представляє помилку, яку генерує await, якщо проміс буде відхилений.
const fetchUsers4 = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return response.data;
};

const doStuff = async () => {
  try {
    const users = await fetchUsers4();
    console.log(users);
  } catch (error) {
    console.log(error);
  }
};

doStuff();

//                                                    Пагінація (pagination)
//Пагінація - РОЗБИВКА НА СТОРІНКИ результату GET-запиту. Пагінація передбачає, що сервер повертає не всю колекцію, а лише певну частину записів при кожному GET-запиті. Пагінацію реалізують на сервері та використовують її на клієнтському боці завдяки спеціальним параметрам у запиті.
// ЕХ
// Для прикладу роботи з колекцією даних ми використовуємо публічний JSONPlaceholder API та отримуємо масив постів з ендпоінта /posts.
const fetchPosts = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );
  console.log('Posts: ', response.data);
};
// 1)Перший параметр per_page -  визначає кількість елементів у відповіді від сервера.
// _limit - параметр JSONPlaceholder API що контролює кількість елементів у відповіді
// 2)Другий параметр пагінації page - контролює зміщення всередині колекції, тобто номер групи елементів, яку ми хочемо отримати. Якщо сервер реалізує пагінацію, то значення цього параметра за замовчуванням дорівнює одиниці — перша група або «сторінка» елементів.
// _page - параметр у JSONPlaceholder API , що контролює групу елементів.
// Щоб визначити, коли елементи в колекції закінчаться, і вивести користувачу повідомлення про це, сервер може повертати не тільки масив елементів, але й:
// -метадані про доступну кількість груп, що залежить від значення параметра per_page,
// або
// -просто загальну кількість елементів у колекції.
// ех
// const fetchPostsBtn = document.querySelector('.btn-pagination');
// const postList = document.querySelector('.posts');

// fetchPostsBtn.addEventListener('click', async () => {
//   try {
//     const posts = await fetchPosts();
//     renderPosts(posts);
//   } catch (error) {
//     console.log(error);
//   }
// });

// async function fetchPosts() {
//   const params = new URLSearchParams({
//     _limit: 5,
//     // Change the group number here
//     _page: 3,
//   });

//   const response = await axios.get(
//     `https://jsonplaceholder.typicode.com/posts?${params}`
//   );
//   return response.data;
// }

// function renderPosts(posts) {
//   const markup = posts
//     .map(({ id, title, body, userId }) => {
//       return `<li>
//           <h2 class="post-title">${title.slice(0, 30)}</h2>
//           <p><b>Post id</b>: ${id}</p>
//           <p><b>Author id</b>: ${userId}</p>
//           <p class="post-body">${body}</p>
//         </li>`;
//     })
//     .join('');
//   postList.innerHTML = markup;
// }
//                                            Прийом «Завантажити ще»
// Для динамічної зміни номера групи при кожному наступному запиті :
// 1)Оголосимо ще одну глобальну змінну, назвемо її page і встановимо початкове значення 1 — перша група елементів.
// 2)Після кожного успішного запиту в обробнику методу then() ми будемо збільшувати значення page на одиницю. Потім ми використовуємо це значення при складанні параметрів запиту.
const fetchPostsBtn = document.querySelector('.btn-pagination');
const postList = document.querySelector('.posts');

// Controls the group number
let page = 1;
// Controls the number of items in the group
let perPage = 10;

fetchPostsBtn.addEventListener('click', async () => {
  try {
    const posts = await fetchPosts3();
    renderPosts(posts);
    // Increase the group number
    page += 1;

    // Replace button text after first request
    if (page > 1) {
      fetchPostsBtn.textContent = 'Fetch more posts';
    }
  } catch (error) {
    console.log(error);
  }
});

async function fetchPosts3() {
  const params = new URLSearchParams({
    _limit: perPage,
    _page: page,
  });

  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?${params}`
  );
  return response.data;
}

function renderPosts(posts) {
  const markup = posts
    .map(({ id, title, body, userId }) => {
      return `<li>
          <h2 class="post-title">${title.slice(0, 30)}</h2>
          <p><b>Post id</b>: ${id}</p>
          <p><b>Author id</b>: ${userId}</p>
          <p class="post-body">${body}</p>
        </li>`;
    })
    .join('');
  postList.insertAdjacentHTML('beforeend', markup);
}
//                                           Перевірка кінця колекції
// Відсутність постів для завантаження під час кліку на кнопку "Fetch posts" означає, що користувач досяг кінця колекції. Коли це трапляється, необхідно відобразити сповіщення.
// Для цього ми використовуємо бібліотеку iziToast.
// ЕХ  додали перевірку кінця колекції на фронтенді, оскільки JSONPlaceholder API не реалізує цей функціонал на бекенді. У нашому випадку достатньо розділити загальну кількість елементів у колекції (100) на кількість елементів в одній групі.
// Контролює кількість елементів в групі
// let limit = 30;
// // Кількість груп в колекції
// const totalPages = Math.ceil(100 / limit);
// //
// // Перед кожним наступним запитом ми порівнюємо поточний номер групи і загальну кількість груп і виводимо сповіщення, не виконуючи HTTP-запиту.
// if (page > totalPages) {
//   return iziToast.error({
//     position: 'topRight',
//     message: "We're sorry, there are no more posts to load",
//   });
// }
// ЕХ
// const fetchPostsBtn = document.querySelector('.btn');
// const postList = document.querySelector('.posts');

// Controls the group number
let pagee = 1;
// Controls the number of items in the group
let limit = 40;
// In our case total number of pages is calculated on frontend
const totalPages = Math.ceil(100 / limit);

fetchPostsBtn.addEventListener('click', async () => {
  // Check the end of the collection to display an alert
  if (pagee > totalPages) {
    return iziToast.error({
      position: 'topRight',
      message: "We're sorry, there are no more posts to load",
    });
  }

  try {
    const posts = await fetchPosts4();
    renderPosts3(posts);
    // Increase the group number
    pagee += 1;

    // Replace button text after first request
    if (pagee > 1) {
      fetchPostsBtn.textContent = 'Fetch more posts';
    }
  } catch (error) {
    console.log(error);
  }
});

async function fetchPosts4() {
  const params = new URLSearchParams({
    _limit: limit,
    _page: pagee,
  });

  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?${params}`
  );
  return response.data;
}

function renderPosts3(posts) {
  const markup = posts
    .map(({ id, title, body, userId }) => {
      return `<li>
          <h2 class="post-title">${title.slice(0, 30)}</h2>
          <p><b>Post id</b>: ${id}</p>
          <p><b>Author id</b>: ${userId}</p>
          <p class="post-body">${body}</p>
        </li>`;
    })
    .join('');
  postList.insertAdjacentHTML('beforeend', markup);
}
//
//                                           partial of url
// https://example.com/over/there?name=ferret
// - PROTOCOL https://
// - HOST example.com
// - PATH TO RESOURCE /over/there
// - PARAMETERS ?name=ferret
//                                                     Lection
// ❌ex у цьому коді відбудеться 3 послідовні запроси на сервер за різними ДИНАМІЧНИМИ параметрами , і витратиться час (див вкладку Network), можна оптимізувати це
const BASE_URL_JSONPLACEHOLDER = 'https://jsonplaceholder.typicode.com';

async function foo6() {
  const todo1 = await axios(`${BASE_URL_JSONPLACEHOLDER}/users/1/todos`);
  const todo2 = await axios(`${BASE_URL_JSONPLACEHOLDER}/users/2/todos`);
  const todo3 = await axios(`${BASE_URL_JSONPLACEHOLDER}/users/3/todos`);

  return [todo1, todo2, todo3];
}

foo6()
  .then(data => console.log(data))
  .catch(error => console.log(error));
// ✅REFACTORING
//refactoring the previous code - move dinamic parametr by url in array and iterating his with the method .map(). Results [promises] to proccessed with the method Promise.all([promises])
async function foo7() {
  const dinamicParams = [1, 2, 3];

  const prpmisesArr = dinamicParams.map(async par => {
    const res = await axios(`${BASE_URL_JSONPLACEHOLDER}/users/${par}/todos`);
    console.log(res.data);

    return res.data;
  });

  const todos = await Promise.all(prpmisesArr);
  console.log(todos);

  return todos;
}

foo7()
  .then(data => {
    const [arr1, arr2, arr3] = data;
    console.log(arr1);
  })
  .catch(error => console.log(error));

//  .......................................the start of EX
const todoForm = document.querySelector('.todoForm');
const todoContainer = document.querySelector('.todoList');
todoForm.addEventListener('click', handleServise);
function handleServise(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  fetch('https://dummyjson.com/todos/random')
    .then(res => res.json())
    .then(data =>
      todoContainer.insertAdjacentHTML('beforeend', createTodoMarkup([data]))
    )
    .catch(error => {
      return iziToast.error({
        position: 'topRight',
        message: `Sorry, we are have a problem...${error.message}`,
        displayMode: 1,
      });
    });
}

function createTodoMarkup(array) {
  return array
    .map(
      ({ id, todo, completed }) => `
  <li class='todoCard' data-id='${id}'>
  <input type='checkbox' class='todoCheckbox' ${completed ? 'checked' : ''}/>
  <h2 class='todoTitle'>${todo}</h2>
  <button class='todoBtnDel'>X</button>
  </li>`
    )
    .join('');
}

todoForm.addEventListener('submit', handlePostDataToService);
// функція робить запит на сервер (створює) отже вона АСИНХРОННА
function handlePostDataToService(event) {
  event.preventDefault();
  const userSTask = event.target.elements.todo.value;

  if (!userSTask.trim()) {
    return;
  }
  // запит на сервер - трай кетч
  fetch('https://dummyjson.com/todos/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      todo: userSTask,
      completed: false,
      userId: 4,
    }),
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);

      todoContainer.insertAdjacentHTML('beforeend', createTodoMarkup([data]));
    })
    .catch(err => {
      return iziToast.error({
        position: 'topRight',
        message: `Sorry...${err.message}`,
        displayMode: 1,
      });
    })
    .finally(() => event.target.reset());
}

// оновляємо дані якщо відмітили чексбокс
todoContainer.addEventListener('click', handlePatch);
async function handlePatch(event) {
  if (!event.target.classList.contains('todoCheckbox')) {
    console.log('ops it is not a checkbox!');
    return;
  }
  // щоб чекбкс не змінювався без зміни даних на сервері
  event.preventDefault();
  // найближчий батьківський елемент івент таргета , отримуємо айді для серверного запросу
  const parent = event.target.closest('.todoCard');
  console.log(parent);
  const id = parent.dataset.id;
  console.log(id);
  // запит на сервер - трай кетч
  console.log(event.target.checked);

  fetch(`https://dummyjson.com/todos/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      completed: event.target.checked,
      userId: id,
    }),
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      event.target.checked = data.completed || !event.target.checked;
    })
    .catch(error => {
      return iziToast.error({
        position: 'topRight',
        message: `Sorry...${error.message}`,
        displayMode: 1,
      });
    });
}

// 1.делегування подій на списку справ 2.отримуємо id елемента лішки по якій клікнули 3.звертаємось до сервера і видаляємо дані за id
todoContainer.addEventListener('click', handleDeletTask);
function handleDeletTask(event) {
  if (!event.target.classList.contains('todoBtnDel')) {
    return;
  }

  const parent = event.target.closest('.todoCard');
  const id = parent.dataset.id;
  parent.remove();
  fetch(`https://dummyjson.com/todos/${id}`, {
    method: 'DELETE',
  }).then(res => res.json()),
    then().catch(error => {
      return iziToast.error({
        position: 'topRight',
        message: `Sorry...${error.message}`,
        displayMode: 1,
      });
    });
}
// ......................................................the end of EX
// ..................................the start of EX the film's library
// create the film's library with popular movie . use https://developer.themoviedb.org/reference/trending-movies
// API_KEY put in params => headers.Authorozation: 'Bearer ${KEY}'
const API_Read_Access_Token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWIxNTk0NzI5ZDlhODRlZjZkZTU2MmRiMjJiOTRkZSIsIm5iZiI6MTczNDUzMDE1Ny43ODIsInN1YiI6IjY3NjJkNDZkMTYxYWI3ZGVjNWZmZTgzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n11YprEyAIsNVgOqkidenCI4yQs_Y4WRKkJJKM74lkc';
// put base url + dinamic url from object by service that getting the film's POSTER
// 1)CREATE MARKUP WITH THE FILM'S CARD
// 2)implement pagination:
// 1 the button "Load More"
// 2 INFINITY SCROLL ('https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API')
const filmsList = document.querySelector('.jsMovieList');
const loadMoreBTN = document.querySelector('.jsLoadMore');
const BASE_URL_MOVIE = 'https://api.themoviedb.org/3';
const END_POINT = '/trending/movie/week';
const MY_MOVIE_API_KEY = 'a1b1594729d9a84ef6de562db22b94de';

// let pageMovie = 1;

// async function fetchService(method, pageMovie) {
//   const options = {
//     method,
//     headers: {
//       accept: 'application/json',
//       Authorization: `Bearer ${API_Read_Access_Token}`,
//     },
//   };
//   const params = new URLSearchParams({
//     page: `${pageMovie}`,
//   });

//   const response = await fetch(
//     `https://api.themoviedb.org/3${END_POINT}?${params}`,
//     options
//   );

//   return response.json();
// }
// fetchService('GET', pageMovie)
//   .then(res => {
//     console.log(res);

//     filmsList.insertAdjacentHTML('beforeend', createMovieMarkup(res.results));
//     if (res.page < res.total_pages) {
//       loadMoreBTN.classList.replace('loadMoreHidden', 'loadMoreVisible');
//     }
//   })
//   .catch(err => {
//     return iziToast.error({
//       position: 'topRight',
//       message: `Sorry...${err.message}`,
//       displayMode: 1,
//     });
//   });

// function createMovieMarkup(array) {
//   return array.map(
//     ({
//       poster_path,
//       id,
//       title,
//       release_date,
//       overview,
//       vote_average,
//     }) => `<li class='movieCard' data-id='${id}'>
//     <div class='posterContainer'>
// <a href="#"><img class='moviePoster' src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${overview}" ></a>
// </div>
// <div class="movieInfo">
//   <h2>${title}</h2>
//   <p>${overview.slice(0, 350)}</p>
// <p>The vote average: ${vote_average}</p>
// <p>The release date: ${release_date}</p>
// </div>
// </li>`
//   );
// }
// loadMoreBTN.addEventListener('click', handleLoadMoreMovie);
// async function handleLoadMoreMovie(event) {
//   pageMovie += 1;
//   loadMoreBTN.disabled = true;
//   fetchService('GET', pageMovie)
//     .then(res => {
//       filmsList.insertAdjacentHTML('beforeend', createMovieMarkup(res.results));
//       if (res.page >= res.total_pages) {
//         loadMoreBTN.classList.replace('loadMoreVisible', 'loadMoreHidden');
//       }
//       const cardMovie = document.querySelector('.movieCard');
//       const cardHeight = cardMovie.getBoundingClientRect().height;
//       window.scrollBy({
//         left: 0,
//         top: cardHeight * 2,
//         behavior: 'smooth',
//       });
//     })
//     .catch(err => {
//       return iziToast.error({
//         position: 'topRight',
//         message: `Sorry...${err.message}`,
//         displayMode: 1,
//       });
//     })
//     .finally(() => (loadMoreBTN.disabled = false));
// }

//                               той самий код але замість кнопки INFINITY SCROLL
// Intersection Observer API дозволяє коду реєструвати функцію зворотного виклику, яка виконується щоразу, коли певний елемент входить або виходить із перетину з іншим елементом (або вікном перегляду ), або коли перетин між двома елементами змінюється на вказану величину. Таким чином, сайтам більше не потрібно нічого робити в основному потоці, щоб спостерігати за таким перетином елементів, а браузер може вільно оптимізувати керування перетинаннями, як вважає за потрібне.

// Одного не може зробити Intersection Observer API: запускати логіку на основі точної кількості пікселів, які перекриваються, або конкретно на тому, які з них є. Це вирішує лише поширений випадок використання: «Якщо вони перетинаються десь приблизно на N %, мені потрібно щось зробити».
// Щоб спостерігати за перетином відносно вікна перегляду пристрою, вкажіть nullопцію root.
// Створіть спостерігач перетину, викликавши його конструктор і передавши йому функцію зворотного виклику, яка буде запускатися щоразу, коли поріг перетинається в одному або іншому напрямку:
const options = {
  root: null,
  rootMargin: '300px',
  // Порогове значення 1,0 означає, що коли 100% цілі видно в елементі, визначеному параметром root, викликається зворотний виклик.
  threshold: 1.0,
};
const observer = new IntersectionObserver(handleLoadMoreMovie, options);
const guard = document.querySelector('.jsGuard');
let pageMovie = 1;

async function fetchService(method, pageMovie) {
  const options = {
    method,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_Read_Access_Token}`,
    },
  };
  const params = new URLSearchParams({
    page: `${pageMovie}`,
  });

  const response = await fetch(
    `https://api.themoviedb.org/3${END_POINT}?${params}`,
    options
  );

  return response.json();
}
fetchService('GET', pageMovie)
  .then(res => {
    console.log(res);

    filmsList.insertAdjacentHTML('beforeend', createMovieMarkup(res.results));
    if (res.page < res.total_pages) {
      observer.observe(guard);
    }
  })
  .catch(err => {
    return iziToast.error({
      position: 'topRight',
      message: `Sorry...${err.message}`,
      displayMode: 1,
    });
  });

function createMovieMarkup(array) {
  return array
    .map(
      ({
        poster_path,
        id,
        title,
        release_date,
        overview,
        vote_average,
      }) => `<li class='movieCard' data-id='${id}'>
    <div class='posterContainer'>
<a href="#"><img class='moviePoster' src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${overview}" ></a>
</div>
<div class="movieInfo">
  <h2>${title}</h2>
  <p>${overview.slice(0, 350)}</p>
<p>The vote average: ${vote_average}</p>
<p>The release date: ${release_date}</p>
</div>
</li>`
    )
    .join('');
}
// функція автоматично відпрацьовує один раз як загружається сторінка, щоб вона відпрацьовувала тільки під час перетинання window - додаємо перевірку із документації
async function handleLoadMoreMovie(entries, observer) {
  entries.forEach(entry => {
    if (entry.intersectionRatio) {
      pageMovie += 1;
      fetchService('GET', pageMovie)
        .then(res => {
          filmsList.insertAdjacentHTML(
            'beforeend',
            createMovieMarkup(res.results)
          );
          // припинити слідкувати за гуард (або entry.target) якщо остання сторінка
          if (res.page >= res.total_pages) {
            observer.unobserve(guard);
          }
          const cardMovie = document.querySelector('.movieCard');
          const cardHeight = cardMovie.getBoundingClientRect().height;
          window.scrollBy({
            left: 0,
            top: cardHeight * 2,
            behavior: 'smooth',
          });
        })
        .catch(err => {
          return iziToast.error({
            position: 'topRight',
            message: `Sorry...${err.message}`,
            displayMode: 1,
          });
        });
    }
  });

  // .finally(() => (loadMoreBTN.disabled = false));
}
