import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>
  Welcom {{name}}
  </h2>
  <h2>{{2+2}}</h2>
  <h2>{{"Welcome" + name}}</h2>
  <h2>{{name.length}}</h2>
  <h2>{{name.toUpperCase()}}</h2>
  <h2>{{newUser()}}</h2>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Pasindu";
  constructor() { }

  ngOnInit(): void {
  }

  newUser(){
    return "Hellow Kalubowila" + this.name;
  }


}
