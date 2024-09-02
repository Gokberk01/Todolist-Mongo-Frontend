export class loginDto {
  UserEmail: string;
  UserPassword: string;

  constructor(UserEmail: string, UserPassword: string) {
    this.UserEmail = UserEmail;
    this.UserPassword = UserPassword;
  }
}
