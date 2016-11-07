import {
  Directive,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostListener
} from '@angular/core';

/**
 * 
 * 
 * @export
 * @class ScrollPosition
 * @implements {OnInit}
 */
@Directive({
  selector: '[scrollPosition]'
})
export class ScrollPosition implements OnInit {

  /**
   * 
   * 
   * @type {number}
   * @memberOf ScrollPosition
   */
  @Input() public maxHeight: number;
  /**
   * 
   * 
   * @type {EventEmitter < boolean >}
   * @memberOf ScrollPosition
   */
  @Output() public scrollChange: EventEmitter < boolean > = new EventEmitter < boolean > ();

  /**
   * 
   * 
   * @private
   * @type {boolean}
   * @memberOf ScrollPosition
   */
  private _isScrolled: boolean;

  /**
   * 
   * 
   * 
   * @memberOf ScrollPosition
   */
  ngOnInit() {
    this.onWindowScroll();
  }

  /**
   * 
   * 
   * 
   * @memberOf ScrollPosition
   */
  @HostListener('window:scroll')
  onWindowScroll(): void {
    let isScrolled = window.scrollY > this.maxHeight;
    if (isScrolled !== this._isScrolled) {
      this._isScrolled = isScrolled;
      this.scrollChange.emit(isScrolled);
    }
  }
}