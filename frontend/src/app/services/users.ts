import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth-service';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: '../components/pages/users/users.html'
})
export class UsersComponent {

  users: any[] = [];

  constructor(private auth: AuthService) {
    this.getUsers();
  }

  getUsers() {
    this.auth.getUsers().subscribe((res: any) => {
      this.users = res;
    });
  }
}
