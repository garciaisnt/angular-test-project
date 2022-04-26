import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { resImgAPI } from '../Interfaces/resImgAPI';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomImgService{

  private urlAPI: string = 'https://dog.ceo/api/breeds/image/random';
  
  constructor(private http: HttpClient) {   
  } 


  loadImg(): Observable<resImgAPI> {
    return this.http.get<resImgAPI>(this.urlAPI);
  }


}
