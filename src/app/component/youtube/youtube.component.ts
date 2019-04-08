import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/service/youtube.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {

  constructor(public youtubeService: YoutubeService) { }

  ngOnInit() {
  }
}