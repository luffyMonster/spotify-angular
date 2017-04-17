import { Component } from '@angular/core';
import { SpotifyService } from '../../../services/spotify.service';
@Component({
  moduleId: module.id,
  selector: 'home-tag',
  templateUrl: `home.component.html`,
  providers: [SpotifyService]
})
export class HomeComponent {
  searchStr: string;
  artists: any;
  constructor(private _spotifyService: SpotifyService) {  }
  searchMusic() {
    if (this.searchStr) {
      this._spotifyService.searchMusic(this.searchStr)
          .subscribe(data => {
            this.artists = data.artists.items;
            console.log(data);
          });
    } else {
      this.artists = null;
    }
  }
}
