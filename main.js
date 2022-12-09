(() => {
	const audioButtons = document.querySelectorAll("[data-tecla]");
	
	audioButtons.forEach(button => {
		button.addEventListener("click", () => {
			const value = button.dataset.tecla;
			
			const audio = document.getElementById(`som_${value}`);
			audio.play();
		})
		
		button.addEventListener("keydown", (e) => {
			const keyCode = e.keyCode
			
			if(keyCode === 13 || keyCode === 32) {
				button.classList.add("ativa")
			}
		})
		
		button.addEventListener("keyup", (e) => {
			button.classList.remove("ativa")
		})
	});
})()