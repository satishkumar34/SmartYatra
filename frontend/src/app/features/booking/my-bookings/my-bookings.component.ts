import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BookingsService } from '../../../core/services/bookings.service';
import { ToastService } from '../../../core/services/toast.service';
import { Booking } from '../../../core/models';
import { PaginationComponent } from '../../../shared/pagination/pagination.component';

@Component({
  selector: 'app-my-bookings',
  standalone: true,
  imports: [CommonModule, RouterLink, PaginationComponent],
  templateUrl: './my-bookings.component.html',
  styleUrl: './my-bookings.component.scss',
})
export class MyBookingsComponent implements OnInit {
  bookings = signal<Booking[]>([]);
  loading = signal(true);
  totalPages = signal(1);
  currentPage = signal(1);
  cancellingId = signal<number | null>(null);

  constructor(
    private bookingSvc: BookingsService,
    private toast: ToastService,
  ) {}

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading.set(true);
    this.bookingSvc.myBookings({ page: this.currentPage(), size: 10 }).subscribe({
      next: (res) => {
        this.bookings.set(res.items);
        this.totalPages.set(res.pages);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }

  onPage(p: number): void { this.currentPage.set(p); this.load(); }

  cancel(id: number): void {
    if (!confirm('Are you sure you want to cancel this booking?')) return;
    this.cancellingId.set(id);
    this.bookingSvc.cancel(id).subscribe({
      next: () => {
        this.toast.success('Booking cancelled successfully.');
        this.cancellingId.set(null);
        this.load();
      },
      error: (err: Error) => {
        this.toast.error(err.message);
        this.cancellingId.set(null);
      },
    });
  }

  canCancel(status: string): boolean {
    return status === 'pending' || status === 'confirmed';
  }

  nightsBetween(ci: string, co: string): number {
    return Math.ceil((new Date(co).getTime() - new Date(ci).getTime()) / 86_400_000);
  }

  statusClass(status: string): string {
    return `badge-${status}`;
  }
}
