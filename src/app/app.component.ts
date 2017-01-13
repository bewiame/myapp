import { Component } from '@angular/core';
//import { MycomponentComponent } from './mycomponent/mycomponent.component';

@Component({
  selector: 'app-root',
  // plus besoin - dans modules
  //directives: [MycomponentComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componentName='AppComponent';
  title = 'myapp!';

}
