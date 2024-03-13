"use strict";

const hiddenElement = () => {
	const upBtn = document.querySelector(".up");
	const servicesSection = document.getElementById("services");

	console.log(servicesSection);

	window.addEventListener("scroll", () => {
		const servicesSectionPosition =
			servicesSection.getBoundingClientRect().top;
		const windowHeight = window.innerHeight;

		if (servicesSectionPosition < windowHeight) {
			upBtn.style.opacity = "1";
		} else {
			upBtn.style.opacity = "0";
		}
	});
};

export default hiddenElement;
