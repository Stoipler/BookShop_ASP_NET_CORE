import { Component, OnInit } from '@angular/core';
import { PrintedEditionModel } from 'src/app/printed-edition/models/printedEditionModel';
import { SearchParams } from 'src/app/printed-edition/models/searchParams';
import { SortCriteria } from 'src/app/printed-edition/enums/sortCriteria';
import { PrintedEditionType } from 'src/app/printed-edition/enums/printedEditionType';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductManagementService } from '../services/product-management.service';
import { PageModel } from 'src/app/printed-edition/models/pageModel';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {
  printedEdition: PrintedEditionModel = new PrintedEditionModel();
  printedEditions: PrintedEditionModel[];
  searchParams: SearchParams = new SearchParams();
  parametersSetting: ParametersSetting = new ParametersSetting();
  currentPage: number;
  pageSize: number;
  count: number;

  sortCriteria = SortCriteria;
  printedEditionType = PrintedEditionType;
  constructor(private modalService: NgbModal, private productManagementService: ProductManagementService) { }

  ngOnInit() {
    this.searchParams.pageSize=10;
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

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.loadPrintedEditions();
    }, (reason) => {
      this.cancel();
      this.loadPrintedEditions();
    });
  }

  cancel() {
    this.printedEdition = new PrintedEditionModel();
  }
  save() {
    if (this.printedEdition.id == null) {
      this.productManagementService.createPrintedEdition(this.printedEdition)
        .subscribe((data: PrintedEditionModel) => this.loadPrintedEditions());
    }
    //  else {
    //   this.printedEditionService.updatePrintedEdition(this.printedEdition)
    //     .subscribe(data => this.loadPrintedEditions());
    // }
    this.cancel();
  }

  loadPrintedEditions() {
    this.productManagementService.get(this.searchParams)
      .subscribe((data: PageModel) => {
        this.printedEditions = data.printedEditionModels;
        this.currentPage = data.currentPage;
        this.pageSize = data.pageSize;
        this.count = data.count;
      });
  }

  goTo() {
    this.searchParams.page = this.currentPage;
    this.productManagementService.get(this.searchParams)
      .subscribe((data: PageModel) => {
        this.printedEditions = data.printedEditionModels;
        this.currentPage = data.currentPage;
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