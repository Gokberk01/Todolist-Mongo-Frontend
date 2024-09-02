export class logoutDto {
    RefreshToken: string;
  
    constructor(RefreshToken: string) {
      this.RefreshToken = RefreshToken;
    }
  }