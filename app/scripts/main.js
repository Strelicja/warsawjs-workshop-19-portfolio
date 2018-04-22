

const $form = document.querySelector('form');
function displayMessage(formMessage) {
		alert(formMessage);
	};

$form.addEventListener("submit", function submit(e) {
	e.preventDefault();
	const formObject = new FormData($form);
	const map = new Map(formObject);
	const formMessage = map.get('email');
	
	displayMessage(`Jeśli wiesz jak wygląda ten znak back-tick, wyślij maila na adres: ${formMessage} `);
	
});


