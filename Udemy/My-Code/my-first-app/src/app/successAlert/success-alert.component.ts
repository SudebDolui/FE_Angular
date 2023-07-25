import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: '<h3>Success</h3>',
  styles: [
    `
      h3 {
        background-color: palegreen;
        padding: 20px;
        border: 1px solid green;
      }
    `,
  ],
})
export class SuccessAlert {}
