const refs = {
    input: document.querySelector("#name-input"),
    output: document.querySelector("#name-output"),
    
};

const onInputTextEnter = (e) => {
    if (e.currentTarget.value !== '') {
        refs.output.textContent = e.currentTarget.value;
    } else {
        refs.output.textContent = 'Anonymous';
    }
}

refs.input.addEventListener("input", onInputTextEnter);