import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
//SERVICES
import { ApiService } from './services/api/api.service';
import { LocalstorageService } from './services/localstorage/localstorage.service';
import { SnackBarService } from './services/snackbar/snackbar.service';
//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { MenuModule } from './shared/menu/menu.module';
import { CertificadosComponent } from './pages/certificados/certificados.component';
import { AjustesComponent } from './pages/ajustes/ajustes.component';
import { RecuperarClaveComponent } from './pages/login/components/recuperar-clave/recuperar-clave.component';
import { ImagenInicioComponent } from './pages/login/components/imagen-inicio/imagen-inicio.component';
import { ValidarCodigoComponent } from './pages/login/components/validar-codigo/validar-codigo.component';
import { HttpClientModule } from '@angular/common/http';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { LoadingComponent } from './utils/loading/loading.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarComponent } from './utils/snackbar/snackbar.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordComponent } from './pages/ajustes/password/password.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CertificadosComponent,
    AjustesComponent,
    RecuperarClaveComponent,
    ImagenInicioComponent,
    ValidarCodigoComponent,
    LoadingComponent,
    SnackbarComponent,
    PasswordComponent,

  ],
  providers: [
    ApiService,
    LocalstorageService,
    SnackBarService
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    MenuModule,
    HttpClientModule,
    CdkAccordionModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class AppModule { }
