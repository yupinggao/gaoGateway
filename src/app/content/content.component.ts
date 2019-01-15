import { Component, OnInit, Input } from '@angular/core';
import { IContent } from '../model/content';
import { ContentService } from '../services/it/content.service';
import { Router } from '@angular/router';
import * as url from 'url';
//import * as contentListJson from '../../assets/data/it/cloud.json';
//import { Observable} from 'rxjs';
//import { Subject } from 'rxjs';
//import { map } from 'rxjs/operators'

declare var require: any

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public content: IContent;
  public contentListLocal: any[];
  constructor(private contentService: ContentService, private router: Router) {
    this.contentService.listen().subscribe((data: any) => {
      this.sendData(data);
    })
  }

  ngOnInit() {
    console.log("router.url: " + this.router.url);
    console.log("window.location.href: " + window.location.href);
    console.log("parsed url: " + url.parse(this.router.url));

    var splittedURL = this.router.url.split("/");
    if (splittedURL.length === 4) {
      var id = this.router.url.substring(this.router.url.lastIndexOf("/") + 1);
      var contentListJson = require('../../assets/data' + this.router.url.substring(0, this.router.url.lastIndexOf("/")) + '.json');
      this.contentListLocal = <any>contentListJson;
      this.content = (this.contentListLocal.filter(function (content) {
        return content.id == id;
      }))[0];
      //console.log('content content: ', this.content);
    }
  }

  sendData(data) {
    this.content = data;
  }

}
