import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';

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

    const ref = this.storage.ref(url);

    return ref.getDownloadURL().pipe(
      switchMap(downloadUrl => {
        return this.http.get(`${downloadUrl}`, { responseType: 'blob' });
      }),
      switchMap(blob => {
        return new Observable<string | ArrayBuffer>(observer => {
          const reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onload = () => {
            localStorage.setItem(url, JSON.stringify(reader.result));
            observer.next(reader.result);
            observer.complete();
          };
        });
      })
    );
  }
}
