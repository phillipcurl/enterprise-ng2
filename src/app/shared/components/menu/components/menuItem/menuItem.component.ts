import {
  Component,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

/**
 * 
 * 
 * @export
 * @class MenuItemComponent
 */
@Component({
  selector: 'menu-item',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./menuItem.component.scss')],
  template: require('./menuItem.component.html')
})
export class MenuItemComponent {

  /**
   * 
   * 
   * @type {*}
   * @memberOf MenuItemComponent
   */
  @Input() menuItem: any;
  /**
   * 
   * 
   * @type {boolean}
   * @memberOf MenuItemComponent
   */
  @Input() child: boolean = false;

  /**
   * 
   * 
   * 
   * @memberOf MenuItemComponent
   */
  @Output() itemHover = new EventEmitter < any > ();
  /**
   * 
   * 
   * 
   * @memberOf MenuItemComponent
   */
  @Output() toggleSubMenu = new EventEmitter < any > ();

  /**
   * 
   * 
   * @param {any} $event
   * 
   * @memberOf MenuItemComponent
   */
  public onHoverItem($event): void {
    this.itemHover.emit($event);
  }

  /**
   * 
   * 
   * @param {any} $event
   * @param {any} item
   * @returns {boolean}
   * 
   * @memberOf MenuItemComponent
   */
  public onToggleSubMenu($event, item): boolean {
    $event.item = item;
    this.toggleSubMenu.emit($event);
    return false;
  }
}