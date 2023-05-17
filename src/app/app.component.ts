import { Component } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // actions  = ['Work', 'Play', 'Sleep'];  Commenting as we'll now see how to detect changes while emitting observables using onPush.
  actions  = new BehaviorSubject((['Work', 'Play', 'Sleep']));
  addAction(actionItem : any){
    // this.actions.push(actionItem);  commenting as onPush is not detecting changes 
    // this.actions = [...this.actions, actionItem]; Commenting in order to use changeDetectorRef
    // this.actions.push(actionItem); 
    console.log("actionItem", actionItem);
    this.actions.next(actionItem);
    console.log("actions", this.actions);
  }
}
