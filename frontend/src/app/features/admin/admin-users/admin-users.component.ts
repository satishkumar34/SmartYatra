import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { AdminService } from '../../../core/services/admin.service';
import { User } from '../../../core/models';
import { PaginationComponent } from '../../../shared/pagination/pagination.component';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [CommonModule, FormsModule, PaginationComponent],
  template: `
    <div class="admin-page fade-in">
      <div class="admin-header">
        <div>
          <h2>Users</h2>
          <p>All registered platform users</p>
        </div>
      </div>

      <div class="admin-search">
        <input type="text" class="search-input" placeholder="Search by name or email..."
               [value]="searchQuery"
               (input)="onSearch($any($event.target).value)" />
      </div>

      @if (loading()) {
        <div class="page-loading"><div class="loading-spinner"></div></div>
      } @else {
        <div class="data-table-wrap card">
          <table class="data-table">
            <thead>
              <tr>
                <th>#ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Joined</th>
              </tr>
            </thead>
            <tbody>
              @for (user of users(); track user.id) {
                <tr>
                  <td class="text-secondary">#{{ user.id }}</td>
                  <td>
                    <div class="user-cell">
                      <div class="user-avatar">{{ initials(user.full_name) }}</div>
                      <span>{{ user.full_name }}</span>
                    </div>
                  </td>
                  <td class="text-secondary">{{ user.email }}</td>
                  <td>
                    <span [class]="'badge-' + user.role">{{ user.role }}</span>
                  </td>
                  <td>
                    <span [class]="user.is_active ? 'badge-confirmed' : 'badge-cancelled'">
                      {{ user.is_active ? 'Active' : 'Inactive' }}
                    </span>
                  </td>
                  <td class="text-secondary">{{ user.created_at | date:'MMM d, y' }}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>

        <app-pagination [currentPage]="currentPage()" [totalPages]="totalPages()" (pageChange)="onPage($event)" />
      }
    </div>
  `,
  styleUrl: './admin-users.component.scss',
})
export class AdminUsersComponent implements OnInit {
  users = signal<User[]>([]);
  loading = signal(true);
  totalPages = signal(1);
  currentPage = signal(1);
  searchQuery = '';

  private search$ = new Subject<string>();
  private destroy$ = new Subject<void>();

  constructor(private adminSvc: AdminService) {}

  ngOnInit(): void {
    this.load();
    this.search$.pipe(debounceTime(350), distinctUntilChanged(), takeUntil(this.destroy$))
      .subscribe(() => { this.currentPage.set(1); this.load(); });
  }

  ngOnDestroy(): void { this.destroy$.next(); this.destroy$.complete(); }

  load(): void {
    this.loading.set(true);
    this.adminSvc.listUsers({ page: this.currentPage(), size: 15, search: this.searchQuery || undefined }).subscribe({
      next: (r) => { this.users.set(r.items); this.totalPages.set(r.pages); this.loading.set(false); },
      error: () => this.loading.set(false),
    });
  }

  onSearch(q: string): void { this.searchQuery = q; this.search$.next(q); }
  onPage(p: number): void { this.currentPage.set(p); this.load(); }

  initials(name: string): string {
    return name.split(' ').map((n) => n[0]).slice(0, 2).join('').toUpperCase();
  }
}
