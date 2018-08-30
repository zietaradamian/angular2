'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (app) {
    var _dec, _class;

    var Component = ng.core.Component;
    var Inject = ng.core.Inject;
    var QuoteService = app.QuoteService;
    var SecondComponent = (_dec = Component({
        selector: 'second',
        template: '<p><em>{{quote.line}}</em>{{quote.author}}</p>'
    }), _dec(_class = function SecondComponent(quoteService) {
        var _this = this;

        _classCallCheck(this, SecondComponent);

        quoteService.generateRandomQuotes(2000, function (quote) {
            return _this.quote = quote;
        });
    }) || _class);
    Inject(QuoteService)(SecondComponent, null, 0);


    app.SecondComponent = SecondComponent;
})(window.app || (window.app = {}));