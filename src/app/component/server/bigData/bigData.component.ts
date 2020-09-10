import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../services/it/content.service';

@Component({
  selector: 'app-bigData',
  templateUrl: './bigData.component.html',
  styleUrls: ['./bigData.component.scss']
})
export class BigDataComponent implements OnInit {
    public routerName = "/server/bigData";
  public contentList = [];
  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getContentList('../assets/data/server/bigData.json').subscribe(data => this.contentList =data);
  }
}
