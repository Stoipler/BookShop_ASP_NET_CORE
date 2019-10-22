import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-toast-container',
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.css']
})
export class ToastContainerComponent implements OnInit {

  constructor(public toastService: ToastService) { }

  ngOnInit() {
  }

}
