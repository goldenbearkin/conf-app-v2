import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { TalkComponent } from './talk/talk.component';
import { SpeakerFilterPipe } from './speaker-filter.pipe'
import { Talk }  from './talk.model';

import { List } from 'immutable';

@Component({
  moduleId: module.id,
  selector: 'app-talks',
  templateUrl: 'talks.component.html',
  styleUrls: ['talks.component.css'],
  directives: [TalkComponent],
  pipes: [SpeakerFilterPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TalksComponent {
  @Input() searchByName: string;

  talks = List<Talk>();
  // talks: Talk[];
  

  constructor() {
      
    const TALKS: Talk[] = [
      {
        id: 1,
        title: "Intro to Flux and Redux",
        speaker: "Joseph",
        avgRating: 8.7,
        watched: false,
        rated: false
      },
      {
        id: 2,
        title: "OneSky's take on using redux with AngularJs",
        speaker: "Roger",
        avgRating: 7.8,
        watched: false,
        rated: false
      },
      {
        id: 3,
        title: "Why Functional Programming is so good with Scala?",
        speaker: "Cherry",
        avgRating: 9.8,
        watched: false,
        rated: false
      },
      {
        id: 4,
        title: "Stuff at our Startup powered by Scala",
        speaker: "Jimmy",
        avgRating: 8.1,
        watched: false,
        rated: false
      },
      {
        id: 5,
        title: "Intro to AWS Lambda, when to use?",
        speaker: "Vincent",
        avgRating: 6.8,
        watched: false,
        rated: false
      },
      {
        id: 6,
        title: "Managing Lambda with Apex",
        speaker: "Roger",
        avgRating: 8.3,
        watched: false,
        rated: false
      },
      {
        id: 7,
        title: "Angular2 vs ReactJS",
        speaker: "Jason",
        avgRating: 5.0,
        watched: false,
        rated: false
      }
    ]
    TALKS.map(e => this.talks = this.talks.unshift(new Talk(e)));

  }

  onWatched(event) {
    let key = this.talks.findIndex(e => e.id === event);
    this.talks = this.talks.update(key, talk => {
        return {
          id: talk.id,
          title: talk.title,
          speaker: talk.speaker,
          avgRating: talk.avgRating,
          watched: true,
          rated: talk.rated
        }
    });
  }

  onRated(event) {
    let key = this.talks.findIndex(e => e.id === event);
    this.talks = this.talks.update(key, talk => {
        return {
          id: talk.id,
          title: talk.title,
          speaker: talk.speaker,
          avgRating: 10,
          watched: talk.watched,
          rated: true
        }
    });
  }
}
