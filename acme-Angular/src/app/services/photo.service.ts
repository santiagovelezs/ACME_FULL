import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Photo } from '../models/Photo'
import { Album } from '@app/models/Album';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  readonly URL_API = "http://localhost:3000/acme/api/photos";

  constructor(private http: HttpClient) { }

  createPhoto(title: string, album: string, photo: File) {
    const fd = new FormData();
    fd.append('title', title);
    /* xxxxxxxx
      TODO: PASAR USUARIO LOGUEADO EN EL SISTEMA
        YA QUE ACA ESTAMOS PASANDO UN USUARIO FIJO   
    */
    // relacionar foto con album    
    fd.append('token', localStorage.getItem('token'));
    fd.append('album', album);
    fd.append('image', photo);
    console.log("ALBUMMMMMM: ",album)
    return this.http.post(this.URL_API, fd);
  }

  getPhotos() {
    return this.http.get<Photo[]>(this.URL_API);
  }

  getPhotosByAlbumId(id: string) {
    const params = new HttpParams().append('id', id);
    return this.http.get<Photo[]>(this.URL_API + `/${id}`);
  }
    
}
