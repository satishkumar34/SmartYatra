import { Component, OnInit, signal, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { HotelsService } from '../../../core/services/hotels.service';
import { PlacesService } from '../../../core/services/places.service';
import { Hotel, Place } from '../../../core/models';
import { StarRatingComponent } from '../../../shared/star-rating/star-rating.component';
import { PaginationComponent } from '../../../shared/pagination/pagination.component';
import { CardSkeletonComponent } from '../../../shared/card-skeleton/card-skeleton.component';

@Component({
  selector: 'app-hotels-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, StarRatingComponent, PaginationComponent, CardSkeletonComponent],
  templateUrl: './hotels-list.component.html',
  styleUrl: './hotels-list.component.scss',
})
export class HotelsListComponent implements OnInit, OnDestroy {
  hotels = signal<Hotel[]>([]);
  places = signal<Place[]>([]);
  loading = signal(true);
  totalPages = signal(1);
  currentPage = signal(1);

  searchQuery = '';
  selectedPlaceId: number | undefined;
  minPrice: number | undefined;
  maxPrice: number | undefined;
  minRating: number | undefined;

  private search$ = new Subject<string>();
  private destroy$ = new Subject<void>();

  constructor(
    private hotelsSvc: HotelsService,
    private placesSvc: PlacesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Support deep link from destination detail
    const placeId = this.route.snapshot.queryParamMap.get('place_id');
    if (placeId) this.selectedPlaceId = Number(placeId);

    this.placesSvc.list({ size: 100 }).subscribe({ next: (r) => this.places.set(r.items) });
    this.load();

    this.search$.pipe(
      debounceTime(350),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe(() => { this.currentPage.set(1); this.load(); });
  }

  ngOnDestroy(): void { this.destroy$.next(); this.destroy$.complete(); }

  load(): void {
    this.loading.set(true);
    this.hotelsSvc.list({
      page: this.currentPage(),
      size: 12,
      search: this.searchQuery || undefined,
      place_id: this.selectedPlaceId,
      min_price: this.minPrice,
      max_price: this.maxPrice,
      min_rating: this.minRating,
    }).subscribe({
      next: (res) => {
        this.hotels.set(res.items);
        this.totalPages.set(res.pages);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }

  onSearch(q: string): void { this.searchQuery = q; this.search$.next(q); }
  onFilter(): void { this.currentPage.set(1); this.load(); }
  onPage(p: number): void { this.currentPage.set(p); this.load(); window.scrollTo({ top: 0, behavior: 'smooth' }); }

  clearFilters(): void {
    this.searchQuery = '';
    this.selectedPlaceId = undefined;
    this.minPrice = undefined;
    this.maxPrice = undefined;
    this.minRating = undefined;
    this.currentPage.set(1);
    this.load();
  }

  get hasFilters(): boolean {
    return !!(this.searchQuery || this.selectedPlaceId || this.minPrice || this.maxPrice || this.minRating);
  }

  amenitiesList(amenities: string | null): string[] {
    if (!amenities) return [];
    try { return JSON.parse(amenities); } catch { return []; }
  }
}
