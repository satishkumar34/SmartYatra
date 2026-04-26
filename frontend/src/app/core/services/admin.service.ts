import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiService } from './api.service';
import { AdminDashboardStats, PaginatedResponse, User } from '../models';

@Injectable({ providedIn: 'root' })
export class AdminService extends ApiService {
  getDashboardStats(): Observable<AdminDashboardStats> {
    return this.http
      .get<AdminDashboardStats>(`${this.base}/admin/dashboard`)
      .pipe(catchError(this.handleError));
  }

  listUsers(params: { page?: number; size?: number; search?: string } = {}): Observable<PaginatedResponse<User>> {
    return this.http
      .get<PaginatedResponse<User>>(`${this.base}/users`, { params: this.buildParams(params) })
      .pipe(catchError(this.handleError));
  }
}
