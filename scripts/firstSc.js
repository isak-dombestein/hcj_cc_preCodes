console.log('Hello World!');

const heading = document.getElementById('main-hdg');
const changeTxtBtn = document.getElementById('change-txt-btn');

changeTxtBtn.addEventListener("click", () => {
    heading.textContent = 'Button was clicked!';
    heading.style.color = 'purple';
});