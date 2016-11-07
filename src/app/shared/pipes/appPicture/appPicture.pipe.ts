import { Pipe, PipeTransform } from '@angular/core';
import { layoutPaths } from '../../../theme';

@Pipe({name: 'appPicture'})
export class AppPicturePipe implements PipeTransform {

  transform(input: string): string {
    return layoutPaths.images.root + input;
  }
}
