import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { IContent } from '../../model/content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  public content; 
 
  public contentList;
  constructor(private http: HttpClient) {

  }

  private listners = new Subject<any>();

  listen(): Observable<any> {
     return this.listners.asObservable();
  }

  getContentList(fileName: string): Observable<IContent []> {
    return this.http.get<IContent []>(fileName);
  }
  public setContent(content) {
    this.content = content;
    this.listners.next(this.content);
  }
}
