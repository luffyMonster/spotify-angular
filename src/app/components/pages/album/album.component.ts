import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../../services/spotify.service';
@Component({
  moduleId: module.id,
  selector: 'album',
  templateUrl: 'album.component.html',
  providers: [SpotifyService]
})
export class AlbumComponent {
  album: any;
  constructor(
              private _route: ActivatedRoute,
              private _spotifyService: SpotifyService
            ) {}
  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._spotifyService.getAlbum(id)
          .subscribe(data => {
            this.album = data;
            console.log(data);
          });
    });

  }
}
