(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{Yj9t:function(e,t,o){"use strict";o.r(t);var r=o("Valr"),n=o("QJY3"),i=o("oW1M"),a=o("R/Hu"),s=o("DUip"),c=o("imvL"),b=o("dICO"),g=o("TYT/");function m(e,t){if(1&e&&(g.Ub(0,"div"),g.Ub(1,"p",26),g.Ub(2,"span"),g.Hc(3),g.Tb(),g.Tb(),g.Tb()),2&e){var o=g.gc().$implicit;g.Cb(3),g.Ic(o.message)}}function u(e,t){if(1&e&&(g.Sb(0),g.Fc(1,m,4,1,"div",25),g.Rb()),2&e){var o=t.$implicit,r=g.gc();g.Cb(1),g.mc("ngIf",r.resetForm.get("email").hasError(o.type)&&(r.resetForm.get("email").dirty||r.resetForm.get("email").touched))}}var l=function(e){return{focused:e}};function p(e,t){if(1&e&&(g.Ub(0,"div"),g.Ub(1,"p",34),g.Ub(2,"span"),g.Hc(3),g.Tb(),g.Tb(),g.Tb()),2&e){var o=g.gc().$implicit;g.Cb(3),g.Ic(o.message)}}function d(e,t){if(1&e&&(g.Sb(0),g.Fc(1,p,4,1,"div",33),g.Rb()),2&e){var o=t.$implicit,r=g.gc();g.Cb(1),g.mc("ngIf",r.loginForm.get("username").hasError(o.type)&&(r.loginForm.get("username").dirty||r.loginForm.get("username").touched))}}function f(e,t){if(1&e&&(g.Ub(0,"div"),g.Ub(1,"p",34),g.Ub(2,"span"),g.Hc(3),g.Tb(),g.Tb(),g.Tb()),2&e){var o=g.gc().$implicit;g.Cb(3),g.Ic(o.message)}}function h(e,t){if(1&e&&(g.Sb(0),g.Fc(1,f,4,1,"div",33),g.Rb()),2&e){var o=t.$implicit,r=g.gc();g.Cb(1),g.mc("ngIf",r.loginForm.get("password").hasError(o.type)&&(r.loginForm.get("password").dirty||r.loginForm.get("password").touched))}}var v=function(e){return{focused:e}};function U(e,t){if(1&e&&(g.Ub(0,"div"),g.Ub(1,"p",38),g.Ub(2,"span"),g.Hc(3),g.Tb(),g.Tb(),g.Tb()),2&e){var o=g.gc().$implicit;g.Cb(3),g.Ic(o.message)}}function y(e,t){if(1&e&&(g.Sb(0),g.Fc(1,U,4,1,"div",37),g.Rb()),2&e){var o=t.$implicit,r=g.gc();g.Cb(1),g.mc("ngIf",r.registerForm.get("username").hasError(o.type)&&(r.registerForm.get("username").dirty||r.registerForm.get("username").touched))}}function T(e,t){if(1&e&&(g.Ub(0,"div"),g.Ub(1,"p",38),g.Ub(2,"span"),g.Hc(3),g.Tb(),g.Tb(),g.Tb()),2&e){var o=g.gc().$implicit;g.Cb(3),g.Ic(o.message)}}function C(e,t){if(1&e&&(g.Sb(0),g.Fc(1,T,4,1,"div",37),g.Rb()),2&e){var o=t.$implicit,r=g.gc();g.Cb(1),g.mc("ngIf",r.registerForm.get("password1").hasError(o.type)&&(r.registerForm.get("password1").dirty||r.registerForm.get("password1").touched))}}function P(e,t){if(1&e&&(g.Ub(0,"div"),g.Ub(1,"p",38),g.Ub(2,"span"),g.Hc(3),g.Tb(),g.Tb(),g.Tb()),2&e){var o=g.gc().$implicit;g.Cb(3),g.Ic(o.message)}}function w(e,t){if(1&e&&(g.Sb(0),g.Fc(1,P,4,1,"div",37),g.Rb()),2&e){var o=t.$implicit,r=g.gc();g.Cb(1),g.mc("ngIf",r.registerForm.get("password2").hasError(o.type)&&(r.registerForm.get("password2").dirty||r.registerForm.get("password2").touched))}}var k=function(e){return{focused:e}},x=[{path:"",children:[{path:"forgot",component:function(){function e(e,t,o,r,n){this.authService=e,this.notifyService=t,this.formBuilder=o,this.loadingBar=r,this.router=n,this.imgLogo="assets/img/logo/jata-negara.png",this.imgLogo1="assets/img/logo/penang-logo.png",this.resetFormMessages={email:[{type:"required",message:"Email is required"},{type:"email",message:"Please enter a valid email"}]}}return e.prototype.ngOnInit=function(){this.resetForm=this.formBuilder.group({email:new n.f("",n.y.compose([n.y.required,n.y.email]))})},e.prototype.reset=function(){this.loadingBar.start(),this.loadingBar.complete(),this.successMessage()},e.prototype.navigatePage=function(e){if("login"==e)return this.router.navigate(["/auth/login"])},e.prototype.successMessage=function(){this.notifyService.openToastr("Success","A reset link has been sent to your email")},e.\u0275fac=function(t){return new(t||e)(g.Pb(c.a),g.Pb(b.a),g.Pb(n.e),g.Pb(a.c),g.Pb(s.d))},e.\u0275cmp=g.Jb({type:e,selectors:[["app-forgot"]],decls:34,vars:7,consts:[[1,"main-content","auth-content","d-flex","align-items-center"],[1,"container"],[1,"row","justify-content-center"],[1,"col-lg-5","col-md-7"],[1,"card","bg-secondary","border-0","mb-0"],[1,"card-body","px-lg-5","py-lg-5"],[1,"logo-box"],[1,"logo",2,"width","40%",3,"src"],[1,"logo",3,"src"],[1,"h3","mb-0"],[1,"h5","mb-0",2,"margin-top","20px"],[3,"formGroup"],[1,"form-group","mb-3",3,"ngClass"],[1,"input-group","input-group-alternative"],[1,"input-group-prepend"],[1,"input-group-text","bg-primary"],[1,"fas","fa-envelope","text-white"],["placeholder","Email","type","email","formControlName","email",1,"form-control","text-dark",3,"focus","blur"],[4,"ngFor","ngForOf"],[1,"text-center"],["type","button",1,"btn","btn-primary","btn-block","my-4",3,"click"],["type","button",1,"btn","btn-icon","btn-outline-primary","btn-block","my-2",3,"click"],[1,"btn-inner--icon"],[1,"fas","fa-angle-left"],[1,"btn-inner--text"],[4,"ngIf"],[1,"error-message"]],template:function(e,t){1&e&&(g.Qb(0,"ngx-loading-bar"),g.Ub(1,"div",0),g.Ub(2,"div",1),g.Ub(3,"div",2),g.Ub(4,"div",3),g.Ub(5,"div",4),g.Ub(6,"div",5),g.Ub(7,"div",6),g.Qb(8,"img",7),g.Qb(9,"img",8),g.Ub(10,"h3",9),g.Hc(11,"Selamat Datang ke "),g.Qb(12,"br"),g.Hc(13,"Sistem Pengurusan Latihan"),g.Qb(14,"br"),g.Hc(15,"PSUKPP"),g.Tb(),g.Ub(16,"h5",10),g.Hc(17,"Sila masukkan email anda"),g.Tb(),g.Tb(),g.Ub(18,"form",11),g.Ub(19,"div",12),g.Ub(20,"div",13),g.Ub(21,"div",14),g.Ub(22,"span",15),g.Qb(23,"i",16),g.Tb(),g.Tb(),g.Ub(24,"input",17),g.cc("focus",(function(e){return t.focusEmail=!0}))("blur",(function(e){return t.focusEmail=!1})),g.Tb(),g.Tb(),g.Fc(25,u,2,1,"ng-container",18),g.Tb(),g.Ub(26,"div",19),g.Ub(27,"button",20),g.cc("click",(function(e){return t.reset()})),g.Hc(28," Tetapkan semula "),g.Tb(),g.Ub(29,"button",21),g.cc("click",(function(e){return t.navigatePage("login")})),g.Ub(30,"span",22),g.Qb(31,"i",23),g.Tb(),g.Ub(32,"span",24),g.Hc(33,"Kembali"),g.Tb(),g.Tb(),g.Tb(),g.Tb(),g.Tb(),g.Tb(),g.Tb(),g.Tb(),g.Tb(),g.Tb()),2&e&&(g.Cb(8),g.mc("src",t.imgLogo,g.Ac),g.Cb(1),g.mc("src",t.imgLogo1,g.Ac),g.Cb(9),g.mc("formGroup",t.resetForm),g.Cb(1),g.mc("ngClass",g.qc(5,l,!0===t.focusEmail)),g.Cb(6),g.mc("ngForOf",t.resetFormMessages.email))},directives:[a.a,n.A,n.q,n.i,r.k,n.c,n.p,n.g,r.l,r.m],styles:[".logo-box[_ngcontent-%COMP%]{text-align:center;margin-bottom:2rem}.logo-box[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{max-height:9rem}.auth-content[_ngcontent-%COMP%]{background-color:#172b4d;background-repeat:no-repeat;background-size:cover;height:100vh;overflow:hidden}.error-message[_ngcontent-%COMP%]{color:#f5365c;text-align:right;font-size:.8em;padding-top:5px;padding-bottom:0;margin-bottom:0}"]}),e}()},{path:"login",component:function(){function e(e,t,o,r,n){this.authService=e,this.notifyService=t,this.formBuilder=o,this.loadingBar=r,this.router=n,this.imgLogo="assets/img/logo/jata-negara.png",this.imgLogo1="assets/img/logo/penang-logo.png",this.loginFormMessages={username:[{type:"required",message:"Email is required"},{type:"email",message:"Please enter a valid email"}],password:[{type:"required",message:"Password is required"},{type:"minLength",message:"Password must have at least 8 characters"}]}}return e.prototype.ngOnInit=function(){this.loginForm=this.formBuilder.group({username:new n.f("",n.y.compose([n.y.required,n.y.email])),password:new n.f("",n.y.compose([n.y.required,n.y.minLength(8)]))})},e.prototype.login=function(){this.loadingBar.start(),this.loadingBar.complete(),this.successMessage(),"admin"==this.loginForm.value.username?(this.authService.userRole=3,localStorage.setItem("userRole","3"),this.navigatePage("dashboard-admin")):"user"==this.loginForm.value.username?(this.authService.userRole=1,localStorage.setItem("userRole","1"),this.navigatePage("dashboard-user")):"tc"==this.loginForm.value.username&&(this.authService.userRole=2,localStorage.setItem("userRole","2"),this.navigatePage("dashboard-training-coordinator"))},e.prototype.navigatePage=function(e){return"login"==e?this.router.navigate(["/auth/login"]):"forgot"==e?this.router.navigate(["/auth/forgot"]):"register"==e?this.router.navigate(["/auth/register"]):"dashboard-admin"==e?this.router.navigate(["/admin/dashboard"]):"dashboard-user"==e?this.router.navigate(["/user/dashboard"]):"dashboard-training-coordinator"==e?this.router.navigate(["/user/dashboard"]):void 0},e.prototype.successMessage=function(){this.notifyService.openToastr("Success","Loging in right now")},e.\u0275fac=function(t){return new(t||e)(g.Pb(c.a),g.Pb(b.a),g.Pb(n.e),g.Pb(a.c),g.Pb(s.d))},e.\u0275cmp=g.Jb({type:e,selectors:[["app-login"]],decls:51,vars:11,consts:[[1,"main-content","auth-content","d-flex","align-items-center"],[1,"container"],[1,"row","justify-content-center"],[1,"col-lg-5","col-md-7"],[1,"card","bg-secondary","border-0","mb-0"],[1,"card-body","px-lg-5","py-lg-5"],[1,"logo-box"],[1,"logo",2,"width","40%",3,"src"],[1,"logo",3,"src"],[1,"h3","mb-0"],[1,"h5","mb-0",2,"margin-top","20px"],[3,"formGroup"],[1,"form-group","mb-3",3,"ngClass"],[1,"input-group","input-group-alternative"],[1,"input-group-prepend"],[1,"input-group-text","bg-primary"],[1,"fas","fa-envelope","text-white"],["placeholder","Email","type","email","formControlName","username",1,"form-control",3,"focus","blur"],[4,"ngFor","ngForOf"],[1,"form-group",3,"ngClass"],[1,"fas","fa-lock","text-white"],["placeholder","Kata Laluan","type","password","formControlName","password",1,"form-control",3,"focus","blur"],[1,"validation-errors"],[1,"row"],[1,"col-6"],[1,"custom-control","custom-control-alternative","custom-checkbox"],["id","customCheckLogin","type","checkbox",1,"custom-control-input"],["for","customCheckLogin",1,"custom-control-label"],[1,"col-6","text-right"],[1,"forget-label",3,"click"],[1,"text-center"],["type","button",1,"btn","btn-primary","my-4","btn-block",3,"click"],["type","button",1,"btn","btn-outline-primary","btn-block","my-2",3,"click"],[4,"ngIf"],[1,"error-message"]],template:function(e,t){1&e&&(g.Qb(0,"ngx-loading-bar"),g.Ub(1,"div",0),g.Ub(2,"div",1),g.Ub(3,"div",2),g.Ub(4,"div",3),g.Ub(5,"div",4),g.Ub(6,"div",5),g.Ub(7,"div",6),g.Qb(8,"img",7),g.Qb(9,"img",8),g.Ub(10,"h3",9),g.Hc(11,"Selamat Datang ke "),g.Qb(12,"br"),g.Hc(13,"Sistem Pengurusan Latihan"),g.Qb(14,"br"),g.Hc(15,"PSUKPP"),g.Tb(),g.Ub(16,"h5",10),g.Hc(17,"Sila masukkan email dan kata laluan anda."),g.Tb(),g.Tb(),g.Ub(18,"form",11),g.Ub(19,"div",12),g.Ub(20,"div",13),g.Ub(21,"div",14),g.Ub(22,"span",15),g.Qb(23,"i",16),g.Tb(),g.Tb(),g.Ub(24,"input",17),g.cc("focus",(function(e){return t.focusUsername=!0}))("blur",(function(e){return t.focusUsername=!1})),g.Tb(),g.Tb(),g.Fc(25,d,2,1,"ng-container",18),g.Tb(),g.Ub(26,"div",19),g.Ub(27,"div",13),g.Ub(28,"div",14),g.Ub(29,"span",15),g.Qb(30,"i",20),g.Tb(),g.Tb(),g.Ub(31,"input",21),g.cc("focus",(function(e){return t.focusPassword=!0}))("blur",(function(e){return t.focusPassword=!1})),g.Tb(),g.Tb(),g.Ub(32,"div",22),g.Fc(33,h,2,1,"ng-container",18),g.Tb(),g.Tb(),g.Ub(34,"div",23),g.Ub(35,"div",24),g.Ub(36,"div",25),g.Qb(37,"input",26),g.Ub(38,"label",27),g.Ub(39,"span"),g.Hc(40,"Ingat email saya"),g.Tb(),g.Tb(),g.Tb(),g.Tb(),g.Ub(41,"div",28),g.Ub(42,"label",29),g.cc("click",(function(e){return t.navigatePage("forgot")})),g.Ub(43,"span"),g.Hc(44,"Lupa kata laluan"),g.Tb(),g.Tb(),g.Tb(),g.Tb(),g.Tb(),g.Ub(45,"div",30),g.Ub(46,"button",31),g.cc("click",(function(e){return t.login()})),g.Hc(47," Log masuk "),g.Tb(),g.Tb(),g.Ub(48,"div"),g.Ub(49,"button",32),g.cc("click",(function(e){return t.navigatePage("register")})),g.Hc(50," Daftar "),g.Tb(),g.Tb(),g.Tb(),g.Tb(),g.Tb(),g.Tb(),g.Tb(),g.Tb()),2&e&&(g.Cb(8),g.mc("src",t.imgLogo,g.Ac),g.Cb(1),g.mc("src",t.imgLogo1,g.Ac),g.Cb(9),g.mc("formGroup",t.loginForm),g.Cb(1),g.mc("ngClass",g.qc(7,v,!0===t.focusUsername)),g.Cb(6),g.mc("ngForOf",t.loginFormMessages.username),g.Cb(1),g.mc("ngClass",g.qc(9,v,!0===t.focusPassword)),g.Cb(7),g.mc("ngForOf",t.loginFormMessages.password))},directives:[a.a,n.A,n.q,n.i,r.k,n.c,n.p,n.g,r.l,r.m],styles:[".logo-box[_ngcontent-%COMP%]{text-align:center;margin-bottom:2rem}.logo-box[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{max-height:9rem}.auth-content[_ngcontent-%COMP%]{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(rgba(0,0,0,.5))),url(5.b2ec147f207060ddd702.jpg);background-image:linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url(5.b2ec147f207060ddd702.jpg);background-repeat:no-repeat;background-size:cover;height:100vh;overflow:hidden}.forget-label[_ngcontent-%COMP%]{font-size:.875rem;cursor:pointer}.forget-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;top:2px}.custom-control-label[_ngcontent-%COMP%]{vertical-align:none!important}.error-message[_ngcontent-%COMP%]{color:#f5365c;text-align:right;font-size:.8em;padding-top:5px;padding-bottom:0;margin-bottom:0}"]}),e}()},{path:"register",component:function(){function e(e,t,o,r,n){this.authService=e,this.notifyService=t,this.formBuilder=o,this.loadingBar=r,this.router=n,this.imgLogo="assets/img/logo/jata-negara.png",this.imgLogo1="assets/img/logo/penang-logo.png",this.registerFormMessages={username:[{type:"required",message:"Email is required"},{type:"email",message:"Please enter a valid email"}],password1:[{type:"required",message:"Password is required"},{type:"minLength",message:"Password must have at least 8 characters"}],password2:[{type:"required",message:"Password is required"},{type:"minLength",message:"Password must have at least 8 characters"}]}}return e.prototype.ngOnInit=function(){this.registerForm=this.formBuilder.group({username:new n.f("",n.y.compose([n.y.required,n.y.email])),password1:new n.f("",n.y.compose([n.y.required,n.y.minLength(8)])),password2:new n.f("",n.y.compose([n.y.required,n.y.minLength(8)]))})},e.prototype.login=function(){this.loadingBar.start(),this.loadingBar.complete(),this.successMessage()},e.prototype.navigatePage=function(e){if("login"==e)return this.router.navigate(["/auth/login"])},e.prototype.successMessage=function(){this.notifyService.openToastr("Success","Loging in right now")},e.\u0275fac=function(t){return new(t||e)(g.Pb(c.a),g.Pb(b.a),g.Pb(n.e),g.Pb(a.c),g.Pb(s.d))},e.\u0275cmp=g.Jb({type:e,selectors:[["app-register"]],decls:62,vars:15,consts:[[1,"main-content","auth-content","d-flex","align-items-center"],[1,"container"],[1,"row","justify-content-center"],[1,"col-lg-5","col-md-7"],[1,"card","bg-secondary","border-0","mb-0"],[1,"card-body","px-lg-5","py-lg-5"],[1,"logo-box"],[1,"logo",2,"width","40%",3,"src"],[1,"logo",3,"src"],[1,"h3","mb-0"],[1,"h5","mb-0",2,"margin-top","20px"],[3,"formGroup"],[1,"form-group",3,"ngClass"],[1,"input-group","input-group-alternative","mb-3"],[1,"input-group-prepend"],[1,"input-group-text","bg-primary"],[1,"fas","fa-envelope","text-white"],["placeholder","Email","type","email","formControlName","username",1,"form-control",3,"focus","blur"],[4,"ngFor","ngForOf"],[1,"fas","fa-lock","text-white"],["placeholder","Password","type","password","formControlName","password1",1,"form-control",3,"focus","blur"],[1,"input-group","input-group-alternative"],["placeholder","Confirm password","type","password","formControlName","password2",1,"form-control",3,"focus","blur"],[1,"text-muted","font-italic"],[1,"text-success","font-weight-700"],[1,"row","my-4"],[1,"col-12"],[1,"custom-control","custom-control-alternative","custom-checkbox"],["id","customCheckRegister","type","checkbox",1,"custom-control-input"],["for","customCheckRegister",1,"custom-control-label"],["href","javascript:void(0)"],[1,"text-center"],["type","button",1,"btn","btn-primary","mt-4","btn-block"],["type","button",1,"btn","btn-icon","btn-outline-primary","btn-block","my-2",3,"click"],[1,"btn-inner--icon"],[1,"fas","fa-angle-left"],[1,"btn-inner--text"],[4,"ngIf"],[1,"error-message"]],template:function(e,t){1&e&&(g.Qb(0,"ngx-loading-bar"),g.Ub(1,"div",0),g.Ub(2,"div",1),g.Ub(3,"div",2),g.Ub(4,"div",3),g.Ub(5,"div",4),g.Ub(6,"div",5),g.Ub(7,"div",6),g.Qb(8,"img",7),g.Qb(9,"img",8),g.Ub(10,"h3",9),g.Hc(11,"Selamat Datang ke "),g.Qb(12,"br"),g.Hc(13,"Sistem Pengurusan Latihan"),g.Qb(14,"br"),g.Hc(15,"PSUKPP"),g.Tb(),g.Ub(16,"h5",10),g.Hc(17,"Sila masukkan maklumat berikut"),g.Tb(),g.Tb(),g.Ub(18,"form",11),g.Ub(19,"div",12),g.Ub(20,"div",13),g.Ub(21,"div",14),g.Ub(22,"span",15),g.Qb(23,"i",16),g.Tb(),g.Tb(),g.Ub(24,"input",17),g.cc("focus",(function(e){return t.focusUsername=!0}))("blur",(function(e){return t.focusUsername=!1})),g.Tb(),g.Tb(),g.Fc(25,y,2,1,"ng-container",18),g.Tb(),g.Ub(26,"div",12),g.Ub(27,"div",13),g.Ub(28,"div",14),g.Ub(29,"span",15),g.Qb(30,"i",19),g.Tb(),g.Tb(),g.Ub(31,"input",20),g.cc("focus",(function(e){return t.focusPassword=!0}))("blur",(function(e){return t.focusPassword=!1})),g.Tb(),g.Tb(),g.Fc(32,C,2,1,"ng-container",18),g.Tb(),g.Ub(33,"div",12),g.Ub(34,"div",21),g.Ub(35,"div",14),g.Ub(36,"span",15),g.Qb(37,"i",19),g.Tb(),g.Tb(),g.Ub(38,"input",22),g.cc("focus",(function(e){return t.focusConfirmPassword=!0}))("blur",(function(e){return t.focusConfirmPassword=!1})),g.Tb(),g.Tb(),g.Fc(39,w,2,1,"ng-container",18),g.Tb(),g.Ub(40,"div",23),g.Ub(41,"small"),g.Hc(42,"password strength: "),g.Ub(43,"span",24),g.Hc(44,"strong"),g.Tb(),g.Tb(),g.Tb(),g.Ub(45,"div",25),g.Ub(46,"div",26),g.Ub(47,"div",27),g.Qb(48,"input",28),g.Ub(49,"label",29),g.Ub(50,"span"),g.Hc(51,"I agree with the "),g.Ub(52,"a",30),g.Hc(53,"Privacy Policy"),g.Tb(),g.Tb(),g.Tb(),g.Tb(),g.Tb(),g.Tb(),g.Tb(),g.Ub(54,"div",31),g.Ub(55,"button",32),g.Hc(56," Create account "),g.Tb(),g.Ub(57,"button",33),g.cc("click",(function(e){return t.navigatePage("login")})),g.Ub(58,"span",34),g.Qb(59,"i",35),g.Tb(),g.Ub(60,"span",36),g.Hc(61,"Login"),g.Tb(),g.Tb(),g.Tb(),g.Tb(),g.Tb(),g.Tb(),g.Tb(),g.Tb(),g.Tb()),2&e&&(g.Cb(8),g.mc("src",t.imgLogo,g.Ac),g.Cb(1),g.mc("src",t.imgLogo1,g.Ac),g.Cb(9),g.mc("formGroup",t.registerForm),g.Cb(1),g.mc("ngClass",g.qc(9,k,!0===t.focusUsername)),g.Cb(6),g.mc("ngForOf",t.registerFormMessages.username),g.Cb(1),g.mc("ngClass",g.qc(11,k,!0===t.focusPassword)),g.Cb(6),g.mc("ngForOf",t.registerFormMessages.password1),g.Cb(1),g.mc("ngClass",g.qc(13,k,!0===t.focusConfirmPassword)),g.Cb(6),g.mc("ngForOf",t.registerFormMessages.password2))},directives:[a.a,n.A,n.q,n.i,r.k,n.c,n.p,n.g,r.l,r.m],styles:[".logo-box[_ngcontent-%COMP%]{text-align:center;margin-bottom:2rem}.logo-box[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{max-height:9rem}.auth-content[_ngcontent-%COMP%]{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(rgba(0,0,0,.5))),url(3.8d4ce24f25dbc3e8699e.jpg);background-image:linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url(3.8d4ce24f25dbc3e8699e.jpg);background-repeat:no-repeat;background-size:cover;height:100vh;overflow:hidden}.forget-label[_ngcontent-%COMP%]{font-size:.875rem;cursor:pointer}.forget-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;top:2px}.custom-control-label[_ngcontent-%COMP%]{vertical-align:none!important}.error-message[_ngcontent-%COMP%]{color:#f5365c;text-align:right;font-size:.8em;padding-top:5px;padding-bottom:0;margin-bottom:0}.strength-bar[_ngcontent-%COMP%]{display:inline;list-style:none;margin:0;padding:0;vertical-align:2px}.point[_ngcontent-%COMP%]:last-of-type{margin:0!important}.point[_ngcontent-%COMP%]{background:#ddd;border-radius:2px;display:inline-block;height:5px;margin-right:1px;width:62px}"]}),e}()}]}];o.d(t,"AuthModule",(function(){return F}));var F=function(){function e(){}return e.\u0275mod=g.Nb({type:e}),e.\u0275inj=g.Mb({factory:function(t){return new(t||e)},imports:[[r.c,n.k,n.w,i.d.forRoot(),i.h.forRoot(),i.l.forRoot(),a.b,s.g.forChild(x)]]}),e}()}}]);