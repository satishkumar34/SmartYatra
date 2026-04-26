import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../core/services/toast.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  form: FormGroup;
  saving = signal(false);
  currentUser = this.auth.currentUser;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private http: HttpClient,
    private toast: ToastService,
  ) {
    this.form = this.fb.group({
      full_name: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  ngOnInit(): void {
    const user = this.currentUser();
    if (user) this.form.patchValue({ full_name: user.full_name });
  }

  get f() { return this.form.controls; }

  get avatarInitials(): string {
    const name = this.currentUser()?.full_name ?? '';
    return name.split(' ').map((n) => n[0]).slice(0, 2).join('').toUpperCase();
  }

  save(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid || this.saving()) return;
    this.saving.set(true);

    this.http.patch(`${environment.apiBaseUrl}/users/me/profile`, this.form.value).subscribe({
      next: () => {
        this.auth.fetchCurrentUser().subscribe();
        this.toast.success('Profile updated successfully.');
        this.saving.set(false);
      },
      error: () => {
        this.toast.error('Failed to update profile.');
        this.saving.set(false);
      },
    });
  }
}
