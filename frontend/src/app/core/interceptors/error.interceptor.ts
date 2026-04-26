import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ToastService } from '../services/toast.service';

/**
 * Global error interceptor.
 * Converts FastAPI validation errors (422 detail arrays) and
 * generic HTTP errors into a single normalised Error object
 * so every component's error handler can do: err.message
 */
export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toast = inject(ToastService);

  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      // Auth errors are handled by jwtInterceptor — skip here
      if (err.status === 401) return throwError(() => err);

      let message = 'An unexpected error occurred.';

      if (err.error) {
        if (typeof err.error.detail === 'string') {
          message = err.error.detail;
        } else if (Array.isArray(err.error.detail)) {
          // Pydantic validation error list → join field messages
          message = err.error.detail
            .map((e: { msg: string; loc?: string[] }) =>
              e.loc ? `${e.loc.slice(1).join('.')}: ${e.msg}` : e.msg
            )
            .join(' | ');
        } else if (typeof err.error === 'string') {
          message = err.error;
        }
      }

      // 5xx errors always show a toast — others let the component decide
      if (err.status >= 500) {
        toast.error('Server error — please try again.');
      }

      return throwError(() => new Error(message));
    })
  );
};
