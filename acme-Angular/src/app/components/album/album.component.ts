import { Album } from './../../models/Album';
import { PhotoService } from './../../services/photo.service';
import { AlbumService } from './../../services/album.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  id: string;
  album: Album;
  photosAlbum = [];
  
constructor(
  private route: ActivatedRoute,
  private albumService: AlbumService,
  private photoService: PhotoService
  ) { }

 ngOnInit(): void {    
    this.id =  this.route.snapshot.params.id;
    this.getAlbumById(this.id);
    this.getPhotosByAlbumId(this.id);
  }

  getAlbumById(id: string): void {
    this.albumService.getAlbumById(id)
        .subscribe(
          res => {
            this.album = res
          }
        )
  }

  getPhotosByAlbumId(id: string): void {
    this.photoService.getPhotosByAlbumId(id)
        .subscribe(
          res => {
            this.photosAlbum = res
          },
          err => console.log(err)
        )        
  }

}
