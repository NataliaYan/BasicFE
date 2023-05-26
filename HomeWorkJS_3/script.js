//  1 уровень сложности: 1. Дайте ответ на вопрос, что такое объект в JS.
// Объект — это набор свойств, и каждое свойство состоит из имени и значения, ассоциированного с этим именем.
// Свойство объекта можно понимать как переменную, закреплённую за объектом и определяет характеристики объекта.

// Напишите функцию, которая принимает товары (массив объектов) и возвращает строку 'Самый дорогой товар <НАЗВАНИЕ> стоит  EUR'.
// создаем массив продуктов
let products = [
  { title: "Product 1", price: 200 },
  { title: "Product 2", price: 600 },
  { title: "Product 3", price: 1000 },
  { title: "Product 4", price: 100 },
  { title: "Product 5", price: 500 },
];

// функция поиска максимальной цены
function more_expensive(products) {
  let price_max = 0;
  let index = 0;
  for (let i = 0; i < products.length; i++) {
    if (price_max < products[i].price) {
      price_max = products[i].price;
      index = i;
    }
  }
  return `Самый дорогой товар: ${products[index].title} стоит ${products[index].price} EUR`;
}
console.log(more_expensive(products));

// Напишите функцию, которая принимает товары (массив объектов) и возвращает их общую сумму (скаляр).

// фунция суммирования стоимости товаров
function total(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    sum += products[i].price;
  }
  return sum;
}

console.log(total(products));
