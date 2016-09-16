"use strict";
var BaseController = (function () {
    function BaseController() {
    }
    BaseController.prototype.goBack = function () {
        window.history.back();
    };
    return BaseController;
}());
exports.BaseController = BaseController;
//# sourceMappingURL=app.base.controller.js.map