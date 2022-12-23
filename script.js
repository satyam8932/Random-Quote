const text = document.getElementById("quote");
const author = document.getElementById("author");
const tweetButton = document.getElementById("tweet");
const whatsappButton = document.getElementById("whatsapp");

const getNewQuote = async () => {
    //api for quotes
    var url = "https://type.fit/api/quotes";

    // fetch the data from api
    const response = await fetch(url);
    console.log(typeof response);
    //convert response to json and store it in quotes array
    const allQuotes = await response.json();

    // Generates a random number between 0 and the length of the quotes array
    const indx = Math.floor(Math.random() * allQuotes.length);

    //Store the quote present at the randomly generated index
    const quote = allQuotes[indx].text;

    //Store the author of the respective quote
    const auth = allQuotes[indx].author;

    if (auth == null) {
        author = "Anonymous";
    }

    //function to dynamically display the quote and the author
    text.innerHTML = quote;
    author.innerHTML = "~ " + auth;

    //tweet the quote
    tweetButton.href = "https://twitter.com/intent/tweet?text=" + quote + " ~ " + auth;
    whatsappButton.href = "whatsapp://send?text=" + quote + " ~ " + auth;
}
getNewQuote();




var snow_fall_rate = 5 //decrease for faster fall speed
function snow() {  
  var b = document.createElement('div')
  var size = (Math.random()*10) + 5
  b.className = 'flake'
  b.style.width = size + 'px'
  b.style.height = size + 'px'
  b.style.position = 'fixed'
  b.style.zIndex = '9999'
  b.style.left = Math.random()*window.innerWidth + 'px'
  b.style.top = '-20px'
  b.style.borderRadius = '50%'
  b.style.background = 'white' 
  b.style.opacity = '.5' 
  b.style.filter = Math.random() < .5 ? 'blur(3px)' : 'blur(1px)'
  b.style.transition = Math.random < .5 ? snow_fall_rate*.75 + 's' : snow_fall_rate + 's'
  b.style.transitionTimingFunction = 'ease-in'
  document.body.appendChild(b)
 
  setTimeout(function(){
    var flakes = document.querySelectorAll('.flake')
    var flake = flakes[flakes.length - 1]  
    var flake_loc = flake.getBoundingClientRect()
    flake.style.top = '105%'
    flake.style.left = Math.random() < .5 ? flake_loc.left - 150 + 'px' : flake_loc.left + 150 + 'px'
  },10)  
 
  var flakes = document.getElementsByClassName('flake')
  for(var i=0;i<flakes.length;i++){
    if(flakes[i].getBoundingClientRect().top > window.innerHeight) {
      flakes[i].remove()
    }      
  }
  setTimeout(function(){ snow() },200)
}
snow()
