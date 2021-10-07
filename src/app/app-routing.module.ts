import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/pages/login/login.component';
import { InicioComponent } from 'src/pages/inicio/inicio.component';
import { ConfigComponent } from 'src/pages/config/config.component';
import { RegistroComponent } from 'src/pages/registro/registro.component';
import { SeLogin } from 'src/pages/selogin/selogin.component';
import { RecoverComponent } from 'src/pages/recover/recover.component';
import { NovedadesComponent } from 'src/pages/novedades/novedades.component';
import { AyudaComponent } from 'src/pages/ayuda/ayuda.component';
import { BorrarComponent } from 'src/pages/borrar/borrar.component';
import { RecordatorioComponent } from 'src/pages/recordatorio/recordatorio.component';
import { PerfilComponent } from 'src/pages/perfil/perfil.component';
import { NotificacionesComponent } from 'src/pages/notificaciones/notificaciones.component';

const routes: Routes = [
  {
    path:'',
    component: SeLogin
  },
  {
    path:'login',
    component: LoginComponent,
  },
  {
    path:'inicio',
    component: InicioComponent
  },
  {
    path:'config',
    component: ConfigComponent 
  },
  {
    path:'registro',
    component: RegistroComponent 
  },
  {
    path:'recover',
    component: RecoverComponent 
  },
  {
    path:'novedades',
    component: NovedadesComponent 
  },
  {
    path:'ayuda',
    component: AyudaComponent 
  },
  {
    path:'borrar',
    component: BorrarComponent 
  },
  {
    path:'recordatorio',
    component: RecordatorioComponent 
  },
  {
    path:'notificaciones',
    component: NotificacionesComponent 
  },
  {
    path:'perfil',
    component: PerfilComponent 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
