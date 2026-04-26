import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiService } from './api.service';
import {
  Booking, BookingCreateRequest, PaginatedResponse,
  BookingQueryParams, BookingStatus,
} from '../models';

@Injectable({ providedIn: 'root' })
export class BookingsService extends ApiService {
  private readonly endpoint = `${this.base}/bookings`;

  create(payload: BookingCreateRequest): Observable<Booking> {
    return this.http.post<Booking>(this.endpoint, payload).pipe(catchError(this.handleError));
  }

  myBookings(params: BookingQueryParams = {}): Observable<PaginatedResponse<Booking>> {
    return this.http
      .get<PaginatedResponse<Booking>>(`${this.endpoint}/my`, { params: this.buildParams(params) })
      .pipe(catchError(this.handleError));
  }

  allBookings(params: BookingQueryParams = {}): Observable<PaginatedResponse<Booking>> {
    return this.http
      .get<PaginatedResponse<Booking>>(this.endpoint, { params: this.buildParams(params) })
      .pipe(catchError(this.handleError));
  }

  getById(id: number): Observable<Booking> {
    return this.http.get<Booking>(`${this.endpoint}/${id}`).pipe(catchError(this.handleError));
  }

  updateStatus(id: number, status: BookingStatus): Observable<Booking> {
    return this.http
      .patch<Booking>(`${this.endpoint}/${id}/status`, { status })
      .pipe(catchError(this.handleError));
  }

  cancel(id: number): Observable<Booking> {
    return this.http.post<Booking>(`${this.endpoint}/${id}/cancel`, {}).pipe(catchError(this.handleError));
  }
}
