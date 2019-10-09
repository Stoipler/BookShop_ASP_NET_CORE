import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faBookDead } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { PrintedEditionPageModel } from 'src/app/models/printedEditionPageModel';
import { SearchParams } from 'src/app/models/searchParams';
import { PrintedEditionModel } from 'src/app/models/printedEditionModel';
import { SortCriteria } from 'src/app/enums/sortCriteria';
import { Currency } from 'src/app/enums/currency';
import { PrintedEditionType } from 'src/app/enums/printedEditionType';
import { AuthorModel } from 'src/app/models/authorModel';
import { AuthorService } from 'src/app/services/author.service';
import { AuthorSearchParams } from 'src/app/models/authorSearchParams';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import { PrintedEditionService } from 'src/app/services/printed-edition.service';


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
  faPencilAlt = faPencilAlt;
  sortCriteria = SortCriteria;
  currency = Currency;
  faBookDead = faBookDead;
  faPlusCircle = faPlusCircle;
  faTimes=faTimes;
  printedEditionType = PrintedEditionType;
  authorSearchParams: AuthorSearchParams = new AuthorSearchParams();
  authors: AuthorModel[];

  constructor(
    private modalService: NgbModal,
    private printedEditionService: PrintedEditionService,
    private authorService: AuthorService,
    private config:NgbDropdownConfig) { 
      config.autoClose = false;
    }

  ngOnInit() {
    this.searchParams.pageSize = 10;
    this.loadPrintedEditions();
    this.parametersSetting.sortCriteria = SortCriteria.None;
  }

  editPrintedEdition(p:PrintedEditionModel){
      this.printedEdition=p;
  }

  addAuthorToList(author: AuthorModel) {
    this.printedEdition.authorModels.push(author);
    this.loadAuthors();
  }
  removeFromList(author: AuthorModel) {
    this.printedEdition.authorModels.splice(this.authorSearchParams.authorsList.indexOf(author), 1)
    this.loadAuthors();
  }

  loadAuthors() {
    this.authorSearchParams.authorsList=this.printedEdition.authorModels;
    this.authorService.getAuthors(this.authorSearchParams).subscribe((data: AuthorModel[]) => {
      this.authors = data;
    })
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

  open(content) {
    this.loadAuthors();
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
    if (!this.printedEdition.id) {
      this.printedEditionService.createPrintedEdition(this.printedEdition)
        .subscribe((data: PrintedEditionModel) => this.loadPrintedEditions());
    }
     else {
      this.printedEditionService.updatePrintedEdition(this.printedEdition)
        .subscribe(data => this.loadPrintedEditions());
    }
    this.cancel();
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

class EnumParams {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}