import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Toast, ToastService } from '../../core/services/toast.service';

@Component({
  selector: 'app-toast-container',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toast-container">
      @for (toast of toasts(); track toast.id) {
        <div class="toast toast-{{ toast.type }}" (click)="dismiss(toast.id)">
          <span class="toast-icon">{{ icons[toast.type] }}</span>
          <span class="toast-message">{{ toast.message }}</span>
          <button class="toast-close" aria-label="Dismiss">✕</button>
        </div>
      }
    </div>
  `,
  styleUrl: './toast-container.component.scss',
})
export class ToastContainerComponent implements OnInit {
  toasts = signal<Toast[]>([]);

  readonly icons: Record<string, string> = {
    success: '✓',
    error:   '✕',
    warning: '⚠',
    info:    'ℹ',
  };

  constructor(private toastSvc: ToastService) {}

  ngOnInit(): void {
    this.toastSvc.toasts$.subscribe((toast) => {
      this.toasts.update((list) => [...list, toast]);
      setTimeout(() => this.dismiss(toast.id), 4000);
    });
  }

  dismiss(id: number): void {
    this.toasts.update((list) => list.filter((t) => t.id !== id));
  }
}
