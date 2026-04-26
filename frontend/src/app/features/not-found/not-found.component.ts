import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="not-found">
      <div class="nf-content">
        <div class="nf-code">404</div>
        <h1 class="nf-title">Page not found</h1>
        <p class="nf-sub">
          Looks like this destination doesn't exist on our map.
        </p>
        <div class="nf-actions">
          <a [routerLink]="auth.isLoggedIn() ? '/dashboard' : '/auth/login'"
             class="btn btn-primary btn-lg">
            {{ auth.isLoggedIn() ? 'Back to Dashboard' : 'Go to Login' }}
          </a>
          <a routerLink="/destinations" class="btn btn-secondary btn-lg">
            Browse Destinations
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .not-found {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--dark-950);
      padding: 2rem;
    }

    .nf-content {
      text-align: center;
      max-width: 480px;
    }

    .nf-code {
      font-size: 8rem;
      font-weight: 700;
      line-height: 1;
      background: linear-gradient(135deg, #b8932a, #c9a84c, #e0c070);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 1rem;
    }

    .nf-title {
      font-size: 1.875rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 1rem;
    }

    .nf-sub {
      color: var(--text-muted);
      font-size: 1rem;
      margin-bottom: 2.5rem;
      line-height: 1.7;
    }

    .nf-actions {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }
  `],
})
export class NotFoundComponent {
  constructor(public auth: AuthService) {}
}
