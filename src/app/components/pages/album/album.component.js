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
var AlbumComponent = (function () {
    function AlbumComponent(_route, _spotifyService) {
        this._route = _route;
        this._spotifyService = _spotifyService;
    }
    AlbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            var id = params['id'];
            _this._spotifyService.getAlbum(id)
                .subscribe(function (data) {
                _this.album = data;
                console.log(data);
            });
        });
    };
    return AlbumComponent;
}());
AlbumComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'album',
        templateUrl: 'album.component.html',
        providers: [spotify_service_1.SpotifyService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        spotify_service_1.SpotifyService])
], AlbumComponent);
exports.AlbumComponent = AlbumComponent;
//# sourceMappingURL=album.component.js.map