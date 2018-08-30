'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (app) {
  var _dec, _class;

  var Component = ng.core.Component;

  var AppComponent = (_dec = Component({
    selector: 'my-app',
    template: '<h1>!!!Angular 2.0. Hello World!!!</h1>\n              <second></second>'
  }), _dec(_class = function AppComponent() {
    _classCallCheck(this, AppComponent);
  }) || _class);


  app.AppComponent = AppComponent;
})(window.app || (window.app = {}));