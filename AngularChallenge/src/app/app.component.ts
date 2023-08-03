import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularChallenge';

  activeTab: number = 0;

  setActiveTab(index: number) {
    this.activeTab = index;
  }
}
