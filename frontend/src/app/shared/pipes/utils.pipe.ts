import { Pipe, PipeTransform } from '@angular/core';

/** Converts 'confirmed' → 'Confirmed', 'pending' → 'Pending' etc. */
@Pipe({ name: 'titlecase', standalone: true, pure: true })
export class TitleCasePipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value) return '';
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
}

/** Formats a price number as ₹1,23,456 (Indian locale) */
@Pipe({ name: 'inr', standalone: true, pure: true })
export class InrPipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    if (value === null || value === undefined) return '₹0';
    return '₹' + value.toLocaleString('en-IN');
  }
}

/** Truncates text to n chars with ellipsis */
@Pipe({ name: 'truncate', standalone: true, pure: true })
export class TruncatePipe implements PipeTransform {
  transform(value: string | null | undefined, limit = 80): string {
    if (!value) return '';
    return value.length <= limit ? value : value.slice(0, limit).trimEnd() + '…';
  }
}
