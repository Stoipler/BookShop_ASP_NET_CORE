import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let ToastService = class ToastService {
    constructor() {
        this.toasts = [];
    }
    show(header, body) {
        this.toasts.push({ header, body });
    }
    remove(toast) {
        this.toasts = this.toasts.filter(t => t != toast);
    }
};
ToastService = tslib_1.__decorate([
    Injectable({ providedIn: 'root' })
], ToastService);
export { ToastService };
//# sourceMappingURL=toast.service.js.map