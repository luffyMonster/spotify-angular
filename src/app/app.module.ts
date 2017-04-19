import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ArtistComponent } from './components/pages/artist/artist.component';
import { AlbumComponent } from './components/pages/album/album.component';

import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, NavbarComponent, HomeComponent,
                  AboutComponent, ArtistComponent, AlbumComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
