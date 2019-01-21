import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private username: string;

  constructor() {
    this.username = '';
  }

  public getUsername() {
    return this.username;
  }

  public setUsername(username: string) {
    this.username = username;
  }
}
