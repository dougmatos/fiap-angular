import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {
    transform(value: any, filterBy: string) {
        return filterBy === undefined ? value
            : value.filter((x: { name: any; }) => this.normaliza(x.name).indexOf(this.normaliza(filterBy)) >= 0);
    }

    normaliza(arg: any): string {
        arg = arg.toLowerCase().trim();
        arg = arg.replace(/[ãâáà]/gim, 'a');
        return arg;
    }
}
