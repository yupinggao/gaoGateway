import { Component, OnInit, Input, Output } from '@angular/core';
import { ContentService } from '../services/it/content.service';
import { IContent } from '../model/content';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  content: IContent;
  @Input() routerName: string;  
  @Input() contentList: IContent[];
  
  constructor(private contentService: ContentService, private router: Router){

  }

  showContent(source){
    
    this.content = (this.contentList.filter(function (content) {
      return content.id == source;
    }))[0];
    this.contentService.setContent(this.content);
    //this.contentService.setContentList(this.contentList);
    //console.log("Side Menu contentList:" + this.contentList);
    //console.log("Side Menu content" + this.content);
    //this.routerName = this.router.url;
    //console.log("router.url: " + this.router.url);
   
  }

  ngOnInit() {
  }
}
