import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiService } from './api.service';
import { Hotel, HotelCreateRequest, PaginatedResponse, HotelQueryParams } from '../models';

@Injectable({ providedIn: 'root' })
export class HotelsService extends ApiService {
  private readonly endpoint = `${this.base}/hotels`;

  list(params: HotelQueryParams = {}): Observable<PaginatedResponse<Hotel>> {
    return this.http
      .get<PaginatedResponse<Hotel>>(this.endpoint, { params: this.buildParams(params) })
      .pipe(catchError(this.handleError));
  }

  getById(id: number): Observable<Hotel> {
    return this.http.get<Hotel>(`${this.endpoint}/${id}`).pipe(catchError(this.handleError));
  }

  create(payload: HotelCreateRequest): Observable<Hotel> {
    return this.http.post<Hotel>(this.endpoint, payload).pipe(catchError(this.handleError));
  }

  update(id: number, payload: Partial<HotelCreateRequest>): Observable<Hotel> {
    return this.http.patch<Hotel>(`${this.endpoint}/${id}`, payload).pipe(catchError(this.handleError));
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.endpoint}/${id}`).pipe(catchError(this.handleError));
  }
}
