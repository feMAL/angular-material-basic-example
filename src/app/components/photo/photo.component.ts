import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';
import { photos } from 'src/app/models/photos.model';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  
  public photos: photos[] = []

  constructor(private _photosService:PhotosService) { }

  ngOnInit() {

    this._photosService.getPhotos().subscribe((data:photos[])=>{
      this.photos= data

    },err=>{
      console.warn(err.message)
    })

  }

}
