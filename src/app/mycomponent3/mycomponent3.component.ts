import { Component, OnInit } from '@angular/core';
import { Service3Service } from './Service3.Service';

@Component({
  selector: 'app-mycomponent3',
  templateUrl: './mycomponent3.component.html',
  styleUrls: ['./mycomponent3.component.css']
})
export class Mycomponent3Component implements OnInit {

  private valueService = 'no value';

  constructor(private myService : Service3Service) { }

  ngOnInit() {
  }

  getService() {
    this.valueService = this.myService.getService();
  }
}
