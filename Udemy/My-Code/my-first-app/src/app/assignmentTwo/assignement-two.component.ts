import { Component } from '@angular/core';

@Component({
  selector: 'assignment-two',
  template: `<div class="container">
    <div class="row">
      <div class="col-xs-12">
        <!-- My soution -->
        <!--
        <input
          placeholder="Enter the Username here"
          type="text"
          [(ngModel)]="userName"
          (input)="buttonEnabler($event)"
        /> -->
        <!-- <p>{{ userName }}</p> -->
        <!-- <button
          [disabled]="!isInputEmpty"
          (click)="userNameResetter()"
        >
          Reset Username
        </button> -->
        <!-- Guide Solution -->
        <label>UserName: </label>
        <input
          class="form-control"
          placeholder="Enter the Username here"
          type="text"
          [(ngModel)]="userName"
        />
        <button
          class="btn btn-primary"
          [disabled]="userName == ''"
          (click)="userName = ''"
        >
          <!-- [disabled]="!userName" -->
          Reset Username
        </button>
      </div>
    </div>
  </div> `,
})
export class AssignmentTwo {
  userName = '';
  isInputEmpty = false;

  buttonEnabler(event: any) {
    if (event.target.value != null) {
      console.log(event.target.value);
      this.isInputEmpty = true;
    } else if (event.target.value == '') {
      this.isInputEmpty = false;
      console.log(event.target.value);
    }
  }

  userNameResetter() {
    if (this.isInputEmpty) {
      this.userName = '';
    }
  }
}
