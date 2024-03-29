import {Injectable} from '@angular/core';

@Injectable()
export class ThemeSpinner {

  private _selector:string = 'preloader';
  private _element:HTMLElement;

  constructor() {
    this._element = document.getElementById(this._selector);
  }

  public show(): void {
    if (this._element) {
      this._element.style['display'] = 'block';
    }
  }

  public hide(delay: number = 0): void {
    if (this._element) {
      setTimeout(() => {
        this._element.style['display'] = 'none';
      }, delay);
    }
  }
}
