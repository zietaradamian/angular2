(function(app){  
  var Class = ng.core.Class;

app.QuoteService = Class({
    constructor: function QuoteService (){
        this.quotes = quotes2;
    },

    getRandomQuote: function(){
        var randomIndex = Math.floor(Math.random() * this.quotes.length);
        return this.quotes[randomIndex];
    },

    generateRandomQuotes: function(delay,callback){
        var self = this;
        callback(this.getRandomQuote());
        setInterval(function(){
            callback(self.getRandomQuote());
        },delay);
    }
})  

 var quotes2 = [
    {
      "line": "Walking on water and developing software from a specification are easy if both are frozen.",
      "author": "Edward V Berard"
    },
    {
      "line": "It always takes longer than you expect, even when you take into account Hofstadter's Law.",
      "author": "Hofstadter's Law"
    },
    {
      "line": "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
      "author": "Bill Gates"
    },
    {
      "line": "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
      "author": "Edsger Dijkstra"
    },
    {
      "line": "The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time.",
      "author": "Tom Cargill"
    }
  ];

})(window.app || (window.app = {}));