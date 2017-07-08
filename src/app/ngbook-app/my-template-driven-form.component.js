"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var FormComponent = (function () {
    function FormComponent() {
    }
    FormComponent.prototype.submit = function (form) {
        this.value = form;
    };
    FormComponent = __decorate([
        core_1.Component({
            selector: 'my-template-drive-form',
            template: "\n    <form #form=\"ngForm\" (ngSubmit)=\"submit(form.value)\">\n      <div>\n        <label>Firstname:</label>\n        <input type=\"text\" name=\"firstname\" ngModel>\n      </div>\n      <div>\n        <label>Lastname:</label>\n        <input type=\"text\" name=\"lastname\" ngModel>\n      </div>\n      <div>\n        <label>Street:</label>\n        <input type=\"text\" name=\"street\" ngModel>\n      </div>\n      <div>\n        <label>Zip:</label>\n        <input type=\"text\" name=\"zip\" ngModel>\n      </div>\n      <div>\n        <label>City:</label>\n        <input type=\"text\" name=\"city\" ngModel>\n      </div>\n    \n      <button type=\"submit\">Submit</button>\n    </form>\n\n    <pre>\n        {{form.value | json}}\n    </pre>\n    \n    <h4>Submitted</h4>\n    <pre>    \n        {{value | json }}\n    </pre>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=my-template-driven-form.component.js.map