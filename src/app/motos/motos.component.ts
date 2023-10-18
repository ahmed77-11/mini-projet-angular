import { Component, OnInit } from '@angular/core';
import { Moto } from '../model/moto.model';
import { MotoService } from '../services/moto.service';

@Component({
  selector: 'app-motos',
  templateUrl: './motos.component.html',
  styles: [],
})
export class MotosComponent implements OnInit {
  motos?: Moto[];
  constructor(private motoService: MotoService) {
    this.motos = [];
  }
  ngOnInit(): void {
    this.motos = this.motoService.listeMotos();
  }

  supprimerMoto(m: Moto) {
    let conf = confirm('Etes-vous sûr ?');
    if (conf) this.motoService.supprimerMoto(m);
  }
}
