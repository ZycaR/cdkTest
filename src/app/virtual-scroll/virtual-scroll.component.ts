import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.less']
})
export class VirtualScrollComponent {
    items = Array(500)
        .fill(1)
        .map((_, i) => `Item ${i}`);
}