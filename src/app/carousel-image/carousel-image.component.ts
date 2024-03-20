import { Component, Input } from '@angular/core';

interface CarouselImage{
  imageSrc:string;
  imageAlt:string;
}

@Component({
  selector: 'app-carousel-image',
  templateUrl: './carousel-image.component.html',
  styleUrls: ['./carousel-image.component.scss']
})
export class CarouselImageComponent {


  
  @Input() images:CarouselImage[]=[];
  @Input() indicators = true;
  @Input() controls = true;
  selectedIndex=0;
  
  ngOnInit(): void {}

  selectedImage(index:number) : void{
  this.selectedIndex = index;
  }

  onPrevClick(){
    if(this.selectedIndex ===0){
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick(){
    if(this.selectedIndex ===0){
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex++;
    }
  }


  // parent component

  image = [
    {
      imageSrc: '../../assets/sam-moghadam-khamseh-yxZSAjyToP4-unsplash.jpg',
      imageAlt: ''
    },
    {
      imageSrc: '../../assets/pexels-pixabay-206359.jpg',
      imageAlt: ''
    },
    {
      imageSrc: '../../assets/istockphoto-1644722689-1024x1024.jpg',
      imageAlt: ''
    },
    {
      imageSrc: '../../assets/jatniel-tunon-D4f5wkW9H9U-unsplash.jpg',
      imageAlt: ''
    }
  ]

}
