(() => {
	const audioButtons = document.querySelectorAll("[data-tecla]");
	
	audioButtons.forEach(button => button.addEventListener("click", () => {
		const value = button.dataset.tecla;
		
		const audio = document.getElementById(`som_${value}`);
		audio.play();
	}));
})()