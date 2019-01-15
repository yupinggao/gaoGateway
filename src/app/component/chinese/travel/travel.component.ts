import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../services/it/content.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {
    public routerName = "/chinese/travel";
  public contentList = [];
  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getContentList('../assets/data/chinese/travel.json').subscribe(data => this.contentList =data);
  }

}
