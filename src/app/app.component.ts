import { Component } from '@angular/core';
import { FiltersComponent } from './filters/filters.component'
import { TalksComponent }  from './talks/talks.component'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [FiltersComponent, TalksComponent],
})
export class AppComponent {
  search: string = "";

  onFilter(value) {
    this.search = value;
  }
}
