import {Component} from '@angular/core';

import {MsgCenterService} from './msgCenter.service';

/**
 * 
 * 
 * @export
 * @class MsgCenterComponent
 */
@Component({
  selector: 'ba-msg-center',
  providers: [MsgCenterService],
  styles: [require('./msgCenter.scss')],
  template: require('./msgCenter.html')
})
export class MsgCenterComponent {

  /**
   * 
   * 
   * @type {Array<Object>}
   * @memberOf MsgCenterComponent
   */
  public notifications: Array<Object>;
  /**
   * 
   * 
   * @type {Array<Object>}
   * @memberOf MsgCenterComponent
   */
  public messages: Array<Object>;

  /**
   * Creates an instance of MsgCenterComponent.
   * 
   * @param {MsgCenterService} _msgCenterService
   * 
   * @memberOf MsgCenterComponent
   */
  constructor(private _msgCenterService: MsgCenterService) {
    this.notifications = this._msgCenterService.getNotifications();
    this.messages = this._msgCenterService.getMessages();
  }

}
