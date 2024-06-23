"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.View = void 0;
const app_1 = require("./app");
const construct_1 = require("@react-ssr-frame/construct");
exports.View = (0, construct_1.BuildView)(app_1.App);
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";
if (isBrowser) {
    (0, construct_1.clientBootstrap)(exports.View);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtCQUE0QjtBQUM1QiwwREFBd0U7QUFFM0QsUUFBQSxJQUFJLEdBQUcsSUFBQSxxQkFBUyxFQUFDLFNBQUcsQ0FBQyxDQUFDO0FBQ25DLE1BQU0sU0FBUyxHQUNiLE9BQU8sTUFBTSxLQUFLLFdBQVcsSUFBSSxPQUFPLE1BQU0sQ0FBQyxRQUFRLEtBQUssV0FBVyxDQUFDO0FBRTFFLElBQUksU0FBUyxFQUFFLENBQUM7SUFDZCxJQUFBLDJCQUFlLEVBQUMsWUFBSSxDQUFDLENBQUM7QUFDeEIsQ0FBQyJ9