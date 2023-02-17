import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        CertificadosComponent,
        AjustesComponent,
        RecuperarClaveComponent,
        ImagenInicioComponent,
        ValidarCodigoComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        RouterModule,
        MenuModule

    ]
})
export class AppModule { }
