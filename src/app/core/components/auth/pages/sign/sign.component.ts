import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-sign',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './sign.component.html',
  styleUrl: './sign.component.scss',
})
export class SignComponent {
  public formAuth: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  public msgError!: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  public submitForm() {
    if (this.formAuth.valid) {
      this.authService
        .sign({
          email: this.formAuth.value.email,
          password: this.formAuth.value.password,
        })
        .subscribe({
          next: (res) => res,
          error: (e) => (this.msgError = e),
        });
    }
  }
}
