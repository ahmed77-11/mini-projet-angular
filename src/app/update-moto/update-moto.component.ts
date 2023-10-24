import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MotoService } from '../services/moto.service';
import { Moto } from '../model/moto.model';

@Component({
  selector: 'app-update-moto',
  templateUrl: './update-moto.component.html',
  styles: [],
})
export class UpdateMotoComponent implements OnInit {
  currentMoto = new Moto();
  constructor(
    private activatedRoute: ActivatedRoute,
    private motoService: MotoService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.currentMoto = this.motoService.consulterMoto(
      this.activatedRoute.snapshot.params['id']
    );
    console.log(this.currentMoto);
  }
  updateMoto() {
    this.motoService.updateMoto(this.currentMoto);
    this.router.navigate(['motos']);
  }
}
