// @Author: Phillip Curl <PC>
// @Date:   2016-05-13T21:21:49-04:00
// @Email:  phillipcurl@gmail.com
// @Project: Libations-Portal
// @Last modified by:   PC
// @Last modified time: 2016-05-13T21:26:21-04:00

import { Injectable } from '@angular/core';
/**
 * Async modal dialog service
 * DialogService makes this app easier to test by faking this service.
 * TODO: better modal implemenation that doesn't use window.confirm, as
 * as it's best to avoid interacting directly with the DOM as much as 
 * possible
 */
@Injectable()
export class DialogService {
  /**
   * @param
   * 
   * Ask user to confirm an action. `message` explains the action and choices.
   * Returns promise resolving to `true`=confirm or `false`=cancel
   * 
   * One use-case for this is when a user has made edits to a page and attempts
   * to navigate to a different route. You can simply add a decorator function
   * for routerCanDeactivate, and call:
   * return this.dialogServiceInstance.confirm('Discard changes?');
   */
  confirm(message?: string) {
    return new Promise<boolean>((resolve, reject) =>
      resolve(window.confirm(message || 'Are you sure?')));
  };
}