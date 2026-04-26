import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AdminService } from '../../../core/services/admin.service';
import { BookingsService } from '../../../core/services/bookings.service';
import { AdminDashboardStats, Booking } from '../../../core/models';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
})
export class AdminDashboardComponent implements OnInit {
  stats   = signal<AdminDashboardStats | null>(null);
  recent  = signal<Booking[]>([]);
  loading = signal(true);

  confirmedPct = computed(() => {
    const s = this.stats();
    if (!s || !s.total_bookings) return 0;
    return Math.round((s.confirmed_bookings / s.total_bookings) * 100);
  });

  pendingPct = computed(() => {
    const s = this.stats();
    if (!s || !s.total_bookings) return 0;
    return Math.round((s.pending_bookings / s.total_bookings) * 100);
  });

  cancelledPct = computed(() => {
    const s = this.stats();
    if (!s || !s.total_bookings) return 0;
    return Math.round((s.cancelled_bookings / s.total_bookings) * 100);
  });

  kpiCards = computed(() => {
    const s = this.stats();
    if (!s) return [];
    return [
      { label: 'Total Revenue',   value: '₹' + s.total_revenue.toLocaleString('en-IN'), icon: '💰', accent: 'gold'    },
      { label: 'Total Bookings',  value: s.total_bookings,                                icon: '📋', accent: 'teal'    },
      { label: 'Registered Users',value: s.total_users,                                   icon: '👥', accent: 'blue'    },
      { label: 'Destinations',    value: s.total_places,                                  icon: '🌍', accent: 'purple'  },
      { label: 'Hotels Listed',   value: s.total_hotels,                                  icon: '🏨', accent: 'coral'   },
      { label: 'Pending Review',  value: s.pending_bookings,                              icon: '⏳', accent: 'warning' },
    ];
  });

  quickLinks = [
    { label: 'Manage Destinations', route: '/admin/places',   icon: '📍' },
    { label: 'Manage Hotels',       route: '/admin/hotels',   icon: '🏨' },
    { label: 'All Bookings',        route: '/admin/bookings', icon: '📋' },
    { label: 'User Accounts',       route: '/admin/users',    icon: '👥' },
  ];

  constructor(
    private adminSvc: AdminService,
    private bookingSvc: BookingsService,
  ) {}

  ngOnInit(): void {
    this.adminSvc.getDashboardStats().subscribe({
      next: (s) => { this.stats.set(s); this.loading.set(false); },
      error: () => this.loading.set(false),
    });

    this.bookingSvc.allBookings({ page: 1, size: 8 }).subscribe({
      next: (r) => this.recent.set(r.items),
    });
  }

  statusClass(status: string): string { return `badge-${status}`; }

  nightsBetween(ci: string, co: string): number {
    return Math.ceil((new Date(co).getTime() - new Date(ci).getTime()) / 86_400_000);
  }
}
