const quotes = [
  {
    quote:
      "You have to trust that the dots will somehow connect in your future.",
    author: "Steve Jobs",
  },
  {
    quote: "Go forth and make awesomeness.",
    author: "Unknown",
  },
  {
    quote:
      "Shall walk, with vigour, three hours a day, will pass, in seven years, a space equal to the circumference of the globe.",
    author: "Samuel Johnson",
  },
  {
    quote: "Never confuse a single defeat with a final defeat.",
    author: "F. Scott Fitzgerald",
  },
  {
    quote: "You're not traveling in order to arrive but in order to travel.",
    author: "Johann Wolfgang Von Goethe ",
  },
  {
    quote: "Whether you think you can, or you think you can't--you're right.",
    author: "Henry Ford",
  },
  {
    quote: "Failure is only the opportunity more intelligently to begin again.",
    author: "Henry Ford",
  },
  {
    quote:
      "It is more important to know where you are going than to get there quickly.",
    author: "Mabel Newcomer",
  },
  {
    quote: "Being brave is only standing up when you're afraid.",
    author: "Jon Steele",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
