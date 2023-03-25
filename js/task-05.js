const inputText = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');


inputText.addEventListener('input', onInputChange);

function onInputChange(event) {
    console.log(event.currentTarget.value);
    if (event.currentTarget.value === '') {
        nameOutput.textContent = 'Anonymous';
    } else {
            nameOutput.textContent = event.currentTarget.value;
        }
    
    
};
    
