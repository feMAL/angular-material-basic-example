import { Component, OnInit } from '@angular/core';
import { PhotosService } from './services/photos.service';
import { photos } from './models/photos.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public albumId = [1,2,3]

  constructor(private _photosService:PhotosService){}

  ngOnInit(){

  }
}
