import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav-body',
  templateUrl: './sidenav-body.component.html',
  styleUrls: ['./sidenav-body.component.scss']
})
export class SidenavBodyComponent {
  @Input() collapesed: boolean = false;
  @Input() secreenWidth: number = 0;

  getBodyClass() {
    let styleClass = '';
    if (this.collapesed && this.secreenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if (this.collapesed && this.secreenWidth <= 768 && this.secreenWidth > 0) {
      styleClass = 'body-md-screen'
    }
    return styleClass;
  }
}
