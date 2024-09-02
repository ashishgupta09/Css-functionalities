import { Component } from '@angular/core';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.scss']
})
export class CarousalComponent {

  activeImage: number = 0;
  indicator: boolean = true;
  control: boolean = true;

  image = [
    {
      section: 'section1',
      img: 'assets/pexels-eberhardgross-443446.jpg'
    },
    {
      section: 'section2',
      img: 'assets/pexels-thatguycraig000-1563355.jpg'
    },
    {
      section: 'section3',
      img: 'assets/pexels-pixabay-326055.jpg'
    },
    {
      section: 'section4',
      img: 'assets/pexels-pixabay-33109.jpg'
    },
    {
      section: 'section5',
      img: 'assets/pexels-pixabay-36762.jpg'
    },

  ]

  selectedImages(index: number) {
    this.activeImage = index;
  }

  onPrevClick() {
    if (this.activeImage === 0) {
      this.activeImage = this.image.length - 1;
    } else {
      this.activeImage--;
    }
  }

  onNextClick() {
    if (this.activeImage === this.image.length - 1) {
      this.activeImage = 0;
    } else {
      this.activeImage++;
    }
  }

}
