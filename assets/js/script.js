// global variables
const uid = 4673;
const tokenid = "CwuXXRUrueBgXX9v";
const searchBtn = document.getElementById("searchBtn");
searchedInput = document.getElementById("searchedInput");

// initial state
// TODO: init();

// functions

/*
 Initialization
  sets what the user sees upon opening the app
    * calls clearErrorMessage to remove string from error response div
    * hides the divs that should be hidden
*/

/*
 handleSearchButtonClick
  handles when the search button is clicked
    * calls clearErrorMessage to remove string from error response div
    * grabs search text from input
    * if the input box was blank, calls displayError function and returns
    * if the input box contained text, calls searchForQuotes function and sends the text as searchedText 
*/
function handleSearchButtonClick() {
  clearErrorMessage();
  let searchedText = searchedInput.value;
  if (searchedText === "") {
    displayError();
    return;
  } else {
    searchForQuotes(searchedText);
  }
}

/*
 searchForQuotes
  fetches quote data for searchedKeyword
    * creates fetchUrl
    * fetch data from Quotes API
    * data validation: if error occurs, call displayError function and return
    * select random quote from list of quotes sent
    * calls displayQuotesResults and sends quote and author
    * checks to see if the city name is already in the array
*/
function searchForQuotes(searchedText) {
  console.log(`got to searchForQuotes button with ${searchedText}`);

  const fetchUrl = `https://www.stands4.com/services/v2/quotes.php?uid=${uid}&tokenid=${tokenid}=SEARCH&query=${searchedText}&format=xml`;

  fetch(fetchUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var randomQuote = data.data[Math.floor(Math.random() * data.data.length)];
      console.log(randomQuote);
    });
}

/*
 displayQuotesResults
  displays quote and author name to quotesResponseDiv
    * calls clearCurrentQuotesResponseDiv function to remove existing strings
    * calls clearErrorMessage function to clear string from error div
    * displays quote and author in quotesResponseDiv
*/

/*
 displayError
  displays message "Please enter a search word." if there is an error
    * calls clearErrorMessage function to clear string from error div
    * displays error message to error div
    * returns
*/
function displayError() {
  console.log("displayError was called");
  clearErrorMessage();
  document.getElementById("errorDiv").innerHTML = "Please enter a search word.";
  document.getElementById("searchedInput").value = "";
  return;
}

/*
 clearErrorMessage
  clears error message
    * sets innerHTML of errorDiv to ""
*/
function clearErrorMessage() {
  console.log("clearErrorMessage was called");
  document.getElementById("errorDiv").innerHTML = "";
}

/*
 clearCurrentQuotesResponseDiv 
  clears out all strings in CurrentQuotesResponseDiv
    * sets all innerHTML of elements in the CurrentWeatherCard div to ""
*/
function clearCurrentQuotesResponseDiv() {
  document.getElementById("quotesResponseDiv").innerHTML = "";
}

/*
 showElementById
  utility function to show an element by id
    * removes hidden class from element
*/

// event listeners

// handleSearchButtonClick - when user clicks the "Inspire Me" button
searchBtn.addEventListener("click", handleSearchButtonClick);
