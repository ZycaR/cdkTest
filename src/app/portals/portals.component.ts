import { Component, OnInit, ViewChild, ComponentFactoryResolver, ApplicationRef, Injector, OnDestroy } from '@angular/core';
import { CdkPortal, DomPortalHost } from '@angular/cdk/portal';

@Component({
    selector: 'app-portals',
    templateUrl: './portals.component.html',
    styleUrls: ['./portals.component.less']
})
export class PortalsComponent implements OnInit, OnDestroy {

    @ViewChild(CdkPortal, { static: true })
    private portal: CdkPortal;

    private wnd: Window = null;

    constructor(
        private cfr: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injectior: Injector
    ) { }

    ngOnInit(): void {
        this.wnd = window.open('', '', 'width=600, heigth=600');
        this.copyStyles(window.document, this.wnd.document);
        const host: DomPortalHost = new DomPortalHost(
            this.wnd.document.body,
            this.cfr,
            this.appRef,
            this.injectior
        );
        host.attach(this.portal);
    }

    ngOnDestroy(): void {
        this.wnd.close();
    }

    copyStyles(sourceDoc: Document, targetDoc: Document) {
        Array.from(sourceDoc.styleSheets).forEach(styleSheet => {
          if (styleSheet["cssRules"]) { 
            const newStyleEl = sourceDoc.createElement('style');
      
            Array.from(styleSheet["cssRules"]).forEach(cssRule => {
              // write the text of each rule into the body of the style element
              newStyleEl.appendChild(sourceDoc.createTextNode(cssRule["cssText"]));
            });
      
            targetDoc.head.appendChild(newStyleEl);
          } else if (styleSheet.href) { // for <link> elements loading CSS from a URL
            const newLinkEl = sourceDoc.createElement('link');
      
            newLinkEl.rel = 'stylesheet';
            newLinkEl.href = styleSheet.href;
            targetDoc.head.appendChild(newLinkEl);
          }
        });
      }
}
