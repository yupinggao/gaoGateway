import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../services/it/content.service';

@Component({
  selector: 'app-cloudSecurity',
  templateUrl: './cloudSecurity.component.html',
  styleUrls: ['./cloudSecurity.component.scss']
})
export class CloudSecurityComponent implements OnInit {
    public routerName = "/itCloud/cloudSecurity";
  public contentList = [];
  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getContentList('../assets/data/itCloud/cloudSecurity.json').subscribe(data => this.contentList =data);
  }

}
