import { Component } from '@angular/core';
import { Moto } from '../model/moto.model';
import { MotoService } from '../services/moto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-moto',
  templateUrl: './add-moto.component.html',
  styles: [],
})
export class AddMotoComponent {
  newMoto = new Moto();
  message: String;
  constructor(private motoService: MotoService, private router: Router) {
    this.message = '';
  }

  addMoto() {
    // console.log(this.newMoto);
    this.motoService.ajouterMoto(this.newMoto);
    this.message = 'Moto ' + this.newMoto.marqueMoto + ' ajouter avec success';
    this.router.navigate(['motos']);
  }
}
