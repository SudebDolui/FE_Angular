/* 
-> Task:
  --> Add a button which says "Display Details"
  --> Add a paragraph with any context of your choice (E.g "Secret Password = Tuna")
  --> Toggle displaying of that paragraph with the button created in the first step.
  --> Log all button clicks in an array and output that array below the secret paragraph (Maybe log a timestamp or simply an increasing number.)
  --> Starting at the 5th log item, give all future log items a blue background (via ngStyle) and while color (via ngClass)
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-three',
  templateUrl: './assignment-three.component.html',
  // styleUrls: ['./assignment-three.component.css'],
  // styles: [
  //   `
  //     .changeBackground {
  //       color: #fff;
  //     }
  //   `,
  // ],
  // --> Trainer Code
  styleUrls: ['./assignment-three.component.css'],
})
export class AssignmentThreeComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  // --> My Code
  // toggleSwitch = false;
  // count = 0;
  // clickArray = [];
  // displayToggler() {
  //   this.toggleSwitch = !this.toggleSwitch;
  //   console.log(this.toggleSwitch);
  //   console.log(event);
  //   this.clickCounter();
  // }
  // clickCounter() {
  //   this.clickArray.push((this.count = this.count + 1));
  //   console.log(this.clickArray);
  // }
  // changeColor() {
  //   return this.count >= 5 ? 'Blue' : 'white';
  // }

  // --> Trainer Code.
  showSecret = false;
  log = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
