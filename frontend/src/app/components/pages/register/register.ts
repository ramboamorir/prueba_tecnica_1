import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth-service';

@Component({
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html'
})
export class RegisterComponent {

  form = {
    name: '',
    lastname: '',
    email: '',
    password: ''
  };

  constructor(private auth: AuthService) {}

  register() {
    this.auth.register(this.form).subscribe({
      next: () => alert('Usuario creado'),
      error: () => alert('Error')
    });
  }
}
