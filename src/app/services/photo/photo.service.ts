import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { IPhoto } from '../../model/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  public photoList: IPhoto[] = [];
  constructor(private http: HttpClient) {

  }

  private listners = new Subject<any>();

  listen(): Observable<any> {
     return this.listners.asObservable();
  }

  getPhotoList(fileName: string) {
    //console.log(fileName);
    this.http.get<IPhoto []>(fileName).subscribe(data => this.photoList =data);
    this.listners.next(this.photoList);
  }
}
