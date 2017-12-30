import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the GetKeysPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'getKeys',
})
export class GetKeysPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
    transform(value: any, args: any[] = null): any {
    	if(value)
        {return Object.keys(value);}//.map(key => value[key]);}
    	return null;
    }
}
