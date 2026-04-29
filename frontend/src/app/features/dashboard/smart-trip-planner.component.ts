import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../core/services/modal.service';

@Component({
  selector: 'app-smart-trip-planner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="smart-planner-wrapper">
      <!-- Premium Hero Section -->
      <section class="planner-hero" [class.modal-active]="modalService.isOpen()">
        <div class="hero-gradient"></div>
        
        <div class="hero-content">
          <div class="hero-left">
            <div class="hero-icon-stack">
              <div class="icon-1">🗺️</div>
              <div class="icon-2">✈️</div>
              <div class="icon-3">🌍</div>
            </div>
          </div>

          <div class="hero-middle">
            <h1 class="hero-title">
              Plan Your Perfect Trip
              <span class="title-accent">✨</span>
            </h1>
            <p class="hero-subtitle">
              Let AI craft personalized itineraries, weather insights, and budget optimization just for you
            </p>

            <!-- Interactive Feature Pills -->
            <div class="feature-pills">
              <div class="pill" data-feature="itinerary">
                <span class="pill-icon">🗺️</span>
                <span class="pill-text">Smart Itinerary</span>
              </div>
              <div class="pill" data-feature="weather">
                <span class="pill-icon">🌦️</span>
                <span class="pill-text">Weather Insights</span>
              </div>
              <div class="pill" data-feature="budget">
                <span class="pill-icon">💰</span>
                <span class="pill-text">Budget Optimization</span>
              </div>
              <div class="pill" data-feature="photos">
                <span class="pill-icon">📸</span>
                <span class="pill-text">Photo Spots</span>
              </div>
            </div>
          </div>

          <div class="hero-right">
            <button 
              class="cta-button"
              (click)="openPlanner()"
              [disabled]="modalService.isOpen()"
            >
              <span class="cta-text">Start Planning</span>
              <span class="cta-arrow">→</span>
              <div class="button-glow"></div>
            </button>
          </div>
        </div>

        <!-- Decorative Orbs -->
        <div class="deco-orb orb-1"></div>
        <div class="deco-orb orb-2"></div>
        <div class="deco-orb orb-3"></div>
      </section>

    </div>
  `,
  styles: [`
    @use '../../../styles/variables' as v;
    @use '../../../styles/mixins' as m;

    .smart-planner-wrapper {
      position: fixed;
      inset: 0;
      z-index: 999998;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: v.$space-4;
      pointer-events: none;

      @include m.respond-to(lg) {
        padding: v.$space-3;
      }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .planner-hero {
      position: relative;
      overflow: hidden;
      border-radius: 2rem;
      padding: clamp(2rem, 6vw, 4rem);
      background: linear-gradient(135deg, #0f1419 0%, #1a1f2e 50%, #0f1419 100%);
      border: 1px solid rgba(184, 147, 42, 0.3);
      box-shadow:
        0 0 40px rgba(184, 147, 42, 0.15),
        inset 0 1px 0 rgba(255, 255, 255, 0.05);
      transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      pointer-events: auto;
      max-width: 1200px;
      width: 100%;

      &.modal-active {
        opacity: 0.7;
        pointer-events: none;
      }

      &:hover:not(.modal-active) {
        border-color: rgba(184, 147, 42, 0.5);
        box-shadow:
          0 0 60px rgba(184, 147, 42, 0.25),
          inset 0 1px 0 rgba(255, 255, 255, 0.08);
      }
    }

    .hero-gradient {
      position: absolute;
      inset: 0;
      background:
        radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.15), transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(184, 147, 42, 0.25), transparent 40%);
      pointer-events: none;
    }

    .hero-content {
      position: relative;
      z-index: 2;
      display: grid;
      grid-template-columns: 80px 1fr 200px;
      align-items: center;
      gap: clamp(1.5rem, 4vw, 3rem);

      @include m.respond-to(lg) {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      @include m.respond-to(md) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
        text-align: center;
      }
    }

    .hero-left {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .hero-icon-stack {
      position: relative;
      width: 80px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;

      div {
        position: absolute;
        font-size: 2rem;
        animation: float 3s ease-in-out infinite;
      }

      .icon-1 {
        animation-delay: 0s;
      }

      .icon-2 {
        animation-delay: 0.3s;
        opacity: 0.85;
      }

      .icon-3 {
        animation-delay: 0.6s;
        opacity: 0.7;
      }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-12px) scale(1.05); }
    }

    @keyframes bounce {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }

    .hero-middle {
      display: flex;
      flex-direction: column;
      gap: v.$space-3;
      color: white;
    }

    .hero-title {
      font-size: clamp(v.$font-xl, 4vw, v.$font-2xl);
      font-weight: v.$weight-bold;
      margin: 0;
      text-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
      letter-spacing: -0.5px;
      background: linear-gradient(135deg, #ffffff 0%, rgba(184, 147, 42, 0.9) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;

      .title-accent {
        display: inline-block;
        margin-left: 0.5rem;
        animation: bounce 2s ease-in-out infinite;
      }
    }

    .hero-subtitle {
      font-size: clamp(v.$font-sm, 2vw, v.$font-base);
      color: rgba(255, 255, 255, 0.85);
      margin: 0;
      line-height: 1.6;
      text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
      max-width: 90%;
    }

    .hero-right {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      @include m.respond-to(md) {
        justify-content: center;
      }
    }

    .cta-button {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      padding: 1rem 2rem;
      background: linear-gradient(135deg, #b8932a 0%, #d4af77 100%);
      color: #0f1419;
      font-weight: v.$weight-bold;
      font-size: v.$font-base;
      border: none;
      border-radius: 0.75rem;
      cursor: pointer;
      transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      box-shadow:
        0 8px 24px rgba(184, 147, 42, 0.35),
        inset 0 1px 0 rgba(255, 255, 255, 0.4);
      overflow: hidden;
      z-index: 5;

      &:hover:not(:disabled) {
        transform: translateY(-4px);
        box-shadow:
          0 16px 40px rgba(184, 147, 42, 0.5),
          inset 0 1px 0 rgba(255, 255, 255, 0.6);

        .button-glow {
          opacity: 1;
        }

        .cta-arrow {
          transform: translateX(6px);
        }
      }

      &:active:not(:disabled) {
        transform: translateY(-2px);
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }

    .cta-text {
      position: relative;
      z-index: 2;
    }

    .cta-arrow {
      position: relative;
      z-index: 2;
      transition: transform 0.3s ease;
    }

    .button-glow {
      position: absolute;
      inset: 0;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent 70%);
      opacity: 0;
      transition: opacity 0.3s ease;
      border-radius: 0.75rem;
    }

    .feature-pills {
      display: flex;
      flex-wrap: wrap;
      gap: v.$space-2;
      margin-top: v.$space-2;

      @include m.respond-to(md) {
        justify-content: center;
      }
    }

    .pill {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      background: rgba(184, 147, 42, 0.15);
      border: 1px solid rgba(184, 147, 42, 0.3);
      border-radius: 2rem;
      color: rgba(255, 255, 255, 0.9);
      font-size: v.$font-xs;
      font-weight: v.$weight-medium;
      transition: all 0.3s ease;

      &:hover {
        background: rgba(184, 147, 42, 0.25);
        border-color: rgba(184, 147, 42, 0.5);
        transform: translateY(-2px);
      }
    }

    .pill-icon {
      font-size: 1rem;
    }

    .deco-orb {
      position: absolute;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(184, 147, 42, 0.15), transparent 70%);
      pointer-events: none;

      &.orb-1 {
        top: -20%;
        right: -10%;
        width: 300px;
        height: 300px;
        animation: float 6s ease-in-out infinite;
      }

      &.orb-2 {
        bottom: -15%;
        left: -5%;
        width: 250px;
        height: 250px;
        animation: float 7s ease-in-out infinite reverse;
      }

      &.orb-3 {
        top: 50%;
        left: 10%;
        width: 150px;
        height: 150px;
        opacity: 0.5;
        animation: float 8s ease-in-out infinite;
      }
    }
  `],
})
export class SmartTripPlannerComponent {
  readonly modalService = inject(ModalService);

  openPlanner(): void {
    this.modalService.openModal('trip-planner');
  }
}
