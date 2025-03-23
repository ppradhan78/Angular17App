import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customerFilterImpure',
  pure: false, // Setting pure to false makes this an impure pipe
  standalone:true
})

export class customerFilterImpure implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    let filterItem: any[] = [] as any;
    if (!items || !searchText) {
      return items;
    }
    filterItem = items.filter(item => item.contactName.toLowerCase().includes(searchText.toLowerCase()));
    return filterItem;
  }
}
