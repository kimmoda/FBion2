"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require("@angular/common");
// Pipes
var capitalize_1 = require("./capitalize");
var order_by_1 = require("./order-by");
var angular2_moment_1 = require("angular2-moment");
exports.sharedPipes = [
    capitalize_1.Capitalize,
    order_by_1.OrderBy,
    angular2_moment_1.TimeAgoPipe
];
var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [exports.sharedPipes],
            declarations: [exports.sharedPipes],
        })
    ], PipesModule);
    return PipesModule;
}());
exports.PipesModule = PipesModule;
