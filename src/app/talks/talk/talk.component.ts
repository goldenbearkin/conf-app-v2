import { Component, Input, Output, OnChanges, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button'

import { Talk } from '../talk.model'

@Component({
  moduleId: module.id,
  selector: 'app-talk',
  templateUrl: 'talk.component.html',
  styleUrls: ['talk.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TalkComponent implements OnChanges {
  @Input() talk: Talk
  @Output() watched = new EventEmitter();
  @Output() rated = new EventEmitter();

  ngOnChanges() {
    console.log(`ngOnChanges: ${this.talk.id}`);
  }

  onClickWatch() {
    this.watched.emit(this.talk.id);
  }

  onClickRate() {
    this.rated.emit(this.talk.id);
  }
}
