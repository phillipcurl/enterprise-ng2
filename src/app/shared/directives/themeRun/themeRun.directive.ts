import { Directive, HostBinding } from '@angular/core';

import { ThemeConfigProvider, isMobile } from '../../../theme';

@Directive({
  selector: '[themeRun]'
})
export class ThemeRun {

  private _classes: Array < string > = [];
  @HostBinding('class') classesString: string;

  constructor(private _config: ThemeConfigProvider) {}

  public ngOnInit(): void {
    this._assignTheme();
    this._assignMobile();
  }

  private _assignTheme(): void {
    this._addClass(this._config.get().theme.name);
  }

  private _assignMobile(): void {
    if (isMobile()) {
      this._addClass('mobile');
    }
  }

  private _addClass(cls: string) {
    this._classes.push(cls);
    this.classesString = this._classes.join(' ');
  }
}