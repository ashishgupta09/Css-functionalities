import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

interface SideNavToggle {
  screenWidth: number;
  collapesed: boolean;
}

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {

  @Output() onToggleSidenav: EventEmitter<SideNavToggle> = new EventEmitter()
  collapse: boolean = true;
  screenWidth: number = 0;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapse = false;
      this.onToggleSidenav.emit({ collapesed: this.collapse, screenWidth: this.screenWidth })
    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }


  navData = [
    {
      routeLink: 'card',
      icon: 'fa-solid fa-house',
      label: 'card'
    }
  ]

  closeSidenav() {
    this.collapse = false;
    this.onToggleSidenav.emit({ collapesed: this.collapse, screenWidth: this.screenWidth })
  }

  toggleCollapse() {
    this.collapse = !this.collapse;
    this.onToggleSidenav.emit({ collapesed: this.collapse, screenWidth: this.screenWidth })
  }

}
