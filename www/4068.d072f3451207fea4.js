"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4068],{4068:(b,g,c)=>{c.r(g),c.d(g,{HomePageModule:()=>C});var u=c(1368),n=c(2112),h=c(4716),m=c(1224),e=c(4496),p=c(6223);function d(o,s){if(1&o&&e.wR5(0,"img",21),2&o){const r=e.GaO().$implicit;e._6D("alt",r.name),e.E7m("src",r.sprites.front_default,e.K6U)}}function k(o,s){if(1&o){const r=e.KQA();e.I0R(0,"ion-col",15)(1,"ion-card",16),e.qCj("click",function(){const a=e.usT(r).index,l=e.GaO();return e.CGJ(l.showPokemon(a+1))}),e.I0R(2,"ion-card-header"),e.yuY(3,d,1,2,"img",17),e.I0R(4,"ion-card-title",18),e.OEk(5),e.C$Y(),e.I0R(6,"ion-button",19),e.qCj("click",function(i){const l=e.usT(r).index,_=e.GaO();return e.CGJ(_.likePokemon(l,i))}),e.wR5(7,"ion-icon",20),e.C$Y()()()()}if(2&o){const r=s.$implicit,t=s.index,i=e.GaO();e.yG2(3),e.E7m("ngIf",r.sprites),e.yG2(2),e.cNF(r.name),e.yG2(2),e.E7m("name",i.likes[t]?"heart":"heart-outline")("color",i.likes[t]?"danger":"medium")}}const f=[{path:"",component:(()=>{var o;class s{search(t){throw new Error("Method not implemented.")}constructor(t,i){this.httpService=t,this.router=i,this.pokemons=[],this.likes=JSON.parse(localStorage.getItem("likes")||"[]")||new Array(this.pokemons.length).fill(!1)}orderByPokemonName(t){return t.sort((i,a)=>i.name.localeCompare(a.name))}ngOnInit(){this.getPokemons(),this.updateLikes()}getPokemons(){this.httpService.getPokemon().subscribe(t=>{this.pokemons=t.results,this.pokemons.forEach((i,a)=>{this.httpService.getPokemonDetails(a+1).subscribe(l=>{i.sprites=l.sprites,i.name=l.name})})})}showPokemon(t){this.httpService.getPokemonDetails(t).subscribe(i=>{console.log("Detalles del Pok\xe9mon: ",i),this.router.navigate(["/details",t])})}likePokemon(t,i){i.stopPropagation(),this.likes[t]=!this.likes[t],localStorage.setItem("likes",JSON.stringify(this.likes)),this.likes[t]?this.httpService.addFavorite(this.pokemons[t]):this.httpService.removeFavorite(this.pokemons[t])}updateLikes(){var t;this.likes=JSON.parse(null!==(t=localStorage.getItem("likes"))&&void 0!==t?t:"[]")||new Array(this.pokemons.length).fill(!1)}searchPokemon(t){if("Enter"===t.key){const i=t.target.value.toLowerCase();this.filteredPokemons=this.pokemons.filter(a=>a.name.toLowerCase().includes(i))}}handleKeyPress(t){"Enter"===t.key&&this.searchPokemon(t)}}return(o=s).\u0275fac=function(t){return new(t||o)(e.GI1(p.h),e.GI1(m.E5))},o.\u0275cmp=e.In1({type:o,selectors:[["app-home"]],decls:20,vars:4,consts:[[3,"translucent"],["color","danger"],["slot","start"],["defaultHref","/menu"],[1,"ion-text-center"],["placeholder","Buscar Pok\xe9mon",3,"ionChange","keypress"],[3,"fullscreen"],["size","12","size-md","6","size-lg","4","size-xl","3",4,"ngFor","ngForOf"],["slot","bottom",1,"TabBar"],["tab","tab1","routerLink","/menu"],["name","person"],["tab","tab2","routerLink","/home"],["name","home"],["tab","tab3","routerLink","/portada"],["name","exit"],["size","12","size-md","6","size-lg","4","size-xl","3"],["button","",3,"click"],["style","height: 150px;",3,"src","alt",4,"ngIf"],[1,"centered-text"],["fill","clear",3,"click"],[3,"name","color"],[2,"height","150px",3,"src","alt"]],template:function(t,i){1&t&&(e.I0R(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),e.wR5(3,"ion-back-button",3),e.C$Y(),e.I0R(4,"ion-title",4)(5,"ion-searchbar",5),e.qCj("ionChange",function(l){return i.search(l)})("keypress",function(l){return i.handleKeyPress(l)}),e.C$Y()()()(),e.I0R(6,"ion-content",6)(7,"ion-grid")(8,"ion-row"),e.yuY(9,k,8,4,"ion-col",7),e.C$Y()()(),e.I0R(10,"ion-footer",0)(11,"ion-toolbar")(12,"ion-tabs")(13,"ion-tab-bar",8)(14,"ion-tab-button",9),e.wR5(15,"ion-icon",10),e.C$Y(),e.I0R(16,"ion-tab-button",11),e.wR5(17,"ion-icon",12),e.C$Y(),e.I0R(18,"ion-tab-button",13),e.wR5(19,"ion-icon",14),e.C$Y()()()()()),2&t&&(e.E7m("translucent",!0),e.yG2(6),e.E7m("fullscreen",!0),e.yG2(3),e.E7m("ngForOf",i.pokemons),e.yG2(),e.E7m("translucent",!0))},dependencies:[u.ay,u.u_,n.sn,n.GS,n.KC,n.YY,n.I7,n.Kk,n._i,n.eV,n.YP,n.wB,n.Ko,n.qo,n.KQ,n.mx,n.ej,n.tM,n.Md,n.qG,n.CE,n.Im,n.mY,m.ER],styles:['@charset "UTF-8";#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#fbf9f9;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.centered-text[_ngcontent-%COMP%]{text-align:center}.custom-card[_ngcontent-%COMP%]{width:100%;margin:10 auto;max-width:100px}']}),s})()}];let P=(()=>{var o;class s{}return(o=s).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.a4G({type:o}),o.\u0275inj=e.s3X({imports:[m.qQ.forChild(f),m.qQ]}),s})(),C=(()=>{var o;class s{}return(o=s).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.a4G({type:o}),o.\u0275inj=e.s3X({imports:[u.MD,h.y,n.wZ,P,n.wZ]}),s})()}}]);