import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuVariable: boolean = false;
  menu_icon_varable:boolean =false;

  toggleNav() {
    this.menuVariable = !this.menuVariable;
    this.menu_icon_varable = !this.menu_icon_varable;
  }
}
