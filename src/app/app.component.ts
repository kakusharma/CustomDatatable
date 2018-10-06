import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  modelMetadata = [
    { propertyName: 'userId', displayText: 'User Id', control: 'select', order: 2, options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
    { propertyName: 'id', displayText: 'Id', control: 'textbox', order: 1, options: []},
    { propertyName: 'title', displayText: 'Title', control: 'textbox', order: 3, options: []},
    { propertyName: 'completed', displayText: 'Completed', control: 'checkbox', order: 4, options: []}
  ];
}
