import { Component, OnInit } from '@angular/core';
import { RandomImgService } from 'src/app/Services/random-img.service';
import { resImgAPI } from '../../Interfaces/resImgAPI';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit{

  imgView: resImgAPI = {
    message: '',
    status: ''
  };  

  constructor(private imgService: RandomImgService) {
    this.imgService.loadImg().subscribe((resp) =>{
      resp.message = this.imgView.message;
      resp.status = this.imgView.status;
    });    
  }

  ngOnInit(): void {
    this.loadImage();
    //console.log(this.imgView);
  }

  loadImage(): void {

    this.imgService.loadImg().subscribe((resp) =>{
      this.imgView =  resp;
    });      

  }

}
