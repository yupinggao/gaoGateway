import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../services/it/content.service';

@Component({
  selector: 'app-k8spattern',
  templateUrl: './k8spattern.component.html',
  styleUrls: ['./k8spattern.component.scss']
})
export class K8spatternComponent implements OnInit {
    public routerName = "/itCloud/k8spattern";
  public contentList = [];
  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getContentList('../assets/data/itCloud/k8spattern.json').subscribe(data => this.contentList =data);
  }

}
