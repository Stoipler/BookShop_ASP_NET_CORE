import { Component, OnInit } from '@angular/core';
import { PrintedEditionModel } from 'src/app/printed-edition/models/printedEditionModel';
import { SearchParams } from 'src/app/printed-edition/models/searchParams';
import { SortCriteria } from 'src/app/printed-edition/enums/sortCriteria';
import { PrintedEditionType } from 'src/app/printed-edition/enums/printedEditionType';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductManagementService } from '../services/product-management.service';
import { PageModel } from 'src/app/printed-edition/models/pageModel';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faBookDead } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { callbackify } from 'util';

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
  faBookDead = faBookDead;
  faPlusCircle = faPlusCircle;
  printedEditionType = PrintedEditionType;

  constructor(private modalService: NgbModal, private productManagementService: ProductManagementService) { }

  ngOnInit() {
    this.searchParams.pageSize = 10;
    this.loadPrintedEditions();
    this.parametersSetting.sortCriteria = SortCriteria.None;
  }

  enumMap(typeEnum: any,defaultOptionText:string):Array<EnumParams>{
    let keys = Object.keys(typeEnum);
    let startIndexWithoutDefault: number = (keys.length / 2) + 1;
    keys = keys.slice(startIndexWithoutDefault);
    let items=new Array();
    items.push(new EnumParams(0,defaultOptionText))
    keys.forEach(function(value,index){
      let item=new EnumParams((index+1),value);
      items.push(item);
    })
    return items;
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

class EnumParams{
  id:number;
  name: string;
  constructor(id:number,name:string)
  {
    this.id=id;
    this.name=name;  
  }
}