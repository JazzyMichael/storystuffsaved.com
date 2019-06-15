import { Component, OnInit, OnDestroy } from '@angular/core';
import * as firebase from 'firebase/app';
const perf = firebase.performance();

@Component({
  selector: 'app-story',
  template: `
    <p *ngFor="let blurb of blurbs" class="blurby">{{ blurb }}</p>

    <p class="blurby">Source Code available on <a href="https://github.com/Jappzy/storystuffsaved.com" target="_blank" rel="noreferrer">Github</a></p>

    <img src="assets/Story-Stuff-Saved.png" alt="Logo" class="logo" />
  `,
  styles: [
    '.blurby { width: 450px; max-width: 90%; margin: 1em auto; text-align: center; animation: fade-in 1s; }',
    '.logo { margin: 10vh auto; display: block; max-width: 90%; width: 500px; }'
  ]
})
export class StoryComponent implements OnInit, OnDestroy {
  screenTrace: firebase.performance.Trace;
  blurbs: string[];

  constructor() {
    this.blurbs = [
      'Part of my job involves working with Best Buy, which gives me access to returned products in great condition that can be purchased at a massive discount.',
      'All of the products listed on this site have been owned for only a few months, have been thoroughly tested, and include all of the original parts.'
    ];
  }

  ngOnInit() {
    this.screenTrace = perf.trace('storyScreen');
    this.screenTrace.start();
  }

  ngOnDestroy() {
    this.screenTrace.stop();
  }
}
