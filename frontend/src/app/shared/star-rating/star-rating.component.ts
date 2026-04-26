import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="star-rating" [attr.aria-label]="rating + ' out of 5 stars'">
      @for (i of stars; track i) {
        <span [class]="i <= fullStars ? 'star' : 'star-empty'">*</span>
      }
      @if (showValue) {
        <span class="rating-value">{{ rating.toFixed(1) }}</span>
      }
    </span>
  `,
  styles: [`
    :host { display: inline-flex; }
    .star-rating { display: inline-flex; align-items: center; gap: 1px; }
    .star { color: #c9a84c; font-size: inherit; }
    .star-empty { color: var(--dark-500); font-size: inherit; }
    .rating-value { margin-left: 4px; font-size: 0.8em; color: var(--text-secondary); }
  `],
})
export class StarRatingComponent {
  @Input() rating = 0;
  @Input() showValue = true;

  readonly stars = [1, 2, 3, 4, 5];
  get fullStars(): number { return Math.round(this.rating); }
}
