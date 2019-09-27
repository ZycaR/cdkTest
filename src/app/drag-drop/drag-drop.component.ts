import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-drag-drop',
    templateUrl: './drag-drop.component.html',
    styleUrls: ['./drag-drop.component.less']
})
export class DragDropComponent {
    todos = Array(50)
        .fill(1)
        .map((_, i) => ({ text: `ToDo ${i}`, value: i }));
    dones = Array(5)
        .fill(1)
        .map((_, i) => ({ text: `Dones ${i}`, value: i }));

    public drop($event: CdkDragDrop<any>) {
        console.log(` From: ${$event.previousIndex} to: ${$event.currentIndex}`);
        if ($event.previousContainer === $event.container)
            moveItemInArray($event.container.data, $event.previousIndex, $event.currentIndex);
        else
            transferArrayItem(
                $event.previousContainer.data,
                $event.container.data,
                $event.previousIndex,
                $event.currentIndex);
    }
}
