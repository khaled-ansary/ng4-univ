"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var import0 = require("./app.component.scss.shim.ngstyle");
var import1 = require("@angular/core");
var import2 = require("@angular/router");
var import3 = require("../../../../src/app/app.component");
var styles_AppComponent = [import0.styles];
exports.RenderType_AppComponent = import1.ɵcrt({
    encapsulation: 0,
    styles: styles_AppComponent,
    data: {}
});
function View_AppComponent_0(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 4, 'div', [[
                'style',
                'text-align:center'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵeld(0, null, null, 1, 'h1', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, [
            '\n        Welcome to ',
            '!!\n    '
        ])),
        (l()(), import1.ɵted(null, ['\n'])),
        (l()(), import1.ɵted(null, ['\n\n'])),
        (l()(), import1.ɵeld(16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
        import1.ɵdid(147456, null, 0, import2.RouterOutlet, [
            import2.RouterOutletMap,
            import1.ViewContainerRef,
            import1.ComponentFactoryResolver,
            [
                8,
                null
            ]
        ], null, null)
    ], null, function (ck, v) {
        var co = v.component;
        var currVal_0 = co.title;
        ck(v, 3, 0, currVal_0);
    });
}
exports.View_AppComponent_0 = View_AppComponent_0;
function View_AppComponent_Host_0(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 1, 'app-root', [], null, null, null, View_AppComponent_0, exports.RenderType_AppComponent)),
        import1.ɵdid(49152, null, 0, import3.AppComponent, [], null, null)
    ], null, null);
}
exports.AppComponentNgFactory = import1.ɵccf('app-root', import3.AppComponent, View_AppComponent_Host_0, {}, {}, []);
//# sourceMappingURL=app.component.ngfactory.js.map