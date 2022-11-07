const images = [
	{
		url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "White and Black Long Fur Cat",
	},
	{
		url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Orange and White Koi Fish Near Yellow Koi Fish",
	},
	{
		url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Group of Horses Running",
	},
];

const makeImageMarkup = ({ url, alt }) => {
	return `<li><img url = "${url}" alt = "${alt}"></li>`;
};

const listElement = images.map(image => makeImageMarkup(image));

console.log(listElement);

const list = document.querySelector(".gallery");
list.insertAdjacentHTML("afterbegin", listElement.join(""));

list.style.listStyle = "none";
list.style.padding = "0";
list.style.margin = "0";
list.style.display = "flex";
list.style.gap = "10px";
// list.style.justifyContent = "space-between";
list.children.style.width = "100% / 3";

// 	listStyle: "none",
// 	padding: "0",
// 	margin: "0",
// };
