import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../../services/photo/photo.service';
import { IPhoto } from '../../../model/photo';

@Component({
  selector: 'app-photo-content',
  templateUrl: './photo-content.component.html',
  styleUrls: ['./photo-content.component.scss']
})
export class PhotoContentComponent implements OnInit {

  contentList: IPhoto[];
  constructor(private photoService: PhotoService) {
    this.photoService.listen().subscribe((data: any) => {
      this.sendData(data);
    })
  }

  ngOnInit() {
  }

  sendData(data) {
    this.contentList = data;
    //console.log('contentList in photo-content.comp: ', this.contentList);
  }

}
