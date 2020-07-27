import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../services/it/content.service';

@Component({
  selector: 'app-ibmCloud',
  templateUrl: './ibmCloud.component.html',
  styleUrls: ['./ibmCloud.component.scss']
})
export class IbmCloudComponent implements OnInit {
    public routerName = "/itCloud/ibmCloud";
  public contentList = [];
  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getContentList('../assets/data/itCloud/ibmCloud.json').subscribe(data => this.contentList =data);
  }

}
