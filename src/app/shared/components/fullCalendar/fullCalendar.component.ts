import {
  Component,
  ViewChild,
  ViewEncapsulation,
  Input,
  Output,
  ElementRef,
  EventEmitter,
  AfterViewInit
} from '@angular/core';

/**
 * 
 * 
 * @export
 * @class FullCalendarComponent
 * @implements {AfterViewInit}
 */
@Component({
  selector: 'full-calendar',
  templateUrl: './fullCalendar.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class FullCalendarComponent implements AfterViewInit {

  /**
   * 
   * 
   * @type {Object}
   * @memberOf FullCalendarComponent
   */
  @Input() fullCalendarConfiguration: Object;
  /**
   * 
   * 
   * @type {string}
   * @memberOf FullCalendarComponent
   */
  @Input() fullCalendarClass: string;
  /**
   * 
   * 
   * 
   * @memberOf FullCalendarComponent
   */
  @Output() onCalendarReady = new EventEmitter < any > ();

  /**
   * 
   * 
   * @private
   * @type {ElementRef}
   * @memberOf FullCalendarComponent
   */
  @ViewChild('fullCalendar') private _selector: ElementRef;

  /**
   * 
   * 
   * 
   * @memberOf FullCalendarComponent
   */
  ngAfterViewInit() {
    let calendar = jQuery(this._selector.nativeElement).fullCalendar(this.fullCalendarConfiguration);
    this.onCalendarReady.emit(calendar);
  }
}
