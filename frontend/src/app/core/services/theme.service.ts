import { DOCUMENT } from '@angular/common';
import { Injectable, computed, inject, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

const STORAGE_KEY = 'st_theme';
const FALLBACK_THEME: ThemeMode = 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly currentTheme = signal<ThemeMode>(FALLBACK_THEME);

  readonly theme = this.currentTheme.asReadonly();
  readonly isDark = computed(() => this.currentTheme() === 'dark');

  initialize(): void {
    this.applyResolvedTheme(this.resolveInitialTheme());
  }

  toggleTheme(): void {
    this.setTheme(this.isDark() ? 'light' : 'dark');
  }

  setTheme(theme: ThemeMode): void {
    this.applyResolvedTheme(theme);

    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, theme);
    }
  }

  private resolveInitialTheme(): ThemeMode {
    if (typeof window === 'undefined') {
      return FALLBACK_THEME;
    }

    const storedTheme = window.localStorage.getItem(STORAGE_KEY);
    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  private applyResolvedTheme(theme: ThemeMode): void {
    this.currentTheme.set(theme);

    const root = this.document.documentElement;
    root.setAttribute('data-theme', theme);
    root.style.colorScheme = theme;

    const metaTheme = this.document.querySelector('meta[name="theme-color"]');
    metaTheme?.setAttribute('content', theme === 'dark' ? '#10101a' : '#fcf9f1');
  }
}
