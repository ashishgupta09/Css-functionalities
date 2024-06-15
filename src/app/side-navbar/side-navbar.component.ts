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
  collapesed: boolean = true;
  screenWidth: number = 0;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapesed = false;
      this.onToggleSidenav.emit({ collapesed: this.collapesed, screenWidth: this.screenWidth })
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
    },
    {
      routeLink: 'card',
      icon: 'fa-solid fa-house',
      label: 'card'
    },
    {
      routeLink: 'card',
      icon: 'fa-solid fa-house',
      label: 'card'
    }
  ]

  closeSidenav() {
    this.collapesed = false;
    this.onToggleSidenav.emit({ collapesed: this.collapesed, screenWidth: this.screenWidth })
  }

  toggleCollapse() {
    this.collapesed = !this.collapesed;
    this.onToggleSidenav.emit({ collapesed: this.collapesed, screenWidth: this.screenWidth })
  }

}
