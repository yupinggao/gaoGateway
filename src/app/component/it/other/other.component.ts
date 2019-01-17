import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../services/it/content.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {
  public routerName = "/it/other";
  public contentList = [];
  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getContentList('../assets/data/it/other.json').subscribe(data => this.contentList =data);
    //console.log("router.url: " + this.router.url);   
    //console.log("window.location.href: " + window.location.href);
    //console.log("parsed url: " + url.parse(this.router.url));
  }
}
