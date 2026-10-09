const menuButton = document.querySelector('.menu-btn');
const navigation = document.querySelector('nav');
const navigationLinks = navigation.querySelectorAll('a');

menuButton.addEventListener('click', () => {
	menuButton.classList.toggle('change');
	navigation.classList.toggle('responsive');

	const isOpen = navigation.classList.contains('responsive');
	navigationLinks.forEach((link) => {
		link.style.display = isOpen ? 'block' : 'none';
	});
});
