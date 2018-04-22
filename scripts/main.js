

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

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 1;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}