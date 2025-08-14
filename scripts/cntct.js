const contactForm = document.querySelector('.contact-form');
const nameInput = document.getElementById('name');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const userName = nameInput.value;

    alert(`Hello there, ${userName}! Your form was submitted!`)
    console.log(`Hello there, ${userName}! Your form was submitted!`);
});