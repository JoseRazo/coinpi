import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './views/header/header.component';
import { SliderPrincipalComponent } from './views/slider-principal/slider-principal.component';
import { FooterComponent } from './views/footer/footer.component';
import { ConferencistasComponent } from './views/conferencistas/conferencistas.component';
import { AboutComponent } from './views/about/about.component';
import { PatrocinadoresComponent } from './views/patrocinadores/patrocinadores.component';
import { HotelesComponent } from './views/hoteles/hoteles.component';
import { ContactoComponent } from './views/contacto/contacto.component';
import { CronogramaComponent } from './views/cronograma/cronograma.component';
import { LugarEventoComponent } from './views/lugar-evento/lugar-evento.component';
import { DetalleInstructorComponent } from './articulos/detalle-instructor/detalle-instructor.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ArticulosCartelesComponent } from './articulos-carteles/articulos-carteles.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './views/registro/registro.component';
import { EventoCulturalComponent } from './views/evento-cultural/evento-cultural.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SliderPrincipalComponent,
    FooterComponent,
    ConferencistasComponent,
    AboutComponent,
    PatrocinadoresComponent,
    HotelesComponent,
    ContactoComponent,
    CronogramaComponent,
    LugarEventoComponent,
    DetalleInstructorComponent,
    AcercaDeComponent,
    RegistroComponent,
    ArticulosCartelesComponent,
    EventoCulturalComponent,
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot([
      //HOME
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'acerca-de',
        component: AcercaDeComponent,
      },
      {
        path: 'registro',
        component: RegistroComponent,
      },
      {
        path: 'articulos-carteles',
        component: ArticulosCartelesComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  
}