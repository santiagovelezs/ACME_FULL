import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Album } from '../models/Album'
import { Rate } from '@app/models/Rate';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  readonly URL_API = "http://localhost:3000/acme/api/albums";

  constructor(private http: HttpClient) { }

  createAlbum(name: string) {

    let token = localStorage.getItem('token');
    return this.http.post(this.URL_API, {
      name,
      token
    });
  }

  getAlbums() {
    let header = new HttpHeaders().set(
      "Authorization",
      localStorage.getItem("token")
    );
    return this.http.get<Album[]>(this.URL_API, { headers: header });
  }

  getAlbumById(id: string) {
    return this.http.get<Album>(this.URL_API + `/${id}`);
  }

  rate(rate: Rate) {
    console.log("Rateeee")
    return this.http.post(this.URL_API + '/rate', rate)
      .subscribe(
        res => {
          console.log(res)
        },
        err => {
          console.log(err)
        }
      );
  }

}
