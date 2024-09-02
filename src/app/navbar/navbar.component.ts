import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { TokenServiceService } from '../services/token-service.service';
import { CommonModule } from '@angular/common';
import { authServiceService } from '../services/auth-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginComponent,
    RegisterComponent,
    RouterLink,
    CommonModule,
    FormsModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit{

  isLoggedIn: boolean = false;
  constructor(
    private authService: authServiceService,
  ) {}


  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe((status) => {
      this.isLoggedIn = status;
    });
  }

  
}

//classın içi komple silinecek OnInit olmiycak, COMMONMODULE silinecek
