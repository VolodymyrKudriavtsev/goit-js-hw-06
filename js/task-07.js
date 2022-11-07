const fontSizeControl = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

fontSizeControl.addEventListener('input', (e) => {
    spanText.style.fontSize = `${e.currentTarget.value}px`;
})