import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-skeleton',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="skeleton-grid">
      @for (i of items; track i) {
        <div class="skeleton-card">
          <div class="skeleton-img"></div>
          <div class="skeleton-body">
            <div class="skeleton-line wide"></div>
            <div class="skeleton-line medium"></div>
            <div class="skeleton-line short"></div>
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    @keyframes shimmer {
      0%   { background-position: -600px 0; }
      100% { background-position: 600px 0; }
    }
    .skeleton-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.5rem;
    }
    .skeleton-card {
      background: var(--surface-card);
      border: 1px solid var(--border-subtle);
      border-radius: 16px;
      overflow: hidden;
    }
    .skeleton-img {
      height: 200px;
      background: linear-gradient(90deg, var(--dark-700) 25%, var(--dark-600) 50%, var(--dark-700) 75%);
      background-size: 600px 100%;
      animation: shimmer 1.5s infinite linear;
    }
    .skeleton-body { padding: 1.25rem; display: flex; flex-direction: column; gap: 10px; }
    .skeleton-line {
      height: 12px;
      border-radius: 6px;
      background: linear-gradient(90deg, var(--dark-700) 25%, var(--dark-600) 50%, var(--dark-700) 75%);
      background-size: 600px 100%;
      animation: shimmer 1.5s infinite linear;
    }
    .wide { width: 80%; }
    .medium { width: 55%; }
    .short { width: 35%; }
  `],
})
export class CardSkeletonComponent {
  @Input() count = 6;
  get items(): number[] { return Array.from({ length: this.count }, (_, i) => i); }
}
