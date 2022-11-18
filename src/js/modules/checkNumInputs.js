const checkNumInput = (selector) => {
    const numInputs = document.querySelectorAll(selector);


    numInputs.forEach(item => {
        item.addEventListener('input', () => {
            // если вводит не число, то замена на пустое
            item.value = item.value.replace(/\D/, '');
        });
    });
};

export default checkNumInput;