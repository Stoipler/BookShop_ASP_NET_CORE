import { Component, OnInit } from '@angular/core';
import { DiscountService } from 'src/app/services/discount.service';
import { PrintedEditionService } from 'src/app/services/printed-edition.service';
import { PrintedEditionRequestModel } from 'src/app/models/printedEditionModels/printedEditionRequestModel';

@Component({
  selector: 'app-discount-management',
  templateUrl: './discount-management.component.html',
  styleUrls: ['./discount-management.component.css'],
  providers: [DiscountService, PrintedEditionService]
})
export class DiscountManagementComponent implements OnInit {

  public printedEditionRequestModel: PrintedEditionRequestModel;

  constructor(private discountService: DiscountService, private printedEditionService: PrintedEditionService) {
    this.printedEditionRequestModel = new PrintedEditionRequestModel();
    this.printedEditionRequestModel.withPagination = false;
  }

  ngOnInit() {
  }

  // public getPrintedEditions() {
  //   this.printedEditionService.getPrintedEditions().subscribe();
  // }
}
