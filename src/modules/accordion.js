"use strict";

const accordeon = () => {
	const accordeon = document.querySelector(".accordeon");
	const elementAccordeon = accordeon.querySelectorAll(".element");
	let elementContent = accordeon.querySelectorAll(".element-content");

	/* 	elementContent.forEach((e) => {
		e.style.display = "none";
	}); */

	elementAccordeon.forEach((element) => {
		element.addEventListener("click", (e) => {
			if (e.target.closest(".element")) {
				const tabBtn = e.target.closest(".element");
				elementAccordeon.forEach((tab, index) => {
					if (tab === tabBtn) {
						tab.classList.add("active");
						let elementContent =
							tab.querySelector(".element-content");
						elementContent.style.display = "block";
					} else {
						tab.classList.remove("active");
						let elementContent =
							tab.querySelector(".element-content");
						elementContent.style.display = "none";
					}
				});
			}
		});
	});
};

export default accordeon;
