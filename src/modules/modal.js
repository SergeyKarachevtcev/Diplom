"use strict";

const modal = () => {
	const callbackBtns = document.querySelectorAll(".callback-btn"); // нашли кнопки
	const modalOverlay = document.querySelector(".modal-overlay");
	const modalCallback = document.querySelector(".modal-callback");
	console.log(modalCallback);

	callbackBtns.forEach((btn) => {
		// повесил событие на кнопки
		btn.addEventListener("click", () => {
			modalOverlay.style.display = "flex";
			modalCallback.style.display = "block";
			console.log("click");
		});
	});
};

export default modal;
