import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (totalPages > 1) {
      <div class="pagination">
        <button (click)="go(currentPage - 1)" [disabled]="currentPage === 1">&lt;</button>

        @for (p of visiblePages; track p) {
          @if (p === -1) {
            <span class="pagination-ellipsis">...</span>
          } @else {
            <button (click)="go(p)" [class.active]="p === currentPage">{{ p }}</button>
          }
        }

        <button (click)="go(currentPage + 1)" [disabled]="currentPage === totalPages">&gt;</button>
      </div>
    }
  `,
  styles: [`
    .pagination { display:flex; align-items:center; justify-content:center; gap:6px; margin-top:2rem; }
    .pagination-ellipsis { color: var(--text-muted); padding: 0 4px; font-size: 0.875rem; }
  `],
})
export class PaginationComponent {
  @Input() currentPage = 1;
  @Input() totalPages = 1;
  @Output() pageChange = new EventEmitter<number>();

  get visiblePages(): number[] {
    const pages: number[] = [];
    const total = this.totalPages;
    const cur = this.currentPage;

    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    pages.push(1);
    if (cur > 3) pages.push(-1);
    for (let i = Math.max(2, cur - 1); i <= Math.min(total - 1, cur + 1); i++) {
      pages.push(i);
    }
    if (cur < total - 2) pages.push(-1);
    pages.push(total);
    return pages;
  }

  go(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.pageChange.emit(page);
  }
}
