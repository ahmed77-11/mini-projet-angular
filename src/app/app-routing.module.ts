import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotosComponent } from './motos/motos.component';
import { AddMotoComponent } from './add-moto/add-moto.component';
import { UpdateMotoComponent } from './update-moto/update-moto.component';

const routes: Routes = [
  {
    path: 'motos',
    component: MotosComponent,
  },
  {
    path: 'add-moto',
    component: AddMotoComponent,
  },
  {
    path: 'updateMoto/:id',
    component: UpdateMotoComponent,
  },
  { path: '', redirectTo: 'motos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
