import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumService } from '../../services/album.service'

@Component({
  selector: 'app-crear-album',
  templateUrl: './crear-album.component.html',
  styleUrls: ['./crear-album.component.css']
})
export class CrearAlbumComponent implements OnInit {
 
  constructor(private albumService: AlbumService, private router: Router) { }

  ngOnInit(): void {
    
  }  

  createAlbum(name: HTMLInputElement){    
    this.albumService.createAlbum(name.value)
        .subscribe(res => {
          this.router.navigate(['/galeria']);
          }, err => {
            console.log(err)
            localStorage.removeItem('token');
            this.router.navigate(['/login']);
          }
        )
  }

}
