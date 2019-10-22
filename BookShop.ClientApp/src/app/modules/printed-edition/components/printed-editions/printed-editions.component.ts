import { Component, OnInit } from '@angular/core';
import { PrintedEditionService } from 'src/app/services/printed-edition.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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

  printedEditionsRequestModel: PrintedEditionRequestModel;
  printedEditionsResponseModel: PrintedEditionResponseModel;
  Currency = Currency;
  filterForm: FilterForm;

  SortCriteria = SortCriteria;
  PrintedEditionType = PrintedEditionType;

  constructor( private printedEditionService: PrintedEditionService) {
    this.printedEditionsRequestModel = new PrintedEditionRequestModel();
    this.printedEditionsResponseModel = new PrintedEditionResponseModel();
    this.filterForm = new FilterForm();
  }

  ngOnInit() {
    this.getPrintedEditions();

  }

  getPrintedEditions() {
    this.printedEditionService.getPrintedEditions(this.printedEditionsRequestModel).subscribe(
      (data: PrintedEditionResponseModel) => {
        this.printedEditionsResponseModel = data;
      }
    );
  }
  setSearchParameters() {
    this.printedEditionsRequestModel.priceFrom = this.filterForm.priceFrom;
    this.printedEditionsRequestModel.priceTo = this.filterForm.priceTo;
    this.printedEditionsRequestModel.printedEditionType = this.filterForm.printedEditionType;
    this.printedEditionsRequestModel.sortCriteria = this.filterForm.sortCriteria;
    this.getPrintedEditions();
  }
  enumMap(typeEnum: any, defaultOptionText: string): Array<EnumParams> {
    let keys = Object.keys(typeEnum);
    let startIndexWithoutDefault: number = (keys.length / 2) + 1;
    keys = keys.slice(startIndexWithoutDefault);
    let items = new Array();
    items.push(new EnumParams(0, defaultOptionText))
    keys.forEach(function (value, index) {
      let item = new EnumParams((index + 1), value);
      items.push(item);
    })
    return items;
  }
}

class FilterForm {
  priceFrom: number;
  priceTo: number;
  sortCriteria: SortCriteria;
  printedEditionType: PrintedEditionType;
  constructor() {
    this.priceFrom = 0;
    this.priceTo = 0;
    this.sortCriteria = SortCriteria.None;
    this.printedEditionType = PrintedEditionType.None;
  }
}
class EnumParams {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}