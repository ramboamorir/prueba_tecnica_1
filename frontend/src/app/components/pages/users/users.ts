import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../../../services/auth-service';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.html'
})
export class UsersComponent {

  users: any[] = [];

  constructor(private auth: AuthService) {
    this.getUsers();
  }

  getUsers() {
    this.auth.getUsers().subscribe((res: any) => {
      this.users = res.data;
      // this.cdr.detectChanges();
    });
  }
}
