import { Component, Input, Output, EventEmitter, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplacePipe } from '../../../shared/pipes/replace.pipe';
import { GeneratedTripPlan, DayPlan, WeatherAlert } from '../../../core/models/trip-planner';

@Component({
  selector: 'app-trip-result',
  standalone: true,
  imports: [CommonModule, ReplacePipe],
  template: `
    <div class="trip-result-container">
      <!-- Header -->
      <div class="result-header">
        <h1 class="result-title">✨ {{ tripPlan.title }}</h1>
        <p class="result-description">{{ tripPlan.description }}</p>
      </div>

      <!-- Confidence Score & Quick Stats -->
      <div class="quick-stats">
        <div class="stat-box confidence-box">
          <div class="stat-label">Trip Confidence</div>
          <div class="confidence-score">
            <svg class="score-circle" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="54" class="score-bg"></circle>
              <circle
                cx="60"
                cy="60"
                r="54"
                class="score-fill"
                [style.strokeDashoffset]="scoreOffset()"
              ></circle>
            </svg>
            <div class="score-text">{{ tripPlan.confidenceScore.overall }}%</div>
          </div>
        </div>

        <div class="stat-box">
          <div class="stat-label">📅 Duration</div>
          <div class="stat-value">{{ tripPlan.userInput.numberOfDays }} days</div>
        </div>

        <div class="stat-box">
          <div class="stat-label">👥 Travelers</div>
          <div class="stat-value">{{ tripPlan.userInput.numberOfTravelers }} people</div>
        </div>

        <div class="stat-box">
          <div class="stat-label">💰 Total Budget</div>
          <div class="stat-value">₹{{ (tripPlan.budgetEstimate.total | number: '1.0-0') }}</div>
        </div>
      </div>

      <!-- Weather Alerts -->
      @if (tripPlan.weatherAlerts.length > 0) {
        <div class="alerts-section">
          <h3 class="section-title">🌦️ Weather Alerts</h3>
          <div class="alerts-grid">
            @for (alert of tripPlan.weatherAlerts; track alert.type) {
              <div class="alert-card" [class]="'alert-' + alert.level">
                <div class="alert-header">
                  <span class="alert-type">{{ alert.type | replace: '_': ' ' | titlecase }}</span>
                  <span class="alert-level">{{ alert.level | uppercase }}</span>
                </div>
                <p class="alert-message">{{ alert.message }}</p>
                <p class="alert-recommendation">💡 {{ alert.recommendation }}</p>
              </div>
            }
          </div>
        </div>
      }

      <!-- Route Overview -->
      <div class="route-section">
        <h3 class="section-title">🗺️ Route Overview</h3>
        <div class="route-details">
          <div class="route-item">
            <div class="route-label">Distance:</div>
            <div class="route-value">{{ tripPlan.route.totalDistance }}</div>
          </div>
          <div class="route-item">
            <div class="route-label">Duration:</div>
            <div class="route-value">{{ tripPlan.route.totalDuration }}</div>
          </div>
          <div class="route-item">
            <div class="route-label">Transport Cost:</div>
            <div class="route-value">₹{{ (tripPlan.route.totalCost | number: '1.0-0') }}</div>
          </div>
        </div>

        <div class="route-advisory">
          <strong>Travel Advisory:</strong> {{ tripPlan.routeWeatherAnalysis.travelAdvisory }}
        </div>
      </div>

      <!-- Day-wise Itinerary -->
      <div class="itinerary-section">
        <h3 class="section-title">📋 Day-wise Itinerary</h3>
        <div class="itinerary-tabs">
          @for (day of tripPlan.dayPlans; track day.day) {
            <button
              class="tab-button"
              [class.active]="selectedDay() === day.day"
              (click)="selectDay(day.day)"
            >
              Day {{ day.day }}
            </button>
          }
        </div>

        @if (selectedDayPlan()) {
          <div class="day-plan-detail">
            <div class="day-header">
              <h4>{{ selectedDayPlan()!.theme }}</h4>
              <span class="day-date">{{ selectedDayPlan()!.date }}</span>
            </div>

            <!-- Weather for the day -->
            <div class="day-weather">
              <span class="weather-icon">{{ getWeatherIcon(selectedDayPlan()!.weatherForecast.condition) }}</span>
              <div class="weather-info">
                <div class="temp">{{ (selectedDayPlan()!.weatherForecast.temperature | number: '1.0-0') }}°C</div>
                <div class="condition">{{ selectedDayPlan()!.weatherForecast.condition }}</div>
              </div>
            </div>

            <!-- Activities -->
            <div class="activities">
              @for (activity of selectedDayPlan()!.activities; track activity.activity) {
                <div class="activity-card">
                  <div class="activity-time">{{ activity.time }}</div>
                  <div class="activity-details">
                    <h5>{{ activity.activity }}</h5>
                    <p class="activity-location">📍 {{ activity.location }}</p>
                    <p class="activity-duration">⏱️ {{ activity.duration }}</p>
                    @if (activity.cost) {
                      <p class="activity-cost">💰 ₹{{ (activity.cost | number: '1.0-0') }}</p>
                    }
                  </div>
                  <span class="weather-fit" [class]="activity.weatherSuitability">
                    {{ activity.weatherSuitability | titlecase }}
                  </span>
                </div>
              }
            </div>

            <!-- Meals -->
            <div class="meals">
              <h5>🍽️ Meals</h5>
              <div class="meals-grid">
                @if (selectedDayPlan()!.meals.breakfast) {
                  <div class="meal-item">
                    <span class="meal-type">Breakfast</span>
                    <span class="meal-name">{{ selectedDayPlan()!.meals.breakfast }}</span>
                  </div>
                }
                @if (selectedDayPlan()!.meals.lunch) {
                  <div class="meal-item">
                    <span class="meal-type">Lunch</span>
                    <span class="meal-name">{{ selectedDayPlan()!.meals.lunch }}</span>
                  </div>
                }
                @if (selectedDayPlan()!.meals.dinner) {
                  <div class="meal-item">
                    <span class="meal-type">Dinner</span>
                    <span class="meal-name">{{ selectedDayPlan()!.meals.dinner }}</span>
                  </div>
                }
              </div>
            </div>

            <!-- Photo Opportunities -->
            @if (selectedDayPlan()!.photoOpportunities.length > 0) {
              <div class="photo-ops">
                <h5>📸 Photo Opportunities</h5>
                @for (photo of selectedDayPlan()!.photoOpportunities; track photo.location) {
                  <div class="photo-card">
                    <div class="photo-score">{{ photo.photoScore }}/100</div>
                    <div class="photo-info">
                      <div class="photo-type">{{ photo.type | replace: '_': ' ' | titlecase }}</div>
                      <div class="photo-time">{{ photo.time }}</div>
                      <p class="photo-desc">{{ photo.description }}</p>
                    </div>
                  </div>
                }
              </div>
            }
          </div>
        }
      </div>

      <!-- Hotels -->
      <div class="hotels-section">
        <h3 class="section-title">🏨 Recommended Hotels</h3>
        <div class="hotels-grid">
          @for (hotel of tripPlan.hotels; track hotel.id) {
            <div class="hotel-card">
              <div class="hotel-header">
                <h4>{{ hotel.name }}</h4>
                <span class="hotel-rating">⭐ {{ hotel.rating }}</span>
              </div>
              <p class="hotel-address">📍 {{ hotel.address }}</p>
              <div class="hotel-info">
                <span>{{ hotel.distance }}</span>
                <span>₹{{ (hotel.pricePerNight | number: '1.0-0') }}/night</span>
              </div>
              <div class="hotel-amenities">
                @for (amenity of hotel.amenities; track amenity) {
                  <span class="amenity">{{ amenity }}</span>
                }
              </div>
              <div class="hotel-footer">
                <span class="total-cost">{{ hotel.numberOfDays || tripPlan.userInput.numberOfDays }} nights: ₹{{ (hotel.totalCost | number: '1.0-0') }}</span>
                <span class="suitability">{{ hotel.suitability }}% fit</span>
              </div>
            </div>
          }
        </div>
      </div>

      <!-- Budget Breakdown -->
      <div class="budget-section">
        <h3 class="section-title">💰 Budget Breakdown</h3>
        <div class="budget-breakdown">
          <div class="budget-item">
            <span class="budget-category">Accommodation</span>
            <div class="budget-bar">
              <div class="budget-fill" [style.width.%]="(tripPlan.budgetEstimate.accommodation / tripPlan.budgetEstimate.total * 100)"></div>
            </div>
            <span class="budget-amount">₹{{ (tripPlan.budgetEstimate.accommodation | number: '1.0-0') }}</span>
          </div>
          <div class="budget-item">
            <span class="budget-category">Activities</span>
            <div class="budget-bar">
              <div class="budget-fill" [style.width.%]="(tripPlan.budgetEstimate.activities / tripPlan.budgetEstimate.total * 100)"></div>
            </div>
            <span class="budget-amount">₹{{ (tripPlan.budgetEstimate.activities | number: '1.0-0') }}</span>
          </div>
          <div class="budget-item">
            <span class="budget-category">Transport</span>
            <div class="budget-bar">
              <div class="budget-fill" [style.width.%]="(tripPlan.budgetEstimate.transport / tripPlan.budgetEstimate.total * 100)"></div>
            </div>
            <span class="budget-amount">₹{{ (tripPlan.budgetEstimate.transport | number: '1.0-0') }}</span>
          </div>
          <div class="budget-item">
            <span class="budget-category">Meals</span>
            <div class="budget-bar">
              <div class="budget-fill" [style.width.%]="(tripPlan.budgetEstimate.meals / tripPlan.budgetEstimate.total * 100)"></div>
            </div>
            <span class="budget-amount">₹{{ (tripPlan.budgetEstimate.meals | number: '1.0-0') }}</span>
          </div>
        </div>
        <div class="budget-total">
          <span>Total Budget</span>
          <span class="total">₹{{ (tripPlan.budgetEstimate.total | number: '1.0-0') }}</span>
        </div>
      </div>

      <!-- Safety Tips & Packing List -->
      <div class="final-section">
        <div class="tips-column">
          <h3 class="section-title">🛡️ Safety Tips</h3>
          <ul class="tips-list">
            @for (tip of tripPlan.safetyTips; track tip) {
              <li>{{ tip }}</li>
            }
          </ul>
        </div>

        <div class="packing-column">
          <h3 class="section-title">🎒 Packing List</h3>
          <div class="packing-items">
            @for (item of tripPlan.packingList.slice(0, 8); track item) {
              <span class="packing-item">✓ {{ item }}</span>
            }
            @if (tripPlan.packingList.length > 8) {
              <span class="packing-more">+{{ tripPlan.packingList.length - 8 }} more items</span>
            }
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="action-buttons">
        <button class="btn btn-secondary" (click)="editClick()">
          ✏️ Edit Plan
        </button>
        <button class="btn btn-primary btn-lg" (click)="bookClick()">
          ✅ Confirm & Book Now
        </button>
      </div>
    </div>
  `,
  styles: [`
    @use '../../../../styles/variables' as v;
    @use '../../../../styles/mixins' as m;

    .trip-result-container {
      display: flex;
      flex-direction: column;
      gap: v.$space-6;
    }

    .result-header {
      text-align: center;
      margin-bottom: v.$space-4;
    }

    .result-title {
      font-size: v.$font-2xl;
      font-weight: v.$weight-bold;
      color: var(--text-primary);
      margin-bottom: v.$space-2;
    }

    .result-description {
      font-size: v.$font-base;
      color: var(--text-muted);
      line-height: 1.6;
    }

    .quick-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: v.$space-3;
      margin-bottom: v.$space-4;
    }

    .stat-box {
      background: linear-gradient(135deg, rgba(184, 147, 42, 0.08), rgba(184, 147, 42, 0.02));
      border: 1px solid rgba(184, 147, 42, 0.2);
      border-radius: v.$radius-lg;
      padding: v.$space-4;
      text-align: center;
      transition: all 0.3s ease;

      &:hover {
        border-color: rgba(184, 147, 42, 0.4);
        box-shadow: 0 4px 12px rgba(184, 147, 42, 0.1);
      }
    }

    .stat-label {
      font-size: v.$font-xs;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: v.$space-2;
    }

    .stat-value {
      font-size: v.$font-2xl;
      font-weight: v.$weight-bold;
      color: var(--gold-400);
    }

    .confidence-box {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 160px;
    }

    .confidence-score {
      position: relative;
      width: 100px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .score-circle {
      width: 100%;
      height: 100%;
      transform: rotate(-90deg);
    }

    .score-bg {
      fill: none;
      stroke: var(--bg-secondary);
      stroke-width: 4;
    }

    .score-fill {
      fill: none;
      stroke: url(#scoreGradient);
      stroke-width: 4;
      stroke-linecap: round;
      stroke-dasharray: 339.3;
      transition: stroke-dashoffset 0.6s ease;
    }

    .score-text {
      position: absolute;
      font-size: v.$font-2xl;
      font-weight: v.$weight-bold;
      color: var(--gold-400);
    }

    .section-title {
      font-size: v.$font-lg;
      font-weight: v.$weight-bold;
      color: var(--text-primary);
      margin-bottom: v.$space-4;
      padding-bottom: v.$space-2;
      border-bottom: 2px solid rgba(184, 147, 42, 0.2);
    }

    .alerts-section, .route-section, .itinerary-section, .hotels-section, .budget-section, .final-section {
      background: var(--bg-secondary);
      border-radius: v.$radius-lg;
      padding: v.$space-4;
    }

    .alerts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: v.$space-3;
    }

    .alert-card {
      padding: v.$space-3;
      border-radius: v.$radius-md;
      border-left: 4px solid;

      &.alert-info {
        background: rgba(41, 128, 185, 0.1);
        border-left-color: #2980b9;
      }

      &.alert-warning {
        background: rgba(241, 196, 15, 0.1);
        border-left-color: #f1c40f;
      }

      &.alert-danger {
        background: rgba(231, 76, 60, 0.1);
        border-left-color: #e74c3c;
      }
    }

    .alert-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: v.$space-2;
      font-weight: v.$weight-semibold;
    }

    .alert-level {
      font-size: v.$font-xs;
      padding: v.$space-1 v.$space-2;
      border-radius: v.$radius-sm;
      background: rgba(0, 0, 0, 0.1);
    }

    .alert-message {
      font-size: v.$font-sm;
      color: var(--text-primary);
      margin-bottom: v.$space-2;
    }

    .alert-recommendation {
      font-size: v.$font-xs;
      color: var(--text-muted);
    }

    .route-details {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: v.$space-3;
      margin-bottom: v.$space-4;
    }

    .route-item {
      display: flex;
      justify-content: space-between;
      padding: v.$space-3;
      background: var(--surface-card);
      border-radius: v.$radius-md;
      border: 1px solid var(--border-subtle);
    }

    .route-label {
      color: var(--text-muted);
      font-size: v.$font-sm;
    }

    .route-value {
      font-weight: v.$weight-semibold;
      color: var(--gold-400);
    }

    .route-advisory {
      padding: v.$space-3;
      background: rgba(184, 147, 42, 0.08);
      border-left: 3px solid var(--gold-400);
      border-radius: v.$radius-md;
      font-size: v.$font-sm;
      color: var(--text-primary);
    }

    .itinerary-tabs {
      display: flex;
      gap: v.$space-2;
      margin-bottom: v.$space-4;
      flex-wrap: wrap;
    }

    .tab-button {
      padding: v.$space-2 v.$space-4;
      background: transparent;
      border: 2px solid var(--border-subtle);
      border-radius: v.$radius-lg;
      cursor: pointer;
      transition: all 0.3s ease;
      font-size: v.$font-sm;
      font-weight: v.$weight-semibold;
      color: var(--text-muted);

      &.active {
        border-color: var(--gold-400);
        background: rgba(184, 147, 42, 0.15);
        color: var(--gold-400);
      }

      &:hover:not(.active) {
        border-color: var(--gold-400);
      }
    }

    .day-plan-detail {
      background: var(--surface-card);
      border-radius: v.$radius-lg;
      padding: v.$space-4;
      border: 1px solid var(--border-subtle);
    }

    .day-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: v.$space-4;
      padding-bottom: v.$space-3;
      border-bottom: 2px solid var(--border-subtle);

      h4 {
        font-size: v.$font-lg;
        color: var(--text-primary);
      }

      .day-date {
        font-size: v.$font-sm;
        color: var(--text-muted);
      }
    }

    .day-weather {
      display: flex;
      align-items: center;
      gap: v.$space-3;
      padding: v.$space-3;
      background: rgba(184, 147, 42, 0.08);
      border-radius: v.$radius-md;
      margin-bottom: v.$space-4;
    }

    .weather-icon {
      font-size: v.$font-2xl;
    }

    .weather-info {
      flex: 1;
    }

    .temp {
      font-size: v.$font-lg;
      font-weight: v.$weight-bold;
      color: var(--text-primary);
    }

    .condition {
      font-size: v.$font-sm;
      color: var(--text-muted);
    }

    .activities {
      display: flex;
      flex-direction: column;
      gap: v.$space-3;
      margin-bottom: v.$space-4;
    }

    .activity-card {
      display: flex;
      gap: v.$space-3;
      padding: v.$space-3;
      background: rgba(184, 147, 42, 0.04);
      border: 1px solid rgba(184, 147, 42, 0.1);
      border-radius: v.$radius-md;
      align-items: flex-start;
    }

    .activity-time {
      flex-shrink: 0;
      font-weight: v.$weight-semibold;
      color: var(--gold-400);
      min-width: 80px;
    }

    .activity-details {
      flex: 1;

      h5 {
        margin: 0 0 v.$space-1 0;
        color: var(--text-primary);
      }

      p {
        margin: 0;
        font-size: v.$font-sm;
        color: var(--text-muted);

        &:not(:last-child) {
          margin-bottom: v.$space-1;
        }
      }
    }

    .weather-fit {
      padding: v.$space-1 v.$space-2;
      border-radius: v.$radius-sm;
      font-size: v.$font-xs;
      font-weight: v.$weight-semibold;
      white-space: nowrap;

      &.excellent {
        background: rgba(46, 204, 113, 0.15);
        color: #27ae60;
      }

      &.good {
        background: rgba(52, 152, 219, 0.15);
        color: #2980b9;
      }

      &.fair {
        background: rgba(241, 196, 15, 0.15);
        color: #f39c12;
      }

      &.poor {
        background: rgba(231, 76, 60, 0.15);
        color: #e74c3c;
      }
    }

    .meals {
      margin-bottom: v.$space-4;

      h5 {
        margin: 0 0 v.$space-3 0;
        font-size: v.$font-base;
        color: var(--text-primary);
      }
    }

    .meals-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: v.$space-3;
    }

    .meal-item {
      padding: v.$space-3;
      background: rgba(184, 147, 42, 0.08);
      border-radius: v.$radius-md;
      border: 1px solid rgba(184, 147, 42, 0.15);
    }

    .meal-type {
      display: block;
      font-size: v.$font-xs;
      color: var(--text-muted);
      margin-bottom: v.$space-1;
    }

    .meal-name {
      display: block;
      font-weight: v.$weight-semibold;
      color: var(--text-primary);
    }

    .photo-ops {
      margin-top: v.$space-4;

      h5 {
        margin: 0 0 v.$space-3 0;
        font-size: v.$font-base;
        color: var(--text-primary);
      }
    }

    .photo-card {
      display: flex;
      gap: v.$space-3;
      padding: v.$space-3;
      background: rgba(184, 147, 42, 0.04);
      border: 1px solid rgba(184, 147, 42, 0.1);
      border-radius: v.$radius-md;
      margin-bottom: v.$space-2;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .photo-score {
      flex-shrink: 0;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, var(--gold-400), var(--gold-300));
      border-radius: v.$radius-md;
      color: white;
      font-weight: v.$weight-bold;
      font-size: v.$font-base;
    }

    .photo-info {
      flex: 1;

      .photo-type {
        font-weight: v.$weight-semibold;
        color: var(--text-primary);
      }

      .photo-time {
        font-size: v.$font-sm;
        color: var(--gold-400);
      }

      .photo-desc {
        margin: v.$space-1 0 0 0;
        font-size: v.$font-sm;
        color: var(--text-muted);
      }
    }

    .hotels-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: v.$space-4;
    }

    .hotel-card {
      background: var(--surface-card);
      border: 1px solid var(--border-subtle);
      border-radius: v.$radius-lg;
      padding: v.$space-4;
      transition: all 0.3s ease;

      &:hover {
        border-color: var(--gold-400);
        box-shadow: 0 4px 12px rgba(184, 147, 42, 0.2);
      }
    }

    .hotel-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: v.$space-2;

      h4 {
        margin: 0;
        color: var(--text-primary);
        font-size: v.$font-base;
      }

      .hotel-rating {
        color: var(--gold-400);
        font-weight: v.$weight-semibold;
      }
    }

    .hotel-address {
      margin: 0 0 v.$space-2 0;
      font-size: v.$font-sm;
      color: var(--text-muted);
    }

    .hotel-info {
      display: flex;
      justify-content: space-between;
      padding: v.$space-2 0;
      font-size: v.$font-sm;
      color: var(--text-primary);
      border-bottom: 1px solid var(--border-subtle);
      margin-bottom: v.$space-2;
    }

    .hotel-amenities {
      display: flex;
      flex-wrap: wrap;
      gap: v.$space-2;
      margin-bottom: v.$space-3;
    }

    .amenity {
      font-size: v.$font-xs;
      padding: v.$space-1 v.$space-2;
      background: rgba(184, 147, 42, 0.1);
      border-radius: v.$radius-sm;
      color: var(--text-primary);
    }

    .hotel-footer {
      display: flex;
      justify-content: space-between;
      font-size: v.$font-sm;
      font-weight: v.$weight-semibold;

      .total-cost {
        color: var(--gold-400);
      }

      .suitability {
        color: var(--text-muted);
      }
    }

    .budget-breakdown {
      display: flex;
      flex-direction: column;
      gap: v.$space-4;
      margin-bottom: v.$space-4;
    }

    .budget-item {
      display: grid;
      grid-template-columns: 100px 1fr 100px;
      gap: v.$space-3;
      align-items: center;
    }

    .budget-category {
      font-size: v.$font-sm;
      color: var(--text-muted);
    }

    .budget-bar {
      height: 8px;
      background: var(--bg-secondary);
      border-radius: 4px;
      overflow: hidden;
    }

    .budget-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--gold-400), var(--gold-300));
      border-radius: 4px;
      transition: width 0.4s ease;
    }

    .budget-amount {
      text-align: right;
      font-weight: v.$weight-semibold;
      color: var(--gold-400);
      font-size: v.$font-sm;
    }

    .budget-total {
      display: flex;
      justify-content: space-between;
      padding: v.$space-4;
      background: rgba(184, 147, 42, 0.15);
      border-radius: v.$radius-lg;
      border: 2px solid rgba(184, 147, 42, 0.3);
      font-size: v.$font-lg;
      font-weight: v.$weight-bold;

      .total {
        color: var(--gold-400);
      }
    }

    .final-section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: v.$space-6;

      @include m.respond-to(sm) {
        grid-template-columns: 1fr;
      }
    }

    .tips-column, .packing-column {
      flex: 1;
    }

    .tips-list {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        padding: v.$space-2 v.$space-3;
        border-left: 3px solid var(--gold-400);
        color: var(--text-primary);
        font-size: v.$font-sm;
        line-height: 1.6;

        &:not(:last-child) {
          border-bottom: 1px solid var(--border-subtle);
        }
      }
    }

    .packing-items {
      display: flex;
      flex-wrap: wrap;
      gap: v.$space-2;
    }

    .packing-item {
      padding: v.$space-2 v.$space-3;
      background: rgba(46, 204, 113, 0.15);
      border-radius: v.$radius-md;
      color: #27ae60;
      font-size: v.$font-sm;
    }

    .packing-more {
      padding: v.$space-2 v.$space-3;
      color: var(--text-muted);
      font-size: v.$font-xs;
      font-style: italic;
    }

    .action-buttons {
      display: flex;
      gap: v.$space-3;
      padding-top: v.$space-6;
      border-top: 1px solid var(--border-subtle);
      margin-top: v.$space-4;

      @include m.respond-to(sm) {
        flex-direction: column;
      }
    }

    .btn {
      padding: v.$space-3 v.$space-6;
      border: none;
      border-radius: v.$radius-lg;
      font-size: v.$font-base;
      font-weight: v.$weight-semibold;
      cursor: pointer;
      transition: all 0.3s ease;

      &:active {
        transform: scale(0.95);
      }
    }

    .btn-primary {
      background: linear-gradient(135deg, var(--gold-400), var(--gold-300));
      color: #1a1410;
      box-shadow: 0 4px 12px rgba(184, 147, 42, 0.3);

      &:hover {
        box-shadow: 0 6px 20px rgba(184, 147, 42, 0.4);
        transform: translateY(-2px);
      }
    }

    .btn-lg {
      flex: 1;
      padding: v.$space-4;
    }

    .btn-secondary {
      background: var(--bg-secondary);
      color: var(--text-primary);
      border: 1px solid var(--border-subtle);

      &:hover {
        background: var(--bg-hover);
        border-color: var(--border-default);
      }
    }
  `],
  host: {
    '[style.scrollBehavior]': '"smooth"',
  },
})
export class TripResultComponent {
  @Input() tripPlan!: GeneratedTripPlan;
  @Output() bookNow = new EventEmitter<void>();
  @Output() editPlan = new EventEmitter<void>();

  selectedDay = signal(1);
  selectedDayPlan = computed(() => {
    return this.tripPlan.dayPlans.find((d: DayPlan) => d.day === this.selectedDay());
  });

  scoreOffset = computed(() => {
    const score = this.tripPlan.confidenceScore.overall;
    const circumference = 339.3;
    return (100 - score) / 100 * circumference;
  });

  selectDay(day: number): void {
    this.selectedDay.set(day);
  }

  getWeatherIcon(condition: string): string {
    const icons: Record<string, string> = {
      'Clear Sky': '☀️',
      'Partly Cloudy': '⛅',
      'Cloudy': '☁️',
      'Rainy': '🌧️',
      'Stormy': '⛈️',
      'Snowy': '❄️',
    };
    return icons[condition] || '🌤️';
  }

  bookClick(): void {
    this.bookNow.emit();
  }

  editClick(): void {
    this.editPlan.emit();
  }
}
