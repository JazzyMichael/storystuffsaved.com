import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireStorage } from '@angular/fire/storage';
import { of, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Pipe({
  name: 'imgCache'
})
export class ImgCachePipe implements PipeTransform {

  constructor(private http: HttpClient, private storage: AngularFireStorage) { }

  transform(url: string): Observable<any> {

    const cachedImg = localStorage.getItem(url);

    if (cachedImg) {
      return of(JSON.parse(cachedImg));
    }

    return new Observable<string | ArrayBuffer>(observer => {
      observer.next('assets/loading-image-with-care.png');

      const ref = this.storage.ref(url);

      ref.getDownloadURL().pipe(
        switchMap(downloadUrl => {
          return this.http.get(`${downloadUrl}`, { responseType: 'blob' });
        })
      ).subscribe(blob => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = () => {
          localStorage.setItem(url, JSON.stringify(reader.result));
          observer.next(reader.result);
          observer.complete();
        };
      });
    });
  }
}
