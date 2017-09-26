import {
  Directive,
  HostListener,
  ElementRef,
  Output,
  EventEmitter
} from "@angular/core";

@Directive({
  selector: '[soccernewsHighlights]'
})
export class HighlightsDirective {
  video;

  constructor(private el: ElementRef) {
    this.video = <HTMLVideoElement>el.nativeElement;
  }

  @Output() vtime:EventEmitter<any> = new EventEmitter();

  @HostListener('document:keyup', ['$event']) onKeyUp(e: KeyboardEvent) {
    if (e.code == "Space") {

      if (this.video.paused) {
        this.video.play();
      } else {
        this.video.pause();
      }
    }
  }

  videoStarted() {
    const playingVideo = this.video;
    const vtimeSrc = this.vtime;

    const emitVideo = () => {
      vtimeSrc.emit({playingVideo:playingVideo});
  
      if (playingVideo.ended) {
        clearInterval(intervalId);
      }
    };

    const intervalId = setInterval(emitVideo, 2000);
  }

  ngOnInit() {
    this.videoStarted();
  }

}
