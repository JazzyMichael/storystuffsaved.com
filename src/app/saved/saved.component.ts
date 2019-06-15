import { Component, OnInit, OnDestroy } from '@angular/core';
import * as firebase from 'firebase/app';
const perf = firebase.performance();

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss']
})
export class SavedComponent implements OnInit, OnDestroy{
  screenTrace: firebase.performance.Trace;

  constructor() { }

  ngOnInit() {
    this.screenTrace = perf.trace('savedScreen');
    this.screenTrace.start();
  }

  ngOnDestroy() {
    this.screenTrace.stop();
  }
}
