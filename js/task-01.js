const itemsRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemsRef.length}`);
itemsRef.forEach(item => {
  const title = item.firstElementChild.textContent;
  const elementsRef = item.querySelectorAll('li');
// console.log(elements);


console.log(`Category: ${title}`);
console.log(`Elements: ${elementsRef.length}`);
});


// console.log(`Number of categories: ${categories.length}`);



// const item = document.querySelector('.item');
// console.log(item);