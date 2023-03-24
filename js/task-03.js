const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryEl = document.querySelector('.gallery');
console.log(galleryEl);

const galleryMarkup = images.reduce((accumulator, { url, alt }) => {
  return accumulator + `
    <li>
      <img src="${url}" alt="${alt}" style="width: 100%; height: auto; margin-bottom: 20px;" 
    </li>`;
}, '');

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup)
galleryEl.setAttribute("style", "display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;")




