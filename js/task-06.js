const inputEl = document.querySelector("#validation-input");
const inputDataLength = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", e => {
    const inputValueLength = e.currentTarget.value.length;

    if (inputValueLength !== inputDataLength) {
        inputEl.classList.add('invalid');
    } else {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    }
});


