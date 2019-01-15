import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../services/it/content.service';

@Component({
  selector: 'app-javacore',
  templateUrl: './javacore.component.html',
  styleUrls: ['./javacore.component.scss']
})
export class JavacoreComponent implements OnInit {
    public routerName = "/it/javacore";  
  public contentList = [];
  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getContentList('../assets/data/it/javacore.json').subscribe(data => this.contentList =data);
  }

}
