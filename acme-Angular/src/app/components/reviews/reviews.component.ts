import { Rate } from '@app/models/Rate';
import { AlbumService } from '@app/services/album.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {


  formReview: FormGroup

  reviews: Rate[]

  sub: boolean

  prom: number

  rt: String

  constructor( 
    private formBuilder: FormBuilder,
    private albumService: AlbumService, ) { }

  ngOnInit(): void {
    this.sub = false
    this.formReview = this.formBuilder.group({
      rating: ['', Validators.required],
      coment: ['', Validators.required]           
  });
  this.prom = (13/3)
  this.rt = this.prom.toFixed(1)
  if(localStorage.getItem("token"))
  {
    this.sub = true
  }

  this.rates()
  this.calcProm()

  }

  async rates()
  {
    await this.albumService.getRates()
        .subscribe(
          res => {
            console.log(res)
            this.reviews = res
          },
          err => {
            console.log(err)
          }
        )
  }

  calcProm()
  {
    this.prom = 13
    for(let i=0; i<this.reviews.length; i++)
    {
      this.prom+=this.reviews[i].rating
    }
    this.prom/=(3+this.reviews.length)    
    this.rt = this.prom.toFixed(1)
    console.log(this.rt)
  }

  send(data: Rate)
  {     
    console.log(data)
    this.albumService.rate(data)
    this.formReview.reset()
    this.rates()
    this.calcProm()
  }



}
