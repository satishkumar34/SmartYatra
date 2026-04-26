import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AdminService } from '../../core/services/admin.service';
import { BookingsService } from '../../core/services/bookings.service';
import { AuthService } from '../../core/services/auth.service';
import { AdminDashboardStats, Booking } from '../../core/models';

interface StatCard {
  label: string;
  value: string | number;
  icon: string;
  color: string;
  route?: string;
}

interface AtmosphereParticle {
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  drift: number;
  blur?: number;
  rotation?: number;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  readonly heroBackground = `
    linear-gradient(115deg, rgba(7, 10, 20, 0.82) 10%, rgba(10, 17, 34, 0.56) 42%, rgba(242, 175, 76, 0.2) 100%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0)),
    url('assets/dashboard-hero.jpg') center 58% / cover no-repeat
  `;
  readonly snowflakes: AtmosphereParticle[] = [
    { left: 2, top: 4, size: 24, duration: 28, delay: -8, opacity: 0.82, drift: 34, blur: 0 },
    { left: 4, top: 18, size: 28, duration: 34, delay: -16, opacity: 0.88, drift: 40, blur: 0.1 },
    { left: 6, top: 34, size: 22, duration: 26, delay: -5, opacity: 0.8, drift: 28, blur: 0.2 },
    { left: 8, top: 52, size: 30, duration: 37, delay: -20, opacity: 0.9, drift: 46, blur: 0 },
    { left: 11, top: 10, size: 26, duration: 31, delay: -10, opacity: 0.84, drift: 36, blur: 0.12 },
    { left: 14, top: 42, size: 24, duration: 29, delay: -7, opacity: 0.82, drift: 32, blur: 0.18 },
    { left: 18, top: 68, size: 20, duration: 25, delay: -11, opacity: 0.76, drift: 26, blur: 0.15 },
    { left: 82, top: 8, size: 25, duration: 30, delay: -9, opacity: 0.84, drift: 34, blur: 0.08 },
    { left: 86, top: 24, size: 29, duration: 36, delay: -18, opacity: 0.9, drift: 44, blur: 0 },
    { left: 89, top: 44, size: 23, duration: 27, delay: -6, opacity: 0.8, drift: 30, blur: 0.2 },
    { left: 92, top: 60, size: 31, duration: 38, delay: -21, opacity: 0.92, drift: 48, blur: 0 },
    { left: 95, top: 14, size: 26, duration: 32, delay: -12, opacity: 0.86, drift: 38, blur: 0.1 },
    { left: 97, top: 36, size: 24, duration: 29, delay: -8, opacity: 0.82, drift: 30, blur: 0.16 },
    { left: 21, top: 82, size: 18, duration: 24, delay: -4, opacity: 0.7, drift: 22, blur: 0.2 },
    { left: 77, top: 76, size: 19, duration: 25, delay: -14, opacity: 0.72, drift: 24, blur: 0.18 },
    { left: 24, top: 92, size: 17, duration: 22, delay: -3, opacity: 0.66, drift: 20, blur: 0.2 },
    { left: 74, top: 90, size: 18, duration: 23, delay: -13, opacity: 0.68, drift: 22, blur: 0.18 },
  ];
  readonly leaves: AtmosphereParticle[] = [
    { left: 4, top: 12, size: 34, duration: 28, delay: -10, opacity: 0.62, drift: 64, rotation: -22 },
    { left: 7, top: 30, size: 38, duration: 32, delay: -18, opacity: 0.66, drift: 72, rotation: 18 },
    { left: 10, top: 52, size: 30, duration: 24, delay: -6, opacity: 0.56, drift: 56, rotation: -16 },
    { left: 13, top: 74, size: 36, duration: 33, delay: -14, opacity: 0.64, drift: 74, rotation: 24 },
    { left: 17, top: 90, size: 28, duration: 22, delay: -4, opacity: 0.52, drift: 48, rotation: -14 },
    { left: 83, top: 16, size: 35, duration: 29, delay: -11, opacity: 0.62, drift: 68, rotation: -20 },
    { left: 87, top: 36, size: 40, duration: 34, delay: -19, opacity: 0.68, drift: 78, rotation: 20 },
    { left: 90, top: 58, size: 32, duration: 25, delay: -7, opacity: 0.58, drift: 60, rotation: -12 },
    { left: 93, top: 78, size: 38, duration: 31, delay: -15, opacity: 0.64, drift: 70, rotation: 22 },
    { left: 96, top: 92, size: 29, duration: 23, delay: -5, opacity: 0.54, drift: 50, rotation: -18 },
    { left: 22, top: 88, size: 24, duration: 21, delay: -3, opacity: 0.44, drift: 40, rotation: 16 },
    { left: 76, top: 84, size: 26, duration: 22, delay: -12, opacity: 0.46, drift: 42, rotation: -20 },
  ];

  stats = signal<AdminDashboardStats | null>(null);
  recentBookings = signal<Booking[]>([]);
  loading = signal(true);
  isAdmin = this.auth.isAdmin;
  currentUser = this.auth.currentUser;
  firstName = computed(() => {
    const fullName = this.currentUser()?.full_name;
    return fullName ? fullName.split(' ')[0] : '';
  });

  statCards = computed<StatCard[]>(() => {
    const s = this.stats();
    if (!s) return [];
    return [
      { label: 'Total Users',    value: s.total_users,    icon: '👥', color: 'blue',   route: '/admin/users' },
      { label: 'Destinations',   value: s.total_places,   icon: '🌍', color: 'gold',   route: '/destinations' },
      { label: 'Hotels',         value: s.total_hotels,   icon: '🏨', color: 'purple', route: '/hotels' },
      { label: 'Total Bookings', value: s.total_bookings, icon: '📋', color: 'teal',   route: '/admin/bookings' },
      { label: 'Total Revenue',  value: '₹' + s.total_revenue.toLocaleString('en-IN'), icon: '💰', color: 'success' },
      { label: 'Pending',        value: s.pending_bookings,   icon: '⏳', color: 'warning' },
      { label: 'Confirmed',      value: s.confirmed_bookings, icon: '✓',  color: 'success' },
      { label: 'Cancelled',      value: s.cancelled_bookings, icon: '✕',  color: 'danger'  },
    ];
  });

  constructor(
    private adminSvc: AdminService,
    private bookingSvc: BookingsService,
    public auth: AuthService,
  ) {}

  ngOnInit(): void {
    if (this.isAdmin()) {
      this.adminSvc.getDashboardStats().subscribe({
        next: (s) => { this.stats.set(s); this.loading.set(false); },
        error: () => this.loading.set(false),
      });
      this.adminSvc.listUsers({ size: 5 }).subscribe();
    } else {
      // Non-admin: show their own booking summary
      this.bookingSvc.myBookings({ size: 5 }).subscribe({
        next: (res) => { this.recentBookings.set(res.items); this.loading.set(false); },
        error: () => this.loading.set(false),
      });
    }
  }

  statusClass(status: string): string {
    const map: Record<string, string> = {
      pending: 'badge-pending', confirmed: 'badge-confirmed',
      cancelled: 'badge-cancelled', completed: 'badge-completed',
    };
    return map[status] ?? '';
  }
}
