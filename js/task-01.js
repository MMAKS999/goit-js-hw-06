const bodyEl = document.lastChild.lastChild;

const ulCategories = bodyEl.firstElementChild.nextElementSibling;
const ulCategoriesArray = Array.from(ulCategories.children);
console.log(ulCategoriesArray);
const liItem = ulCategoriesArray[0];
console.log(liItem);

console.log('Number of categories:', ulCategoriesArray.length);

ulCategoriesArray.forEach(((element) => {
  console.log(element);
  console.log('Category:', element.firstElementChild.textContent);
  console.log('Elements:', element.lastElementChild.children.length);
}));
