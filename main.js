let form = document.getElementById('form');

const submitForm = (event) => {
    event.preventDefault(); //formularz sie nie pobiera

    let firstName = document.querySelector('[name = fname]');
    let lastName = document.querySelector(`[name = lname]`)



    // console.log(lastName);
    // console.log(firstName);
    // console.log('Submit FORM');
    console.log(`Imie: ${firstName.value}, Nazwisko: ${lastName.value}`);
}


form.addEventListener('submit', submitForm);