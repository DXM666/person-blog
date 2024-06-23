"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./controller/app.controller");
const core_1 = require("@react-ssr-frame/core");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [app_controller_1.AppController],
        providers: [core_1.ReactComponentInterceptor],
    })
], AppModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJDQUF3QztBQUN4QyxnRUFBNEQ7QUFDNUQsZ0RBQWtFO0FBTTNELElBQU0sU0FBUyxHQUFmLE1BQU0sU0FBUztDQUFHLENBQUE7QUFBWiw4QkFBUztvQkFBVCxTQUFTO0lBSnJCLElBQUEsZUFBTSxFQUFDO1FBQ04sV0FBVyxFQUFFLENBQUMsOEJBQWEsQ0FBQztRQUM1QixTQUFTLEVBQUUsQ0FBQyxnQ0FBeUIsQ0FBQztLQUN2QyxDQUFDO0dBQ1csU0FBUyxDQUFHIn0=