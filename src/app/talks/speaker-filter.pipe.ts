import { Pipe, PipeTransform } from '@angular/core';
import { Talk } from './talk.model';

@Pipe({
  name: 'speakerFilter'
})
export class SpeakerFilterPipe implements PipeTransform {

  transform(talks: Talk[], speaker: string): Talk[] {
    if (speaker === '') {
      return talks;
    } else {
      return talks.filter(talk => talk.speaker.toLowerCase() === speaker.toLowerCase());
    }
  }

}
