import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { log } from 'util';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  dateMessage: string;
  someNumber: Number = 10;

  constructor() {
    setInterval(() => {
      const currentDate = new Date();
      this.dateMessage = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();
    }, 1000);
  }

  ngOnInit() {

  }

  changeDate() {
  }

  addTwoNumbers(a: number, b: number): number {
    return a + b;
  }

}
