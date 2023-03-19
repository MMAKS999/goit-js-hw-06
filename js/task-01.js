console.log(document);
const categoryEl = document.querySelectorAll('.item');

// console.log (categoryEl)

console.log (`Number of categories:`, categoryEl.length );


categoryEl.forEach((element => {
    // console.log(element)
    console.log(`Category:`, element.querySelector('h2').textContent);
    console.log(`Elements:`, element.querySelectorAll('li').length)
}));
















// const categoryAnimalsEl = document.querySelector('.item')[0].length;
// console.log(`Category:`, categoryAnimalsEl);


// const categoryEl1 = document.querySelector('h2');

// console.log (categoryEl1)

// console.log(`Category:`, categoryEl1.textContent);


// const categoryEl2 = document.querySelector('.item').querySelector('li');

// console.log (categoryEl2)

// console.log(`Elements:`, categoryEl2);


// ++++++++++++++++++Вибір по сусідах++++++++++++++++++++++

// const categoryEl3 = document.querySelector('.item').querySelectorAll('li').length;

// console.log (categoryEl2)

// console.log(`Elements:`, categoryEl2);