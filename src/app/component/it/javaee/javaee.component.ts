import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../services/it/content.service';

@Component({
  selector: 'app-javaee',
  templateUrl: './javaee.component.html',
  styleUrls: ['./javaee.component.scss']
})
export class JavaeeComponent implements OnInit {
  public routerName = "/it/javaee";
  public contentList = [];
  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getContentList('../assets/data/it/javaee.json').subscribe(data => this.contentList =data);
  }
}
