import { Component, OnInit } from '@angular/core';
import { PhotoService } from './../../services/photo.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  photos = [];

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.photoService.getPhotos()
        .subscribe(
          res => {
            this.photos = res
            console.log("Fotossssssssss: ",this.photos)
          },
          err => console.log(err)
        )
  }

}
