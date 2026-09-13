import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {

  title: any = null;
  message: any = null;
  
  constructor(
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  cancel(){
    this.activeModal.close(false);
  }

  confirm(){
    this.activeModal.close(true);
  }

}
