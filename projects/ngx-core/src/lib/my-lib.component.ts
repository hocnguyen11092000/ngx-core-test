import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ngx-core',
  template: ` <p>ngx-core works!</p> `,
  styles: [],
})
export class MyLibComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
