import { Component } from '@angular/core';

@Component({
  selector: 'app-story',
  template: `
    <p *ngFor="let blurb of blurbs" class="blurby">{{ blurb }}</p>
  `,
  styles: [
    '.blurby { width: 400px; max-width: 90%; margin: auto; text-align: center; animation: fade-in 1s; }'
  ]
})
export class StoryComponent {
  blurbs: string[];

  constructor() {
    this.blurbs = [
      'Part of my job involves working with Best Buy, which gives me access to returned products in great condition that can be purchased at a massive discount.',
      'All of the products listed on this site have been owned for only a few months, have been thoroughly tested, and include all of the original parts.'
    ];
  }
}
