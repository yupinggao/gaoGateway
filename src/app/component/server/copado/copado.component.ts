import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../services/it/content.service';

@Component({
  selector: 'app-copado',
  templateUrl: './copado.component.html',
  styleUrls: ['./copado.component.scss']
})
export class CopadoComponent implements OnInit {
    public routerName = "/server/copado";
  public contentList = [];
  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getContentList('../assets/data/server/copado.json').subscribe(data => this.contentList =data);
  }
}
