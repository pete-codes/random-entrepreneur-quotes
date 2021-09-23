
function makeQuote() {
    let quotes = ["Do things that don't scale (Paul Graham) " , 
    "Raise your prices (Patio11) " , 
    "Your whole goal is not to quit (Courtland Allen) ",
    "Make things people want (YC)", 
    "Make things people search for (Sabba Keynejad)",
    "Build once, sell twice (Jack Butcher)",
    "There’s an entrepreneur right now, scared to death, making excuses, saying, ‘It’s not the right time just yet.’ There’s no such thing as a good time. I started an apparel-manufacturing business in the tech-boom years. I mean, come on. Get out of your garage and go take a chance and start your business. (Kevin Plank)",
    "Goals are for losers (Scott Adams)", 
    "It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you’ll do things differently. (Warren Buffett)",
    "Don’t worry about failure; you only have to be right once. (Drew Houston)",
    "Ideas are worthless",
    "Be humble. Don’t be cocky. Don’t be flashy. There’s always someone better than you. (Tony Hsiesh)",
    "The best founders are short term pessimists but long term optimists (Garry Tan)",
    "We are really competing against ourselves, we have no control over how other people perform. (Pete Cashmore)",
  "If you're not embarrassed by the first version of your product, you've launched too late (Reid Hoffmann)", 
  "Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There is no reason not to follow your heart.” (Steve Jobs)", 
  "No broke customers (Tara Reed) " 
  
  
  ];
    // let singleQuote = Math.floor(Math.random()*quotes.length);
    document.getElementById("quoteHere").innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
   
}

