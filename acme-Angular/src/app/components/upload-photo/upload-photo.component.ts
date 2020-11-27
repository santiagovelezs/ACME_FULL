import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { AlbumService } from '../../services/album.service'

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.css']
})
export class UploadPhotoComponent implements OnInit {

  file: File;
  photoSelected: string | ArrayBuffer;
  albumName = "index";
  albums = [];

  constructor(
    private photoService: PhotoService,
    private albumService: AlbumService,
    private router: Router) { }

  ngOnInit(): void {
    if(!!!localStorage.getItem('token')){
      this.router.navigate(['/login']);
    }  
    this.albumService.getAlbums()
        .subscribe(
          res => {
            this.albums = res           
          },
          err => console.log(err)
        )  
    console.log(this.albums)
  }

  selAlbum(albumName: string){
    this.albumName = albumName;
  }

  onPhotoSelect(e): void {
    if(e.target.files && e.target.files[0]) {
      this.file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  uploadPhoto(title: HTMLInputElement, album: HTMLInputElement) {
    this.photoService.createPhoto(title.value, album.value, this.file)
      .subscribe(res => {
        this.router.navigate(['/galeria']);
        }, err => {
          console.log(err);
          localStorage.removeItem('token');
          this.router.navigate(['/login']);
        }
      )
  }
  
}
