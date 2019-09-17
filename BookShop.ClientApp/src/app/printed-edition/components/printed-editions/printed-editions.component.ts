import { Component, OnInit } from '@angular/core';
import { PrintedEditionService } from '../../service/printed-edition.service';
import { PrintedEditionModel } from '../../models/printedEditionModel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SearchParams } from '../../models/searchParams';
import { SortCriteria } from '../../enums/sortCriteria';
import { PageModel } from '../../models/pageModel';

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
  currentPage:number;
  pageSize:number;
  count:number;

  sortCriteria = SortCriteria;
  constructor(private modalService: NgbModal, private printedEditionService: PrintedEditionService) { }

  ngOnInit() {
    this.loadPrintedEditions();
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
      this.printedEditionService.createPrintedEdition(this.printedEdition)
        .subscribe((data: PrintedEditionModel) => this.loadPrintedEditions());
    }
    //  else {
    //   this.printedEditionService.updatePrintedEdition(this.printedEdition)
    //     .subscribe(data => this.loadPrintedEditions());
    // }
    this.cancel();
  }

  loadPrintedEditions() {
    this.printedEditionService.get(this.searchParams)
      .subscribe((data: PageModel) => {
        this.printedEditions = data.printedEditionModels;
        this.currentPage=data.currentPage;
        this.pageSize=data.pageSize;
        this.count=data.count;
      });

  }
  getSortedPrintedEditions() {
    this.printedEditionService.get(this.searchParams)
      .subscribe((data: PrintedEditionModel[]) => this.printedEditions = data);
  }
  goToAnotherPage(){
    this.searchParams.page=this.currentPage;
    this.printedEditionService.get(this.searchParams)
      .subscribe((data: PageModel) => {
        this.printedEditions = data.printedEditionModels;
        this.currentPage=data.currentPage;
        this.pageSize=data.pageSize;
        this.count=data.count;
      });
  }
}
