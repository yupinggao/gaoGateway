import { Component, OnInit } from '@angular/core';
//import { PhotoService } from '../../../services/photo/photo.service';

@Component({
  selector: 'app-nature',
  templateUrl: './nature.component.html',
  styleUrls: ['./nature.component.scss']
})
export class NatureComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //this.photoService.getPhotoList('../assets/data/photo/nature.json');
  }

}
