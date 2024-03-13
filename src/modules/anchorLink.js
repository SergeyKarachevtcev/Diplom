"use strict";
const anchorLink = () => {
	const anchors = document.querySelectorAll('a[href*="#"]');

	for (let anchor of anchors) {
		anchor.addEventListener("click", (e) => {
			e.preventDefault();
			const blockID = anchor.getAttribute("href");
			const targetElement = document.querySelector("" + blockID);

			if (targetElement) {
				targetElement.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			}
		});
	}
};

export default anchorLink;
