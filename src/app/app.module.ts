import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from 'src/pages/login/login.component';
import { InicioComponent } from 'src/pages/inicio/inicio.component';
import { ConfigComponent } from 'src/pages/config/config.component';
import { RegistroComponent } from 'src/pages/registro/registro.component';
import { SeLogin } from 'src/pages/selogin/selogin.component';
import { RecoverComponent } from 'src/pages/recover/recover.component';
import { NovedadesComponent } from 'src/pages/novedades/novedades.component';
import { AyudaComponent } from 'src/pages/ayuda/ayuda.component';
import { BorrarComponent } from 'src/pages/borrar/borrar.component';
import { NotificacionesComponent } from 'src/pages/notificaciones/notificaciones.component';
import { RecordatorioComponent } from 'src/pages/recordatorio/recordatorio.component';
import { PerfilComponent } from 'src/pages/perfil/perfil.component';


@NgModule({
  declarations: [AppComponent,LoginComponent,RecoverComponent, NovedadesComponent,BorrarComponent,AyudaComponent,
  InicioComponent,ConfigComponent,RegistroComponent,SeLogin,PerfilComponent,RecordatorioComponent,NotificacionesComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
