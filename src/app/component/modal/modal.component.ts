import { Component } from '@angular/core';
import { IModalDialog } from 'ngx-modal-dialog';

@Component({
    selector: 'selector',
    templateUrl: 'fileName.component.html'
})
export class ComponentNameComponent implements IModalDialog {

    actionButtons;
 
  constructor() {
    this.actionButtons = [
      { text: 'Close' }, // no special processing here
      { text: 'I will always close', onAction: () => true },
      { text: 'I never close', onAction: () => false }
    ];
  }
 
  dialogInit() {
    // no processing needed
  }

}