(function(){

    var Component = ng.core.Component;
    var NgModule = ng.core.NgModule;
    var BrowserModule = ng.platformBrowser.BrowserModule;
    var platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic;
    var Class = ng.core.Class;

var QuoteService = Class({
    constructor: function QuoteService(){
        this.quotes = quotes2;
    },

    getRandomQuote :function(){
        var randomIndex = Math.floor(Math.random() * quotes2.length)
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

var TestService = Class({
    constructor: function TestService(){},

    getRandomQuote: function(){
        return {
            line: 'Cytat testowy',
            author: 'Autor testowy'
        };
    }
});
    
var SecondComponent = Component({
    selector: 'second',
    template: '<p><em>{{quote.line}}</em> {{quote.author}}</p>'
})  
    .Class({
        constructor: [QuoteService,function SecondComponent(quoteService){
            var self = this;
            quoteService.generateRandomQuotes(2000,function(quote){
                self.quote = quote;
            });
        }]

    });
    
    
    
var AppComponent = Component({
    selector: 'my-app',
    template: `<h1>Angular 2.0</h1>
              <second></second>`
    })
.Class({
    constructor: function AppComponent(){}
});


var AppModule = NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, SecondComponent],
    providers: [
        {provide: QuoteService, useClass: QuoteService},
    ],
    bootstrap: [AppComponent]
})
.Class({
    constructor: function(){}
})

platformBrowserDynamic().bootstrapModule(AppModule);

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


})();