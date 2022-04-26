import { Component, OnInit } from '@angular/core';
import { PlatformService } from 'src/app/Services/platform.service';
import { platform } from '../../Interfaces/platform';
    

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit {

  constructor(private http: PlatformService) { }

  txtSearch:string = '';

  platformList: platform[] = []; 
  currentPage: number = 1;

  ngOnInit(): void {
    this.http.getPlatformlist().
    subscribe(arg => {
      this.platformList = arg;
    });
    
  }

}
