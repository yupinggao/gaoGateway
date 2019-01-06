import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../services/it/content.service';
import { IContent } from '../../../model/content';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {
  public routerName = "/it/security";
  public contentList: IContent[];
  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getContentList('../assets/data/it/security.json').subscribe(data => this.contentList =data);
  }
}
