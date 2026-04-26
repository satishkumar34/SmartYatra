import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HotelsService } from '../../../core/services/hotels.service';
import { Hotel, Review } from '../../../core/models';
import { StarRatingComponent } from '../../../shared/star-rating/star-rating.component';

@Component({
  selector: 'app-hotel-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, StarRatingComponent],
  templateUrl: './hotel-detail.component.html',
  styleUrl: './hotel-detail.component.scss',
})
export class HotelDetailComponent implements OnInit {
  hotel = signal<Hotel | null>(null);
  loading = signal(true);
  error = signal('');
  showReviews = signal(false);
  reviewText = signal('');
  reviewRating = signal(5);
  reviews = signal<Review[]>([
    { id: 1, author: 'Aisha', rating: 5, comment: 'Amazing stay with wonderful service and a beautiful view.', created_at: '2026-03-20' },
    { id: 2, author: 'David', rating: 4, comment: 'Great hotel, spacious rooms and friendly staff.', created_at: '2026-04-02' },
  ]);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private hotelsSvc: HotelsService,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.hotelsSvc.getById(id).subscribe({
      next: (h) => { this.hotel.set(h); this.loading.set(false); },
      error: () => { this.error.set('Hotel not found.'); this.loading.set(false); },
    });
  }

  bookNow(): void {
    this.router.navigate(['/bookings/new'], {
      queryParams: { hotel_id: this.hotel()!.id },
    });
  }

  toggleReviews(): void {
    this.showReviews.update((value) => !value);
  }

  submitReview(): void {
    const text = this.reviewText();
    const rating = this.reviewRating();
    if (!text.trim() || rating < 1 || rating > 5) return;
    const nextId = this.reviews().length ? Math.max(...this.reviews().map((r) => r.id)) + 1 : 1;
    this.reviews.update((list) => [
      ...list,
      {
        id: nextId,
        author: 'You',
        rating,
        comment: text.trim(),
        created_at: new Date().toISOString().split('T')[0],
      },
    ]);
    this.reviewText.set('');
    this.reviewRating.set(5);
    this.showReviews.set(true);
  }

  get displayRating(): number {
    const hotelRating = this.hotel()?.rating ?? 0;
    const ratings = this.reviews().map((r) => r.rating);
    if (!ratings.length) return hotelRating;
    return Number(((hotelRating + ratings.reduce((sum, value) => sum + value, 0)) / (ratings.length + 1)).toFixed(1));
  }

  get amenities(): string[] {
    const raw = this.hotel()?.amenities;
    if (!raw) return [];
    try { return JSON.parse(raw); } catch { return []; }
  }

  readonly amenityIcons: Record<string, string> = {
    WiFi: '📶', Pool: '🏊', Spa: '💆', Gym: '🏋', Restaurant: '🍽',
    Parking: '🅿', 'Air Conditioning': '❄', 'Room Service': '🛎',
    Bar: '🍸', Concierge: '🎩', 'Pet Friendly': '🐾', Laundry: '👕',
  };

  iconFor(amenity: string): string {
    return this.amenityIcons[amenity] ?? '✓';
  }
}
