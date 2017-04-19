"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./components/pages/home/home.component");
var about_component_1 = require("./components/pages/about/about.component");
var artist_component_1 = require("./components/pages/artist/artist.component");
var album_component_1 = require("./components/pages/album/album.component");
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'artists/:id',
        component: artist_component_1.ArtistComponent
    },
    {
        path: 'album/:id',
        component: album_component_1.AlbumComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map