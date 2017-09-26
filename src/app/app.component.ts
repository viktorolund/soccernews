import { Component } from '@angular/core';

@Component({
  selector: 'soccernews-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'soccernews';
  isMenuCollapsed = false;

  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }
}
