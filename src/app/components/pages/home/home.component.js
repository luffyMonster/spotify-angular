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
var core_1 = require("@angular/core");
var spotify_service_1 = require("../../../services/spotify.service");
var HomeComponent = (function () {
    function HomeComponent(_spotifyService) {
        this._spotifyService = _spotifyService;
    }
    HomeComponent.prototype.searchMusic = function () {
        var _this = this;
        if (this.searchStr) {
            this._spotifyService.searchMusic(this.searchStr)
                .subscribe(function (data) {
                _this.artists = data.artists.items;
                console.log(data);
            });
        }
        else {
            this.artists = null;
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'home-tag',
        templateUrl: "home.component.html",
        providers: [spotify_service_1.SpotifyService]
    }),
    __metadata("design:paramtypes", [spotify_service_1.SpotifyService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map