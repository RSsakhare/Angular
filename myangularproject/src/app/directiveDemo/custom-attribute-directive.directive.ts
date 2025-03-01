import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[myColor]'
})
export class CustomAttributeDirectiveDirective implements AfterViewInit {
  @Input() myColor!: string;

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.elRef.nativeElement.style.color = this.myColor;
    this.elRef.nativeElement.style.fontSize = '20px';
  }
}
