import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appResizable]'
})
export class ResizableDirective {

  private resizing: boolean = false;
  private element: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.element = this.el.nativeElement;
    this.createResizers();
  }

  private createResizers() {
    const resizers = ['right', 'bottom', 'bottom-right'];
    resizers.forEach(resizer => {
      const resizerElement = this.renderer.createElement('div');
      this.renderer.addClass(resizerElement, 'resizer');
      this.renderer.addClass(resizerElement, resizer);
      this.renderer.appendChild(this.element, resizerElement);

      this.renderer.listen(resizerElement, 'mousedown', (event) => this.onMouseDown(event, resizer));
    });
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.resizing) {
      if (this.currentResizer === 'right' || this.currentResizer === 'bottom-right') {
        this.element.style.width = `${event.clientX - this.element.offsetLeft}px`;
      }
      if (this.currentResizer === 'bottom' || this.currentResizer === 'bottom-right') {
        this.element.style.height = `${event.clientY - this.element.offsetTop}px`;
      }
    }
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.resizing = false;
  }

  private currentResizer: string='';
  
  onMouseDown(event: MouseEvent, resizer: string) {
    event.preventDefault();
    this.resizing = true;
    this.currentResizer = resizer;
  }

}
