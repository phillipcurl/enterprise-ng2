import { Component, ViewEncapsulation } from '@angular/core';

import { GlobalState } from '../../services';

/**
 * 
 * 
 * @export
 * @class PageTopComponent
 */
@Component({
  selector: 'page-top',
  styleUrls: ['./pageTop.component.scss'],
  templateUrl: './pageTop.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PageTopComponent {

  /**
   * 
   * 
   * @type {boolean}
   * @memberOf PageTopComponent
   */
  public isScrolled: boolean = false;
  /**
   * 
   * 
   * @type {boolean}
   * @memberOf PageTopComponent
   */
  public isMenuCollapsed: boolean = false;

  /**
   * Creates an instance of PageTopComponent.
   * 
   * @param {GlobalState} _state
   * 
   * @memberOf PageTopComponent
   */
  constructor(private _state: GlobalState) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  /**
   * 
   * 
   * 
   * @memberOf PageTopComponent
   */
  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
  }

  /**
   * 
   * 
   * @param {any} isScrolled
   * 
   * @memberOf PageTopComponent
   */
  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }
}