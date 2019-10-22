import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
  toasts: any[] = [];

  public show(header: string, body: string) {
    this.toasts.push({ header, body });
  }
  public remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
}
