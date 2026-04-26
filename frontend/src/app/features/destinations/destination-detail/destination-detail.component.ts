import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PlacesService } from '../../../core/services/places.service';
import { HotelsService } from '../../../core/services/hotels.service';
import { Place, Hotel, Review } from '../../../core/models';
import { StarRatingComponent } from '../../../shared/star-rating/star-rating.component';

@Component({
  selector: 'app-destination-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, StarRatingComponent],
  template: `
    @if (loading()) {
      <div class="page-loading"><div class="loading-spinner"></div></div>
    } @else if (place()) {
      <div class="detail-page fade-in">
        <!-- Hero -->
        <div class="detail-hero">
          <img [src]="place()!.image_url || 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80'"
               [alt]="place()!.name" class="hero-img" />
          <div class="hero-overlay">
            <a routerLink="/destinations" class="back-link">← All Destinations</a>
            <div class="hero-content">
              <span class="hero-country">{{ place()!.country }}</span>
              <h1 class="hero-title">{{ place()!.name }}</h1>
              <p class="hero-location">📍 {{ place()!.location }}</p>
              <app-star-rating [rating]="place()!.rating" />
            </div>
          </div>
        </div>

        <!-- Body -->
        <div class="detail-body">
          @if (place()!.description) {
            <div class="detail-section card">
              <h3>About this destination</h3>
              <p>{{ place()!.description }}</p>
            </div>
          }

          <!-- Hotels -->
          <div class="detail-section">
            <h3 class="section-heading">Hotels in {{ place()!.name }}</h3>
            @if (hotels().length === 0) {
              <div class="empty-state">
                <div class="empty-icon">🏨</div>
                <h3>No hotels listed yet</h3>
              </div>
            } @else {
              <div class="hotels-grid">
                @for (hotel of hotels(); track hotel.id) {
                  <div class="hotel-card">
                    <img [src]="hotel.image_url || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80'"
                         [alt]="hotel.name" class="hotel-img" loading="lazy" />
                    <div class="hotel-body">
                      <h4 class="hotel-name">{{ hotel.name }}</h4>
                      <p class="hotel-address">📍 {{ hotel.address }}</p>
                      <app-star-rating [rating]="hotel.rating" />
                      <div class="hotel-footer">
                        <div class="hotel-price">
                          <span class="price-amount">₹{{ hotel.price_per_night | number:'1.0-0' }}</span>
                          <span class="price-label">/night</span>
                        </div>
                        <a [routerLink]="['/hotels', hotel.id]" class="btn btn-primary btn-sm">Book Now</a>
                      </div>
                    </div>
                  </div>
                }
              </div>
            }
          </div>

          <div class="detail-section card">
            <div class="reviews-header">
              <div>
                <h3>Traveler reviews</h3>
                <p class="review-summary">{{ reviews().length }} review{{ reviews().length !== 1 ? 's' : '' }} · Average {{ place()!.rating }} / 5</p>
              </div>
              <button class="btn btn-secondary btn-sm" (click)="toggleReviews()">
                {{ showReviews() ? 'Hide' : 'View' }} reviews
              </button>
            </div>

            <div class="review-form">
              <label class="review-label">Your review</label>
              <select class="review-input" [value]="reviewRating()" (change)="reviewRating.set(+($any($event.target).value))">
                @for (score of [5,4,3,2,1]; track score) {
                  <option [value]="score">{{ score }} star{{ score !== 1 ? 's' : '' }}</option>
                }
              </select>
              <textarea
                class="review-input"
                rows="3"
                placeholder="Share your experience..."
                [value]="reviewText()"
                (input)="reviewText.set($any($event.target).value)"
              ></textarea>
              <button class="btn btn-primary btn-full" (click)="submitReview()">Submit review</button>
            </div>

            @if (showReviews()) {
              <div class="review-list">
                @for (review of reviews(); track review.id) {
                  <div class="review-card">
                    <div class="review-meta">
                      <span class="review-author">{{ review.author }}</span>
                      <span class="review-date">{{ review.created_at }}</span>
                    </div>
                    <app-star-rating [rating]="review.rating" [showValue]="false" />
                    <p class="review-comment">{{ review.comment }}</p>
                  </div>
                }
              </div>
            }
          </div>
        </div>
      </div>
    }
  `,
  styleUrl: './destination-detail.component.scss',
})
export class DestinationDetailComponent implements OnInit {
  place = signal<Place | null>(null);
  hotels = signal<Hotel[]>([]);
  loading = signal(true);
  showReviews = signal(false);
  reviewText = signal('');
  reviewRating = signal(5);
  reviews = signal<Review[]>([
    { id: 1, author: 'Mira', rating: 5, comment: 'Beautiful destination with so much to explore.', created_at: '2026-02-14' },
    { id: 2, author: 'Jackson', rating: 4, comment: 'Great culture and scenery, worth the trip.', created_at: '2026-03-28' },
  ]);

  constructor(private route: ActivatedRoute, private placesSvc: PlacesService, private hotelsSvc: HotelsService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.placesSvc.getById(id).subscribe({
      next: (p) => {
        this.place.set(p);
        this.hotelsSvc.list({ place_id: id, size: 20 }).subscribe({ next: (res) => this.hotels.set(res.items) });
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
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
}
