import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth-service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html'
})
export class LoginComponent {

  form = { email: '', password: '' };

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.form).subscribe({
      next: (res: any) => {
        this.auth.saveToken(res.token);
        this.router.navigate(['/users']);
      },
      error: () => alert('Error login')
    });
  }
}
