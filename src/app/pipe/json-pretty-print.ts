import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'jsonPrettyPrint', standalone: true })
export class JSONPrettyPrintPipe implements PipeTransform {
  transform(jsonObject: any): string {
    if (!jsonObject) return '';
    return JSON.stringify(jsonObject, null, 2); // 2 spaces for indentation
  }
}
