System.register(['@angular/core', '@angular/platform-browser', '@angular/forms', './quote.service', './third.component', './second.component', './app.component', './currenct-select.component', './my.pipes'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, forms_1, quote_service_1, third_component_1, second_component_1, app_component_1, currenct_select_component_1, my_pipes_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (quote_service_1_1) {
                quote_service_1 = quote_service_1_1;
            },
            function (third_component_1_1) {
                third_component_1 = third_component_1_1;
            },
            function (second_component_1_1) {
                second_component_1 = second_component_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (currenct_select_component_1_1) {
                currenct_select_component_1 = currenct_select_component_1_1;
            },
            function (my_pipes_1_1) {
                my_pipes_1 = my_pipes_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
                        declarations: [app_component_1.AppComponent, second_component_1.SecondComponent, third_component_1.ThirdComponent, currenct_select_component_1.CurrencySelectComponent, my_pipes_1.MyPipe],
                        providers: [
                            { provide: quote_service_1.QuoteService, useClass: quote_service_1.QuoteService }
                        ],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
