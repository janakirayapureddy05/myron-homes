import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
    name: 'SearchPipe'
})
@Injectable()
export class SearchPipe implements PipeTransform {
    transform(items: any[],  value: string, field: string): any[] {
        if (!items) {
            return [];
        }
        if (!value) {
            return items;
        }
        if (!field) {
            return items.filter( item => {
                for (const propt in item) {
                    if (item[propt].toLowerCase().includes(value.toLowerCase())) {
                        return item;
                    }
                }
            });
        } else {
            return items.filter(singleItem => singleItem[field].toLowerCase().includes(value.toLowerCase()));
        }
    }
}
