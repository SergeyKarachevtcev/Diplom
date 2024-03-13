"use strict";

const modal = () => {
	const callbackBtns = document.querySelectorAll(".callback-btn");
	const modalOverlay = document.querySelector(".modal-overlay");
	const modalCallback = document.querySelector(".modal-callback");
	const modalCloseBtn = document.querySelector(".modal-close");
	const buttonServices = document.querySelector(".button-services");
	const fancyboxModal = document.querySelectorAll(".fancyboxModal");

	const closeModalFunction = () => {
		modalOverlay.style.display = "none";
		modalCallback.style.display = "none";
	};

	const openModalFunction = () => {
		modalOverlay.style.display = "flex";
		modalCallback.style.display = "block";
	};

	callbackBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
			openModalFunction();
		});
	});

	fancyboxModal.forEach((btn) => {
		btn.addEventListener("click", () => {
			openModalFunction();
		});
	});

	buttonServices.addEventListener("click", () => {
		openModalFunction();
	});

	modalCloseBtn.addEventListener("click", () => {
		closeModalFunction();
	});

	modalOverlay.addEventListener("click", (e) => {
		if (!e.target.closest(".modal-callback")) {
			closeModalFunction();
		}
	});
};

modal();

export default modal;
