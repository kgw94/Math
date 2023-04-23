const quotes = [
    "The best way to predict your future is to create it. - Abraham Lincoln",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
    "If you want to lift yourself up, lift up someone else. - Booker T. Washington"
  ];
  
  const quoteEl = document.getElementById("quote-text");
  quoteEl.textContent = quotes[Math.floor(Math.random() * quotes.length)];