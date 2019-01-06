import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable} from 'rxjs';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators'
import { IContent } from '../../model/content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  public content: IContent; 
 
  public contentList: IContent[];
  constructor(private http: HttpClient) {

  }

  private listners = new Subject<any>();

  listen(): Observable<any> {
     return this.listners.asObservable();
  }

  getContentList(fileName: string): Observable<IContent []> {
    //this.http.get<IContent []>(fileName).subscribe(data => this.contentList =data);
    //console.log("contentList in content: " + this.contentList);
    return this.http.get<IContent []>(fileName);
  }

  getContentAsPromise(fileName: string): Promise<IContent[]> {
    //this.http.get<IContent []>(fileName).subscribe(data => this.contentList =data);
    //console.log("contentList in content: " + this.contentList);
    return this.http.get<IContent []>(fileName).toPromise().then(response => {
      return response;
    })
  
    //this.content = (this.contentList.filter(function (content) {
    //  return content.id == 5;
    //}))[0];

    //return this.content;
  }

  public setContent(content) {
    this.content = content;
    this.listners.next(this.content);
  }
  //public getContent() {
  //  return this.content;
  //}
  //public setContentList(contentList) {
  //  this.contentList = contentList;
  //}
}
