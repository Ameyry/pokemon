"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3840],{3840:(C,v,a)=>{a.r(v),a.d(v,{FavoritesPageModule:()=>p});var g=a(1368),m=a(4716),i=a(2112),u=a(1224),e=a(4496),d=a(6223);function f(t,n){if(1&t){const s=e.KQA();e.I0R(0,"ion-col",7)(1,"ion-list",8),e.qCj("click",function(){const c=e.usT(s).index,l=e.GaO();return e.CGJ(l.showPokemon(c+1))}),e.I0R(2,"ion-list-header"),e.wR5(3,"img",9),e.I0R(4,"ion-card-title",10),e.OEk(5),e.C$Y(),e.I0R(6,"ion-button",11),e.qCj("click",function(r){const l=e.usT(s).index,P=e.GaO();return e.CGJ(P.removeFavorite(l,r))}),e.wR5(7,"ion-icon",12),e.C$Y()()()()}if(2&t){const s=n.$implicit;e.yG2(3),e._6D("alt",s.name),e.E7m("src",s.sprites.front_default,e.K6U),e.yG2(2),e.cNF(s.name)}}const F=[{path:"",component:(()=>{var t;class n{constructor(o,r){this.httpService=o,this.router=r,this.favorites=[]}ngOnInit(){this.getFavorites()}getFavorites(){this.favorites=this.httpService.getFavorites()}showPokemon(o){this.httpService.getPokemonDetails(o).subscribe(r=>{console.log("Detalles del Pok\xe9mon: ",r),this.router.navigate(["/details",o])})}removeFavorite(o,r){r.stopPropagation(),this.httpService.removeFavorite(this.favorites[o]),this.favorites=this.httpService.getFavorites();const c=localStorage.getItem("likes"),l=null!==c?JSON.parse(c):[];l[o]=!1,localStorage.setItem("likes",JSON.stringify(l))}}return(t=n).\u0275fac=function(o){return new(o||t)(e.GI1(d.h),e.GI1(u.E5))},t.\u0275cmp=e.In1({type:t,selectors:[["app-favorites"]],decls:10,vars:3,consts:[[3,"translucent"],["color","danger"],["slot","start"],["defaultHref","/menu"],[1,"ion-text-center"],[3,"fullscreen"],["size","12","size-md","6","size-lg","4","size-xl","3",4,"ngFor","ngForOf"],["size","12","size-md","6","size-lg","4","size-xl","3"],["button","",3,"click"],[2,"height","150px",3,"src","alt"],[1,"centered-text"],["fill","clear",3,"click"],["name","trash-outline","color","medium"]],template:function(o,r){1&o&&(e.I0R(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-buttons",2),e.wR5(3,"ion-back-button",3),e.C$Y(),e.I0R(4,"ion-title",4),e.OEk(5," Favoritos "),e.C$Y()()(),e.I0R(6,"ion-content",5)(7,"ion-grid")(8,"ion-row"),e.yuY(9,f,8,3,"ion-col",6),e.C$Y()()()),2&o&&(e.E7m("translucent",!0),e.yG2(6),e.E7m("fullscreen",!0),e.yG2(3),e.E7m("ngForOf",r.favorites))},dependencies:[g.ay,i.sn,i.GS,i.I7,i.Kk,i._i,i.YP,i.wB,i.Ko,i.OC,i.zz,i.qo,i.tM,i.Md,i.Im],styles:[".centered-text[_ngcontent-%COMP%]{text-align:center}"]}),n})()}];let h=(()=>{var t;class n{}return(t=n).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.a4G({type:t}),t.\u0275inj=e.s3X({imports:[u.qQ.forChild(F),u.qQ]}),n})(),p=(()=>{var t;class n{}return(t=n).\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.a4G({type:t}),t.\u0275inj=e.s3X({imports:[g.MD,m.y,i.wZ,h]}),n})()}}]);