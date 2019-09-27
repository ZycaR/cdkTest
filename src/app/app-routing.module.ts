import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { AppComponent } from './app.component';
import { PortalsComponent } from './portals/portals.component';


const routes: Routes = [
    //{ path: "", component: AppComponent },
    { path: "scroll", component: VirtualScrollComponent },
    { path: "dropdown", component: DropDownComponent },
    { path: "dragdrop", component: DragDropComponent },
    { path: "portals", component: PortalsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
