import { Component, OnInit } from '@angular/core';
import { PrintedEditionService } from 'src/app/services/printed-edition.service';
import { PrintedEditionModel } from 'src/app/models/printedEditionModel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SearchParams } from 'src/app/models/searchParams';
import { SortCriteria } from 'src/app/enums/sortCriteria';
import { PrintedEditionType } from 'src/app/enums/printedEditionType';
import { PrintedEditionPageModel } from 'src/app/models/printedEditionPageModel';
import { Currency } from 'src/app/enums/currency';

@Component({
  selector: 'app-printed-editions',
  templateUrl: './printed-editions.component.html',
  styleUrls: ['./printed-editions.component.css'],
  providers: [PrintedEditionService]
})
export class PrintedEditionsComponent implements OnInit {

  printedEdition: PrintedEditionModel = new PrintedEditionModel();
  printedEditions: PrintedEditionModel[];
  searchParams: SearchParams = new SearchParams();
  parametersSetting: ParametersSetting = new ParametersSetting();
  currentPage: number;
  pageSize: number;
  count: number;
  currency = Currency;
  sortCriteria = SortCriteria;
  printedEditionType = PrintedEditionType;
  constructor(private modalService: NgbModal, private printedEditionService: PrintedEditionService) { }

  ngOnInit() {
    this.loadPrintedEditions();
  }
  sortingKeys(): Array<string> {
    var keys = Object.keys(this.sortCriteria);
    return keys.slice(keys.length / 2);
  }
  typeKeys(): Array<string> {
    var keys = Object.keys(this.printedEditionType);
    return keys.slice(keys.length / 2);
  }

  loadPrintedEditions() {
    this.printedEditionService.get(this.searchParams)
      .subscribe((data: PrintedEditionPageModel) => {
        this.printedEditions = data.printedEditionModels;
        this.currentPage = data.currentPage;
        this.pageSize = data.pageSize;
        this.count = data.count;
      });
  }

  goTo() {
    this.searchParams.page = this.currentPage;
    this.printedEditionService.get(this.searchParams)
      .subscribe((data: PrintedEditionPageModel) => {
        this.printedEditions = data.printedEditionModels;
        // this.currentPage = data.currentPage;
        this.pageSize = data.pageSize;
        this.count = data.count;
      });
  }
  setSearchParams() {
    this.searchParams.priceFrom = this.parametersSetting.priceFrom;
    this.searchParams.priceTo = this.parametersSetting.priceTo;
    this.searchParams.printedEditionType = this.parametersSetting.printedEditionType;
    this.searchParams.sortCriteria = this.parametersSetting.sortCriteria;
    this.loadPrintedEditions();
  }
}

class ParametersSetting {
  public priceFrom: number;
  public priceTo: number;
  public sortCriteria: SortCriteria;
  public printedEditionType: PrintedEditionType;

  constructor(
  ) {
    this.priceFrom = 0;
    this.priceTo = 0;
    this.sortCriteria = SortCriteria.None;
    this.printedEditionType = PrintedEditionType.None;
  }

}