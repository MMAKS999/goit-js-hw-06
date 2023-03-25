const inputEl = document.querySelector("#font-size-control")
const spanEl = document.querySelector("#text")

inputEl.addEventListener('input', () => {
    const valueControl = inputEl.value;
    spanEl.style.fontSize = valueControl + "px";
});


// Прокрутка коліщатком
inputEl.addEventListener('wheel', (event) => {
  // Запобігає прокрутці сторінки
  event.preventDefault();
  
  // Збільшує або зменшуємо значення в залежності від напрямку прокрутки
  const step = event.deltaY < 0 ? 1 : -1;
  inputEl.value = parseInt(inputEl.value, 10) + step;
  
  // Оновлює розмір тексту
  spanEl.style.fontSize = inputEl.value + "px";
});