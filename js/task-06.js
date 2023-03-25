const inputEl = document.querySelector('#validation-input');
const valueDataAttribute = parseInt(inputEl.getAttribute("data-length"), 10);
console.log(valueDataAttribute);

inputEl.addEventListener('blur', (event) => {
   
    
    if (event.currentTarget.value.length !== valueDataAttribute) {
        console.log(event.currentTarget.value.length);
        console.log(valueDataAttribute);
        inputEl.classList.add('invalid');
    }else{
        inputEl.classList.replace('invalid','valid');
    }
});