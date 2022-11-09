function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes (amount) {
	const divsArrey = [];
	let size = 20;
	for (let i = 0; i < amount; i += 1) {
		const box = () => {
			size += 10;
			return `<div style='background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px'></div>`;
		};

		divsArrey.push(box());
	}
	
	refs.divBoxes.insertAdjacentHTML("afterbegin", divsArrey.join(""));
};

const refs = {
	divBoxes: document.querySelector("#boxes"),
	createBtn: document.querySelector("[data-create]"),
	destroyBtn: document.querySelector("[data-destroy]"),
	inputValue: document.querySelector("input"),
	amount: 0,
};

const onInputChange = (e) => refs.amount = Number(e.currentTarget.value);
const onCreateBtnClick = () => createBoxes(refs.amount);
const onDestroyBtnClick = () => refs.divBoxes.innerHTML = '';

refs.inputValue.addEventListener("change", onInputChange);
refs.createBtn.addEventListener("click", onCreateBtnClick);
refs.destroyBtn.addEventListener("click", onDestroyBtnClick);
