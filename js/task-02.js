const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');
console.log(ingredientsEl);

// const fragment = document.createDocumentFragment();

// ingredients.forEach((element) => {
//   const lastItem = document.createElement('li');
//   lastItem.textContent = element;
//   lastItem.classList.add('item');
//   fragment.appendChild(lastItem);

// });

// ingredientsEl.appendChild(fragment);
// console.log(ingredientsEl);

// Як краще, чи краще так ?
const items = ingredients.map((ingredient) => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');
  return item;
});
console.log(items)

// Додавання пустого рядка очищає
ingredientsEl.innerHTML = '';
ingredientsEl.append(...items);
console.log(ingredientsEl);
