function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
	divBoxes: document.querySelector("#boxes"),
};

// !-----генерация массива дивов
const boxes = [];
function createBoxes(amount) {
	for (let i = 0; i < amount; i += 1) {
		const box = () => {
			return `<div style='background-color: ${getRandomHexColor()}' width=30 height=30></div>`;
		};

		boxes.push(box());
	}

	// ? перебрать массив с помощью map и изменить свойства W & H !!!
}

console.log(boxes);

// createBoxes(5);

// refs.divBoxes.append(box);
