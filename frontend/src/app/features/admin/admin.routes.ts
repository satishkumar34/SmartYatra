import { Routes } from '@angular/router';

export const adminRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./admin-dashboard/admin-dashboard.component').then((m) => m.AdminDashboardComponent),
  },
  {
    path: 'places',
    loadComponent: () =>
      import('./admin-places/admin-places.component').then((m) => m.AdminPlacesComponent),
  },
  {
    path: 'hotels',
    loadComponent: () =>
      import('./admin-hotels/admin-hotels.component').then((m) => m.AdminHotelsComponent),
  },
  {
    path: 'bookings',
    loadComponent: () =>
      import('./admin-bookings/admin-bookings.component').then((m) => m.AdminBookingsComponent),
  },
  {
    path: 'users',
    loadComponent: () =>
      import('./admin-users/admin-users.component').then((m) => m.AdminUsersComponent),
  },
];
