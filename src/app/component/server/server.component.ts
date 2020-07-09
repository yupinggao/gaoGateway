import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../../services/it/content.service';


@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  constructor(router: ActivatedRoute, private contentService: ContentService) { 
    //router.params.subscribe(params = > console.log("id", params['id']));
  }

  ngOnInit() {
  }

}
