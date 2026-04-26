import { Component, computed, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { ThemeService } from '../../core/services/theme.service';

interface NavItem {
  label: string;
  route: string;
  icon: string;
  adminOnly?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard', route: '/dashboard', icon: 'D' },
  { label: 'Destinations', route: '/destinations', icon: 'P' },
  { label: 'Hotels', route: '/hotels', icon: 'H' },
  { label: 'My Bookings', route: '/bookings', icon: 'B' },
  { label: 'My Profile', route: '/profile', icon: 'U' },
];

const ADMIN_NAV_ITEMS: NavItem[] = [
  { label: 'Admin Panel', route: '/admin', icon: 'A', adminOnly: true },
  { label: 'Manage Places', route: '/admin/places', icon: 'P', adminOnly: true },
  { label: 'Manage Hotels', route: '/admin/hotels', icon: 'H', adminOnly: true },
  { label: 'All Bookings', route: '/admin/bookings', icon: 'B', adminOnly: true },
  { label: 'Users', route: '/admin/users', icon: 'U', adminOnly: true },
];

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
})
export class ShellComponent {
  sidebarOpen = signal(false);
  sidebarCollapsed = signal(false);

  navItems = NAV_ITEMS;
  adminNavItems = ADMIN_NAV_ITEMS;

  currentUser = this.auth.currentUser;
  isAdmin = this.auth.isAdmin;
  isDarkTheme = this.themeService.isDark;

  avatarInitials = computed(() => {
    const name = this.currentUser()?.full_name ?? '';
    return name.split(' ').map((n) => n[0]).slice(0, 2).join('').toUpperCase();
  });

  constructor(
    public auth: AuthService,
    private router: Router,
    private themeService: ThemeService
  ) {}

  toggleSidebar(): void {
    this.sidebarOpen.update((value) => !value);
  }

  toggleSidebarCollapse(): void {
    this.sidebarCollapsed.update((value) => !value);
  }

  closeSidebar(): void {
    this.sidebarOpen.set(false);
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  logout(): void {
    this.auth.logout();
  }

  get pageTitle(): string {
    const url = this.router.url;
    if (url.includes('/dashboard')) return 'Dashboard';
    if (url.includes('/destinations')) return 'Destinations';
    if (url.includes('/hotels')) return 'Hotels';
    if (url.includes('/bookings')) return 'My Bookings';
    if (url.includes('/admin')) return 'Admin Panel';
    return 'Smart Tourism';
  }

  get themeToggleLabel(): string {
    return this.isDarkTheme() ? 'Light mode' : 'Dark mode';
  }
}
