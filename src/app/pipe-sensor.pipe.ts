import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeSensor'
})
export class PipeSensorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let currentValue : String = value;
    let newValue : String= 
    currentValue.toLocaleLowerCase().replace("note", "censored");
    return newValue;
  }

}
