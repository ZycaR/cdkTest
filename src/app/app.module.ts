import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { OverlayModule } from '@angular/cdk/overlay';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';

import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { PortalsComponent } from './portals/portals.component';

@NgModule({
    declarations: [
        AppComponent,
        VirtualScrollComponent,
        DropDownComponent,
        DragDropComponent,
        PortalsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ScrollingModule,
        OverlayModule,
        DragDropModule,
        PortalModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
