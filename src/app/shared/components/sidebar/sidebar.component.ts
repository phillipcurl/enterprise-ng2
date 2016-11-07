import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  HostListener,
  ViewEncapsulation
} from '@angular/core';
import { GlobalState } from '../../services';
import { layoutSizes } from '../../../theme';
import { MENU } from '../../../app-root/app.menu';
import * as _ from 'lodash';

/**
 * 
 * 
 * @export
 * @class SidebarComponent
 * @implements {OnInit}
 * @implements {AfterViewInit}
 */
@Component({
  selector: 'app-sidebar',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./sidebar.component.scss'],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit, AfterViewInit {

  /**
   * declare which routes we want to use as a menu in our sidebar
   * 
   * @memberOf SidebarComponent
   */
  public routes = _.cloneDeep(MENU); // we're creating a deep copy since we are going to change that object

  /**
   * @type {number}
   * @memberOf SidebarComponent
   */
  public menuHeight: number;
  /**
   * @type {boolean}
   * @memberOf SidebarComponent
   */
  public isMenuCollapsed: boolean = false;
  /**
   * @type {boolean}
   * @memberOf SidebarComponent
   */
  public isMenuShouldCollapsed: boolean = false;


  /**
   * Creates an instance of SidebarComponent.
   * 
   * @param {ElementRef} _elementRef
   * @param {GlobalState} _state
   * 
   * @memberOf SidebarComponent
   */
  constructor(private _elementRef: ElementRef, private _state: GlobalState) {

    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  /**
   * @memberOf SidebarComponent
   */
  ngOnInit() {
    if (this._shouldMenuCollapse()) {
      this.menuCollapse();
    }
  }

  /**
   * @memberOf SidebarComponent
   */
  public ngAfterViewInit(): void {
    setTimeout(() => this.updateSidebarHeight());
  }

  /**
   * @memberOf SidebarComponent
   */
  @HostListener('window:resize')
  public onWindowResize(): void {

    let isMenuShouldCollapsed = this._shouldMenuCollapse();

    if (this.isMenuShouldCollapsed !== isMenuShouldCollapsed) {
      this.menuCollapseStateChange(isMenuShouldCollapsed);
    }
    this.isMenuShouldCollapsed = isMenuShouldCollapsed;
    this.updateSidebarHeight();
  }

  /**
   * @memberOf SidebarComponent
   */
  public menuExpand(): void {
    this.menuCollapseStateChange(false);
  }

  /**
   * @memberOf SidebarComponent
   */
  public menuCollapse(): void {
    this.menuCollapseStateChange(true);
  }

  /**
   * @param {boolean} isCollapsed
   * 
   * @memberOf SidebarComponent
   */
  public menuCollapseStateChange(isCollapsed: boolean): void {
    this.isMenuCollapsed = isCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
  }

  /**
   * @memberOf SidebarComponent
   */
  public updateSidebarHeight(): void {
    // TODO: get rid of magic 84 constant
    this.menuHeight = this._elementRef.nativeElement.childNodes[0].clientHeight - 84;
  }

  /**
   * @private
   * @returns {boolean}
   * 
   * @memberOf SidebarComponent
   */
  private _shouldMenuCollapse(): boolean {
    return window.innerWidth <= layoutSizes.resWidthCollapseSidebar;
  }
}