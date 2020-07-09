import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../services/it/content.service';

@Component({
  selector: 'app-otherProduct',
  templateUrl: './otherProduct.component.html',
  styleUrls: ['./otherProduct.component.scss']
})
export class OtherProductComponent implements OnInit {
    public routerName = "/server/otherProduct";
  public contentList = [];
  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.contentService.getContentList('../assets/data/server/otherProduct.json').subscribe(data => this.contentList =data);
  }
}
