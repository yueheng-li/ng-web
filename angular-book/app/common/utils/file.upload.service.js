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
require('rxjs/add/operator/share');
var FileUploadService = (function () {
    function FileUploadService() {
        /**
         * @type {number}
         */
        this.progress = 0;
    }
    /**
     * @returns {Observable<number>}
     */
    FileUploadService.prototype.getObserver = function () {
        return this.progress$;
    };
    /**
     * Upload files through XMLHttpRequest
     *
     * @param url
     * @param files
     * @returns {Promise<T>}
     */
    FileUploadService.prototype.upload = function (url, file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var formData = new FormData(), xhr = new XMLHttpRequest();
            formData.append("name", file.name);
            formData.append("file", file);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            FileUploadService.setUploadUpdateInterval(500);
            xhr.upload.onprogress = function (event) {
                _this.progress = Math.round(event.loaded / event.total * 100);
                // this.progressObserver.next(this.progress);
            };
            xhr.open('POST', url, true);
            //xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.send(formData);
        });
    };
    /**
     * Set interval for frequency with which Observable inside Promise will share data with subscribers.
     *
     * @param interval
     */
    FileUploadService.setUploadUpdateInterval = function (interval) {
        setInterval(function () { }, interval);
    };
    FileUploadService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], FileUploadService);
    return FileUploadService;
}());
exports.FileUploadService = FileUploadService;
//# sourceMappingURL=file.upload.service.js.map