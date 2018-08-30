System.register(['@angular/core', './quote.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, quote_service_1;
    var SecondComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (quote_service_1_1) {
                quote_service_1 = quote_service_1_1;
            }],
        execute: function() {
            SecondComponent = (function () {
                function SecondComponent(quoteService) {
                    var _this = this;
                    quoteService.generateRandomQuotes(2000, function (quote) { return _this.quote = quote; });
                }
                SecondComponent = __decorate([
                    core_1.Component({
                        selector: 'second',
                        template: '<p><em>{{quote.line}}</em>{{quote.author}}</p>'
                    }), 
                    __metadata('design:paramtypes', [quote_service_1.QuoteService])
                ], SecondComponent);
                return SecondComponent;
            }());
            exports_1("SecondComponent", SecondComponent);
        }
    }
});
