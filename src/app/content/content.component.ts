import { Component, OnInit, Input } from '@angular/core';
import { IContent } from '../model/content';
import { ContentService } from '../services/it/content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  content: IContent;
  constructor(private contentService: ContentService) {
    this.contentService.listen().subscribe((data: any) => {
      this.sendData(data);
    })
  }

  ngOnInit() {
  }

  sendData(data) {
    this.content = data;
    //console.log('Content: ', this.content);
  }

}
