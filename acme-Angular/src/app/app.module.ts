import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { HabitacionesComponent } from './components/habitaciones/habitaciones.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { SignupComponent } from './components/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './components/alert/alert.component';
import { UploadPhotoComponent } from './components/upload-photo/upload-photo.component';
import { DetallehabitacionComponent } from './components/detallehabitacion/detallehabitacion.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PerfilusuarioComponent } from './components/perfilusuario/perfilusuario.component';
import { ReservarComponent } from './components/reservar/reservar.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CrearAlbumComponent } from './components/crear-album/crear-album.component';
import { AlbumComponent } from './components/album/album.component';
import { PerfilComponent } from './components/perfil/perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    GaleriaComponent,
    HabitacionesComponent,
    HomeComponent,
    LoginComponent,    
    ReviewsComponent, 
    SignupComponent, AlertComponent, UploadPhotoComponent, DetallehabitacionComponent, NavbarComponent, PerfilusuarioComponent, ReservarComponent, LogoutComponent, CrearAlbumComponent, AlbumComponent, PerfilComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
