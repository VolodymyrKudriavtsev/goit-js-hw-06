const refs = {
	decrement: document.querySelector('button[data-action = "decrement"]'),
	increment: document.querySelector('button[data-action = "increment"]'),
	counter: document.querySelector("#value"),
	counterValue: 0,
};

const onDecrementBtnClick = () => {
	refs.counterValue -= 1;
	refs.counter.textContent = refs.counterValue;
};

const onIncrementBtnClick = () => {
	refs.counterValue += 1;
	refs.counter.textContent = refs.counterValue;
};

refs.decrement.addEventListener("click", onDecrementBtnClick);
refs.increment.addEventListener("click", onIncrementBtnClick);
