

const form = document.querySelector("input[type='submit']");
const $form = document.querySelector('form');


$form.addEventListener("submit", function submit(e) {
	e.preventDefault();
	const formObject = new FormData($form);
	const map = new Map(formObject);
	const formMessage = map.get('email');
	function displayMessage(formMessage) {
		alert(formMessage);
	};
	displayMessage(`Jeśli wiesz jak wygląda ten znak back-tick, wyślij maila na adres: ${formMessage} `);
	
});

