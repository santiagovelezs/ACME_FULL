import { Photo } from './../../models/Photo';
import { Component, OnInit } from '@angular/core';
import { AlbumService } from '@app/services/album.service';
import { PhotoService } from './../../services/photo.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  albums = [];
  photos = [];  
  constructor(
    private albumService: AlbumService,
    private photoService: PhotoService) { }

  ngOnInit(): void 
  {
    this.getAlbums()    
      
  }

  async getAlbums()
  {
    
    this.albumService.getAlbums()
        .subscribe(
          res => {
            this.albums = res
            console.log("Albums By UserId: ",this.albums)
            console.log("Length: ",this.albums.length)
            for(let i=0; i<this.albums.length; i++)
            {
              this.photoService.getPhotosByAlbumId(this.albums[i]._id)
                  .subscribe(
                    res => {
                      if(res.length>0)
                      {
                        this.photos.push(res[0])
                      }                    
                        
                      //console.log("RES: ",res[0].path)
                    }
                  )
              //console.log("Photo: ",this.photos[i])
              //console.log(this.photoService.getPhotosByAlbumId(this.albums[i]._id))
            }
          },
          err => console.log(err)
        )
  }

}
