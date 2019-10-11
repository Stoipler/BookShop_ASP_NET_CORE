import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faPencilAlt, faPlusCircle, faBackspace, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Currency } from 'src/app/enums/currency';
import { PrintedEditionType } from 'src/app/enums/printedEditionType';
import { AuthorService } from 'src/app/services/author.service';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { PrintedEditionService } from 'src/app/services/printed-edition.service';
import { PrintedEditionResponseModel } from 'src/app/models/printedEditionModels/printedEditionResponseModel';
import { PrintedEditionRequestModel } from 'src/app/models/printedEditionModels/printedEditionRequestModel';
import { PrintedEditionModel } from 'src/app/models/printedEditionModels/printedEditionModel';
import { SortCriteria } from 'src/app/enums/sortCriteria';
import { AuthorRequestModel } from 'src/app/models/authorModels/authorRequestModel';
import { AuthorResponseModel } from 'src/app/models/authorModels/authorResponseModel';
import { AuthorModel } from 'src/app/models/authorModels/authorModel';


@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css'],
  providers: [PrintedEditionService]
})
export class ProductManagementComponent implements OnInit {
  printedEditionsRequestModel: PrintedEditionRequestModel;
  printedEditionsResponseModel: PrintedEditionResponseModel;
  authorRequestModel: AuthorRequestModel;
  authorResponseModel: AuthorResponseModel;
  printedEdition: PrintedEditionModel;
  filterForm: FilterForm;
  Currency = Currency;
  SortCriteria = SortCriteria;
  PrintedEditionType = PrintedEditionType;
  faTimes=faTimes;
  faPencilAlt = faPencilAlt;
  faBackspace = faBackspace;
  faPlusCircle = faPlusCircle;

  constructor(
    private printedEditionService: PrintedEditionService,
    private authorService: AuthorService,
    private modalService: NgbModal,
    private config: NgbDropdownConfig) {

    this.printedEditionsRequestModel = new PrintedEditionRequestModel();
    this.printedEditionsResponseModel = new PrintedEditionResponseModel();
    this.authorRequestModel = new AuthorRequestModel();
    this.authorResponseModel = new AuthorResponseModel();
    this.printedEdition = new PrintedEditionModel();
    this.printedEditionsRequestModel.pageSize = 10;
    this.config.autoClose = false;
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
  getAuthors() {
    this.authorRequestModel.ignoreAuthorsList = this.printedEdition.authorModels;
    this.authorService.getAuthors(this.authorRequestModel).subscribe(
      (data: AuthorResponseModel) => {
        this.authorResponseModel = data;
      }
    );
  }

  addAuthorToList(author: AuthorModel) {
    this.printedEdition.authorModels.push(author);
    this.getAuthors();
  }
  removeFromList(author: AuthorModel) {
    this.printedEdition.authorModels.splice(this.authorRequestModel.ignoreAuthorsList.indexOf(author), 1)
    this.getAuthors();
  }

  edit(printedEdition: PrintedEditionModel) {
    this.printedEdition = printedEdition;
  }
  cancel() {
    this.printedEdition = new PrintedEditionModel();
    this.authorRequestModel = new AuthorRequestModel();
    this.getPrintedEditions();
  }
  save() {
    if (this.printedEdition.id) {
      this.printedEditionService.updatePrintedEdition(this.printedEdition).subscribe(
        (success) => {
          this.getPrintedEditions();
        }
      );
    }
    if (!this.printedEdition.id) {
      this.printedEditionService.createPrintedEdition(this.printedEdition).subscribe(
        (success) => {
          this.getPrintedEditions();
        }
      );
    }
  }

  openModal(content) {
    this.getAuthors();
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', backdrop: 'static' }).result.then(
      (result) => {
        this.cancel();
      },
      (reason) => {
        this.cancel();
      });
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
class EnumParams {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
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