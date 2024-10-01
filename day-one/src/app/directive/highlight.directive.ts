import { Directive, ElementRef, OnInit, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnInit{
  @Input() color!: string;


  constructor(private el: ElementRef) { }

  ngOnInit() :void {
    this.highlightElement();
  }

  private highlightElement() {
    if (this.color){
        this.el.nativeElement.style.backgroundColor = this.color;
    }
  }


}
