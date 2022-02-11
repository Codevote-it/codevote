import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-edit-title',
  templateUrl: './edit-title.component.html',
  styleUrls: ['./edit-title.component.scss'],
})
export class EditTitleComponent {
  @Output() onClose = new EventEmitter();
}
