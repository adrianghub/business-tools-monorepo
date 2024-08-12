import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  Input,
} from '@angular/core';

@Directive({
  selector: '[btLibsUiHighlight]',
  standalone: true,
})
export class HighlightDirective {
  @Input() backgroundColor = 'black';
  @Input() textColor = 'white';

  private el = inject(ElementRef).nativeElement;
  private originalColor = 'black';
  private originalBackgroundColor = 'white';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.originalColor = this.el.style.color;
    this.originalBackgroundColor = this.el.style.backgroundColor;
    this.el.style.backgroundColor = this.backgroundColor;
    this.el.style.color = this.textColor;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.style.backgroundColor = this.originalBackgroundColor;
    this.el.style.color = this.originalColor;
  }
}
