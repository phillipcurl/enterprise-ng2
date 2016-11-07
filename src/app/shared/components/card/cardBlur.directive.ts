import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding
} from '@angular/core';
import { ThemeConfigProvider } from '../../../theme';
import { CardBlurHelper } from './cardBlurHelper.service';
import { BgMetrics } from './bgMetrics';

/**
 * 
 * 
 * @export
 * @class CardBlurDirective
 */
@Directive({
  selector: '[cardBlur]',
  providers: [CardBlurHelper]
})
export class CardBlurDirective {

  /**
   * 
   * 
   * @type {boolean}
   * @memberOf CardBlurDirective
   */
  @HostBinding('class.card-blur') isEnabled: boolean = false;

  /**
   * 
   * 
   * @private
   * @type {BgMetrics}
   * @memberOf CardBlurDirective
   */
  private _bodyBgSize: BgMetrics;

  /**
   * Creates an instance of CardBlurDirective.
   * 
   * @param {ThemeConfigProvider} _config
   * @param {CardBlurHelper} _cardBlurHelper
   * @param {ElementRef} _el
   * 
   * @memberOf CardBlurDirective
   */
  constructor(
    private _config: ThemeConfigProvider,
    private _cardBlurHelper: CardBlurHelper,
    private _el: ElementRef) {
    if (this._isEnabled()) {
      this._cardBlurHelper.init();
      this._getBodyImageSizesOnBgLoad();
      this._recalculateCardStylesOnBgLoad();

      this.isEnabled = true;
    }
  }

  /**
   * 
   * 
   * 
   * @memberOf CardBlurDirective
   */
  @HostListener('window: resize')
  _onWindowResize(): void {
    if (this._isEnabled()) {
      this._bodyBgSize = this._cardBlurHelper.getBodyBgImageSizes();
      this._recalculateCardStyle();
    }
  }

  /**
   * 
   * 
   * @private
   * 
   * @memberOf CardBlurDirective
   */
  private _getBodyImageSizesOnBgLoad(): void {
    this._cardBlurHelper.bodyBgLoad().subscribe(() => {
      this._bodyBgSize = this._cardBlurHelper.getBodyBgImageSizes();
    });
  }

  /**
   * 
   * 
   * @private
   * 
   * @memberOf CardBlurDirective
   */
  private _recalculateCardStylesOnBgLoad(): void {
    this._cardBlurHelper.bodyBgLoad().subscribe((event) => {
      setTimeout(this._recalculateCardStyle.bind(this));
    })
  }

  /**
   * 
   * 
   * @private
   * @returns {void}
   * 
   * @memberOf CardBlurDirective
   */
  private _recalculateCardStyle(): void {
    if (!this._bodyBgSize) {
      return;
    }
    this._el.nativeElement.style.backgroundSize = Math.round(this._bodyBgSize.width) + 'px ' + Math.round(this._bodyBgSize.height) + 'px';
    this._el.nativeElement.style.backgroundPosition = Math.floor(this._bodyBgSize.positionX) + 'px ' + Math.floor(this._bodyBgSize.positionY) + 'px';
  }

  /**
   * 
   * 
   * @private
   * @returns
   * 
   * @memberOf CardBlurDirective
   */
  private _isEnabled() {
    return this._config.get().theme.name === 'blur';
  }
}
