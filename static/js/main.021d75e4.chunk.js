(this.webpackJsonpproject_maddie=this.webpackJsonpproject_maddie||[]).push([[0],{11:function(t,e,a){t.exports=a(24)},16:function(t,e,a){},22:function(t,e,a){},24:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),i=a(4),o=a.n(i),r=(a(16),a(5)),l=a(6),c=a(9),h=a(7),u=a(1),d=a(10),m=a(8),p=a.n(m);function g(t){return s.a.createElement("div",{onClick:t.previousImage,style:{fontSize:"5em",marginRight:"12px"}},s.a.createElement("i",{className:"fa fa-caret-left fa-2x",style:{color:"#282c34"},"aria-hidden":"true"}))}function f(t){return s.a.createElement("div",{onClick:t.nextImage,style:{fontSize:"5em",marginLeft:"12px"}},s.a.createElement("i",{className:"fa fa-caret-right fa-2x",style:{color:"#282c34"},"aria-hidden":"true"}))}a(22),a(23);var v=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(c.a)(this,Object(h.a)(e).call(this,t))).state={photos:[],slideCount:0},a.nextImage=a.nextImage.bind(Object(u.a)(a)),a.previousImage=a.previousImage.bind(Object(u.a)(a)),a}return Object(d.a)(e,t),Object(l.a)(e,[{key:"componentWillMount",value:function(){this.fetchPhotos()}},{key:"nextImage",value:function(){this.state.slideCount===this.state.photos.length-1?this.setState({slideCount:0}):this.setState({slideCount:this.state.slideCount+1})}},{key:"previousImage",value:function(){0===this.state.slideCount?this.setState({slideCount:this.state.photos.length-1}):this.setState({slideCount:this.state.slideCount-1})}},{key:"fetchPhotos",value:function(){var t=this;p.a.get("https://api.instagram.com/v1/users/self/media/recent/?access_token=1959867651.1677ed0.1e3802e00f0b4c3ea7c6f674b4352abd").then((function(e){t.setState({photos:e.body.data})}))}},{key:"render",value:function(){var t=this;return s.a.createElement("div",{className:"App"},s.a.createElement("header",null,s.a.createElement("h1",{className:"App-header"},"Project Maddie")),s.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"30px"}},s.a.createElement(g,{previousImage:this.previousImage}),this.state.photos.map((function(e,a){return t.state.photos.indexOf(e)===t.state.slideCount-1&&0!==t.state.slideCount?s.a.createElement("img",{src:e.images.standard_resolution.url,width:"150",height:"150",alt:""}):t.state.photos.indexOf(e)===t.state.photos.length-1&&0===t.state.slideCount?s.a.createElement("img",{src:e.images.standard_resolution.url,width:"150",height:"150",alt:""}):""})),"          ",this.state.photos.map((function(e,a){return t.state.photos.indexOf(e)===t.state.slideCount?s.a.createElement("div",{key:e.id,style:{margin:"0 auto"}},s.a.createElement("img",{src:e.images.standard_resolution.url,alt:""}),s.a.createElement("div",{style:{width:"600px",margin:"24px auto",fontSize:30,fontFamily:"Bitter"}},null!==e.caption?e.caption.text:"")):""})),this.state.photos.map((function(e,a){return t.state.photos.indexOf(e)===t.state.slideCount+1&&t.state.slideCount!==t.state.photos.length-1?s.a.createElement("img",{src:e.images.standard_resolution.url,width:"150",height:"150",alt:""}):0===t.state.photos.indexOf(e)&&t.state.slideCount===t.state.photos.length-1?s.a.createElement("img",{src:e.images.standard_resolution.url,width:"150",height:"150",alt:""}):""})),s.a.createElement(f,{nextImage:this.nextImage})),s.a.createElement("footer",null,s.a.createElement("h1",{className:"App-footer"},this.state.slideCount+"/"+(this.state.photos.length-1))))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.021d75e4.chunk.js.map