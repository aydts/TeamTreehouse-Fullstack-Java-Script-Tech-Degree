// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
//Define Variables
var viewedQuotes=[];
var body;
var rgbColor;
var html;
var selectedRandomQuote;
var splicedQuote;

//Array of Object Quotes
var quotes = [
 { quote: 'The journey of a thousand miles begins with one step.',
   source: 'Lao Tzu',
   citation: 'Wiktionary',
   year: 'c 551 bc - c 479 bc',
   category: ' Inspiration,'
 },
 { quote: 'He who knows best knows how little he knows.',
   source: 'Thomas Jefferson',
   citation: 'Monticello',
   year: '1812',
   category: ' Inspiration'
 },
  { quote:'There is some good in this world, and it\'s worth fighting for',
    source:'J.R.R. Toklkien',
    citation:'The Tale of Two Towers',
    year:'2009',
    category:' Positive View',
  },
  { quote:'None of us really changes over time. We only become more fully what we are.',
    source:'Anne Rice',
    citation:'The Vampire Lestat',
    year:'2010',
    category:' Real Talk',
  },
  { quote:'Every human life is worth the same, and worth saving.',
    source:'J.K.Rowling',
    citation:'Harry Potter and the Deathly Hallows',
    year:'2012',
    category:' Positive View',
  }
]
//functions to generate random background-color

function randomRGB(){
  return Math.floor(Math.random()*256);
}
function randomColor(){
  var color = 'rgb(';
  color += randomRGB() +', ';
  color += randomRGB() +', ';
  color += randomRGB() +')';
 return color;
}

//assigns random number to Quotes
//returns random quote
//takes out displayed quotes and resets when there are no more available
function getRandomQuote() {
    var quote = Math.floor(Math.random() * quotes.length);
    var splicedQuote = quotes.splice(quote, 1)[0];
    viewedQuotes.push(splicedQuote);
    if (quotes.length === 0) {
      quotes = viewedQuotes;
      viewedQuotes = [];
    }
    console.log(splicedQuote);
    return splicedQuote;
}
//time interval to cycle through quotes automatically
setInterval(printQuote,6500);

//print quotes
//change background-color color of page and button
function printQuote() {
    var selectedRandomQuote = getRandomQuote();
    var html = '<p class="quote">' + selectedRandomQuote.quote + '</p>'
    + '<p class="source">' + selectedRandomQuote.source +
    '<span class="citation">' + selectedRandomQuote.citation + '</span>'
    + '<span class="year">' + selectedRandomQuote.year + '</span>' + '<span class="category">'
    + selectedRandomQuote.category + '</span>' + '</p>';
    document.getElementById('quote-box').innerHTML = html;
    rgbColor = randomColor();
    document.body.style.background=rgbColor;
    document.getElementById('loadQuote').style.background=rgbColor;
}
