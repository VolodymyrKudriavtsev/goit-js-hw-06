function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let widthSize = 20;
let heightSize = 20;
function createBoxes(amount) {
	let divsArrey = [];
	for (let i = 0; i < amount; i += 1) {
		widthSize += 10;
		heightSize += 10;
		divsArrey.push(
			`<div style='background-color: ${getRandomHexColor()}; width: ${widthSize}px; height: ${heightSize}px'></div>`,
		);
	}
	refs.divBoxes.insertAdjacentHTML("beforeend", divsArrey.join(""));
}

const refs = {
	divBoxes: document.querySelector("#boxes"),
	createBtn: document.querySelector("[data-create]"),
	destroyBtn: document.querySelector("[data-destroy]"),
	inputValue: document.querySelector("input"),
	amount: 0,
};

const onInputChange = e => (refs.amount = Number(e.currentTarget.value));
const onCreateBtnClick = () => {
	createBoxes(refs.amount);
};
const onDestroyBtnClick = () => {
	refs.divBoxes.innerHTML = "";
	widthSize = 20;
	heightSize = 20;
};

refs.inputValue.addEventListener("change", onInputChange);
refs.createBtn.addEventListener("click", onCreateBtnClick);
refs.destroyBtn.addEventListener("click", onDestroyBtnClick);
