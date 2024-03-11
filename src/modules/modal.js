"use strict";

const modal = () => {
	const callbackBtn = document.getElementById("callbackBtn"); // кнопка коллбек
	const modalOverlay = document.querySelector(".modal-overlay"); // подложка
	const modalCallback = document.getElementById("modalCallback"); // модальное окно

	// Назначаем обработчик события по клику
	callbackBtn.addEventListener("click", function (event) {
		// Ваше действие при клике на ссылку
		console.log("Клик по ссылке произошел!");
		modalOverlay.style.display = "block";
	});
};

export default modal;
