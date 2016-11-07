import {
  Component,
  OnInit,
  OnDestroy,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Router, Routes, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { MenuService } from './menu.service';
import { GlobalState } from '../../services';

/**
 * 
 * 
 * @export
 * @class MenuComponent
 * @implements {OnInit}
 * @implements {OnDestroy}
 */
@Component({
  selector: 'app-menu',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./menu.component.scss')],
  template: require('./menu.component.html'),
  providers: [MenuService]
})
export class MenuComponent implements OnInit, OnDestroy {

  /**
   * 
   * 
   * @type {Routes}
   * @memberOf MenuComponent
   */
  @Input() menuRoutes: Routes = [];
  /**
   * 
   * 
   * @type {boolean}
   * @memberOf MenuComponent
   */
  @Input() sidebarCollapsed: boolean = false;
  /**
   * 
   * 
   * @type {number}
   * @memberOf MenuComponent
   */
  @Input() menuHeight: number;

  /**
   * 
   * 
   * 
   * @memberOf MenuComponent
   */
  @Output() expandMenu = new EventEmitter < any > ();

  /**
   * 
   * 
   * @type {any[]}
   * @memberOf MenuComponent
   */
  public menuItems: any[];
  /**
   * 
   * 
   * @type {boolean}
   * @memberOf MenuComponent
   */
  public showHoverElem: boolean;
  /**
   * 
   * 
   * @type {number}
   * @memberOf MenuComponent
   */
  public hoverElemHeight: number;
  /**
   * 
   * 
   * @type {number}
   * @memberOf MenuComponent
   */
  public hoverElemTop: number;
  /**
   * 
   * 
   * @protected
   * @type {Subscription}
   * @memberOf MenuComponent
   */
  protected _onRouteChange: Subscription;
  /**
   * 
   * 
   * @type {number}
   * @memberOf MenuComponent
   */
  public outOfArea: number = -200;

  /**
   * Creates an instance of MenuComponent.
   * 
   * @param {Router} _router
   * @param {MenuService} _service
   * @param {GlobalState} _state
   * 
   * @memberOf MenuComponent
   */
  constructor(private _router: Router, private _service: MenuService, private _state: GlobalState) {
    this._onRouteChange = this._router.events.subscribe((event) => {

      if (event instanceof NavigationEnd) {
        if (this.menuItems) {
          this.selectMenuAndNotify();
        } else {
          // on page load we have to wait as event is fired before menu elements are prepared
          setTimeout(() => this.selectMenuAndNotify());
        }
      }
    });
  }

  /**
   * 
   * 
   * 
   * @memberOf MenuComponent
   */
  public selectMenuAndNotify(): void {
    if (this.menuItems) {
      this.menuItems = this._service.selectMenuItem(this.menuItems);
      this._state.notifyDataChanged('menu.activeLink', this._service.getCurrentItem());
    }
  }

  /**
   * 
   * 
   * 
   * @memberOf MenuComponent
   */
  public ngOnInit(): void {
    this.menuItems = this._service.convertRoutesToMenus(this.menuRoutes);
  }

  /**
   * 
   * 
   * 
   * @memberOf MenuComponent
   */
  public ngOnDestroy(): void {
    this._onRouteChange.unsubscribe();
  }

  /**
   * 
   * 
   * @param {any} $event
   * 
   * @memberOf MenuComponent
   */
  public hoverItem($event): void {
    this.showHoverElem = true;
    this.hoverElemHeight = $event.currentTarget.clientHeight;
    // TODO: get rid of magic 66 constant
    this.hoverElemTop = $event.currentTarget.getBoundingClientRect().top - 66;
  }

  /**
   * 
   * 
   * @param {any} $event
   * @returns {boolean}
   * 
   * @memberOf MenuComponent
   */
  public toggleSubMenu($event): boolean {
    let submenu = jQuery($event.currentTarget).next();

    if (this.sidebarCollapsed) {
      this.expandMenu.emit(null);
      if (!$event.item.expanded) {
        $event.item.expanded = true;
      }
    } else {
      $event.item.expanded = !$event.item.expanded;
      submenu.slideToggle();
    }

    return false;
  }
}
