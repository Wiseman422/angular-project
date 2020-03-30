import { Component, OnInit } from '@angular/core';
import { User } from './address-card/user.model';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular6Project';
  user: User;
  textInput: String = 'initial value';
  // private svc1: TestService;
  response: any = {};

  constructor(private svc: TestService, private http: HttpClient) {
    this.svc.printToConsole('Got the Service');
    this.user = new User();
    this.user.name = 'Foo Bar';
    this.user.address = '1000 street, City, State, 10010';
    this.user.designation = 'Software Developer';
    this.user.phone = [
      '11111',
      '22222',
      '33333',
      'wewewe'
    ];
  }

  ngOnInit() {
    this.http.get('https://api.github.com/users/koushikkothagal')
    .subscribe((response) => {
      this.response = response;
      console.log(this.response);
    });
  }
}
