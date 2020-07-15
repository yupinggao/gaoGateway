import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../services/it/content.service';

@Component({
  selector: 'app-pcf',
  templateUrl: './pcf.component.html',
  styleUrls: ['./pcf.component.scss']
})
export class PcfComponent implements OnInit {
    public routerName = "/itCloud/pcf";
  public contentList = [];
  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getContentList('../assets/data/itCloud/pcf.json').subscribe(data => this.contentList =data);
  }

}
