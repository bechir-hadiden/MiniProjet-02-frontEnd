import { Component } from '@angular/core';
import { AuthService } from './Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public authService: AuthService, private router: Router) { }

  title = 'projet';



    ngOnInit () {
      this.authService.loadToken();
      if (this.authService.getToken()==null ||
       this.authService.isTokenExpired())
      this.router.navigate(['/login']);
      }
      


  onLogout() {
    this.authService.logout();
  }


  

  
}
