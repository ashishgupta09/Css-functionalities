import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-animated-text',
  templateUrl: './animated-text.component.html',
  styleUrls: ['./animated-text.component.scss']
})
export class AnimatedTextComponent implements OnInit {

  ngOnInit(): void {
    this.animationTest();
  }

  animationTest() {
    let type = new Typed(".text", {
      strings: ['Designer', 'Developer', 'Android', 'Frontent'],
      typeSpeed:200,
      backSpeed:200,
      loop:true,
    })
  }
}