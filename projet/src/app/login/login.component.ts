import { Component } from '@angular/core';
import { User } from '../Model/user';
import { AuthService } from '../Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) { }


  user = new User();

  erreur: number= 0;
  err : number = 0;

  onLoggedin()
    {

      this.authService.login(this.user).subscribe({
        next: (response) => {
          const token = response.headers.get('Authorization');
          if (token) {
            this.authService.saveToken(token);
            this.router.navigate(['/departement']);
            console.log("slm");

          }
        },
        error: (error) => {
          console.error('Erreur de connexion :', error);  // Vérifiez le message d'erreur complet ici
          this.err = 1;
        }
      });
      
        
        
    }


    saveToken(token: string): void {
      localStorage.setItem('jwtToken', token);
    }
  
    getToken(): string | null {
      return localStorage.getItem('jwtToken');
    }

  }
