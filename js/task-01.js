const itemsRef = document.querySelectorAll(".item");
console.log("Number of categories: ", itemsRef.length);

itemsRef.forEach(item => {
	console.log("Category: ", item.firstElementChild.textContent);
	console.log("Elements: ", item.lastElementChild.children.length);
	// const title = item.firstElementChild.textContent;
	const elementsRef = item.querySelectorAll("li");

	// console.log(`Category: ${title}`);
	// console.log(`Elements: ${elementsRef.length}`);
});
