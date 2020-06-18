import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { photos} from '../models/photos.model'

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private _http:HttpClient) { }

  getPhotos(){
    return this._http.get<photos[]>('https://jsonplaceholder.typicode.com/photos?_limit=10')
  }
  
}
