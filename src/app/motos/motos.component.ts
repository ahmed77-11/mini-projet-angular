import { Component, OnInit } from '@angular/core';
import { Moto } from '../model/moto.model';
import { MotoService } from '../services/moto.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-motos',
  templateUrl: './motos.component.html',
  styles: [],
})
export class MotosComponent implements OnInit {
  motos?: Moto[];
  constructor(
    private motoService: MotoService,
    public authService: AuthService
  ) {
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
