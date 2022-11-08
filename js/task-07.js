const refs = {
    fontSizeControl: document.querySelector('#font-size-control'),
    spanText: document.querySelector('#text'),
};

const onRangescroll = e => {
    refs.spanText.style.fontSize = `${e.currentTarget.value}px`;
};

refs.fontSizeControl.addEventListener('input', onRangescroll);