export class registerDto {
    UserName: string;
    UserEmail: string;
    UserPassword: string;
  
    constructor(UserName: string, UserEmail: string ,UserPassword: string) {
      this.UserName = UserName;
      this.UserEmail = UserEmail;
      this.UserPassword = UserPassword;
    }
  }