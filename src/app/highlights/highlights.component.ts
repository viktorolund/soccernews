import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'soccernews-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss']
})
export class HighlightsComponent implements OnInit {
  time: any = undefined;
  timeLeft: any = undefined;
  isVideoStarted = false;
  displayImage: any[] = [];
  images = [
    { 
      src: '/videos/chelseapatriot-shoes.png',
      time: {
        start: 0,
        end: 7
      }
    },
    { 
      src: '/videos/chelseapatriot-hoodie.png',
      time: {
        start: 7,
        end: 14
      }
    },
    { 
      src: '/videos/chelseagreen-shoes.png',
      time: {
        start: 14,
        end: 21
      }
    },
    { 
      src: '/videos/chelsea-orange-shoes.png',
      time: {
        start: 21,
        end: 28
      }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  timeInVideo({playingVideo}) {
    this.isVideoStarted = true;
    this.time = playingVideo.currentTime;
    this.timeLeft = playingVideo.duration;

    this.displayImage = this.images
                      .filter(image => image.time.start < this.time && image.time.end > this.time);

    if (playingVideo.end) {
      this.isVideoStarted = false;
    }
  }

}
