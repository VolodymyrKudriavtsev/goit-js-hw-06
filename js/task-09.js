function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  button: document.querySelector('.change-color'),
  color: document.querySelector('.color'),
};

const onBtnClick = e => {
  const colorValue = getRandomHexColor();
  console.log(colorValue);

  document.body.style.backgroundColor = colorValue;
  refs.color.textContent = colorValue;
};

refs.button.addEventListener('click', onBtnClick);