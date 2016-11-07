import {Component} from '@angular/core';

import {GlobalState} from '../../services/global.state';

/**
 * 
 * 
 * @export
 * @class ContentTopComponent
 */
@Component({
  selector: 'content-top',
  styleUrls: ['./contentTop.scss'],
  templateUrl: './contentTop.html',
})
export class ContentTopComponent {

  /**
   * 
   * 
   * @type {string}
   * @memberOf ContentTopComponent
   */
  public activePageTitle: string = '';

  /**
   * Creates an instance of ContentTopComponent.
   * 
   * @param {GlobalState} _state
   * 
   * @memberOf ContentTopComponent
   */
  constructor(private _state: GlobalState) {
    this._state.subscribe('menu.activeLink', (activeLink) => {
      if (activeLink) {
        this.activePageTitle = activeLink.title;
      }
    });
  }
}
