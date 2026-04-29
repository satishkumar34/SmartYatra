import { Component, OnInit, signal, computed, HostListener, Injector, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { TripPlannerService } from '../../../core/services/trip-planner.service';
import { ModalService } from '../../../core/services/modal.service';
import { TripResultComponent } from '../trip-result/trip-result.component';
import { PlannerStep, TripPlannerInput } from '../../../core/models/trip-planner';

@Component({
  selector: 'app-trip-planner-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TripResultComponent],
  template: `
    <div class="modal-backdrop" (click)="onBackdropClick($event)" [@fadeInOut]>
      <div class="modal-container" (click)="$event.stopPropagation()" [@modalPopIn]>
        <!-- Close Button -->
        <button class="modal-close-btn" (click)="closeModal()" aria-label="Close modal" title="Close (ESC)">
          <span class="close-icon">✕</span>
        </button>

        <!-- Main Content -->
        <div class="modal-content">
          @if (planner.generatedPlan() === null) {
            <!-- Form Steps -->
            <div class="wizard-section">
              <!-- Step Indicator Section -->
              <div class="step-indicator-section">
                <!-- Progress Bar -->
                <div class="progress-track">
                  <div class="progress-fill" [style.width.%]="planner.progress()" [@progressFill]></div>
                </div>

                <!-- Step Dots -->
                <div class="step-dots-container">
                  @for (step of planner.steps(); track step.id) {
                    <button
                      class="step-dot"
                      [class.active]="step.id - 1 === planner.currentStep()"
                      [class.completed]="step.id - 1 < planner.currentStep()"
                      (click)="goToStep(step.id - 1)"
                      [disabled]="step.id - 1 > planner.currentStep()"
                      [title]="'Step ' + step.id + ': ' + step.title"
                      [@stepDotPulse]="step.id - 1 === planner.currentStep()"
                    >
                      @if (step.id - 1 < planner.currentStep()) {
                        <span class="checkmark">✓</span>
                      } @else {
                        <span class="step-number">{{ step.id }}</span>
                      }
                    </button>
                  }
                </div>

                <!-- Step Info -->
                <div class="step-info">
                  <span class="step-label">Step {{ planner.currentStep() + 1 }} of {{ planner.totalSteps() }}</span>
                  <span class="step-title-preview">{{ currentStep?.title }}</span>
                </div>
              </div>

              <!-- Form Header -->
              <div class="form-header" [@slideDown]>
                <h2 class="step-title">
                  <span class="step-icon">{{ currentStep?.icon }}</span>
                  {{ currentStep?.title }}
                </h2>
                <p class="step-subtitle">{{ currentStep?.description }}</p>
              </div>

              <!-- Form Content - Spacious & Centered -->
              <div class="form-content-wrapper">
                <div class="form-body" [@stepContentSlide]>
                  <!-- City Selection Step -->
                  @if (currentStep && isCityStep()) {
                    <div class="city-selector">
                      <div class="search-box">
                        <input
                          type="text"
                          class="city-search"
                          placeholder="🔍 Search cities..."
                          [(ngModel)]="citySearchQuery"
                          (ngModelChange)="filterCities($event)"
                          aria-label="Search for cities"
                        />
                      </div>
                      <div class="city-grid">
                        @for (option of filteredCityOptions(); track option.value) {
                          <button
                            class="city-card"
                            [class.selected]="planner.formData()[currentStep.fieldName] === option.value"
                            (click)="selectOption(currentStep.fieldName, option.value)"
                            [@cardHover]
                          >
                            <span class="city-emoji">{{ getCityEmoji(option.value) }}</span>
                            <span class="city-name">{{ option.label }}</span>
                            @if (planner.formData()[currentStep.fieldName] === option.value) {
                              <span class="city-checkmark">✓</span>
                            }
                          </button>
                        }
                      </div>
                    </div>
                  }

                  <!-- Duration Step (Slider or Stepper) -->
                  @if (currentStep && currentStep.fieldName === 'numberOfDays') {
                    <div class="duration-selector">
                      <div class="slider-container">
                        <input
                          type="range"
                          class="duration-slider"
                          min="1"
                          max="14"
                          [(ngModel)]="formValues['numberOfDays']"
                          (ngModelChange)="updateFormData('numberOfDays', $event)"
                          aria-label="Select trip duration in days"
                        />
                      </div>
                      <div class="duration-display">
                        <span class="duration-value">{{ formValues['numberOfDays'] || 1 }}</span>
                        <span class="duration-label">days</span>
                      </div>
                      <div class="duration-stepper">
                        <button class="stepper-btn" (click)="decrementDuration()" [disabled]="(formValues['numberOfDays'] || 1) <= 1">−</button>
                        <span class="stepper-value">{{ formValues['numberOfDays'] || 1 }}</span>
                        <button class="stepper-btn" (click)="incrementDuration()" [disabled]="(formValues['numberOfDays'] || 1) >= 14">+</button>
                      </div>
                    </div>
                  }

                  <!-- Budget Step -->
                  @if (currentStep && currentStep.fieldName === 'budget') {
                    <div class="budget-selector">
                      @for (option of currentStep.options; track option.value) {
                        <button
                          class="budget-card"
                          [class.selected]="planner.formData()[currentStep.fieldName] === option.value"
                          (click)="selectOption(currentStep.fieldName, option.value)"
                          [@budgetCardScale]
                        >
                          <span class="budget-icon">{{ getBudgetIcon(option.value) }}</span>
                          <span class="budget-label">{{ option.label }}</span>
                          <span class="budget-range">{{ getBudgetRange(option.value) }}</span>
                          @if (planner.formData()[currentStep.fieldName] === option.value) {
                            <span class="budget-selected-badge">Selected</span>
                          }
                        </button>
                      }
                    </div>
                  }

                  <!-- Travel Type Step -->
                  @if (currentStep && currentStep.fieldName === 'travelType') {
                    <div class="travel-type-selector">
                      @for (option of currentStep.options; track option.value) {
                        <button
                          class="travel-type-card"
                          [class.selected]="planner.formData()[currentStep.fieldName] === option.value"
                          (click)="selectOption(currentStep.fieldName, option.value)"
                          [@travelTypeScale]
                        >
                          <span class="travel-emoji">{{ getTravelTypeEmoji(option.value) }}</span>
                          <span class="travel-label">{{ option.label }}</span>
                          @if (planner.formData()[currentStep.fieldName] === option.value) {
                            <div class="selection-ring"></div>
                          }
                        </button>
                      }
                    </div>
                  }

                  <!-- Interests Step (Toggle Chips) -->
                  @if (currentStep && currentStep.fieldName === 'interests') {
                    <div class="interests-selector">
                      <div class="interest-chips">
                        @for (option of currentStep.options; track option.value) {
                          <button
                            class="interest-chip"
                            [class.selected]="isInterestSelected(option.value)"
                            (click)="toggleInterest(option.value)"
                            [@chipFlip]
                          >
                            <span class="chip-emoji">{{ getInterestEmoji(option.value) }}</span>
                            <span class="chip-label">{{ option.label }}</span>
                            @if (isInterestSelected(option.value)) {
                              <span class="chip-check">✓</span>
                            }
                          </button>
                        }
                      </div>
                    </div>
                  }

                  <!-- Best Season Step -->
                  @if (currentStep && isSeasonStep()) {
                    <div class="season-selector">
                      @for (option of currentStep.options; track option.value) {
                        <button
                          class="season-button"
                          [class.selected]="planner.formData()[currentStep.fieldName] === option.value"
                          (click)="selectOption(currentStep.fieldName, option.value)"
                        >
                          <span class="season-emoji">{{ getSeasonEmoji(option.value) }}</span>
                          <span class="season-name">{{ option.label }}</span>
                        </button>
                      }
                    </div>
                  }

                  <!-- Travel Speed Step -->
                  @if (currentStep && isSpeedStep()) {
                    <div class="travel-speed-selector">
                      @for (option of currentStep.options; track option.value) {
                        <label class="speed-radio">
                          <input
                            type="radio"
                            name="travelSpeed"
                            [value]="option.value"
                            [(ngModel)]="formValues['travelSpeed']"
                            (ngModelChange)="updateFormData('travelSpeed', $event)"
                          />
                          <span class="speed-label">{{ option.label }}</span>
                        </label>
                      }
                    </div>
                  }

                  <!-- Preferences/Budget Step (Multi-select) -->
                  @if (currentStep && currentStep.type === 'multiselect') {
                    <div class="preferences-selector">
                      <div class="preference-pills">
                        @for (option of currentStep.options; track option.value) {
                          <button
                            class="preference-pill"
                            [class.selected]="isInterestSelected(option.value)"
                            (click)="toggleInterest(option.value)"
                          >
                            <span class="pill-icon">{{ getPreferenceIcon(option.value) }}</span>
                            <span class="pill-text">{{ option.label }}</span>
                            @if (isInterestSelected(option.value)) {
                              <span class="pill-check">✓</span>
                            }
                          </button>
                        }
                      </div>
                    </div>
                  }

                  <!-- Generic Text/Number Input Fallback -->
                  @if (currentStep && currentStep.type === 'text' && !isCityStep()) {
                    <div class="generic-input-group">
                      <input
                        type="text"
                        class="form-input"
                        [placeholder]="currentStep.placeholder"
                        [(ngModel)]="formValues[currentStep.fieldName]"
                        (ngModelChange)="updateFormData(currentStep.fieldName, $event)"
                        aria-label="Text input"
                      />
                    </div>
                  }

                  @if (currentStep && currentStep.type === 'number' && currentStep.fieldName !== 'numberOfDays') {
                    <div class="generic-input-group">
                      <input
                        type="number"
                        class="form-input"
                        [placeholder]="currentStep.placeholder"
                        [(ngModel)]="formValues[currentStep.fieldName]"
                        (ngModelChange)="updateFormData(currentStep.fieldName, $event)"
                        [min]="1"
                        [max]="365"
                        aria-label="Number input"
                      />
                    </div>
                  }

                  <!-- Hint Section -->
                  @if (currentStep && currentStep.hint) {
                    <div class="hint-box">
                      <span class="hint-icon">💡</span>
                      <span class="hint-text">{{ currentStep.hint }}</span>
                    </div>
                  }
                </div>
              </div>

              <!-- Sticky Bottom Navigation -->
              <div class="form-navigation">
                <button
                  class="nav-btn nav-prev"
                  (click)="previousStep()"
                  [disabled]="planner.currentStep() === 0"
                  title="Go to previous step"
                >
                  <span class="nav-arrow">←</span>
                  <span class="nav-text">Previous</span>
                </button>

                <div class="nav-center">
                  <span class="step-indicator">Step {{ planner.currentStep() + 1 }}/{{ planner.totalSteps() }}</span>
                </div>

                <button
                  class="nav-btn nav-next"
                  (click)="nextOrGenerate()"
                  [disabled]="!isCurrentStepValid()"
                  title="Continue to next step"
                  [class.loading]="planner.isLoading()"
                >
                  @if (planner.currentStep() === planner.totalSteps() - 1) {
                    @if (planner.isLoading()) {
                      <span class="loading-spinner"></span>
                      <span class="nav-text">Generating Plan...</span>
                    } @else {
                      <span class="nav-icon">✨</span>
                      <span class="nav-text">Generate Plan</span>
                    }
                  } @else {
                    <span class="nav-text">Next</span>
                    <span class="nav-arrow">→</span>
                  }
                </button>
              </div>
            </div>
          } @else {
            <!-- Result Display -->
            <div class="result-container" [@resultFadeIn]>
              <app-trip-result
                [tripPlan]="planner.generatedPlan()!"
                (bookNow)="confirmBooking()"
                (editPlan)="editPlan()"
              />
            </div>
          }
        </div>
      </div>
    </div>
  `,
  animations: [
    // Backdrop fade
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0 })),
      ]),
    ]),
    // Modal pop-in animation
    trigger('modalPopIn', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'scale(0.9) translateY(20px)',
        }),
        animate('400ms cubic-bezier(0.34, 1.56, 0.64, 1)', style({
          opacity: 1,
          transform: 'scale(1) translateY(0)',
        })),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({
          opacity: 0,
          transform: 'scale(0.95) translateY(10px)',
        })),
      ]),
    ]),
    // Progress bar fill
    trigger('progressFill', [
      transition(':increment', [
        animate('500ms cubic-bezier(0.4, 0, 0.2, 1)'),
      ]),
    ]),
    // Step dot pulse
    trigger('stepDotPulse', [
      transition('false => true', [
        animate('500ms ease-out', style({ boxShadow: '0 0 20px rgba(184, 147, 42, 0.5)' })),
      ]),
    ]),
    // Slide down header
    trigger('slideDown', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('300ms 100ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    // Step content slide
    trigger('stepContentSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(20px)' }),
        animate('400ms 150ms cubic-bezier(0.34, 1.56, 0.64, 1)', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
    // Card hover scale
    trigger('cardHover', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
    ]),
    // Budget card scale
    trigger('budgetCardScale', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.9)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
    ]),
    // Travel type scale
    trigger('travelTypeScale', [
      transition(':enter', [
        style({ opacity: 0, transform: 'rotateY(-10deg) scale(0.95)' }),
        animate('400ms cubic-bezier(0.34, 1.56, 0.64, 1)', style({ opacity: 1, transform: 'rotateY(0) scale(1)' })),
      ]),
    ]),
    // Chip flip
    trigger('chipFlip', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8) rotateZ(-10deg)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1) rotateZ(0)' })),
      ]),
    ]),
    // Result fade in
    trigger('resultFadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
  styles: [`
    @use '../../../../styles/variables' as v;
    @use '../../../../styles/mixins' as m;

    /* ==================== MODAL BACKDROP & CONTAINER ==================== */
    /* 
       CRITICAL FIX FOR Z-INDEX ISSUES:
       
       The backdrop creates a fixed overlay that covers the ENTIRE viewport.
       This is the SECRET to preventing overlaps:
       - position: fixed → fixed to viewport, not page
       - inset: 0 → covers entire screen (top:0, left:0, right:0, bottom:0)
       - pointer-events: auto → blocks clicks to background
       - z-index: 999999 → VERY high, but less than container
       
       The container sits ON TOP of the backdrop:
       - position: fixed (or relative to parent)
       - z-index: 1000000 → HIGHEST on page
       - pointer-events: auto → allows clicks inside
       - pointer-events: auto on children → ensures buttons work
    */

    .modal-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      inset: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.65);
      backdrop-filter: blur(8px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 999999;
      padding: v.$space-4;
      animation: backdropFade 0.3s ease-out;
      pointer-events: auto;

      @media (max-width: 640px) {
        align-items: flex-end;
        padding: 0;
      }
    }

    @keyframes backdropFade {
      from {
        opacity: 0;
        backdrop-filter: blur(0px);
      }
      to {
        opacity: 1;
        backdrop-filter: blur(8px);
      }
    }

    .modal-container {
      position: relative;
      z-index: 1000000;
      width: 100%;
      max-width: 800px;
      max-height: 90vh;
      background: linear-gradient(
        135deg,
        rgba(26, 20, 16, 0.95) 0%,
        rgba(40, 30, 24, 0.98) 100%
      );
      border: 1px solid rgba(184, 147, 42, 0.2);
      border-radius: 24px;
      box-shadow:
        0 25px 60px rgba(0, 0, 0, 0.4),
        0 0 1px rgba(184, 147, 42, 0.5),
        inset 0 1px 0 rgba(255, 255, 255, 0.05);
      overflow-y: auto;
      overflow-x: hidden;
      scrollbar-width: thin;
      scrollbar-color: rgba(184, 147, 42, 0.3) transparent;
      display: flex;
      flex-direction: column;
      pointer-events: auto;

      @media (max-width: 640px) {
        max-height: 100vh;
        border-radius: 24px 24px 0 0;
        max-width: 100%;
      }

      &::-webkit-scrollbar {
        width: 6px;
      }

      &::-webkit-scrollbar-track {
        background: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background: rgba(184, 147, 42, 0.3);
        border-radius: 3px;
        transition: background 0.3s;

        &:hover {
          background: rgba(184, 147, 42, 0.5);
        }
      }
    }

    /* ==================== CLOSE BUTTON ==================== */

    .modal-close-btn {
      position: absolute;
      top: 24px;
      right: 24px;
      width: 48px;
      height: 48px;
      border: none;
      background: rgba(184, 147, 42, 0.1);
      border: 1px solid rgba(184, 147, 42, 0.2);
      border-radius: 50%;
      cursor: pointer;
      color: var(--text-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      z-index: 10;
      font-size: 24px;
      pointer-events: auto;

      &:hover {
        background: rgba(184, 147, 42, 0.2);
        border-color: rgba(184, 147, 42, 0.4);
        transform: scale(1.15) rotate(90deg);
        box-shadow: 0 0 20px rgba(184, 147, 42, 0.3);
      }

      &:active {
        transform: scale(1.05) rotate(90deg);
      }

      @media (max-width: 640px) {
        top: 16px;
        right: 16px;
        width: 40px;
        height: 40px;
        font-size: 20px;
      }
    }

    /* 
       CRITICAL FIX: Ensure ALL interactive elements inside modal are clickable
       Even if a parent has different display or position, these rules force
       pointer-events: auto on all inputs and buttons
    */
    .modal-container button,
    .modal-container input[type="text"],
    .modal-container input[type="number"],
    .modal-container input[type="range"],
    .modal-container input[type="radio"],
    .modal-container label,
    .modal-container .city-card,
    .modal-container .budget-card,
    .modal-container .travel-type-card,
    .modal-container .interest-chip,
    .modal-container .step-dot,
    .modal-container .season-button {
      pointer-events: auto !important;
    }

    /* ==================== MODAL CONTENT ==================== */

    .modal-content {
      padding: clamp(2rem, 5vw, 3.5rem);
      flex: 1;
      overflow-y: auto;
      pointer-events: auto;

      @media (max-width: 640px) {
        padding: 1.5rem;
      }
    }

    /* ==================== WIZARD SECTION ==================== */

    .wizard-section {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    /* ==================== STEP INDICATOR ==================== */

    .step-indicator-section {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      padding-bottom: 1rem;
    }

    .progress-track {
      position: relative;
      width: 100%;
      height: 6px;
      background: rgba(184, 147, 42, 0.1);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .progress-fill {
      height: 100%;
      background: linear-gradient(
        90deg,
        #b8932a 0%,
        #d4af37 50%,
        #b8932a 100%
      );
      border-radius: 10px;
      box-shadow:
        0 0 10px rgba(184, 147, 42, 0.4),
        inset 0 1px 2px rgba(255, 255, 255, 0.3);
      transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .step-dots-container {
      display: flex;
      gap: 12px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .step-dot {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      border: 2px solid rgba(184, 147, 42, 0.3);
      background: rgba(26, 20, 16, 0.8);
      color: var(--text-muted);
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      &:hover:not(:disabled) {
        border-color: rgba(184, 147, 42, 0.6);
        background: rgba(184, 147, 42, 0.05);
        transform: translateY(-2px);
      }

      &.active {
        border-color: #b8932a;
        background: rgba(184, 147, 42, 0.15);
        color: #d4af37;
        box-shadow:
          0 0 20px rgba(184, 147, 42, 0.4),
          inset 0 0 10px rgba(184, 147, 42, 0.1);
        transform: scale(1.1);

        .step-number {
          animation: dotPulse 0.6s ease-out;
        }
      }

      &.completed {
        border-color: #4ade80;
        background: linear-gradient(135deg, #4ade80, #22c55e);
        color: white;
        box-shadow: 0 0 15px rgba(74, 222, 128, 0.3);

        .checkmark {
          animation: checkmarkScale 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      }

      &:disabled:not(.active):not(.completed) {
        cursor: not-allowed;
        opacity: 0.6;
      }
    }

    @keyframes dotPulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.2); }
      100% { transform: scale(1.1); }
    }

    @keyframes checkmarkScale {
      0% { transform: scale(0); }
      50% { transform: scale(1.2); }
      100% { transform: scale(1); }
    }

    .step-number,
    .checkmark {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .step-info {
      display: flex;
      justify-content: center;
      gap: 8px;
      font-size: 13px;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .step-label {
      color: rgba(184, 147, 42, 0.7);
      font-weight: 600;
    }

    .step-title-preview {
      color: var(--text-primary);
      font-weight: 600;
    }

    /* ==================== FORM HEADER ==================== */

    .form-header {
      text-align: center;
      padding: 1rem 0;
      border-bottom: 1px solid rgba(184, 147, 42, 0.1);
    }

    .step-title {
      font-size: clamp(1.75rem, 4vw, 2.25rem);
      font-weight: 700;
      color: var(--text-primary);
      margin: 0 0 0.5rem 0;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
    }

    .step-icon {
      font-size: 1.3em;
      display: inline-flex;
    }

    .step-subtitle {
      font-size: 15px;
      color: var(--text-muted);
      margin: 0;
      line-height: 1.5;
    }

    /* ==================== FORM CONTENT ==================== */

    .form-content-wrapper {
      min-height: 200px;
      display: flex;
      align-items: stretch;
    }

    .form-body {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      padding: 1.5rem 0;
    }

    /* ==================== CITY SELECTOR ==================== */

    .city-selector {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .search-box {
      position: relative;
    }

    .city-search {
      width: 100%;
      padding: 14px 18px 14px 44px;
      background: rgba(184, 147, 42, 0.05);
      border: 2px solid rgba(184, 147, 42, 0.2);
      border-radius: 16px;
      font-size: 15px;
      color: var(--text-primary);
      transition: all 0.3s ease;

      &:focus {
        outline: none;
        border-color: rgba(184, 147, 42, 0.6);
        background: rgba(184, 147, 42, 0.1);
        box-shadow: 0 0 20px rgba(184, 147, 42, 0.2);
      }

      &::placeholder {
        color: var(--text-muted);
      }
    }

    .city-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      gap: 12px;

      @media (max-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .city-card {
      position: relative;
      padding: 20px 16px;
      background: rgba(40, 30, 24, 0.8);
      border: 2px solid rgba(184, 147, 42, 0.2);
      border-radius: 16px;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      text-align: center;
      pointer-events: auto;

      &:hover {
        border-color: rgba(184, 147, 42, 0.5);
        background: rgba(184, 147, 42, 0.08);
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(184, 147, 42, 0.2);
      }

      &.selected {
        border-color: #b8932a;
        background: rgba(184, 147, 42, 0.15);
        box-shadow: 0 0 20px rgba(184, 147, 42, 0.3);

        .city-checkmark {
          opacity: 1;
          transform: scale(1);
        }
      }
    }

    .city-emoji {
      font-size: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .city-name {
      font-size: 14px;
      font-weight: 600;
      color: var(--text-primary);
    }

    .city-checkmark {
      position: absolute;
      top: 8px;
      right: 8px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: #4ade80;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      opacity: 0;
      transform: scale(0);
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    /* ==================== DURATION SELECTOR ==================== */

    .duration-selector {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      align-items: center;
      padding: 2rem;
    }

    .slider-container {
      width: 100%;
      max-width: 400px;
    }

    .duration-slider {
      width: 100%;
      height: 8px;
      border-radius: 10px;
      background: rgba(184, 147, 42, 0.1);
      outline: none;
      -webkit-appearance: none;
      appearance: none;

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: linear-gradient(135deg, #b8932a, #d4af37);
        cursor: pointer;
        border: 2px solid #1a1410;
        box-shadow: 0 0 15px rgba(184, 147, 42, 0.4);
        transition: all 0.3s ease;

        &:hover {
          transform: scale(1.2);
          box-shadow: 0 0 25px rgba(184, 147, 42, 0.6);
        }

        &:active {
          transform: scale(1.15);
        }
      }

      &::-moz-range-thumb {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: linear-gradient(135deg, #b8932a, #d4af37);
        cursor: pointer;
        border: 2px solid #1a1410;
        box-shadow: 0 0 15px rgba(184, 147, 42, 0.4);
        transition: all 0.3s ease;

        &:hover {
          transform: scale(1.2);
          box-shadow: 0 0 25px rgba(184, 147, 42, 0.6);
        }
      }

      &::-webkit-slider-runnable-track {
        background: linear-gradient(
          90deg,
          rgba(184, 147, 42, 0.3) 0%,
          rgba(184, 147, 42, 0.1) 100%
        );
        height: 8px;
        border-radius: 10px;
      }

      &::-moz-range-track {
        background: transparent;
        border: none;
      }

      &::-moz-range-progress {
        background: linear-gradient(90deg, #b8932a, #d4af37);
        height: 8px;
        border-radius: 10px;
      }
    }

    .duration-display {
      display: flex;
      align-items: baseline;
      gap: 8px;
      font-size: 48px;
      font-weight: 700;
      color: #d4af37;
      text-shadow: 0 0 20px rgba(184, 147, 42, 0.3);
    }

    .duration-value {
      font-size: 60px;
    }

    .duration-label {
      font-size: 18px;
      color: var(--text-muted);
    }

    .duration-stepper {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      background: rgba(184, 147, 42, 0.08);
      border: 1px solid rgba(184, 147, 42, 0.2);
      border-radius: 12px;
      padding: 1rem 2rem;
    }

    .stepper-btn {
      width: 44px;
      height: 44px;
      border: none;
      border-radius: 50%;
      background: rgba(184, 147, 42, 0.2);
      color: #d4af37;
      font-size: 20px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover:not(:disabled) {
        background: rgba(184, 147, 42, 0.4);
        transform: scale(1.15);
        box-shadow: 0 0 15px rgba(184, 147, 42, 0.3);
      }

      &:disabled {
        opacity: 0.3;
        cursor: not-allowed;
      }
    }

    .stepper-value {
      font-size: 20px;
      font-weight: 700;
      color: #d4af37;
      min-width: 40px;
      text-align: center;
    }

    /* ==================== BUDGET SELECTOR ==================== */

    .budget-selector {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      gap: 1.5rem;
      padding: 1rem 0;
    }

    .budget-card {
      position: relative;
      padding: 24px 20px;
      background: rgba(40, 30, 24, 0.8);
      border: 2px solid rgba(184, 147, 42, 0.2);
      border-radius: 16px;
      cursor: pointer;
      transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      text-align: center;
      min-height: 180px;
      justify-content: center;

      &:hover {
        border-color: rgba(184, 147, 42, 0.5);
        background: rgba(184, 147, 42, 0.08);
        transform: translateY(-6px);
        box-shadow: 0 12px 32px rgba(184, 147, 42, 0.25);
      }

      &.selected {
        border-color: #b8932a;
        background: linear-gradient(135deg, rgba(184, 147, 42, 0.15), rgba(184, 147, 42, 0.08));
        box-shadow: 0 0 30px rgba(184, 147, 42, 0.3);
        transform: scale(1.05);
      }
    }

    .budget-icon {
      font-size: 36px;
      display: flex;
    }

    .budget-label {
      font-size: 16px;
      font-weight: 700;
      color: var(--text-primary);
    }

    .budget-range {
      font-size: 12px;
      color: var(--text-muted);
    }

    .budget-selected-badge {
      position: absolute;
      top: 8px;
      right: 8px;
      background: #4ade80;
      color: white;
      padding: 4px 10px;
      border-radius: 20px;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
    }

    /* ==================== TRAVEL TYPE SELECTOR ==================== */

    .travel-type-selector {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1.5rem;
      padding: 1rem 0;
    }

    .travel-type-card {
      position: relative;
      padding: 28px 20px;
      background: rgba(40, 30, 24, 0.8);
      border: 2px solid rgba(184, 147, 42, 0.2);
      border-radius: 16px;
      cursor: pointer;
      transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      text-align: center;
      min-height: 160px;
      justify-content: center;

      &:hover {
        border-color: rgba(184, 147, 42, 0.5);
        background: rgba(184, 147, 42, 0.08);
        transform: translateY(-6px) rotateZ(-2deg);
        box-shadow: 0 12px 32px rgba(184, 147, 42, 0.25);
      }

      &.selected {
        border-color: #b8932a;
        background: linear-gradient(135deg, rgba(184, 147, 42, 0.2), rgba(184, 147, 42, 0.1));
        box-shadow: 0 0 30px rgba(184, 147, 42, 0.4);
      }
    }

    .travel-emoji {
      font-size: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.3s ease;

      .travel-type-card:hover & {
        transform: scale(1.2);
      }
    }

    .travel-label {
      font-size: 15px;
      font-weight: 700;
      color: var(--text-primary);
    }

    .selection-ring {
      position: absolute;
      inset: -4px;
      border: 2px solid #b8932a;
      border-radius: 16px;
      animation: ringPulse 1.5s ease-in-out infinite;
    }

    @keyframes ringPulse {
      0%, 100% {
        box-shadow: 0 0 0 0 rgba(184, 147, 42, 0.4);
      }
      50% {
        box-shadow: 0 0 0 8px rgba(184, 147, 42, 0);
      }
    }

    /* ==================== INTERESTS SELECTOR ==================== */

    .interests-selector {
      padding: 1rem 0;
    }

    .interest-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      justify-content: center;
    }

    .interest-chip {
      position: relative;
      padding: 10px 18px;
      background: rgba(184, 147, 42, 0.1);
      border: 2px solid rgba(184, 147, 42, 0.2);
      border-radius: 24px;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      color: var(--text-primary);
      font-weight: 600;

      &:hover {
        border-color: rgba(184, 147, 42, 0.5);
        background: rgba(184, 147, 42, 0.15);
        transform: translateY(-2px) scale(1.05);
      }

      &.selected {
        border-color: #b8932a;
        background: linear-gradient(135deg, rgba(184, 147, 42, 0.25), rgba(184, 147, 42, 0.15));
        box-shadow: 0 0 15px rgba(184, 147, 42, 0.3);
        color: #d4af37;
      }
    }

    .chip-emoji {
      font-size: 16px;
    }

    .chip-label {
      flex: 1;
    }

    .chip-check {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 18px;
      height: 18px;
      background: #4ade80;
      color: white;
      border-radius: 50%;
      font-size: 12px;
      font-weight: bold;
      animation: checkScale 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    @keyframes checkScale {
      0% { transform: scale(0); }
      50% { transform: scale(1.3); }
      100% { transform: scale(1); }
    }

    /* ==================== SEASON SELECTOR ==================== */

    .season-selector {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 1.5rem;
      padding: 1rem 0;
    }

    .season-button {
      padding: 20px 16px;
      background: rgba(40, 30, 24, 0.8);
      border: 2px solid rgba(184, 147, 42, 0.2);
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      text-align: center;

      &:hover {
        border-color: rgba(184, 147, 42, 0.5);
        background: rgba(184, 147, 42, 0.08);
        transform: translateY(-3px);
      }

      &.selected {
        border-color: #b8932a;
        background: rgba(184, 147, 42, 0.15);
        box-shadow: 0 0 20px rgba(184, 147, 42, 0.3);
      }
    }

    .season-emoji {
      font-size: 28px;
    }

    .season-name {
      font-size: 14px;
      font-weight: 600;
      color: var(--text-primary);
    }

    /* ==================== TRAVEL SPEED SELECTOR ==================== */

    .travel-speed-selector {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      padding: 1rem 0;
    }

    .speed-radio {
      display: flex;
      align-items: center;
      padding: 14px 18px;
      background: rgba(40, 30, 24, 0.6);
      border: 2px solid rgba(184, 147, 42, 0.2);
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.3s ease;

      input[type='radio'] {
        width: 20px;
        height: 20px;
        cursor: pointer;
        accent-color: #b8932a;
        margin-right: 12px;
      }

      .speed-label {
        flex: 1;
        font-size: 15px;
        color: var(--text-primary);
        font-weight: 500;
      }

      &:hover {
        border-color: rgba(184, 147, 42, 0.4);
        background: rgba(184, 147, 42, 0.08);
      }
    }

    /* ==================== PREFERENCES SELECTOR ==================== */

    .preferences-selector {
      padding: 1rem 0;
    }

    .preference-pills {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: center;
    }

    .preference-pill {
      padding: 8px 16px;
      background: rgba(184, 147, 42, 0.08);
      border: 1px solid rgba(184, 147, 42, 0.2);
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      color: var(--text-primary);
      font-weight: 600;

      &:hover {
        border-color: rgba(184, 147, 42, 0.4);
        background: rgba(184, 147, 42, 0.12);
        transform: translateY(-1px);
      }

      &.selected {
        border-color: #b8932a;
        background: rgba(184, 147, 42, 0.2);
        color: #d4af37;
      }
    }

    .pill-icon {
      font-size: 14px;
    }

    .pill-text {
      flex: 1;
    }

    .pill-check {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
      background: #4ade80;
      color: white;
      border-radius: 50%;
      font-size: 10px;
      font-weight: bold;
    }

    /* ==================== GENERIC INPUT ==================== */

    .generic-input-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .form-input {
      padding: 14px 16px;
      background: rgba(184, 147, 42, 0.05);
      border: 2px solid rgba(184, 147, 42, 0.2);
      border-radius: 10px;
      font-size: 15px;
      color: var(--text-primary);
      transition: all 0.3s ease;

      &:focus {
        outline: none;
        border-color: rgba(184, 147, 42, 0.6);
        background: rgba(184, 147, 42, 0.1);
        box-shadow: 0 0 20px rgba(184, 147, 42, 0.2);
      }

      &::placeholder {
        color: var(--text-muted);
      }
    }

    /* ==================== HINT BOX ==================== */

    .hint-box {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 14px 16px;
      background: rgba(184, 147, 42, 0.08);
      border-left: 3px solid rgba(184, 147, 42, 0.4);
      border-radius: 8px;
      font-size: 13px;
      color: var(--text-primary);
      line-height: 1.5;
    }

    .hint-icon {
      flex-shrink: 0;
      font-size: 16px;
    }

    .hint-text {
      flex: 1;
    }

    /* ==================== FORM NAVIGATION ==================== */

    .form-navigation {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding-top: 2rem;
      border-top: 1px solid rgba(184, 147, 42, 0.1);
      margin-top: 1rem;

      @media (max-width: 640px) {
        flex-wrap: wrap;
        gap: 0.75rem;
      }
    }

    .nav-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 12px 20px;
      border: none;
      border-radius: 10px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      text-transform: uppercase;
      letter-spacing: 0.5px;

      &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }

      &:not(:disabled):active {
        transform: scale(0.95);
      }
    }

    .nav-prev {
      background: rgba(184, 147, 42, 0.1);
      border: 1px solid rgba(184, 147, 42, 0.2);
      color: var(--text-primary);
      flex: 1;

      &:not(:disabled):hover {
        background: rgba(184, 147, 42, 0.2);
        border-color: rgba(184, 147, 42, 0.4);
        transform: translateX(-2px);
      }
    }

    .nav-next {
      background: linear-gradient(135deg, #b8932a, #d4af37);
      color: #1a1410;
      flex: 1;
      box-shadow: 0 4px 15px rgba(184, 147, 42, 0.3);

      &:not(:disabled):hover {
        box-shadow: 0 6px 25px rgba(184, 147, 42, 0.5);
        transform: translateY(-2px);
      }

      &.loading {
        position: relative;
      }
    }

    .nav-arrow {
      font-size: 16px;
      transition: transform 0.3s ease;

      .nav-prev:hover & {
        transform: translateX(-3px);
      }

      .nav-next:hover & {
        transform: translateX(3px);
      }
    }

    .nav-icon {
      font-size: 16px;
    }

    .nav-text {
      flex: 1;
    }

    .nav-center {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 80px;
    }

    .step-indicator {
      font-size: 13px;
      color: var(--text-muted);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    /* ==================== LOADING SPINNER ==================== */

    .loading-spinner {
      display: inline-flex;
      width: 16px;
      height: 16px;
      border: 2px solid rgba(26, 20, 16, 0.2);
      border-top-color: #1a1410;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    /* ==================== RESULT CONTAINER ==================== */

    .result-container {
      width: 100%;
    }

    /* ==================== RESPONSIVE ==================== */

    @media (max-width: 768px) {
      .step-dots-container {
        gap: 8px;
      }

      .step-dot {
        width: 40px;
        height: 40px;
        font-size: 12px;
      }

      .form-header {
        padding: 0.75rem 0;
      }

      .step-title {
        font-size: 1.5rem;
      }

      .step-subtitle {
        font-size: 14px;
      }

      .city-grid {
        grid-template-columns: repeat(3, 1fr);
      }

      .budget-selector {
        grid-template-columns: repeat(2, 1fr);
      }

      .travel-type-selector {
        grid-template-columns: repeat(2, 1fr);
      }

      .form-navigation {
        padding-top: 1.5rem;
      }
    }

    @media (max-width: 640px) {
      .modal-container {
        border-radius: 20px 20px 0 0;
      }

      .step-dots-container {
        gap: 6px;
      }

      .step-dot {
        width: 36px;
        height: 36px;
        font-size: 11px;
      }

      .form-body {
        gap: 1rem;
        padding: 1rem 0;
      }

      .city-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .budget-selector,
      .travel-type-selector,
      .season-selector {
        grid-template-columns: 1fr;
      }

      .duration-display {
        font-size: 36px;
      }

      .duration-value {
        font-size: 48px;
      }

      .nav-btn {
        padding: 10px 16px;
        font-size: 12px;
      }
    }
  `],
})
export class TripPlannerModalComponent implements OnInit {
  private readonly modalService = inject(ModalService);

  currentStep: PlannerStep | null = null;
  formValues: Record<string, any> = {};
  citySearchQuery: string = '';
  private injector: Injector | null = null;

  // Computed filtered cities based on search
  filteredCityOptions = computed(() => {
    const step = this.planner.steps()[this.planner.currentStep()];
    if (!step || !step.options) return [];

    if (this.citySearchQuery.trim() === '') {
      return step.options;
    }

    const query = this.citySearchQuery.toLowerCase();
    return step.options.filter(option =>
      option.label.toLowerCase().includes(query)
    );
  });

  constructor(public planner: TripPlannerService, injector: Injector) {
    this.injector = injector;
  }

  ngOnInit(): void {
    // ✅ CRITICAL FIX: Track BOTH currentStep AND formData changes
    // This ensures currentStep property updates when service changes
    effect(() => {
      // Dependency 1: When service's currentStep signal changes
      const stepIndex = this.planner.currentStep();
      this.updateCurrentStep();
      
      // Dependency 2: When form data changes
      const formData = this.planner.formData();
      this.formValues = { ...formData } as Record<string, any>;
    }, { injector: this.injector as Injector });
  }

  @HostListener('document:keydown.escape')
  handleEscapeKey(): void {
    this.closeModal();
  }

  updateCurrentStep(): void {
    const step = this.planner.steps()[this.planner.currentStep()];
    this.currentStep = step || null;
  }

  goToStep(stepIndex: number): void {
    this.planner.goToStep(stepIndex);
    this.updateCurrentStep();
  }

  previousStep(): void {
    this.planner.previousStep();
    this.updateCurrentStep();
  }

  nextOrGenerate(): void {
    if (this.planner.currentStep() === this.planner.totalSteps() - 1) {
      // Generate plan
      const input = this.planner.formData() as TripPlannerInput;
      const mockPlan = this.planner.generateMockTripPlan(input);
      this.planner['_generatedPlan'].set(mockPlan);
    } else {
      this.planner.nextStep();
      this.updateCurrentStep();
    }
  }

  selectOption(field: string, value: any): void {
    this.formValues[field] = value;
    this.planner.updateFormData(field as any, value);
  }

  updateFormData(field: string, value: any): void {
    this.formValues[field] = value;
    this.planner.updateFormData(field as any, value);
  }

  toggleInterest(interest: string): void {
    const current = (this.planner.formData().interests || []) as string[];
    const updated = current.includes(interest)
      ? current.filter(i => i !== interest)
      : [...current, interest];
    this.formValues['interests'] = updated;
    this.planner.updateFormData('interests' as any, updated);
  }

  isInterestSelected(interest: string): boolean {
    const interests = (this.planner.formData().interests || []) as string[];
    return interests.includes(interest);
  }

  isCurrentStepValid(): boolean {
    const fieldName = this.currentStep?.fieldName;
    if (!fieldName) return false;
    const value = this.planner.formData()[fieldName];
    return value !== undefined && value !== null && value !== '' && value !== 0 && (Array.isArray(value) ? value.length > 0 : true);
  }

  // ==================== NEW HELPER METHODS ====================

  isCityStep(): boolean {
    const fieldName = this.currentStep?.fieldName?.toString().toLowerCase() || '';
    return fieldName.includes('startinglocation') || fieldName.includes('destination');
  }

  isSeasonStep(): boolean {
    return this.currentStep?.fieldName?.toString().includes('season') || false;
  }

  isSpeedStep(): boolean {
    return this.currentStep?.fieldName?.toString().includes('speed') || false;
  }

  filterCities(query: string): void {
    this.citySearchQuery = query;
  }

  getCityEmoji(cityValue: string): string {
    const emojiMap: Record<string, string> = {
      paris: '🗼',
      london: '🇬🇧',
      tokyo: '🗾',
      dubai: '🌴',
      'new-york': '🗽',
      singapore: '🦁',
      bangkok: '🛕',
      rome: '🏛️',
      barcelona: '⛱️',
      amsterdam: '🚲',
      bali: '🏝️',
      sydney: '🦘',
      la: '🌞',
      miami: '🏖️',
      mexico: '🌮',
    };
    return emojiMap[cityValue.toLowerCase()] || '🌍';
  }

  getBudgetIcon(budgetValue: string): string {
    const iconMap: Record<string, string> = {
      low: '💰',
      medium: '💳',
      luxury: '💎',
    };
    return iconMap[budgetValue.toLowerCase()] || '💰';
  }

  getBudgetRange(budgetValue: string): string {
    const rangeMap: Record<string, string> = {
      low: '$500 - $2,000',
      medium: '$2,000 - $5,000',
      luxury: '$5,000+',
    };
    return rangeMap[budgetValue.toLowerCase()] || '';
  }

  getTravelTypeEmoji(typeValue: string): string {
    const emojiMap: Record<string, string> = {
      solo: '🚴',
      couple: '💑',
      family: '👨‍👩‍👧‍👦',
      friends: '👯',
    };
    return emojiMap[typeValue.toLowerCase()] || '✈️';
  }

  getInterestEmoji(interestValue: string): string {
    const emojiMap: Record<string, string> = {
      adventure: '🎿',
      beach: '🏖️',
      culture: '🏛️',
      food: '🍽️',
      nightlife: '🌃',
      nature: '🌲',
      shopping: '🛍️',
      wellness: '🧘',
      art: '🎨',
      history: '📚',
      sports: '⚽',
      photography: '📷',
    };
    return emojiMap[interestValue.toLowerCase()] || '⭐';
  }

  getSeasonEmoji(seasonValue: string): string {
    const emojiMap: Record<string, string> = {
      spring: '🌸',
      summer: '☀️',
      autumn: '🍂',
      winter: '❄️',
    };
    return emojiMap[seasonValue.toLowerCase()] || '🌍';
  }

  getPreferenceIcon(preferenceValue: string): string {
    const iconMap: Record<string, string> = {
      'free-wifi': '📶',
      'pet-friendly': '🐕',
      'vegetarian': '🥗',
      'wheelchair-accessible': '♿',
      'late-checkout': '🛌',
      'parking': '🅿️',
      'gym': '💪',
      'pool': '🏊',
    };
    return iconMap[preferenceValue.toLowerCase()] || '✓';
  }

  incrementDuration(): void {
    const current = this.formValues['numberOfDays'] || 1;
    if (current < 14) {
      this.updateFormData('numberOfDays', current + 1);
    }
  }

  decrementDuration(): void {
    const current = this.formValues['numberOfDays'] || 1;
    if (current > 1) {
      this.updateFormData('numberOfDays', current - 1);
    }
  }

  confirmBooking(): void {
    console.log('Booking confirmed:', this.planner.generatedPlan());
    this.closeModal();
  }

  editPlan(): void {
    this.planner['_generatedPlan'].set(null);
  }

  closeModal(): void {
    this.planner.resetForm();
    this.modalService.closeModal();
  }

  onBackdropClick(event: MouseEvent): void {
    // Only close if clicking directly on the backdrop, not on the modal container
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }
}
