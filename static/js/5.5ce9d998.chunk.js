(this.webpackJsonpcrats=this.webpackJsonpcrats||[]).push([[5],{64:function(t,e,a){"use strict";var s=a(65),c=a.n(s),r=a(41),i=a(1);e.a=function(t){var e,a=t.track;return Object(i.jsx)("div",{className:c.a.cover,children:Object(i.jsx)("img",{alt:a.title+" cover",src:(null===(e=a.artwork_url)||void 0===e?void 0:e.replace(/large(?=.jpg)/i,"small"))||r.a,onError:function(t){t.target.src=r.a}})})}},65:function(t,e,a){t.exports={cover:"TrackCover_cover__3GYvv"}},66:function(t,e,a){"use strict";var s=a(67),c=a.n(s),r=a(64),i=a(8),l=a(1);e.a=function(t){var e=t.playlist,a=t.clickHandler;return Object(l.jsxs)(i.a,{className:c.a.playlistOverview,onClick:a,children:[Object(l.jsx)("div",{className:c.a.covers,children:e.tracks.slice(0,4).map((function(t,e){return Object(l.jsx)(r.a,{track:t},e)}))}),Object(l.jsxs)("div",{className:c.a.playlistInfo,children:[Object(l.jsx)("p",{children:e.name}),Object(l.jsxs)("p",{children:[e.tracks.length," ",e.tracks.length>1?"songs":"song"]})]})]})}},67:function(t,e,a){t.exports={playlistOverview:"PlaylistOverview_playlistOverview__kFYPC",covers:"PlaylistOverview_covers__14WkO",playlistInfo:"PlaylistOverview_playlistInfo__1vhdR"}},81:function(t,e,a){t.exports={playlists:"LibraryPage_playlists__2j-1v",title:"LibraryPage_title__1wiO9"}},85:function(t,e,a){"use strict";a.r(e);var s=a(81),c=a.n(s),r=a(2),i=a(16),l=a(39),n=a(66),o=a(1);e.default=function(){var t=Object(r.f)(),e=(Object(i.a)(),Object(i.b)(l.e));return Object(o.jsxs)("div",{className:c.a.playlists,children:[Object(o.jsx)("h3",{className:c.a.title,children:"PLAYLISTS"}),e.map((function(e,a){return Object(o.jsx)(n.a,{playlist:e,clickHandler:function(){return t.push("/playlist/".concat(e.name))}},a)}))]})}}}]);
//# sourceMappingURL=5.5ce9d998.chunk.js.map