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
  defaultImage: string;
  constructor(
              private _route: ActivatedRoute,
              private _spotifyService: SpotifyService
            ) {}
  ngOnInit() {
    this.defaultImage = 'app/images/no-image.png';
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._spotifyService.getArtist(id)
          .subscribe( data => {
            this.artist = data;
            console.log(data);
          });
      this._spotifyService.getAlbums(id)
          .subscribe( data => {
            this.albums = data.items;
            console.log(data.items);
          });
    });
  };
}
