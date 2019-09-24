import { Component, OnInit } from '@angular/core';
import { PrintedEditionModel } from 'src/app/models/printedEditionModel';
import { ActivatedRoute } from '@angular/router';
import { PrintedEditionService } from 'src/app/services/printed-edition.service';

@Component({
  selector: 'app-printed-edition-details',
  templateUrl: './printed-edition-details.component.html',
  styleUrls: ['./printed-edition-details.component.css'],
  providers:[PrintedEditionService]
})

export class PrintedEditionDetailsComponent implements OnInit {

  printedEdition: PrintedEditionModel=new PrintedEditionModel();

  constructor(private route: ActivatedRoute, private printedEditionService: PrintedEditionService)
   { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.printedEditionService.getById(+params.get('printedEditionId'))
      .subscribe((data: PrintedEditionModel) => this.printedEdition=data);
    });
  }

}
