import { Component, OnInit } from '@angular/core';
import { Book } from './Book'

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit {

  componentName='mycomponent';
  model=new Book(1, '', '', 'http://');

  constructor() { }

  ngOnInit() {
  }


  get currentBook() { return JSON.stringify(this.model); }
  }
