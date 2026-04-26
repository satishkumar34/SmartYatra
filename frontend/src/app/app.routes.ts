import { Routes } from '@angular/router';
import { authGuard, adminGuard, guestGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    canActivate: [guestGuard],
    loadChildren: () => import('./features/auth/auth.routes').then((m) => m.authRoutes),
  },
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./layout/shell/shell.component').then((m) => m.ShellComponent),
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then((m) => m.DashboardComponent),
      },
      {
        path: 'destinations',
        loadComponent: () =>
          import('./features/destinations/destinations-list/destinations-list.component').then(
            (m) => m.DestinationsListComponent
          ),
      },
      {
        path: 'destinations/:id',
        loadComponent: () =>
          import('./features/destinations/destination-detail/destination-detail.component').then(
            (m) => m.DestinationDetailComponent
          ),
      },
      {
        path: 'hotels',
        loadComponent: () =>
          import('./features/hotels/hotels-list/hotels-list.component').then(
            (m) => m.HotelsListComponent
          ),
      },
      {
        path: 'hotels/:id',
        loadComponent: () =>
          import('./features/hotels/hotel-detail/hotel-detail.component').then(
            (m) => m.HotelDetailComponent
          ),
      },
      {
        path: 'bookings',
        loadComponent: () =>
          import('./features/booking/my-bookings/my-bookings.component').then(
            (m) => m.MyBookingsComponent
          ),
      },
      {
        path: 'bookings/new',
        loadComponent: () =>
          import('./features/booking/booking-form/booking-form.component').then(
            (m) => m.BookingFormComponent
          ),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./features/profile/profile.component').then((m) => m.ProfileComponent),
      },
      {
        path: 'admin',
        canActivate: [adminGuard],
        loadChildren: () =>
          import('./features/admin/admin.routes').then((m) => m.adminRoutes),
      },
    ],
  },
  {
    path: '404',
    loadComponent: () =>
      import('./features/not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
];
