import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-acceuil',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './page-acceuil.component.html',
  styleUrl: './page-acceuil.component.css'
})

export class PageAcceuilComponent {

  value: any = {
    vers: ''
  };

  constructor(private router: Router) {}

  onValue() {
    if(this.value.vers == "avis"){
      this.router.navigate(['avis'])
    } 
    else if(this.value.vers == "notes" ){
      this.router.navigate(['notes'])
    }
    else (this.value.vers == "mess-rp" )
    {
      this.router.navigate(['mess-rp'])
    }

  }


 
}

