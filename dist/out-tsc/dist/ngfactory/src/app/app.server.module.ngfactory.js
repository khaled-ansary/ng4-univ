"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("../../../../src/app/app.server.module");
var i2 = require("../../../../src/app/app.component");
var i3 = require("./home/home.component.ngfactory");
var i4 = require("./about/about.component.ngfactory");
var i5 = require("./app.component.ngfactory");
var i6 = require("@angular/http");
var i7 = require("@angular/platform-server");
var i8 = require("@angular/common");
var i9 = require("@angular/platform-browser");
var i10 = require("@angular/animations/browser");
var i11 = require("@angular/platform-browser/animations");
var i12 = require("@angular/animations");
var i13 = require("@angular/router");
var i14 = require("../../../../src/app/home/home.component");
var i15 = require("../../../../src/app/about/about.component");
var i16 = require("../../../../src/app/app-routing.module");
var i17 = require("../../../../src/app/app.module");
exports.AppServerModuleNgFactory = i0.ɵcmf(i1.AppServerModule, [i2.AppComponent], function (_l) {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.HomeComponentNgFactory, i4.AboutComponentNgFactory, i5.AppComponentNgFactory]],
            [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i6.BrowserXhr, i7.ɵc, []), i0.ɵmpd(4608, i6.ResponseOptions, i6.BaseResponseOptions, []), i0.ɵmpd(4608, i6.XSRFStrategy, i7.ɵd, []), i0.ɵmpd(4608, i6.XHRBackend, i6.XHRBackend, [i6.BrowserXhr, i6.ResponseOptions, i6.XSRFStrategy]),
        i0.ɵmpd(4608, i6.RequestOptions, i6.BaseRequestOptions, []), i0.ɵmpd(5120, i6.Http, i7.ɵe, [i6.XHRBackend, i6.RequestOptions]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵm, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i8.NgLocalization, i8.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵk, []),
        i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵl, []), i0.ɵmpd(4608, i9.DomSanitizer, i9.ɵe, [i9.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i9.DomSanitizer]),
        i0.ɵmpd(4608, i9.HAMMER_GESTURE_CONFIG, i9.HammerGestureConfig, []),
        i0.ɵmpd(5120, i9.EVENT_MANAGER_PLUGINS, function (p0_0, p1_0, p2_0, p2_1) {
            return [new i9.ɵDomEventsPlugin(p0_0), new i9.ɵKeyEventsPlugin(p1_0), new i9.ɵHammerGesturesPlugin(p2_0, p2_1)];
        }, [i9.DOCUMENT, i9.DOCUMENT, i9.DOCUMENT, i9.HAMMER_GESTURE_CONFIG]), i0.ɵmpd(4608, i9.EventManager, i9.EventManager, [i9.EVENT_MANAGER_PLUGINS, i0.NgZone]),
        i0.ɵmpd(135680, i9.ɵDomSharedStylesHost, i9.ɵDomSharedStylesHost, [i9.DOCUMENT]),
        i0.ɵmpd(4608, i9.ɵDomRendererFactory2, i9.ɵDomRendererFactory2, [i9.EventManager,
            i9.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i7.ɵb, i7.ɵb, [i9.DOCUMENT, [2, i9.ɵTRANSITION_ID]]),
        i0.ɵmpd(6144, i9.ɵSharedStylesHost, null, [i7.ɵb]), i0.ɵmpd(4608, i7.ɵServerRendererFactory2, i7.ɵServerRendererFactory2, [i0.NgZone, i9.DOCUMENT, i9.ɵSharedStylesHost]),
        i0.ɵmpd(4608, i10.AnimationDriver, i10.ɵNoopAnimationDriver, []),
        i0.ɵmpd(5120, i10.ɵAnimationStyleNormalizer, i11.ɵd, []), i0.ɵmpd(4608, i10.ɵAnimationEngine, i11.ɵb, [i10.AnimationDriver, i10.ɵAnimationStyleNormalizer]),
        i0.ɵmpd(5120, i0.RendererFactory2, i7.ɵa, [i7.ɵServerRendererFactory2, i10.ɵAnimationEngine,
            i0.NgZone]), i0.ɵmpd(4352, i0.Testability, null, []),
        i0.ɵmpd(4608, i9.Meta, i9.Meta, [i9.DOCUMENT]), i0.ɵmpd(4608, i9.Title, i9.Title, [i9.DOCUMENT]), i0.ɵmpd(4608, i12.AnimationBuilder, i11.ɵBrowserAnimationBuilder, [i0.RendererFactory2]), i0.ɵmpd(5120, i13.ActivatedRoute, i13.ɵf, [i13.Router]),
        i0.ɵmpd(4608, i13.NoPreloading, i13.NoPreloading, []), i0.ɵmpd(6144, i13.PreloadingStrategy, null, [i13.NoPreloading]), i0.ɵmpd(135680, i13.RouterPreloader, i13.RouterPreloader, [i13.Router, i0.NgModuleFactoryLoader,
            i0.Compiler, i0.Injector, i13.PreloadingStrategy]), i0.ɵmpd(4608, i13.PreloadAllModules, i13.PreloadAllModules, []), i0.ɵmpd(5120, i13.ROUTER_INITIALIZER, i13.ɵi, [i13.ɵg]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) {
            return [p0_0];
        }, [i13.ROUTER_INITIALIZER]), i0.ɵmpd(512, i6.HttpModule, i6.HttpModule, []),
        i0.ɵmpd(512, i8.CommonModule, i8.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i9.ɵa, []), i0.ɵmpd(1024, i0.NgProbeToken, function () {
            return [i13.ɵb()];
        }, []), i0.ɵmpd(512, i13.ɵg, i13.ɵg, [i0.Injector]), i0.ɵmpd(256, i0.APP_ID, 'ang4-seo-pre', []), i0.ɵmpd(2048, i9.ɵTRANSITION_ID, null, [i0.APP_ID]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p0_1, p1_0, p2_0, p2_1, p2_2) {
            return [i9.ɵc(p0_0, p0_1), i13.ɵh(p1_0), i9.ɵf(p2_0, p2_1, p2_2)];
        }, [[2, i9.NgProbeToken], [2, i0.NgProbeToken], i13.ɵg, i9.ɵTRANSITION_ID, i9.DOCUMENT,
            i0.Injector]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ɵe, i0.ɵe, [i0.NgZone, i0.ɵConsole,
            i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]),
        i0.ɵmpd(2048, i0.ApplicationRef, null, [i0.ɵe]), i0.ɵmpd(512, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(512, i9.BrowserModule, i9.BrowserModule, [[3, i9.BrowserModule]]), i0.ɵmpd(512, i11.NoopAnimationsModule, i11.NoopAnimationsModule, []), i0.ɵmpd(512, i7.ServerModule, i7.ServerModule, []), i0.ɵmpd(1024, i13.ɵa, i13.ɵd, [[3, i13.Router]]),
        i0.ɵmpd(512, i13.UrlSerializer, i13.DefaultUrlSerializer, []), i0.ɵmpd(512, i13.ChildrenOutletContexts, i13.ChildrenOutletContexts, []),
        i0.ɵmpd(256, i13.ROUTER_CONFIGURATION, {}, []), i0.ɵmpd(1024, i8.LocationStrategy, i13.ɵc, [i8.PlatformLocation, [2, i8.APP_BASE_HREF], i13.ROUTER_CONFIGURATION]),
        i0.ɵmpd(512, i8.Location, i8.Location, [i8.LocationStrategy]), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i0.SystemJsNgModuleLoader, [i0.Compiler, [2, i0.SystemJsNgModuleLoaderConfig]]), i0.ɵmpd(1024, i13.ROUTES, function () {
            return [[{ path: 'home', component: i14.HomeComponent }, { path: 'about', component: i15.AboutComponent },
                    { path: 'images', loadChildren: 'app/image-gallery/image-gallery.module#ImageGalleryModule' },
                    { path: '', redirectTo: '/home', pathMatch: 'full' }]];
        }, []), i0.ɵmpd(1024, i13.Router, i13.ɵe, [i0.ApplicationRef, i13.UrlSerializer,
            i13.ChildrenOutletContexts, i8.Location, i0.Injector, i0.NgModuleFactoryLoader,
            i0.Compiler, i13.ROUTES, i13.ROUTER_CONFIGURATION, [2, i13.UrlHandlingStrategy],
            [2, i13.RouteReuseStrategy]]), i0.ɵmpd(512, i13.RouterModule, i13.RouterModule, [[2, i13.ɵa], [2, i13.Router]]), i0.ɵmpd(512, i16.AppRoutingModule, i16.AppRoutingModule, []), i0.ɵmpd(512, i17.AppModule, i17.AppModule, []),
        i0.ɵmpd(512, i1.AppServerModule, i1.AppServerModule, [])]);
});
//# sourceMappingURL=app.server.module.ngfactory.js.map