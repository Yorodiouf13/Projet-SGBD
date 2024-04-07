import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-authentification',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './authentification.component.html',
  styleUrl: './authentification.component.css'
})


export class AuthentificationComponent {
  autobj: any = {
    Email: '',
    motdepasse: '' 
  };

  constructor(private router: Router) {}

  onautobj() {
    if(this.autobj.Email == "responsableclasse@esp.sn" && this.autobj.motdepasse == "123456"){
      this.router.navigate(['page-acceuil'])
    } 
    else if(this.autobj.Email == "enseignant@esp.sn" && this.autobj.motdepasse == "123456"){
      this.router.navigate(['enseignant/acceuil-enseignant'])
    }
      else {
      alert('mot de passe ou Email incorrecte')
      }

  }
}


