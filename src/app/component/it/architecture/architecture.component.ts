import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../services/it/content.service';
//import { Router } from '@angular/router';
//import * as url from 'url';

@Component({
  selector: 'app-architecture',
  templateUrl: './architecture.component.html',
  styleUrls: ['./architecture.component.scss']
})
export class ArchitectureComponent implements OnInit {
   public routerName = "/it/architecture";
  public contentList = [];
  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getContentList('../assets/data/it/architecture.json').subscribe(data => this.contentList =data);
    //console.log("router.url: " + this.router.url);   
    //console.log("window.location.href: " + window.location.href);
    //console.log("parsed url: " + url.parse(this.router.url));
  }
}
