// Напиши функцию getAllPropValues(arr, prop), которая получает массив
//  объектов и имя свойства. Возвращает массив значений определенного 
//  свойства prop из каждого объекта в массиве.

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

// for (const product of products) {
//     console.log(product.name)
// }


const getAllPropValues = function (arr, prop) {
    
  const allPropValues = []
  

    for (const product of arr) {
      const productKeys = Object.keys(product);

     for (const key of productKeys) {
       if (key === prop) {
         allPropValues.push(product[key])     
       }    
     } 
    }
  
  return allPropValues

    };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []