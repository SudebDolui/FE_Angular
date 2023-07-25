import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `<h3>Warning Alert</h3>`,
  styles: [
    `
      h3 {
        background-color: mistyrose;
        padding: 20px;
        border: 1px solid red;
      }
    `,
  ],
})
export class WarningAlert {}
