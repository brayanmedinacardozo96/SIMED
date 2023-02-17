import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjustesComponent } from './pages/ajustes/ajustes.component';
import { CertificadosComponent } from './pages/certificados/certificados.component';
import { HomeComponent } from './pages/home/home.component';
import { RecuperarClaveComponent } from './pages/login/components/recuperar-clave/recuperar-clave.component';
import { ValidarCodigoComponent } from './pages/login/components/validar-codigo/validar-codigo.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'inicio', component: HomeComponent },
  { path: 'certificados', component: CertificadosComponent },
  { path: 'ajustes', component: AjustesComponent },
  { path: 'recuperar-clave', component: RecuperarClaveComponent},
  { path: 'validar-codigo', component: ValidarCodigoComponent},
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
