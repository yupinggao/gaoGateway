import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../services/it/content.service';

@Component({
  selector: 'app-english',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.scss']
})
export class EnglishComponent implements OnInit {
    public routerName = "/story/english";
  public contentList = [];
  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getContentList('../assets/data/story/english.json').subscribe(data => this.contentList =data);
  }

}
