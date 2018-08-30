'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SecondComponent = undefined;

var _dec, _class;

var _core = require('@angular/core');

var _quote = require('./quote.service');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SecondComponent = exports.SecondComponent = (_dec = (0, _core.Component)({
    selector: 'second',
    template: '<p><em>{{quote.line}}</em>{{quote.author}}</p>'
}), _dec(_class = function SecondComponent(quoteService) {
    var _this = this;

    _classCallCheck(this, SecondComponent);

    quoteService.generateRandomQuotes(2000, function (quote) {
        return _this.quote = quote;
    });
}) || _class);
(0, _core.Inject)(_quote.QuoteService)(SecondComponent, null, 0);