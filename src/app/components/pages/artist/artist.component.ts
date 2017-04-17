import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../../services/spotify.service';
@Component({
  moduleId: module.id,
  selector: 'artist',
  templateUrl: 'artist.component.html',
  providers: [SpotifyService]
})
export class ArtistComponent implements OnInit {
  artist: any;
  albums: any;
  constructor(
              private _route: ActivatedRoute,
              private _spotifyService: SpotifyService
            ) {}
  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._spotifyService.getArtist(id)
          .subscribe( artist => {
            this.artist = artist;
            console.log(artist);
          });
      this._spotifyService.getAlbums(id)
          .subscribe( albums => {
            this.albums = albums;
            console.log(albums);
          });
    });
  };
}
