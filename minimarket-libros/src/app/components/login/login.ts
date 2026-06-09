import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  usuario = '';
  password = '';

  constructor(private router: Router) {}

  ingresar() {
    if (this.usuario === 'admin' && this.password === '1234') {
      this.router.navigate(['/admin']);
    } else if (this.usuario === 'empleado' && this.password === '1234') {
      this.router.navigate(['/empleado']);
    } else if (this.usuario === 'cliente' && this.password === '1234') {
      this.router.navigate(['/libros']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}
