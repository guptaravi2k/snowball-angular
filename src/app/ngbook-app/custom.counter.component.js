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
var core_1 = require("@angular/core");
var core_2 = require('@angular/core');
var CustomCounterComponent = (function () {
    function CustomCounterComponent() {
        this.counterValue = 0;
        this.counterChange = new core_2.EventEmitter();
    }
    Object.defineProperty(CustomCounterComponent.prototype, "counter", {
        get: function () {
            return this.counterValue;
        },
        set: function (value) {
            this.counterValue = value;
            this.counterChange.emit(this.counterValue);
        },
        enumerable: true,
        configurable: true
    });
    CustomCounterComponent.prototype.decrement = function () {
        this.counter--;
    };
    CustomCounterComponent.prototype.increment = function () {
        this.counter++;
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CustomCounterComponent.prototype, "counterChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CustomCounterComponent.prototype, "counter", null);
    CustomCounterComponent = __decorate([
        core_1.Component({
            selector: 'custom-counter',
            template: "\n    <p> this is custom counter</p>\n    <button (click)=\"decrement()\">-</button>\n    <span>{{counter}}</span>\n    <button (click)=\"increment()\">+</button>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], CustomCounterComponent);
    return CustomCounterComponent;
}());
exports.CustomCounterComponent = CustomCounterComponent;
//# sourceMappingURL=custom.counter.component.js.map