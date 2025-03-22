import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'stripHtmlTags', standalone: true })
export class StripHTMLTagsPipe implements PipeTransform {
  transform(html: string): string {
    if (!html) return '';
    return html.replace(/<[^>]*>/g, '');
  }
}
