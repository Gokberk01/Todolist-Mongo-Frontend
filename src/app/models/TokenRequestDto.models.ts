export class TokenRequestDto {
  AccessToken: string;
  RefreshToken: string;

  constructor(AccessToken: string, RefreshToken: string) {
    this.AccessToken = AccessToken;
    this.RefreshToken = RefreshToken;
  }
}
