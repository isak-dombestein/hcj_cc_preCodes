const quotes = [
	{
		text: "The only way to do great work is to love what you do.",
		author: "Steve Jobs",
	},
	{
		text: "The purpose of our lives is to be happy.",
		author: "Dalai Lama",
	},
	{
		text: "Get busy living or get busy dying.",
		author: "Stephen King",
	},
	{
		text: "You only live once, but if you do it right, once is enough.",
		author: "Mae West",
	},
];

const quoteText = document.getElementById("quote-text");
const authorText = document.getElementById("author-text");
const newQuoteBtn = document.getElementById("new-quote-btn");
const toggleThemeBtn = document.getElementById("toggle-theme-btn");

function generateRandomQuote() {
	const randomIndex = Math.floor(Math.random() * quotes.length);
	const randomQuote = quotes[randomIndex];

	quoteText.textContent = `"${randomQuote.text}"`;
	authorText.textContent = `- ${randomQuote.author}`;
}

function toggleTheme() {
	document.body.classList.toggle("dark-mode");
}

newQuoteBtn.addEventListener("click", generateRandomQuote);
toggleThemeBtn.addEventListener("click", toggleTheme);