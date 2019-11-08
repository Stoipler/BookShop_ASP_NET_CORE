import { Injectable } from '@angular/core';
import { EnumParameters } from 'src/app/models/enumParameters';

@Injectable({
  providedIn: 'root'
})
export class EnumService {

  constructor() { }

  public enumMap(typeEnum: any, defaultOptionText: string): Array<EnumParameters> {
    let keys = Object.keys(typeEnum);
    const startIndexWithoutDefault: number = (keys.length / 2) + 1;
    keys = keys.slice(startIndexWithoutDefault);
    const items = new Array();
    const defaultValue = new EnumParameters(0, defaultOptionText);
    items.push(defaultValue);
    keys.forEach((value, index) => {
      const item = new EnumParameters((index + 1), value);
      items.push(item);
    });
    return items;
  }
}

