import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { registerDto } from '../models/registerDto.models';
import { User } from '../models/user.models';
import { loginDto } from '../models/loginDto.models';
import { TokenServiceService } from './token-service.service';
import { TokenRequestDto } from '../models/TokenRequestDto.models';
import { logoutDto } from '../models/logoutDto.models';

@Injectable({
  providedIn: 'root',
})
export class authServiceService {
  //private apiUrl = 'http://localhost:5136/api/auth'; //FOR POSTGRESQL
  private apiUrl = 'http://localhost:5173/api/auth'; //FOR MONGODB
  //BU ALTTAKİ SİLİNECEK
  private loggedIn = new BehaviorSubject<boolean>(false);
  private Database = new BehaviorSubject<boolean>(true);

  //http://localhost:5136/api/auth/refresh-token
  constructor(
    private http: HttpClient,
    private tokenService: TokenServiceService
  ) {
    //BU ALTTAKİ SİLİNECEK
    this.loggedIn.next(!!this.tokenService.getJwtToken());
  }

  register(registerDto: registerDto): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/register`, registerDto);
  }

  login(loginDto: loginDto): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, loginDto);
  }

  logout(logoutDto: logoutDto): Observable<any> {
    const token = this.tokenService.getJwtToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<any>(`${this.apiUrl}/logout`, logoutDto, { headers });
  }

  refreshToken(Token: TokenRequestDto): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/refresh-token`, Token);
  }

  //BU ALTTAKİ SİLİNECEK
  setLoggedIn(status: boolean): void {
    this.loggedIn.next(status);
  }

  //BU ALTTAKİ SİLİNECEK
  get isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
}
