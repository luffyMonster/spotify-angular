import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ArtistComponent } from './components/pages/artist/artist.component';
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'artists/:id',
    component: ArtistComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
