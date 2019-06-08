import { Component, Input } from '@angular/core';


@Component({
    selector: 'loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.css'],
    inputs: ['show']
})
export class LoadingComponent{ 

    @Input()
    public show: Boolean = false;
}