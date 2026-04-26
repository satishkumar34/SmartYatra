import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiService } from './api.service';
import { Place, PlaceCreateRequest, PaginatedResponse, PlaceQueryParams } from '../models';

@Injectable({ providedIn: 'root' })
export class PlacesService extends ApiService {
  private readonly endpoint = `${this.base}/places`;

  list(params: PlaceQueryParams = {}): Observable<PaginatedResponse<Place>> {
    return this.http
      .get<PaginatedResponse<Place>>(this.endpoint, { params: this.buildParams(params) })
      .pipe(catchError(this.handleError));
  }

  getById(id: number): Observable<Place> {
    return this.http.get<Place>(`${this.endpoint}/${id}`).pipe(catchError(this.handleError));
  }

  create(payload: PlaceCreateRequest): Observable<Place> {
    return this.http.post<Place>(this.endpoint, payload).pipe(catchError(this.handleError));
  }

  update(id: number, payload: Partial<PlaceCreateRequest>): Observable<Place> {
    return this.http.patch<Place>(`${this.endpoint}/${id}`, payload).pipe(catchError(this.handleError));
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.endpoint}/${id}`).pipe(catchError(this.handleError));
  }
}
