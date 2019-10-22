import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faPencilAlt, faPlusCircle, faBackspace, faTimes, faArrowRight } from '@fortawesome/free-solid-svg-icons';
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

  public printedEditionsRequestModel: PrintedEditionRequestModel;
  public printedEditionsResponseModel: PrintedEditionResponseModel;
  public authorRequestModel: AuthorRequestModel;
  public authorResponseModel: AuthorResponseModel;
  public printedEdition: PrintedEditionModel;
  public filterForm: FilterForm;
  public Currency = Currency;
  public SortCriteria = SortCriteria;
  public PrintedEditionType = PrintedEditionType;
  public faTimes = faTimes;
  public faPencilAlt = faPencilAlt;
  public faPlusCircle = faPlusCircle;

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

  public getAuthors() {
    this.authorRequestModel.ignoreAuthorsList = this.printedEdition.authorModels;
    this.authorService.getAuthors(this.authorRequestModel).subscribe(
      (data: AuthorResponseModel) => {
        this.authorResponseModel = data;
      }
    );
  }

  public addAuthorToList(author: AuthorModel) {
    this.printedEdition.authorModels.push(author);
    this.getAuthors();
  }

  public removeFromList(author: AuthorModel) {
    this.printedEdition.authorModels.splice(this.authorRequestModel.ignoreAuthorsList.indexOf(author), 1);
    this.getAuthors();
  }

  public edit(printedEdition: PrintedEditionModel) {
    this.printedEdition = printedEdition;
  }

  public cancel() {
    this.printedEdition = new PrintedEditionModel();
    this.authorRequestModel = new AuthorRequestModel();
    this.getPrintedEditions();
  }
  public save() {
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

  public openModal(content) {
    this.getAuthors();
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', backdrop: 'static' }).result.then(
      (result) => {
        this.cancel();
      },
      (reason) => {
        this.cancel();
      });
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
class EnumParams {
  public id: number;
  public name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
class FilterForm {
  public priceFrom: number;
  public priceTo: number;
  public sortCriteria: SortCriteria;
  public printedEditionType: PrintedEditionType;
  constructor() {
    this.initializeDefaultModel();
  }

  private initializeDefaultModel() {
    this.priceFrom = 0;
    this.priceTo = 0;
    this.sortCriteria = SortCriteria.None;
    this.printedEditionType = PrintedEditionType.None;
  }

}
