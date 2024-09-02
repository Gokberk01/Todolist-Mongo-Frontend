export class User {
  UserId: string;
  UserName: string;
  UserEmail: string;
  UserPassword: string;

  constructor(
    UserId: string,
    UserName: string,
    UserEmail: string,
    UserPassword: string
  ) {
    this.UserId = UserId;
    this.UserName = UserName;
    this.UserEmail = UserEmail;
    this.UserPassword = UserPassword;
  }
}
