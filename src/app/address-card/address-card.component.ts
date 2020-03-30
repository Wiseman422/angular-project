import { Component, Input, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user: any;
  // tslint:disable-next-line:no-input-rename
  @Input('name') userName: string;
  // tslint:disable-next-line:no-input-rename
  @Input('user') userObj: User;
  // tslint:disable-next-line:no-inferrable-types
  isCollapsed: boolean = true;
  textInput: String = 'aaaabbbb';

  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
    // this.user = {
    //   name: this.userName,
    //   title: 'Software Developer',
    //   address: '1234 Main St, City, State, 10010',
    //   phone: [
    //     '1111',
    //     '22222',
    //     '33333'
    //   ]
    // };
    this.user = {
      name: this.userObj.name,
      title: this.userObj.designation,
      address: this.userObj.address,
      phone: this.userObj.phone
    };

  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

}
