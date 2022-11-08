const inputEl = document.querySelector("#validation-input");
const inputDataLength = Number(inputEl.dataset.length);

const onInputTextEnter = (e) => {
    const inputValueLength = e.currentTarget.value.length;

    if (inputValueLength !== inputDataLength) {
        inputEl.classList.add('invalid');
    } else {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    }
};

inputEl.addEventListener("blur", onInputTextEnter);


