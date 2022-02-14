// initial state

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
    * prevents default
    * calls clearErrorMessage to remove string from error response div
    * grabs search text from input box
    * if the input box was blank, calls displayError function and returns
    * if the input box contained text, calls searchForZenQuotes function and sends the text as searchedKeyword 
*/

/*
 searchForQuotes
  fetches quote data for searchedKeyword
    * creates fetchUrl
    * fetch data from ZenQuotes API
    * data validation: if error occurs, call displayError function and return
    * select random quote from list of quotes sent
    * calls displayQuotesResults and sends quote and author
    * checks to see if the city name is already in the array
*/

/*
 displayQuotesResults
  displays quote and author name to quotesResponseDiv
    * calls clearCurrentQuotesResponseDiv function to remove existing strings
    * calls clearErrorMessage function to clear string from error div
    * displays quote and author in quotesResponseDiv
*/

/*
 displayError
  displays message "Please enter a supported keyword." if there is an error
    * calls clearErrorMessage function to clear string from error div
    * displays error message to error div
    * returns
*/

/*
 clearErrorMessage
  clears error message
    * sets innerHTML of errorDiv to ""
*/

/*
 clearCurrentQuotesResponseDiv 
  clears out all strings in CurrentQuotesResponseDiv
    * sets all innerHTML of elements in the CurrentWeatherCard div to ""
*/

/*
 showElementById
  utility function to show an element by id
    * removes hidden class from element
*/

// event listeners

// handleSearchButtonClick - when user clicks the "Inspire Me" button
