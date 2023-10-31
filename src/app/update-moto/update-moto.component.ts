import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MotoService } from '../services/moto.service';
import { Moto } from '../model/moto.model';
import { MotoModel } from '../model/motomodel.model';

@Component({
  selector: 'app-update-moto',
  templateUrl: './update-moto.component.html',
  styles: [],
})
export class UpdateMotoComponent implements OnInit {
  currentMoto = new Moto();
  motoModels!: MotoModel[];
  updatedMotoModelId!: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private motoService: MotoService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.motoModels = this.motoService.listeModel();
    this.currentMoto = this.motoService.consulterMoto(
      this.activatedRoute.snapshot.params['id']
    );
    this.updatedMotoModelId = this.currentMoto.motoModel!.idModel;
    console.log(this.currentMoto);
  }
  updateMoto() {
    this.currentMoto.motoModel = this.motoService.consulterModel(
      this.updatedMotoModelId
    );
    this.motoService.updateMoto(this.currentMoto);
    this.router.navigate(['motos']);
  }
}
