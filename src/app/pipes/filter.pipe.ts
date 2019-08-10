import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform{
    transform(value: any, filterBy: String) {
        return filterBy == undefined ? value 
            : value.filter(x => this.normaliza(x.name).indexOf(this.normaliza(filterBy)) >= 0);
    }

    normaliza(arg: any): string {
        arg = arg.toLowerCase().trim();
        arg = arg.replace(/[ãâáà]/gim, "a");
        return arg;
    }
}
