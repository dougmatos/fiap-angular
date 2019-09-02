import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({name: 'order'})
export class OrderPipe implements PipeTransform {
    transform(value: any, direction: any) {
        if (direction === undefined) { return value; }
        return _.orderBy(value, ['name'], [direction]);
    }
}
