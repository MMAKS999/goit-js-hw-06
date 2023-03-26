
const form = document.querySelector(".login-form");
console.log(form)
const passwordInput = form.querySelector('input[name="password"]');
const emailInput = form.querySelector('input[name="email"]');

form.addEventListener('submit', onFormSubmit);
const formValue = {};

//  доступ через 'elements'

function onFormSubmit(event) {
 // зупинка автоматичного віправлення форми
    event.preventDefault(); 

// звернення до значень елементів форми через елементс
    const formElements = event.currentTarget.elements;
    
    const email = formElements.email.value;
    const password = formElements.password.value;

// функція перевірки заповненості поля  
    function dateAlert(name,fieldName) {
        if (name === '') {
            alert(`Поле ${fieldName} не заповнено`);
            return
        };               
    };

// перевірка заповненності поля 
    dateAlert(email, 'email');
    dateAlert(password,'password');

// Зупинка якщо якесь поле не заповненне 
    if (email === '' || password === '') {
        return
    }

// Запис в обєкт значень
    const formData = {
        email,
        password,
    };
    console.log(formData)
    form.reset();
};





// Спосіб для здорових форм з багатьма елементами де потрібно зібрати дані
// function onFormSubmit(event) {
//     event.preventDefault();

//     const formData = new FormData(event.currentTarget)

//     formData.forEach((value, name) => {
//         if (value === '') {
//             alert(`поле ${name} не заповнено`)
//             formValue = {}
//             return;
//         } else {
//             formValue[name] = value;
//         }
//     });

//     console.log(formValue);
//     form.reset();
// };

