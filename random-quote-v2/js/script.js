// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// function that generates a random number given a range
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//function that uses randomNum to randomly selects an object (quote) from the array, quotesArray, in quotesArray.js
function getRandomQuote() {
    const randomQuote = quotesArray[randomNum(0, quotesArray.length - 1)]
    return randomQuote
}

//helper function to create elements with classes and content
function createEleClassContent(tagName, className, content) {
    const element = document.createElement(tagName)
    element.className = className
    element.innerText = content
    return element
}

// function to create all of the DOM elements and their content that will contain the quote
function printQuote() {
    const randomQuote = getRandomQuote()
    const quoteBox = document.querySelector('#quote-box')
    
    // create and append paragraph with quote to #quote-box
    const quoteP = createEleClassContent('p', 'quote', randomQuote.quote)
    quoteBox.appendChild(quoteP)
    
    // create quote source paragraph and append to #quote-box
    const quoteSourceP = createEleClassContent('p', 'source', randomQuote.source)
    quoteBox.appendChild(quoteSourceP)
    
    // create quote citation span and qppend to paragraph with .source class
    const quoteCitationSpan = createEleClassContent('span', 'citation', randomQuote.citation)
    quoteSourceP.appendChild(quoteCitationSpan)
    
    //create quote year span and append to paragraph with .source class
    if( randomQuote.year != null ) {
        const quoteYearSpan = createEleClassContent('span', 'year', randomQuote.year)
        quoteSourceP.appendChild(quoteYearSpan)
    }
    
}


// remove previous quotes
function clearQuote() {
    const quoteBox = document.querySelector('#quote-box')
    quoteBox.innerHTML = null
}

// This function clears the previous quote and runs printQuote, which posts the new quote
function initializeQuote() {
    clearQuote()
    printQuote()
}

// event listener for the button click to post new quotes
const loadQuote = document.querySelector('#loadQuote')
loadQuote.addEventListener('click', initializeQuote)

// set a time out for a quote to 5 seconds
window.setTimeout(clearQuote, 5000)