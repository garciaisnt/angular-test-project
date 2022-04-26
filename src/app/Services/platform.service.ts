import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { platform } from '../Interfaces/platform';


@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  private urlAPI:string = 'https://libraries.io/api/platforms';

  constructor(private http: HttpClient) {}

  getPlatformlist(): Observable<platform[]>{
    return this.http.get<platform[]>(this.urlAPI);
  }


}
