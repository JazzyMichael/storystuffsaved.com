import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class ContactService {

  constructor(private afs: AngularFirestore) { }

  async sendMessage(form: any) {
    const saved = localStorage.getItem('savedProducts') ? JSON.parse(localStorage.getItem('savedProducts')) : [];

    await this.afs.collection('contact-messages').add({ ...form, saved, timestamp: new Date() });

    localStorage.removeItem('savedProducts');
  }
}
