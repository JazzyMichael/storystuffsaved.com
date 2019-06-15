import { Component, OnInit, OnDestroy } from '@angular/core';
import * as firebase from 'firebase/app';
const perf = firebase.performance();

@Component({
  selector: 'app-stuff',
  template: `
    <app-product-list></app-product-list>

    <br><br><br><br><br>
  `,
  styles: []
})
export class StuffComponent implements OnInit, OnDestroy {
  screenTrace: firebase.performance.Trace;

  constructor() { }

  ngOnInit() {
    this.screenTrace = perf.trace('stuffScreen');
    this.screenTrace.start();
  }

  ngOnDestroy() {
    this.screenTrace.stop();
  }
}
