import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  protected readonly base = environment.apiBaseUrl;

  constructor(protected http: HttpClient) {}

  protected buildParams(obj: Record<string, any>): HttpParams {
    let params = new HttpParams();
    Object.entries(obj).forEach(([k, v]) => {
      if (v !== undefined && v !== null && v !== '') {
        params = params.set(k, String(v));
      }
    });
    return params;
  }

  protected handleError(err: HttpErrorResponse): Observable<never> {
    const message =
      err.error?.detail ||
      (Array.isArray(err.error?.detail)
        ? err.error.detail.map((e: any) => e.msg).join(', ')
        : 'An unexpected error occurred.');
    return throwError(() => new Error(message));
  }
}
