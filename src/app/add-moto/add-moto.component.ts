import { Component, OnInit } from '@angular/core';
import { Moto } from '../model/moto.model';
import { MotoService } from '../services/moto.service';
import { Router } from '@angular/router';
import { MotoModel } from '../model/motomodel.model';

@Component({
  selector: 'app-add-moto',
  templateUrl: './add-moto.component.html',
  styles: [],
})
export class AddMotoComponent implements OnInit {
  newMoto = new Moto();
  message: String;
  motoModels!: MotoModel[];
  newIdModel!: number;
  newMotoModel!: MotoModel;
  constructor(private motoService: MotoService, private router: Router) {
    this.message = '';
  }
  ngOnInit(): void {
    this.motoModels = this.motoService.listeModel();
  }

  addMoto() {
    // console.log(this.newMoto);
    this.newMotoModel = this.motoService.consulterModel(this.newIdModel);
    this.newMoto.motoModel = this.newMotoModel;
    this.motoService.ajouterMoto(this.newMoto);
    this.message = 'Moto ' + this.newMoto.marqueMoto + ' ajouter avec success';
    this.router.navigate(['motos']);
  }
}
