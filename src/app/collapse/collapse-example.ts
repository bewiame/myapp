/**
 * Created by Tareq Boulakjar. from angulartypescript.com
 */
import {Component} from '@angular/core';
//import {Directive} from '@angular/core';

/*Angular 2 Collapse Example*/
@Component({
    selector: 'my-app',
    template:`
                <h3>Angular 2 Collapse HTML Content</h3>
                <button type="button" class="btn btn-primary"
                        (click)="isCollapsedContent = !isCollapsedContent">Show / Hide Content (Toggle collapse)
                </button>
                <hr>
                <div [collapse]="isCollapsedContent" class="card card-block card-header">
                  <div class="well well-lg">
                   HTML content goes here !
                   <b>bold text</b> <br>
                   <span>this is a collapse example</span>
                  </div>
                </div>
                <div>
                        <button type="button" (click)="setBoolTrue()">True</button> <br/>
                        <button type="button" (click)="setBoolFalse()">False</button> <br/>
                        {{isCollapsedContent}}
                </div>
             `
     // set directives in module
     //,
    //directives: [Collapse],
})
export class Angular2Collapse  {
    //collapse content
    public isCollapsedContent:boolean = false;
    //collapse image (example)
    public isCollapsedImage:boolean = true;

    setBoolTrue() {
            this.isCollapsedContent=true;
    }
    setBoolFalse() {
            this.isCollapsedContent=false;
    }

}