import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotosComponent } from './motos/motos.component';
import { AddMotoComponent } from './add-moto/add-moto.component';
import { UpdateMotoComponent } from './update-moto/update-moto.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { MotoGuard } from './moto.guard';

const routes: Routes = [
  {
    path: 'motos',
    component: MotosComponent,
  },
  {
    path: 'add-moto',
    component: AddMotoComponent,
    canActivate: [MotoGuard],
  },
  {
    path: 'updateMoto/:id',
    component: UpdateMotoComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'app-forbidden', component: ForbiddenComponent },

  { path: '', redirectTo: 'motos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
