"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1772],{1772:(L,u,s)=>{s.r(u),s.d(u,{LoginPageModule:()=>b});var m=s(1368),g=s(4716),i=s(2112),d=s(1224),n=s(4496);const p=["emailField"],f=["passwordField"];function C(e,l){1&e&&(n.I0R(0,"p"),n.OEk(1,"Debe ingresar un correo v\xe1lido con la terminaci\xf3n @utcv.edu.mx"),n.C$Y())}function h(e,l){1&e&&(n.I0R(0,"p"),n.OEk(1,"La contrase\xf1a debe tener entre 8 y 12 caracteres."),n.C$Y())}function M(e,l){1&e&&(n.I0R(0,"p"),n.OEk(1,"Se requiere llenar los campos primero"),n.C$Y())}const P=()=>["/forgot-password"],_=[{path:"",component:(()=>{var e;class l{constructor(o){this.router=o,this.formValid=!1,this.formIncomplete=!1,this.email="",this.password=""}login(){var o,t;this.email&&this.password&&null!==(o=this.emailField)&&void 0!==o&&o.valid&&null!==(t=this.passwordField)&&void 0!==t&&t.valid?(this.formValid=!0,this.formIncomplete=!1,this.router.navigate(["/menu"])):(this.formValid=!1,this.formIncomplete=!0)}}return(e=l).\u0275fac=function(o){return new(o||e)(n.GI1(d.E5))},e.\u0275cmp=n.In1({type:e,selectors:[["app-login"]],viewQuery:function(o,t){if(1&o&&(n.CC$(p,5),n.CC$(f,5)),2&o){let r;n.wto(r=n.Gqi())&&(t.emailField=r.first),n.wto(r=n.Gqi())&&(t.passwordField=r.first)}},decls:32,vars:7,consts:[[2,"text-align","end"],["padding","",1,"ion-text-center"],[1,"ion-text-center"],["src","https://media1.tenor.com/m/9C0WDOq8jSUAAAAC/gengar-pokemon.gif"],[1,"image-text"],[2,"display","flex","flex-direction","column","align-items","center",3,"ngSubmit"],[2,"width","80%"],["type","email","name","email","pattern","^[A-Za-z0-9._%+-]+@utcv\\.edu\\.mx$",3,"ngModel","ngModelChange"],["emailField","ngModel"],[4,"ngIf"],["type","password","name","password","minlength","8","maxlength","12",3,"ngModel","ngModelChange"],["passwordField","ngModel"],["size","12","size-md","6"],["color","danger","expand","block",3,"click"],["size","12","size-md","6",1,"ion-text-center","ion-padding-top"],["type","button","color","danger","expand","block"],[1,"small-text",3,"routerLink"]],template:function(o,t){if(1&o&&(n.I0R(0,"ion-header")(1,"ion-toolbar")(2,"ion-title",0),n.OEk(3,"Login"),n.C$Y()()(),n.I0R(4,"ion-content",1)(5,"ion-card",2),n.wR5(6,"img",3),n.I0R(7,"div",4),n.OEk(8," Bienvenido "),n.C$Y(),n.I0R(9,"form",5),n.qCj("ngSubmit",function(){return t.login()}),n.I0R(10,"ion-item",6)(11,"ion-label"),n.OEk(12,"Correo electr\xf3nico"),n.C$Y(),n.I0R(13,"ion-input",7,8),n.iHE("ngModelChange",function(a){return n.kNx(t.email,a)||(t.email=a),a}),n.C$Y()(),n.yuY(15,C,2,0,"p",9),n.I0R(16,"ion-item",6)(17,"ion-label"),n.OEk(18,"Contrase\xf1a"),n.C$Y(),n.I0R(19,"ion-input",10,11),n.iHE("ngModelChange",function(a){return n.kNx(t.password,a)||(t.password=a),a}),n.C$Y()(),n.yuY(21,h,2,0,"p",9),n.I0R(22,"ion-row",6)(23,"ion-col",12)(24,"ion-button",13),n.qCj("click",function(){return t.login()}),n.OEk(25,"Iniciar Sesi\xf3n"),n.C$Y(),n.yuY(26,M,2,0,"p",9),n.C$Y(),n.I0R(27,"ion-col",14)(28,"ion-button",15),n.OEk(29,"Registrarse"),n.C$Y()()(),n.I0R(30,"a",16),n.OEk(31,"\xbfOlvid\xf3 su contrase\xf1a?"),n.C$Y()()()()),2&o){const r=n.Gew(14),a=n.Gew(20);n.yG2(13),n.OKB("ngModel",t.email),n.yG2(2),n.E7m("ngIf",r.errors&&(r.errors.pattern||r.errors.required)),n.yG2(4),n.OKB("ngModel",t.password),n.yG2(2),n.E7m("ngIf",a.errors&&(a.errors.minlength||a.errors.maxlength||a.errors.required)),n.yG2(5),n.E7m("ngIf",t.formIncomplete),n.yG2(4),n.E7m("routerLink",n.q4q(6,P))}},dependencies:[m.u_,g.sz,g.ue,g.u,g.El,g.Mj,g.E1,g._G,g.SC,i.sn,i.KC,i.Kk,i._i,i.wB,i.A5,i.Yb,i.QR,i.qo,i.tM,i.Md,i.qG,i.mI,d.ER],styles:['@charset "UTF-8";ion-card.dos[_ngcontent-%COMP%]{background-color:transparent}.boton-coldos[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin-bottom:20px;--border-color: #ffffff;--background: #ffffff}.boton-col[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin-bottom:20px;--border-color: #ffffff;--background: #494242}.input[_ngcontent-%COMP%]{font-weight:500}ion-item[_ngcontent-%COMP%]{border-radius:20px;margin-bottom:20px;margin-left:auto;margin-right:auto;--border-color: #554f4f}ion-card.centered-card[_ngcontent-%COMP%]{padding:20px;margin:20px;background-color:transparent}ion-label.ion-text-center[_ngcontent-%COMP%]{color:#000}.centered-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;height:100%}.header[_ngcontent-%COMP%]{margin-top:100px;margin-bottom:80px;text-align:center}.header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{color:#000;font-size:.9rem}.header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:2rem}form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000;font-weight:700;font-size:20px}']}),l})()}];let O=(()=>{var e;class l{}return(e=l).\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.a4G({type:e}),e.\u0275inj=n.s3X({imports:[d.qQ.forChild(_),d.qQ]}),l})(),b=(()=>{var e;class l{}return(e=l).\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.a4G({type:e}),e.\u0275inj=n.s3X({imports:[m.MD,g.y,i.wZ,O]}),l})()}}]);