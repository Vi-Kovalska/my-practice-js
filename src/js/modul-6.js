'use strict';
//                                                    MODUL 6 - ООП, КЛАСИ
// Замість імені об'єкта, ми використовуємо зарезервоване ключове слово this.
//

// Під час виклику функції у this записується посилання на об'єкт, у контексті якого вона була викликана. Таким чином, у тілі функції ми можемо отримати доступ до властивостей і методів цього об'єкта.
const pizzaPalace = {
  pizzas: ['Supercheese', 'Smoked', 'Four meats'],
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    } else {
      return `Order accepted, preparing «${pizzaName}» pizza`;
    }
  },
};
const value = pizzaPalace.order.bind(pizzaPalace, 'Smoked');
console.log(value());

//   Значення this визначається не на момент оголошення функції (за винятком стрілкових функцій), а на момент її виклику. Іншими словами, this визначається тим, як саме функцію викликали, а не де вона була оголошена.
//  - У глобальному контексті, якщо функція виконується не в суворому режимі, this посилається на об'єкт window. Об'єкт window надає доступ до браузерних властивостей і функцій та є глобальним контекстом виконання для скриптів у браузері.
//  - У суворому режимі значення this у глобальному контексті завжди буде undefined.

('use strict');
function showThis() {
  console.log('this in showThis: ', this);
}
const user1 = {
  username: 'Poly',
};
user1.showContext = showThis;
// Викликаємо в контексті об'єкта
user1.showContext(); // this in showThis: {username: "Poly", showContext: ƒ}
// Викликаємо в глобальному контексті
showThis(); // "this in showThis: undefined"

// .......................................................Метод call()
// Метод call викликає функцію foo так, щоб значення this вказувало на потрібний об'єкт і використовувало значення його властивостей.
// Сигнатура методу (ім'я методу і його параметри):
// foo.call(thisArg, arg1, arg2, ...)
// - thisArg — об'єкт, який ми хочемо встановити як контекст (значення this) для функції
// - arg1, arg2, ... — необов'язкові аргументи, які будуть передані функції
function greet(name) {
  console.log(`Hello, ${name}! I am ${this.person}`);
}

const person = 'John';
const context = {
  person: 'Alice',
};
//   `Hello, Bob! I am Alice`
greet.call(context, 'Bob');
// .......................................................Метод apply()
// Метод apply є аналогом методу call. Відмінність у тому, що в методі apply() синтаксис передачі аргументів вимагає масиву, навіть якщо аргументи функції — це окремі значення.
// foo.apply(thisArg, [arg1, arg2, ...])
function greet2(str) {
  console.log(`${str}, ${this.username}, your room is ${this.room}!`);
}

const mango = {
  username: 'Mango',
  room: 27,
};

const poly = {
  username: 'Poly',
  room: 191,
};

greet.apply(mango, ['Welcome']); // "Welcome, Mango, your room is 27!"
greet.apply(poly, ['Aloha']); // "Aloha, Poly, your room is 191!"

//   .........................................Метод bind()
// Методи call і apply викликають функцію «на місці», тобто одразу.

// Метод bind створює і повертає нову функцію, яка має заздалегідь встановлений контекст, і ця нова функція може бути викликана пізніше з будь-якими аргументами.

// const boundFoo = foo.bind(thisArg, arg1, arg2, ...)
('use strict');

const customer = {
  username: 'Jacob',
  sayHello() {
    console.log(`Hello, ${this.username}!`);
  },
};

// customer.sayHello(); // "Hello, Jacob!"

// const greet1 = customer.sayHello;

// greet1(); // TypeError: Cannot read properties of undefined (reading 'username')
// При виклику greet() контекст втрачено, функція викликається в глобальному контексті, тому значення this буде undefined. При спробі звернутися до властивості this.username під час виклику функції greet(), виникає помилка, оскільки undefined — це навіть не об'єкт. Це можна виправити, прив'язавши контекст за допомогою методу bind

const greet1 = customer.sayHello.bind(customer);

greet1(); // "Hello, Jacob!"
// Коли ми використовуємо bind(), ми створюємо нову функцію greet. Ця нова функція завжди матиме правильний контекст і може використовувати властивість username об'єкта customer.

// .............коли метод об*єкта викликається як колбек функція у глобальному контексті, є undefined.  ми отримаємо помилку, оскільки undefined — це не об'єкт. Щоб уникнути цієї втрати контексту, можна використати метод bind(). Замість передачі оригінального методу об*єкта, ми передаємо його копію, до якої прив'язаний контекст об'єкта .
const library = {
  books: 1923,
  logBookCount() {
    console.log(this.books);
  },
};

const showBooks = library.logBookCount.bind({ books: 724 });

showBooks();

// // ............................................Стрілочні функції
// Контекст усередині стрілочної функції визначається місцем її оголошення, а не виклику.

// Це означає, що this усередині стрілки посилається на контекст батьківської області видимості, в якій вона була оголошена, і ніколи не змінюється.
// 1.Контекст **this** усередині стрілочної функції визначається місцем її оголошення, а не виклику.
// 2.Стрілочні функції ігнорують наявність суворого режиму. Тому в глобальному контексті у стрілці завжди this посилається на об'єкт window.
// 3.Неможливо змінити значення this усередині стрілочних функцій після її оголошення. Методи call, apply і bind не впливають на значення this у стрілках.

// .....................................................Прототип об'єкта
// ......................................Метод Object.create(obj) створює новий об'єкт і встановлює йому прототипом obj. Такий новий об'єкт матиме прототип obj і буде успадковувати його властивості.
// [[Prototype]] - властивість, яка зберігає посилання на прототип.
// прототип — це резервне сховище властивостей і методів об'єкта, яке автоматично використовується під час їх пошуку.
const animal = {
  legs: 4,
};

const dog = Object.create(animal);
dog.name = 'Mango';

console.log(dog); // { name: "Mango", [[Prototype]]: animal }
//   Об'єкт, на який вказує посилання у властивості [[Prototype]], називається прототипом. У нашому прикладі об'єкт animal — це прототип для об'єкта dog.
// ..........................................метод isPrototypeOf() - якщо в коді потрібно перевірити, чи є об'єкт прототипом іншого об'єкта,
// objA.isPrototypeOf(objB)
// Метод перевіряє, чи є об'єкт objA прототипом для об’єкта objB
// Якщо так, повертає true, в іншому разі повертає false
console.log(animal.isPrototypeOf(dog)); // true
console.log(dog.isPrototypeOf(animal)); // false
// .........................................Власні і невласні властивості
//           - Власнa властивість об'єкта - та що належить об'єкту
//           - Невласна властивість об'єкта - та що належить  його прототипу
// .........................................метод obj.hasOwnProperty(key) -  перевіряє наявність власної властивості з ім'ям key і повертає true, якщо є, і false в іншому випадку.
// Оператор in, який використовується в циклі for...in, не розрізняє власні властивості об'єкта і його прототипу. Ця особливість заважає, оскільки зазвичай потрібно перебрати тільки власні властивості.
// Для вибору саме власних властивостей під час перебору циклом for...in необхідно на кожній ітерації додати перевірку на власну властивість методом obj.hasOwnProperty(key)
const animal2 = { legs: 4 };
const dog2 = Object.create(animal2);
dog2.name = 'Mango';

for (const key in dog2) {
  if (dog2.hasOwnProperty(key)) {
    console.log(key); // "name"
  }
}

//            Методи Object.keys(obj) і Object.values(obj) повертають масив тільки власних ключів або значень тільки власних властивостей об'єкта obj, без необхідності додаткових перевірок. Через це на практиці використовують саме їх із циклом for...of, замість for...in і hasOwnProperty.

console.log(Object.keys(dog)); // ["name"]
console.log(Object.values(dog)); // ["Mango"]

for (const key of Object.keys(dog)) {
  console.log(key); // "name"
}

// ......................................Ланцюжки прототипів
// Об'єкт, який виступає прототипом для іншого об'єкта, також може мати свій прототип. Отже, існують ланцюжки прототипів.
const objC = { c: 'objC prop' };

const objB = Object.create(objC);
objB.b = 'objB prop';

const objA = Object.create(objB);
objA.a = 'objA prop';

console.log(objA); // { a: "objA prop", [[Prototype]]: objB }
console.log(objB); // { b: "objB prop", [[Prototype]]: objC }
console.log(objC); // { c: "objC prop", [[Prototype]]: Object }
//                 Оскільки об*єкти objA, objB і objC пов'язані в ланцюжок прототипів, об'єкт objA може отримати доступ до властивостей objB і objC, а об'єкт objB — до властивостей objC.

// Пошук властивостей відбувається до першого збігу. Інтерпретатор шукає властивість за ім'ям в об'єкті: Якщо інтерпретатор не знаходить власну властивість, то звертається до властивості [[Prototype]], тобто переходить за посиланням до об'єкта-прототипу, а потім — до прототипу прототипу за ланцюжком.Якщо інтерпретатор доходить до кінця ланцюжка і не знаходить властивості з таким ім'ям, то повертається undefined.
const apartment21 = {
  rooms: 4,
  floor: 2,
  taxFree: false,
};

const condo = Object.create(apartment21);
condo.rooms = 3;

// ..................................що знаходиться у властивості [[Prototype]] кінцевого об'єкта ланцюжка?
// Наприкінці ланцюжка прототипів завжди знаходиться посилання на базовий клас, від якого походить тип даних у ланцюжку. У нашому випадку objB — це об'єкт, тому в кінці ланцюжка буде посилання на клас Object.

// ....................................................ООП
// Процедурне програмування — це те, як ми з тобою писали код до сих пір. Воно є простим і зрозумілим і може бути використане для написання простих програм. Проте зі збільшенням складності програми процедурний підхід може стати неефективним, оскільки втрачається зв'язок між даними й методами їх обробки.
//  ООП — это способ написания кода, позволяющий создавать объекты с помощью одного объекта. В этом также заключается суть шаблона.
// Об'єктно-орієнтоване програмування (ООП) — це парадигма програмування, в якій програми структуровані як сукупність об'єктів. Ці об’єкти представляють реальні або абстрактні сутності: користувач, магазин, автомобіль тощо. Кожен з об’єктів містить дані (властивості) і методи для взаємодії з ними.
// При такому підході відсутні або майже відсутні глобальні змінні. Методи не залежать від параметрів, а використовують властивості об'єкта, які задаються при його створенні і можуть бути змінені іншими методами.Програмування в стилі ООП допомагає структурувати код, полегшує його розробку та підтримку і дозволяє створювати більш складні програми, організовані навколо об'єктів та їх взаємодії.

// Клас — це спосіб опису сутності, що визначає структуру та поведінку об'єктів. Вони виступають в якості шаблонів для створення нових об'єктів. Клас містить властивості та методи об*єкту
//  Контракт -правила для взаємодії з цією сутністю
// Екземпляр(instance) — це окремий представник класу, який має дані (властивості) і методи (функції), які працюють з цими даними. Екземпляр — це те, що створено за кресленням, тобто на підставі опису з класу.
// Клас — це якийсь АБСТРАКТНИЙ автомобіль на кресленні
// Екземпляр (об'єкт) — це КОНКРЕТНИЙ автомобіль, що стоїть у нас під вікнами
// Інтерфейс класу — це набір властивостей і методів класу, доступних для використання у роботі з екземпляром. По суті, інтерфейс описує клас, чітко визначаючи всі можливі дії над ним.

// Описуючи інтерфейс класу, дуже важливо витримати баланс між гнучкістю й простотою.
// -      Клас із ПРОСТИМ інтерфейсом легко використовувати, але будуть існувати завдання, які за допомогою нього буде складно вирішити.
// -      ГНУЧКИЙ інтерфейс - буде містити досить складні методи з великою кількістю параметрів. Такий інтерфейс дозволить виконувати дуже багато дій, але його використання буде пов'язане з труднощами й ризиком помилитися, переплутавши щось.

// Class - use that створити багато однотипних об'єктів з однаковим набором властивостей, але різними значеннями й методами для взаємодії з ними.
// оператора new - use that створити  екземпляр pісля того як клас було оголошено, поставивши його перед викликом класу. Результатом виклику new User() буде екземпляр класу User. Він буде містити дані і мати поведінку, що описані у класі.

// створили класс (шаблон для створ об*єктів)
class Pet {}
// використовуєм калас для створення подібних об*Єктів
const doggy = new Pet();
const cat = new Pet();
const parrot = new Pet();

// Для ініціалізації екземпляра класу використовується метод constructor.
// Якщо його не визначити в явному вигляді, то буде створений конструктор за замовчуванням — порожня функція, яка не змінює екземпляр класу.
class User {
  // Синтаксис оголошення методу класу
  constructor() {
    // ...
  }
}

// Виклик класу з оператором new призводить до створення нового об'єкта й АВТОМАТИЧНОГО ВИКЛИКУ методу constructor.
//Аргументи, які передаються при виклику new User(), стають значеннями параметрів для методу constructor.
class Car {
  constructor(name, price, type) {
    this.name = name;
    this.price = price;
    this.type = type;
  }
}

const infiniti = new Car('Infiniti', 700000, 'Luxury SUV');

console.log(infiniti);

//  this усередині конструктора посилається на новостворений об'єкт. Це дозволяє надавати кожному об'єкту властивості з однаковими іменами, але різними значеннями.

// Властивості name, price, type (параметри конструктора) називаються ПУБЛІЧНИМИ ВЛАСТИВОСТЯМИ, оскільки вони є власними властивостями об'єкта-екземпляра.

// ............................................Метод constructor використовується для ініціалізації власних властивостей екземпляра класу.

// Об'єкт параметрів
// Клас може приймати велику кількість вхідних даних для властивостей майбутнього об'єкта.
// До них також можна застосувати патерн «Об'єкт параметрів», передаючи один об'єкт з логічно іменованими властивостями, замість непов'язаного набору аргументів.
class Client {
  constructor(param) {
    this.name = param.name;
    this.phone = param.phone;
    this.age = param.age;
    this.status = param.status;
    this.balance = param.balance;
  }
}

const c01 = new Client({
  name: 'Pyter Clarso',
  phone: '+380956734511',
  age: 32,
  status: 'VIP',
  balance: 900890098,
});

console.log(c01);
// Методи класу — це функції, які будуть доступні екземпляру в його прототипі. Вони оголошуються в довільному порядку після конструктора. На відміну від синтаксису методів об'єкта (вони розділяються комою), методи класу не розділені жодними спеціальними символами.

class Sound {
  constructor(p) {
    this.name = p.name;
    this.author = p.author;
    this.rating = p.rating;
  }

  getRating() {
    return `The rating of ${this.name} - ${this.rating}`;
  }
  changeRating(newRating) {
    return (this.rating = newRating);
  }
}

const s01 = new Sound({
  name: 'She is good',
  author: 'Robertyson',
  rating: 9.5,
});
console.log(s01, s01.getRating());

// ................Прототип екземпляру
// Якщо поглянути на структуру екземпляра класу  в інструментах розробника, може виникнути питання: "Де методи, які ми викликаємо?"
console.log(Sound);

// Об'єктно-орієнтоване програмування в JavaScript побудоване на прототипному наслідуванні. Методи класу не стають власними властивостями екземпляра. І це правильно, оскільки, на відміну від значень властивостей, вони не є унікальними. Це одна й та сама функція, яка викликається в контексті різних об'єктів. Немає сенсу копіювати методи для кожного екземпляра, враховуючи, що може існувати багато тисяч екземплярів.

// Методи класу додаються до спеціального об'єкта, який зберігається у властивості prototype самого класу.
console.log(Sound.prototype);
// При створенні екземпляра через new, об'єкт, збережений у властивості prototype класу, автоматично стає його прототипом. Це означає, що властивість [[Prototype]] екземпляра отримує посилання на властивість prototype класу.

// ..................................................#Приватні властивості
// Інкапсуляція — це парадигма ООП, яка передбачає приховування деталей внутрішньої реалізації класу від зовнішнього коду. Інкапсуляція реалізується приватними властивостями та методами, доступ до яких можна отримати тільки всередині класу.

//  Додаючи до імені властивості на початку символ #, ми робимо її приватною. Оголошення приватної властивості до ініціалізації в конструкторі є обов'язковим. Припустимо, що пошта користувача повинна бути недоступною для прямої зміни ззовні, тобто приватною.
class User4 {
  // Необов'язкове оголошення публічних властивостей
  name;
  // Обов'язкове оголошення приватних властивостей
  #email;

  constructor(params) {
    this.name = params.name;
    this.#email = params.email;
  }
}

const mangoj = new User4({
  name: 'Mango',
  email: 'mango@mail.com',
});
console.log(mangoj.name); // "Mango"
//   console.log(mangoj.#email); // Виникне помилка, це приватна властивість

// Для того щоб отримати або змінити значення приватної властивості використовуються ПУБЛІЧНІ методи in prototype of class.
// changeEmail(newEmail) {
//     this.#email = newEmail;
//   }

class Car6 {
  #brand;
  constructor(params) {
    this.#brand = params.brand;
    this.model = params.model;
    this.price = params.price;
  }

  getPrice() {
    return this.price;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }
  getBrand() {
    return this.#brand;
  }
  changeBrand(newBrand) {
    return (this.#brand = newBrand);
  }
}
// ...................................................#ПРИВАТНІ методи
// Додаючи до назви методу на початку символ #, ми робимо його приватним.
// Іноді потрібно проводити певні дії, які мають бути приховані від "зовнішнього світу". fOR EXAMPLE, кожен раз, коли електронна пошта змінюється, потрібно валідувати її формат.
class User3 {
  #email;

  constructor(params) {
    this.name = params.name;
    this.#email = params.email;
  }

  // Публічний метод для отримання електронної пошти
  getEmail() {
    return this.#email;
  }

  // Публічний метод для зміни електронної пошти
  changeEmail(newEmail) {
    if (this.#validateEmail(newEmail)) {
      this.#email = newEmail;
    } else {
      console.log('Invalid email format');
    }
  }

  // Приватний метод для валідації електронної пошти
  #validateEmail(email) {
    return email.includes('@');
  }
}

const mango3 = new User3({
  name: 'Mango',
  email: 'mango@mail.com',
});

// Спробуємо змінити електронну пошту
mango3.changeEmail('newmail.com'); // "Invalid email format"
mango3.changeEmail('new@mail.com');
console.log(mango3.getEmail()); // "new@mail.com"

// Прямий виклик приватного методу ззовні призведе до помилки
//   console.log(mango3.#validateEmail('test'));// Помилка

// приватний метод #validateEmail забезпечує додаткову логіку для валідації електронної пошти.Цей метод не доступний ззовні класу, тому користувачі (або інші розробники) не можуть його викликати напряму. Вони можуть лише використовувати публічний метод changeEmail, який у свою чергу використовує приватний метод для валідації.
// Приватні властивості та приватні методи використовуються, щоб приховати деталі реалізації класу. Це дозволяє ізолювати (інкапсулювати) внутрішню реалізацію класу від зовнішнього коду й забезпечити контроль доступу до деяких властивостей і методів, щоб гарантувати безпеку та стабільність програми.

// .................................................Геттер get і сеттер set
// Геттер — це функція, яка дозволяє отримати значення властивості класу. визначається за допомогою ключового слова get, за яким слідує ім'я сеттера і блок коду.
// Сеттер - це функція, яка дозволяє змінити значення властивості
// - Геттер і сеттер повинні називатися однаково і їх називати так само, як і властивість, з якою вони працюють (гарний тон). Геттер може існувати без сеттера, так само як і сеттер без геттера.
// -  використовувати для простих операцій читання та зміни значення властивостей, особливо приватних, як їх публічний інтерфейс. Для роботи з властивістю, яка зберігає масив або об'єкт, вони не підійдуть.

// Геттер срабатывает, когда obj.propName читается, сеттер – когда значение присваивается.
class Car2 {
  #brand;
  #model;
  #price;
  constructor(params) {
    this.#brand = params.brand;
    this.#model = params.model;
    this.#price = params.price;
  }
  get brand() {
    return this.#brand;
  }
  set brand(newBrand) {
    this.#brand = newBrand;
  }
  get model() {
    return this.model;
  }
  set model(newModel) {
    this.model = newModel;
  }
  get price() {
    return this.price;
  }
  set price(newPrice) {
    this.price = newPrice;
  }
}
// ...................................Статичні властивості та методи (static)
// статичні властивості - що доступні тільки класові, але не його екземплярам — це . Вони корисні для зберігання інформації, що стосується класу.
// Статичні властивості оголошуються в тілі класу. Перед ім'ям властивості додається ключове слово static. Статичні властивості можна використовувати як у методах класу, так і поза класом.
// У екземпляра немає доступу до статичних властивостей класу. щоб звернутися до стат властив - назваКласу.назваСтатВластив

// Статичні методи — це методи, доступні тільки класу. Вони можуть бути публічні та приватні.
// !!!!!!!!!!!!Особливість статичних методів
// Під час їх виклику ключове слово this посилається на сам клас. Це означає, що статичний метод може отримати доступ до статичних властивостей класу, але не до властивостей екземпляра. Це логічно, адже статичні методи викликає сам клас, а не його екземпляри.

class Car7 {
  #price;
  static maxPrice = 50000;
  constructor(params) {
    this.#price = params.price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    return newPrice <= Car7.maxPrice ? (this.#price = newPrice) : this.#price;
  }
}

const audi = new Car7({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000

// ex
class Car8 {
  static #maxPrice = 50000;

  constructor(params) {
    this.price = params.price;
  }
  static checkPrice(price) {
    return price > Car8.#maxPrice
      ? 'Error! Price exceeds the maximum'
      : 'Success! Price is within acceptable limits';
  }
}

const audiT = new Car8({ price: 36000 });
const bmw = new Car8({ price: 64000 });

console.log(Car8.checkPrice(audiT.price)); // "Success! Price is within acceptable limits"
console.log(Car8.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// ...................................................Наслідування класів
// Ключове слово extends дозволяє реалізувати наслідування класів, коли один клас (дочірній, похідний) наслідує властивості й методи іншого класу (батьківського).
//
// Це означає, що ми можемо оголосити базовий клас, який зберігає загальні характеристики й методи для групи похідних класів, які наслідують властивості й методи батьківського, але також додають свої унікальні.
// class Parent {}
// class Child extends Parent {
//    ...
// }
// У конструкторі дочірнього класу необхідно викликати спеціальну функцію super(args) — це псевдонім конструктора батьківського класу.В іншому випадку при спробі звернутися до this у конструкторі дочірнього класу виникне помилка.
// Разница в следующем:
// - Когда выполняется обычный конструктор, он создаёт пустой объект и присваивает его this .
// - Когда запускается конструктор унаследованного класса, он этого не делает. Вместо этого он ждёт, что это сделает конструктор родительского класса. В наследующем классе  функция-конструктор помечена специальным внутренним свойством [[ConstructorKind]]:"derived".
// - Поэтому, если мы создаём собственный конструктор, мы должны вызвать super, в противном случае объект для this не будет создан, и мы получим ошибку.
class Animal {
  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name, speed, earLength) {
    super(name, speed);
    this.speed = `the speed is ${speed}`;
    this.earLength = `earLength is ${earLength}`;
  }
}

let whiteRabbit = new Rabbit('Белый кролик', '90 km/h', 10);
let blackRabbit = new Rabbit('Черный кролик', '95 km/h', 11);
console.log(whiteRabbit.name, blackRabbit.name); // Белый кролик
console.log(whiteRabbit.earLength, blackRabbit.earLength); // 10
console.log(whiteRabbit.speed, blackRabbit.speed);
// ex
class User8 {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User8 {
  static role = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };
  static level = {
    junior: 'junior',
    midle: 'midle',
    senior: 'senior',
  };
  constructor(params) {
    super(params.email);
    this.access = params.access;
    this.level = params.level;
  }
}

const mango8 = new Admin({
  email: 'mango@mail.com',
  access: Admin.role.SUPERUSER,
  level: Admin.level.junior,
});

console.log(mango8.email); // "mango@mail.com"
console.log(mango8.access, mango8.level); // "superuser"

//   Методи дочірнього класу доступні тільки їх екземплярам
class User10 {
  email;
  constructor(email) {
    this.email = email;
  }
  get email() {
    return this.email;
  }
  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin2 extends User10 {
  static role = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };
  constructor(params) {
    super(params.email);
    this.access = params.access;
    this.blacklistedEmails = [];
  }
  blacklist(email) {
    return this.blacklistedEmails.push(email);
  }
  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }
}

const mango9 = new Admin2({
  email: 'mango@mail.com',
  access: Admin2.role.SUPERUSER,
});

console.log(mango9.email); // "mango@mail.com"
console.log(mango9.access); // "superuser"

mango9.blacklist('poly@mail.com');
console.log(mango9.blacklistedEmails, '- додали імеіл в чс'); // ["poly@mail.com"]
console.log(
  mango9.isBlacklisted('mango@mail.com'),
  '- перевірили що цієї пошти нема в масиві чс'
); // false
console.log(
  mango9.isBlacklisted('poly@mail.com'),
  '- перевірили ця пошта в чс'
); // true

//....................................................Menthor..........................................................
// -Для оголошення приватних властивостей класу використовуємо спеціальний символ #. Оголошення приватних властивостей до ініціалізації в конструкторі - обов‘язково. Наприклад, #someValue і потім тільки оголосити конструктор:
// -До речі, можна зустріти (нагуглити) таке написання : _someValue; Це не синтаксис мови: є добре відома угода між програмістами, що такі властивості та методи не повинні бути доступні ззовні. Більшість програмістів дотримуються цієї угоди. Ще це називають захищеною властивістю. Важливо відзначити -- ці властивості успадковуються.
// -Статичні властивості і методи доступні тільки на самому класі, тож звертання до них через this або всередині екземпляра поверне undefind. Звертатись до статичних властивостей і методів можна тільки через ім’я самого класу. Оголошуються вони також до конструктора за допомогою ключового слова static.
// -Ключове слово extends використовують для оголошення класів або у виразах класу для створення дочірніх класів. Дочірні класи отримують властивості батьківських класів, а також дають можливість додати нові властивості та змінити запозичені.
// -Ключове слово super викликає функції з батька об’єкта, включаючи його конструктор. Його слід використовувати до ключового слова this в конструкторі (інакше буде помилка); якщо батьківський конструктор приймає аргументи, можна передати їх, як аргументи в super(arguments);
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }
// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name); // виклик конструктора батьківського класу
//     this.breed = breed;
//   }
// }
// якщо дочірній клас має метод з таким же ім'ям, як у батьківському класі, можна   викликати метод батьківського класу, використовуючи `super.X()`.
// class Animal {
//   speak() {
//     console.log('Animal speaks');
//   }
// }

// class Dog extends Animal {
//   speak() {
//     super.speak(); // виклик методу батьківського класу
//     console.log('Dog barks');
//   }
// }

// ............................................Practice
// this у функції ссилається на об*єкт в контексті якого вона була викликана
//  - без суворого режиму - Window
// - у суворому режимі - undefined
// this в методі об*єкта - силається на об*єкт в контексті якого вона викликана
// this у стрілочній ф-йії ссилається на контекст батьківського елементу де вона була створена. Якщо створ у глоб обл - то завжди this буде Window. в об*єктах стрілочну ф-цію не дуже використовують
const yyyy = {
  name: 'lalala',
  funct: () => {
    return `this of arrow function is ${this}`;
  },
};
console.log(yyyy.funct());
// якщо вкласти стрілочну ф-цію у метод об*єкту (батьківський ел стрілочної функції стає сам об*єкт) то this буде батьківський об*єкт
const objX = {
  name: 'lalala',
  funct() {
    console.log('g');
    const x = () => {
      console.log(`this of arrow function in method of object is ${this}`);
    };
    x();
  },
};
objX.funct();
// ex1
const chopShop = {
  stones: [
    { name: 'diamond', price: 10000, quantity: 3 },
    { name: 'rubbi', price: 7000, quantity: 5 },
    { name: 'sapphire', price: 9000, quantity: 4 },
  ],
  calculateTotalPrice(nameStone) {
    //     let total = 0;
    //   for (const item of this.stones){
    //     console.log(item);
    // name === item.name ? total = item.price * item.quantity : "This stone is undefined in our shop";
    //         }
    //         return total;
    //              масив об*єктів
    const stone = this.stones.find(item => item.name === nameStone);
    console.log(stone);
    // undefined
    if (!stone) {
      return `${nameStone} stone is undefined in our shop`;
    }
    return `Total is ${stone.price * stone.quantity}`;
  },
};
console.log(chopShop.calculateTotalPrice('rubbi'));

// ..............................................контекст виконання ф-ції
// - метод call() - метод ф-ції що передає у функцію під час її виклику контекст переданого об*єкта в параметрах (значення this)
// - метод aply() - під час виклику те саме тільки параметри приймає у масиві
const propNam = 'color';
function changeColor(color) {
  return (this.color = color);
}
const objL = {
  [propNam]: 'blue',
};
const objK = {
  color: 'red',
};
changeColor.call(objL, 'yellow');
console.log(objL);

// - метод bind() - зберігає у змінну копію ф-ціїї з прив*язаним контекстом обраного об*єкта
const varChangeColor = changeColor.bind(objK);
varChangeColor('green');
console.log(objK);
// якщо передати метод об*єкту як колбек ф-цію якій ф-кціїї то this колбека втратить свій контекст і стане віндов/андефайнед, тут і допоможе метод bind привязати контеrст об*єкта (якщо передаєм колбек (посилання на іншу ф-цію) у аргумент то допоможе тільки bind)
const userR = {
  name: 'lalala',
  showThis() {
    return `this is ${this}`;
  },
};
function logger(callback) {
  console.log(callback);

  return callback();
}
console.log(logger(userR.showThis.bind(userR)));
// if don't use .bind() this - is undefined (because "use strict")
console.log(logger(userR.showThis));

// ex
const objJK = {
  value: 0,
  increment(num) {
    return (this.value += num);
  },
  decrement(num) {
    return (this.value -= num);
  },
};

function updateObjJK(number, callback) {
  return callback(number);
}
updateObjJK(7, objJK.increment.bind(objJK));
console.log(objJK);
updateObjJK(1, objJK.decrement.bind(objJK));
console.log(objJK);

// ..................................Прототип об*єкту
// Object.create() - метод що створить об*єкт з (прототипу) та передасть йому властив та методит прототипу
//  - властив об*єкта  - власна, властив прототипа - не власна
const hehehe = { smile: 'crazy' };

const hohoho = Object.create(hehehe);
hohoho.type = 'positive';
console.log(hohoho);
// .hasOwnProperty() - поверне тру якщо властив власна і фолс якщо не власна
console.log(hohoho.hasOwnProperty('smile'));
// for in повертає разом і власні і не власні властив, щоб їх відфільтрув викор .hasOwnProperty()
for (const key in hohoho) {
  if (hohoho.hasOwnProperty(key)) {
    console.log(key);
  }
}
// або Object.keys(obj) ПОВЕРТА ЛИШЕ ВЛАСНІ ВЛАСТИВ ОБ*ЄКТУ
const keysHohoho = Object.keys(hohoho);
console.log(keysHohoho);

// ланцюжки прототипів та успадкування властивостей і методів
const q = { q: 'q' };
const w = Object.create(q);
w.w = 'w';
const e = Object.create(w);
e.e = 'e';
const r = Object.create(e);
r.r = 'r';
console.log(r);

// EX методи збільшення швидкості та зменшення швидкості
const cruiseControle = {
  speed: 0,
  brand: 'Audi',
};
function accelerate() {
  this.speed += 10;
  return `Автомобіль ${this.brand} прискорюється, швидкість ${this.speed} km/h`;
}
function decrease() {
  if (this.speed <= 0) {
    return `Авто зупинилось`;
  } else {
    this.speed -= 10;
    return `Автомобіль ${this.brand} уповільнюється, швидкість ${this.speed} km/h`;
  }
}
accelerate.call(cruiseControle);
console.log(cruiseControle.speed);
decrease.call(cruiseControle);
console.log(cruiseControle.speed);

// ЕХ
class Carr {
  static maxSPEED = 60;
  constructor(par) {
    this.brand = par.brand;
    this.speed = par.speed;
  }

  speedSensor(maxSpeed) {
    return this.speed >= maxSpeed
      ? `Autention, ${this.brand} has the hight speed - ${this.speed}.`
      : `${this.brand}'s speed is ${this.speed} - it's normal.`;
  }
}

const bMw = new Carr({ brand: 'bmw', speed: 70 });
const lexus = new Carr({ brand: 'lexus', speed: 50 });
console.log(bMw, lexus);

console.log(
  bMw.speedSensor(Carr.maxSPEED),
  'and',
  lexus.speedSensor(Carr.maxSPEED)
);

// геттер - звертаэмось через . і метод повертає значення властивості
// сеттер - звертаємось через властив = Єнове значенняЄ і метод відпрацює і перезапише властивість
// сеттер краще чим просто присвоїти нові дані тим , що це метод і там можна виконувати додаткові перевірки
//.................................... приватні методи (інкапсуляція) викор якщо зовні вони не мають сенсу
class CarsS {
  #price;

  constructor(par) {
    this.brand = par.brand;
    this.#price = par.price;
  }
  get price() {
    return this.#price;
  }
  #typeOfPrice(data, type) {
    if (typeof data === type) {
      return true;
    } else {
      return false;
    }
  }
  set price(newPrice) {
    if (this.#typeOfPrice(newPrice, 'number')) {
      this.#price = newPrice;
      return;
    } else {
      return `Invalid`;
    }
  }
}

const infinity = new CarsS({ brand: 'infiniti', price: 70000 });

console.log((infinity.price = '9'));
console.log(infinity);

// ............................................статичні методи
// статичний метод що відпрацьовує кожного разу коли створ екзкмпляр класу

class d {
  static quantity = 0;
  //  static increment(price){
  // return d.quantity += this.price;
  // }
  static increment() {
    return (d.quantity += 1);
  }
  constructor(par) {
    this.name = par.name;
    this.price = par.price;
    // d.increment(price);
    d.increment();
  }
}

//  .............................................................наслідування класів
class Hero {
  constructor(par) {
    this.name = par.name;
    this.xp = par.xp;
  }
  addXP(num) {
    return `XP increment on ${(this.xp += num)}`;
  }
}

class Warior extends Hero {
  // constructor(par) {
  //   super({name: par.name, xp: par.xp});
  //   this.spells = par.spells;
  // }
  constructor({ spells, ...rest }) {
    super(rest);
    this.spells = spells;
  }
}

const valhala = new Warior({ name: 'Valhala', xp: 500, spells: ['fireball'] });
console.log(valhala);

// ...................................................PRACTICE
// ex this is object us
const us = {
  name: 'Poly',
  sayHi() {
    let arrow = () => console.log(this.name);
    arrow();
  },
};
// good
const yyyyb = us.sayHi.bind(us);
console.log(yyyyb);
// undefined - not good
// const yyyyb = us.sayHi();
// console.log(yyyyb);

// EX1 the function takes a parametr (is the array of names), she iterating the array and adding greeting for every names . the function return new array ("name" hello)
function sayHi(array) {
  return array.map(element => `${element} hello`);
}
console.log(sayHi(['Kate', 'Joe', 'Rocky']));
// ex 2 check whether students  are over 18 y.o.
const studentsGroup = [
  { name: 'Mike', age: 17, id: 123 },
  { name: 'Juli', age: 20, id: 345 },
  { name: 'Oddi', age: 19, id: 567 },
  { name: 'Jone', age: 18, id: 789 },
];
console.log(studentsGroup.every(stud => stud.age > 18));

// the fun takes par - the array of objUsers and the id; she find obj with this id and return name for this object or "The user with this "id" is undefined"
function finedNameOfID(array, ID) {
  const user = array.find(obj => obj.id === ID);
  if (user) {
    return user.name;
  } else {
    return `The user with ID ${ID} is undefined`;
  }
}

console.log(finedNameOfID(studentsGroup, 3495));

// EX collect all topics of all courses in array allTopics  and filtered this array that he has unice elements
const courses = [
  { name: 'basic', topics: ['HTML', 'CSS', 'GitHub', 'VSCode'] },
  {
    name: 'intermediate',
    topics: ['HTML', 'CSS', 'GitHub', 'React', 'JS', 'VSCode'],
  },
  {
    name: 'basic JS',
    topics: [
      'HTML',
      'CSS',
      'GitHub',
      'VSCode',
      'JS',
      'Type system',
      'LOOPS',
      'DOM',
    ],
  },
  {
    name: 'intermediate JS',
    topics: ['HTML', 'CSS', 'VSCode', 'GitHub', 'NPM', 'AJAH', 'Bundlers'],
  },
];
// indexOf(el) повертає перший індекс вказаного елементу ш метод filter перевіряє щоб індекси співпадали і відбирає ці унікальні елементи в масив
const allTopics = courses
  .flatMap(obj => obj.topics)
  .filter((el, indx, arr) => arr.indexOf(el) === indx);
console.log(allTopics);

// EX the function calculate the common age of boys (sex: male)
const peoples = [
  { name: 'Naomi', age: 29, sex: 'female' },
  { name: 'Quentine', age: 26, sex: 'male' },
  { name: 'Kevin', age: 32, sex: 'male' },
  { name: 'Lola', age: 27, sex: 'female' },
];
function getTotalBoysYers(array) {
  return array
    .filter(obj => obj.sex === 'male')
    .reduce((acc, obj) => obj.age + acc, 0);
}
console.log(getTotalBoysYers(peoples));

//  EX fined products that have price > 10 and than calculate their total cost
const products = [
  { name: 'Cheese', price: 50 },
  { name: 'Chiken', price: 80 },
  { name: 'Losose', price: 100 },
  { name: 'Carrot', price: 10 },
  { name: 'Onion', price: 9 },
];
const totalCost = products
  .filter(item => item.price > 10)
  .reduce((acc, item) => acc + item.price, 0);
console.log(totalCost);

// you need to call the method showInfo  that he displayed the information from each object
const tel_1 = {
  regNumber: 'AE834567',
  brand: 'Huavei',
  showInfo(country) {
    return `${country} ${this.regNumber} ${this.brand}`;
  },
};
const tel_2 = {
  regNumber: 'DP725481',
  brand: 'Samsung',
};

const ue = tel_1.showInfo.bind(tel_2);
console.log(ue('China'));
// or
console.log(tel_1.showInfo.call(tel_2, 'China'));
// write the class Rectangle that has propertys - height and width and the methot that calculetes Rectangle area
class Rectangle {
  constructor(par) {
    this.height = par.height;
    this.width = par.width;
  }
  areaOfTheRectangle() {
    return this.height * this.width;
  }
}

const rect_1 = new Rectangle({ height: 18, width: 34 });
console.log(rect_1.areaOfTheRectangle());

//  EX create class Car that have constructor for saving properties - brand and year of production. 1)add method that calculate the age of car (current year - year of production ) and return `The age of this car - ${}` 2)add check if age>5 return `the car needs maintenance` else "the car not needs the  maintenance now" 3) add check if the year of production (>) current year return "Error: the year of production can't be later than the current year"
const now = new Date();
console.log(now);
const currentYear = now.getFullYear();
console.log(currentYear);

class Carrr {
  constructor(par) {
    this.brand = par.brand;
    this.yearProd = par.yearProd;
  }
  chekAgeOfTheCar(currentYear) {
    const ageCar = currentYear - this.yearProd;
    return ageCar || `the age of ${this.brand} - ${ageCar}`;
  }
  checkActualityMaintenance(callback) {
    const checkingAge = Number(callback);
    if (this.yearProd > currentYear) {
      return "Error: the year of production can't be later than the current year";
    } else if (checkingAge > 5) {
      return 'the car needs maintenance';
    } else {
      return 'the car not needs the  maintenance now';
    }
  }
}

const subaru = new Carrr({ brand: 'Subaru', yearProd: 2019 });
console.log(subaru);

console.log(subaru.chekAgeOfTheCar(currentYear));

console.log(
  subaru.checkActualityMaintenance(subaru.chekAgeOfTheCar(currentYear))
);
// EX write the class Client1 wich create the object with properties - login , email. announce them like private properties. make access to them through get and set .

class Client1 {
  #email;
  #login;
  constructor(par) {
    this.#email = par.email;
    this.#login = par.login;
  }
  get email() {
    return this.#email;
  }
  set email(newEmail) {
    return (this.#email = newEmail);
  }
  get login() {
    return this.#login;
  }
  set login(newLogin) {
    return (this.#login = newLogin);
  }
}
const client1 = new Client1({
  email: 'fafaf.gmail.com',
  login: 'fafafafafafa',
});
console.log(client1.login);
console.log((client1.login = 'hohohohoh'));
