import { Component } from '@angular/core';
import { authServiceService } from '../services/auth-service.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  userName: string = '';
  userEmail: string = '';
  userPassword: string = '';

  constructor(
    private authService: authServiceService,
    private router: Router
  ) {}

  register() {
    const registerDto = {
      UserName: this.userName,
      UserEmail: this.userEmail,
      UserPassword: this.userPassword,
    };

    this.authService.register(registerDto).subscribe({
      next: (response) => {
        this.router.navigate(['login']);
      },
      error: (err) => {
        console.error('Registration failed', err);
        // Hata durumunda yapılacak işlemler buraya eklenebilir
      },
    });
  }
}
