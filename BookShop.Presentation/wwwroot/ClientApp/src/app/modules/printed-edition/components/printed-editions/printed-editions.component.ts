import { Component, OnInit } from '@angular/core';
import { PrintedEditionService } from 'src/app/services/printed-edition.service';
import { PrintedEditionResponseModel } from 'src/app/models/printedEditionModels/printedEditionResponseModel';
import { PrintedEditionRequestModel } from 'src/app/models/printedEditionModels/printedEditionRequestModel';
import { SortCriteria } from 'src/app/enums/sortCriteria';
import { PrintedEditionType } from 'src/app/enums/printedEditionType';
import { Currency } from 'src/app/enums/currency';


@Component({
  selector: 'app-printed-editions',
  templateUrl: './printed-editions.component.html',
  styleUrls: ['./printed-editions.component.css'],
  providers: [PrintedEditionService]
})

export class PrintedEditionsComponent implements OnInit {

  public printedEditionsRequestModel: PrintedEditionRequestModel;
  public printedEditionsResponseModel: PrintedEditionResponseModel;
  public Currency = Currency;
  public filterForm: FilterForm;
  public SortCriteria = SortCriteria;
  public PrintedEditionType = PrintedEditionType;

  constructor(private printedEditionService: PrintedEditionService) {
    this.printedEditionsRequestModel = new PrintedEditionRequestModel();
    this.printedEditionsResponseModel = new PrintedEditionResponseModel();
    this.filterForm = new FilterForm();
  }

  ngOnInit() {
    this.getPrintedEditions();

  }

  public getPrintedEditions() {
    this.printedEditionService.getPrintedEditions(this.printedEditionsRequestModel).subscribe(
      (data: PrintedEditionResponseModel) => {
        this.printedEditionsResponseModel = data;
      }
    );
  }

  public setSearchParameters() {
    this.printedEditionsRequestModel.priceFrom = this.filterForm.priceFrom;
    this.printedEditionsRequestModel.priceTo = this.filterForm.priceTo;
    this.printedEditionsRequestModel.printedEditionType = this.filterForm.printedEditionType;
    this.printedEditionsRequestModel.sortCriteria = this.filterForm.sortCriteria;
    this.getPrintedEditions();
  }

  public enumMap(typeEnum: any, defaultOptionText: string): Array<EnumParams> {
    let keys = Object.keys(typeEnum);
    const startIndexWithoutDefault: number = (keys.length / 2) + 1;
    keys = keys.slice(startIndexWithoutDefault);
    const items = new Array();
    const defaultValue = new EnumParams(0, defaultOptionText);
    items.push(defaultValue);
    keys.forEach((value, index) => {
      const item = new EnumParams((index + 1), value);
      items.push(item);
    });
    return items;
  }
}

class FilterForm {
  public priceFrom: number;
  public priceTo: number;
  public sortCriteria: SortCriteria;
  public printedEditionType: PrintedEditionType;
  constructor() {
    this.priceFrom = 0;
    this.priceTo = 0;
    this.sortCriteria = SortCriteria.None;
    this.printedEditionType = PrintedEditionType.None;
  }
}
class EnumParams {
  public id: number;
  public name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
