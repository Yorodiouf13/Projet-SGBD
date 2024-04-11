import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-acceuil-enseignant',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './acceuil-enseignant.component.html',
  styleUrl: './acceuil-enseignant.component.css'
})
export class AcceuilEnseignantComponent {

  valeur: any = {
    vers: ''
  };

  constructor(private router: Router) {}

  onValeur() {
    if(this.valeur.vers == "cours"){
      this.router.navigate(['cours'])
    } 
    else if(this.valeur.vers == "directives" ){
      this.router.navigate(['directives'])
    }
    else (this.valeur.vers == "td-tp" )
    {
      this.router.navigate(['td-tp'])
    }

  }

}
