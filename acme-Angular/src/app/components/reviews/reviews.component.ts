import { Rate } from './../../models/Rate';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {


  formReview: FormGroup

  constructor( 
    private formBuilder: FormBuilder,
    private albumService: AlbumService, ) { }

  ngOnInit(): void {
    this.formReview = this.formBuilder.group({
      rating: ['', Validators.required],
      coment: ['', Validators.required]   
      
  });

  }

  send(data: Rate)
  {     
    console.log(data)
    this.albumService.rate(data)
  }

}
