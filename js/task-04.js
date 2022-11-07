const refs = {
	decrement: document.querySelector('[data-action = "decrement"]'),
	increment: document.querySelector('[data-action = "increment"]'),
	counter: document.querySelector("#value"),
	counterValue: 0,
};

refs.decrement.addEventListener("click", () => {
	refs.counterValue -= 1;
	refs.counter.textContent = refs.counterValue;
});

refs.increment.addEventListener("click", () => {
	refs.counterValue += 1;
	refs.counter.textContent = refs.counterValue;
});
