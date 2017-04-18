"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var spotify_service_1 = require("../../../services/spotify.service");
var ArtistComponent = (function () {
    function ArtistComponent(_route, _spotifyService) {
        this._route = _route;
        this._spotifyService = _spotifyService;
    }
    ArtistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.defaultImage = 'app/images/no-image.png';
        this._route.params.subscribe(function (params) {
            var id = params['id'];
            _this._spotifyService.getArtist(id)
                .subscribe(function (data) {
                _this.artist = data;
                console.log(data);
            });
            _this._spotifyService.getAlbums(id)
                .subscribe(function (data) {
                _this.albums = data.items;
                console.log(data.items);
            });
        });
    };
    ;
    return ArtistComponent;
}());
ArtistComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'artist',
        templateUrl: 'artist.component.html',
        providers: [spotify_service_1.SpotifyService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        spotify_service_1.SpotifyService])
], ArtistComponent);
exports.ArtistComponent = ArtistComponent;
//# sourceMappingURL=artist.component.js.map