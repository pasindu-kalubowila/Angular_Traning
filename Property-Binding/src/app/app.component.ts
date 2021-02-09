import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
            <h2>welcome {{name}}</h2>
            <input [id]="myId" type="text" value="Enter Value">
            <br><br>
            <input id= "{{myId}}" type="text" value="Enter Value">
  `,
  styles: []
})
export class AppComponent {
  title = 'Property-Binding';
  public name = "pasindu";
  public myId = "testId";
}

