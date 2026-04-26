import { Component, OnInit, signal, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs';
import { PlacesService } from '../../../core/services/places.service';
import { Place } from '../../../core/models';
import { StarRatingComponent } from '../../../shared/star-rating/star-rating.component';
import { PaginationComponent } from '../../../shared/pagination/pagination.component';
import { CardSkeletonComponent } from '../../../shared/card-skeleton/card-skeleton.component';

@Component({
  selector: 'app-destinations-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, StarRatingComponent, PaginationComponent, CardSkeletonComponent],
  templateUrl: './destinations-list.component.html',
  styleUrl: './destinations-list.component.scss',
})
export class DestinationsListComponent implements OnInit, OnDestroy {
  places = signal<Place[]>([]);
  loading = signal(true);
  totalPages = signal(1);
  currentPage = signal(1);

  searchQuery = '';
  selectedCountry = '';
  minRating: number | undefined;

  private search$ = new Subject<string>();
  private destroy$ = new Subject<void>();

  constructor(private placesSvc: PlacesService) {}

  ngOnInit(): void {
    this.load();
    this.search$.pipe(
      debounceTime(350),
      distinctUntilChanged(),
      takeUntil(this.destroy$),
    ).subscribe(() => { this.currentPage.set(1); this.load(); });
  }

  ngOnDestroy(): void { this.destroy$.next(); this.destroy$.complete(); }

  load(): void {
    this.loading.set(true);
    this.placesSvc.list({
      page: this.currentPage(),
      size: 12,
      search: this.searchQuery || undefined,
      country: this.selectedCountry || undefined,
      min_rating: this.minRating,
    }).subscribe({
      next: (res) => {
        this.places.set(res.items);
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
    this.selectedCountry = '';
    this.minRating = undefined;
    this.currentPage.set(1);
    this.load();
  }

  get hasFilters(): boolean {
    return !!(this.searchQuery || this.selectedCountry || this.minRating);
  }
}
