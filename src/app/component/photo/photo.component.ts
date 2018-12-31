import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo/photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.photoService.getPhotoList('../assets/data/photo/nature.json');
  }

}
