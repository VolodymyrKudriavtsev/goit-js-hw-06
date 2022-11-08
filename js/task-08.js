const form = document.querySelector(".login-form");

const onLoginFormSubmit = e => {
	e.preventDefault();
	const formElements = e.currentTarget.elements;
	const email = formElements.email.value;
	const password = formElements.password.value;

	if (email === "" || password === "") {
		return alert("All fields of the form must be filled in!!!");
	}

	const formData = { email, password };
	console.log(formData);

	form.reset();
};

form.addEventListener("submit", onLoginFormSubmit);
