"use strict";

const modal = () => {
	const callbackBtns = document.querySelectorAll(".callback-btn"); // нашли кнопки
	const modalOverlay = document.querySelector(".modal-overlay");
	console.log(modalOverlay);

	callbackBtns.forEach((btn) => {
		// повесил событие на кнопки
		btn.addEventListener("click", () => {
			modalOverlay.style.display = "flex";
			console.log("click");
		});
	});
};

export default modal;
