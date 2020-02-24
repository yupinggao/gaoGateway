import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../services/it/content.service';

@Component({
  selector: 'app-kubernetes',
  templateUrl: './k8stask.component.html',
  styleUrls: ['./k8stask.component.scss']
})
export class K8staskComponent implements OnInit {
    public routerName = "/itCloud/k8stask";
  public contentList = [];
  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getContentList('../assets/data/itCloud/k8stask.json').subscribe(data => this.contentList =data);
  }

}
