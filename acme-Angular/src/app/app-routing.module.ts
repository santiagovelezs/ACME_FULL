import { VerifyTokenGuard } from './guards/verify-token.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { HabitacionesComponent } from './components/habitaciones/habitaciones.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { DetallehabitacionComponent } from './components/detallehabitacion/detallehabitacion.component';
import { ReservarComponent } from './components/reservar/reservar.component';
import { PerfilusuarioComponent } from './components/perfilusuario/perfilusuario.component';
import { UploadPhotoComponent } from './components/upload-photo/upload-photo.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CrearAlbumComponent } from './components/crear-album/crear-album.component'
import { AlbumComponent } from './components/album/album.component'
import { PerfilComponent } from './components/perfil/perfil.component'


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'galeria', component: GaleriaComponent},
  {path: 'habitaciones', component: HabitacionesComponent},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'detallehabitacion', component: DetallehabitacionComponent},
  {path: 'reservar', component: ReservarComponent, canActivate: [VerifyTokenGuard]},
  {path: 'perfilusuario', component: PerfilusuarioComponent, canActivate: [VerifyTokenGuard]},
  {path: 'upload-photo', component: UploadPhotoComponent, canActivate: [VerifyTokenGuard]},
  {path: 'logout', component: LogoutComponent},
  {path: 'crear-album', component: CrearAlbumComponent, canActivate: [VerifyTokenGuard]},
  {path: 'album/:id', component: AlbumComponent, canActivate: [VerifyTokenGuard]},
  {path: 'perfil', component: PerfilComponent, canActivate: [VerifyTokenGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
