// Get the blockquote and button elements
let quote = document.querySelector("#quote");
let btn = document.querySelector("#get-quote");

// Get a fresh quote and render it into the DOM
function getQuote() {
  fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw response.status;
    })
    .then(function (data) {
      quote.textContent = data[0];
    })
    .catch(function (error) {
      quote.textContent =
        "[Something went wrong, sorry!] I have a joke for you... The government in this town is excellent, and uses your tax dollars efficiently.";
    });
}

// Get a quote on page load
getQuote();

// Get a quote when the #get-quote button is clicked
btn.addEventListener("click", getQuote);
