System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var QuoteService, quotes2;
    return {
        setters:[],
        execute: function() {
            QuoteService = (function () {
                function QuoteService() {
                    this.quotes = quotes2;
                }
                QuoteService.prototype.getRandomQuote = function () {
                    var randomIndex = Math.floor(Math.random() * this.quotes.length);
                    return this.quotes[randomIndex];
                };
                QuoteService.prototype.generateRandomQuotes = function (delay, callback) {
                    var _this = this;
                    callback(this.getRandomQuote());
                    setInterval(function () { return callback(_this.getRandomQuote()); }, delay);
                };
                return QuoteService;
            }());
            exports_1("QuoteService", QuoteService);
            quotes2 = [
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
        }
    }
});
