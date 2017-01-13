import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent } from './app.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { Mycomponent2Component } from './mycomponent2/mycomponent2.component';
import {Angular2Collapse} from './collapse/collapse-example';
import {Collapse} from './collapse/collapse.component';
import { Mycomponent3Component } from './mycomponent3/mycomponent3.component';
import { Service3Service } from './mycomponent3/Service3.Service';

const routes: Routes = [
   { path: 'root', component: AppComponent },
   { path: 'mycomp', component: MycomponentComponent },
   { path: 'mycomp2', component: Mycomponent2Component }
   { path: 'mycomp3', component: Mycomponent3Component }
];
export const routing = RouterModule.forRoot(routes);


@NgModule({
  declarations: [
    AppComponent,
    MycomponentComponent,
    Mycomponent2Component,
    Angular2Collapse,
    Collapse,
    Mycomponent3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [Service3Service],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
