import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TokenServiceService {
    private token: string = '';
    private refreshToken: string = '';
  
    constructor() { }
  
    setJwtToken(token: string): void
    {
      this.token = token;
    }
  
    getJwtToken(): string
    {
      return this.token;
    }
  
    setRefreshToken(refreshToken: string): void
    {
      this.refreshToken = refreshToken;
    }
  
    getRefreshToken(): string
    {
      return this.refreshToken;
    }
  
    clearJwtToken(): void
    {
      this.token = '';
    }
  
    clearRefreshToken(): void
    {
      this.refreshToken = '';
    }
  
}
