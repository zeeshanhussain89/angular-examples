import { Pipe, PipeTransform } from '@angular/core';
import { Image } from './image.model';

@Pipe({
  name: 'defaultSrc',
})
export class DefaultSrcPipe implements PipeTransform {
  transform(value: string) {
    let urlSrc = value.slice(4, value.length - 1);
    if (urlSrc.length === 0) {
      return 'url(https://img.icons8.com/?size=100&id=y-ATLB0FBoe1&format=png&color=000000)';
    }
    return value;
  }
}
