import { Component, OnInit } from '@angular/core';
import { DiscountService } from 'src/app/services/discount.service';
import { PrintedEditionService } from 'src/app/services/printed-edition.service';
import { PrintedEditionRequestModel } from 'src/app/models/printedEditionModels/printedEditionRequestModel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EnumService } from 'src/app/services/enum.service';
import { DiscountType } from 'src/app/enums/discountType';
import { EnumParameters } from 'src/app/models/enumParameters';
import { DiscountCreationModel } from 'src/app/models/discountModels/discountCreationModel';
import { PrintedEditionResponseModel } from 'src/app/models/printedEditionModels/printedEditionResponseModel';
import { PrintedEditionModel } from 'src/app/models/printedEditionModels/printedEditionModel';
import { DiscountRequestModel } from 'src/app/models/discountModels/discountRequestModel';
import { DiscountResponseModel } from 'src/app/models/discountModels/discountResponseModel';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-discount-management',
  templateUrl: './discount-management.component.html',
  styleUrls: ['./discount-management.component.css'],
  providers: [DiscountService, PrintedEditionService, EnumService]
})
export class DiscountManagementComponent implements OnInit {


  public DiscountType = DiscountType;
  public faPencilAlt = faPencilAlt;
  public printedEditionRequestModel: PrintedEditionRequestModel;
  public printedEditionResponseModel: PrintedEditionResponseModel;
  public discountCreationModel: DiscountCreationModel;
  public discountRequestModel: DiscountRequestModel;
  public discountResponseModel: DiscountResponseModel;

  constructor(private discountService: DiscountService,
    private printedEditionService: PrintedEditionService,
    private modalService: NgbModal,
    private enumService: EnumService) {

    this.printedEditionRequestModel = new PrintedEditionRequestModel();
    this.printedEditionRequestModel.withPagination = false;
    this.printedEditionResponseModel = new PrintedEditionResponseModel();
    this.discountCreationModel = new DiscountCreationModel();
    this.discountRequestModel = new DiscountRequestModel();
    this.discountResponseModel = new DiscountResponseModel();

  }

  ngOnInit() {
    this.getPrintedEditions();
    this.getDiscounts();
  }

  private getPrintedEditions() {
    this.printedEditionRequestModel.printedEditionIgnoreList = this.discountCreationModel.printedEditionModels;
    this.printedEditionService.getPrintedEditions(this.printedEditionRequestModel).subscribe(
      (data: PrintedEditionResponseModel) => {
        this.printedEditionResponseModel = data;
      }
    );
  }

  public enumMap(typeEnum: any, defaultOptionText: string): EnumParameters[] {
    return this.enumService.enumMap(typeEnum, defaultOptionText);
  }

  public addDiscount() {
    this.discountService.addDiscount(this.discountCreationModel).subscribe();
  }

  public addPrintedEditionToDiscount(printedEdition: PrintedEditionModel) {
    this.discountCreationModel.printedEditionModels.push(printedEdition);
    this.getPrintedEditions();
  }
  public removePrintedEditionFromDiscount(printedEdition: PrintedEditionModel) {
    this.discountCreationModel.printedEditionModels
      .splice(this.printedEditionRequestModel.printedEditionIgnoreList.indexOf(printedEdition), 1);
    this.getPrintedEditions();
  }

  public getDiscounts() {
    this.discountService.getDiscounts(this.discountRequestModel).subscribe(
      (data: DiscountResponseModel) => {
        this.discountResponseModel = data;
      }
    );
  }

  public openModal(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', backdrop: 'static' }).result.then(
      () => {
        this.discountCreationModel = new DiscountCreationModel();
      },
      () => {
        this.discountCreationModel = new DiscountCreationModel();
      });
  }
}
