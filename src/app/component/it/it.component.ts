import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../../services/it/content.service';


@Component({
  selector: 'app-it',
  templateUrl: './it.component.html',
  styleUrls: ['./it.component.scss']
})
export class ItComponent implements OnInit {
  constructor(router: ActivatedRoute, private contentService: ContentService) { 
    //router.params.subscribe(params = > console.log("id", params['id']));
  }

  ngOnInit() {
  }

}
