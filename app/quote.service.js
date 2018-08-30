"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (app) {
  var QuoteService = function () {
    function QuoteService() {
      _classCallCheck(this, QuoteService);

      this.quotes = quotes2;
    }

    _createClass(QuoteService, [{
      key: "getRandomQuote",
      value: function getRandomQuote() {
        var randomIndex = Math.floor(Math.random() * this.quotes.length);
        return this.quotes[randomIndex];
      }
    }, {
      key: "generateRandomQuotes",
      value: function generateRandomQuotes(delay, callback) {
        var _this = this;

        callback(this.getRandomQuote());
        setInterval(function () {
          return callback(_this.getRandomQuote());
        }, delay);
      }
    }]);

    return QuoteService;
  }();

  app.QuoteService = QuoteService;

  var quotes2 = [{
    "line": "Walking on water and developing software from a specification are easy if both are frozen.",
    "author": "Edward V Berard"
  }, {
    "line": "It always takes longer than you expect, even when you take into account Hofstadter's Law.",
    "author": "Hofstadter's Law"
  }, {
    "line": "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
    "author": "Bill Gates"
  }, {
    "line": "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
    "author": "Edsger Dijkstra"
  }, {
    "line": "The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time.",
    "author": "Tom Cargill"
  }];
})(window.app || (window.app = {}));