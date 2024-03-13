"use strict";
const sendForm = ({ formId, sumeElem = [] }) => {
	const form = document.getElementById(formId);
	const statusBlock = document.createElement("div");
	const loadText = "loading...";
	const errorText = "Some Error...";
	const successText = "THX! massager worcs...";
	const formErrors = "form data is not walid";
	const inputName = document.querySelectorAll('[name="fio"]');
	const inputTel = document.querySelectorAll('[name="tel"]');
	const validate = (list) => {
		let success = true;

		const phoneRegex = /^(\+)?[0-9()+-]*$/;
		inputTel.forEach((input) => {
			if (!phoneRegex.test(input.value)) {
				input.style.border = "3px solid red";
				success = false;
				setTimeout(function () {
					input.style.border = "";
				}, 3000);
			}
		});

		const nameRegex = /^[а-яА-Я\s]*$/;
		inputName.forEach((input) => {
			if (!nameRegex.test(input.value)) {
				input.style.border = "3px solid red";
				success = false;
				setTimeout(function () {
					input.style.border = "";
				}, 3000);
			}
		});
		return success;
	};

	const sendData = (data) => {
		return fetch("https://jsonplaceholder.typicode.com/posts", {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((res) => res.json());
	};
	const submitForm = () => {
		const formElements = form.querySelectorAll("input");
		const formData = new FormData(form);
		const formBody = {};
		statusBlock.style.color = "black";
		statusBlock.textContent = loadText;
		form.append(statusBlock);
		formData.forEach((val, key) => {
			formBody[key] = val;
		});
		sumeElem.forEach((elem) => {
			const element = document.getElementById(elem.id);
			if (elem.type === "block") {
				formBody[elem.id] = element.textContent;
			} else if (elem.type === "input") {
				formBody[elem.id] = element.value;
			}
		});
		if (validate(formElements)) {
			sendData(formBody)
				.then((data) => {
					statusBlock.style.color = "black";
					statusBlock.textContent = successText;
					formElements.forEach((input) => {
						input.value = "";
					});
					setTimeout(function () {
						statusBlock.style.color = "";
						statusBlock.textContent = "";
					}, 3000);
				})
				.catch((error) => {
					statusBlock.style.color = "black";
					statusBlock.textContent = errorText;
					setTimeout(function () {
						statusBlock.style.color = "";
						statusBlock.textContent = "";

						formElements.forEach((input) => {
							input.value = "";
						});
					}, 3000);
				});
		} else {
			statusBlock.style.color = "red";
			statusBlock.textContent = formErrors;
			setTimeout(function () {
				statusBlock.style.color = "";
				statusBlock.textContent = "";
			}, 3000);
		}
	};
	try {
		if (!form) {
			throw new Error("get form back!");
		}
		form.addEventListener("submit", (event) => {
			event.preventDefault();
			submitForm();
		});
	} catch (error) {
		console.log(error.message);
	}
};

export default sendForm;
