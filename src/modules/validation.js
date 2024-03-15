const validation = () => {
    const inputFio = document.querySelectorAll('input[name="fio"]');
    const inputPhone = document.querySelectorAll('input[name="tel"]');

    inputFio.forEach((input) => {
        input.addEventListener('input', (event) => {
            const inputValue = event.target.value;
            const onlyCyrillic = inputValue.replace(/[^а-яА-ЯёЁ\s]/g, '');

            event.target.value = onlyCyrillic;
        });
    });

    inputPhone.forEach((input) => {
        input.addEventListener('input', (event) => {
            const inputValue = event.target.value;
            const onlyDigitsAndSymbols = inputValue.replace(/[^\d()+\-]/g, '');
            event.target.value = onlyDigitsAndSymbols;
        });
    });
};

export default validation;
