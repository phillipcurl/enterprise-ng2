import {
  Component,
  ViewChild,
  HostListener,
  Input,
  ElementRef,
  AfterViewInit
} from '@angular/core';

/**
 * The BackTopComponent lives in the bottom right of the page and allows the
 * user to scroll to the top of the page
 * 
 * @export
 * @class BackTopComponent
 * @implements {AfterViewInit}
 */
@Component({
  selector: 'back-top',
  styleUrls: ['./backTop.component.scss'],
  template: `
    <i #backTop class="fa fa-angle-up back-top back-top" title="Back to Top"></i>
  `
})
export class BackTopComponent implements AfterViewInit {

  /**
   * The number of pixels from the top of the screen that the component is triggered
   * 
   * @type {number}
   * @memberOf BackTopComponent
   */
  @Input() position: number = 400;
  /**
   * The delay in ms that the component is shown
   * 
   * @type {number}
   * @memberOf BackTopComponent
   */
  @Input() showSpeed: number = 500;
  /**
   * The time in ms it takes to scroll to the top
   * 
   * @type {number}
   * @memberOf BackTopComponent
   */
  @Input() moveSpeed: number = 1000;

  /**
   * The reference to the DOM element that is rendered in the view
   * 
   * @private
   * @type {ElementRef}
   * @memberOf BackTopComponent
   */
  @ViewChild('backTop') private _selector: ElementRef;

  /**
   * Attach the scroll event to the component once the component has initialzied
   * 
   * @memberOf BackTopComponent
   */
  ngAfterViewInit() {
    this._onWindowScroll();
  }

  /**
   * Bind to the jQuery onClick for the element and scroll to the top of the page using the
   * speed defined as an input above.
   * 
   * @returns {boolean}
   * 
   * @memberOf BackTopComponent
   */
  @HostListener('click')
  _onClick(): boolean {
    jQuery('html, body').animate({
      scrollTop: 0
    }, {
      duration: this.moveSpeed
    });
    return false;
  }

  /**
   * Show/hide the component if it is above/below the pixel threshold defined by the position @Input
   * 
   * @memberOf BackTopComponent
   */
  @HostListener('window: scroll')
  _onWindowScroll(): void {
    let el = this._selector.nativeElement;
    window.scrollY > this.position ? jQuery(el).fadeIn(this.showSpeed) : jQuery(el).fadeOut(this.showSpeed);
  }
}
