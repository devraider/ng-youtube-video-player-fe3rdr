import { Component } from '@angular/core';
import { Ivideos } from './videos';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  player: YT.Player;

  public videos:Ivideos[] = [{id: 'L-tNSip4EQM', player: null}, {id: 'wvetj7Txj1g', player: null}];



  savePlayer(e, video) {
    this.videos.find(obj => obj.id == video.id).player = e;

    this.player = e;

    console.log(this.player.j.videoData.video_id);
  }
  onStateChange(event){
    console.log('player state', event.data);
  }

  playYoutube(id){
    let video = this.videos.find(obj => obj.id == id);

    console.log(video.player);
    
    video.player.playVideo();
  }
}
