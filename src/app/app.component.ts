import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showSplash = true;

  title = 'steez-store';

  onEnterClicked() {
    this.showSplash = false;
  }
}
