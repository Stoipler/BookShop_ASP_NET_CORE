import { Component, OnInit } from '@angular/core';
import { PrintedEditionService } from '../../service/printed-edition.service';
import { PrintedEditionModel } from '../../models/printedEditionModel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-printed-editions',
  templateUrl: './printed-editions.component.html',
  styleUrls: ['./printed-editions.component.css'],
  providers: [PrintedEditionService]
})
export class PrintedEditionsComponent implements OnInit {

  printedEdition: PrintedEditionModel = new PrintedEditionModel();
  printedEditions: PrintedEditionModel[];
  tableMode: boolean = true;

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
    this.tableMode = true;
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
    this.printedEditionService.getPrintedEditions()
      .subscribe((data: PrintedEditionModel[]) => this.printedEditions = data);
  }
}
