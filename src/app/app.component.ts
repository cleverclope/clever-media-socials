import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'clever-media-socials';

  constructor(){}

  ngOnInit(): void {
  }

  mySocialPlatforms : { platformLink : string, platformIcon: string, platformTip: string }[]=[
    { platformIcon:"fab fa-facebook", platformLink:"https://twitter.com/WorkmateDevs", platformTip:"Facebook" },
    { platformIcon:"fab fa-youtube", platformLink:"https://www.youtube.com/channel/UCzeRoLEkrk6aJZwLzeFeviA", platformTip:"Youtube" },
    { platformIcon:"fab fa-twitter", platformLink:"https://twitter.com/WorkmateDevs", platformTip:"Twitter" },
    { platformIcon:"fab fa-instagram", platformLink:"https://twitter.com/WorkmateDevs", platformTip:"Instagram" },
    { platformIcon:"fab fa-linkedin-in", platformLink:"https://www.linkedin.com/in/arinda-ivan-clever-03b24920a/", platformTip:"LinkedIn" },
    { platformIcon:"fab fa-github", platformLink:"https://github.com/cleverclope", platformTip:"Github" }

  ]
}
