import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-tab',
  templateUrl: './custom-tab.component.html',
  styleUrls: ['./custom-tab.component.scss']
})
export class CustomTabComponent {

  id: string = 'home'

  tabChange(tab: string) {
    this.id = tab;
  }

}
