import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../services/it/content.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {
    public routerName = "/it/tutorial";
  public contentList = [];
  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getContentList('../assets/data/it/tutorial.json').subscribe(data => this.contentList =data);
  }

}
