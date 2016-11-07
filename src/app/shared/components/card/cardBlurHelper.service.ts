import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { BgMetrics } from './bgMetrics';

/**
 * 
 * 
 * @export
 * @class CardBlurHelper
 */
@Injectable()
export class CardBlurHelper {
  /**
   * 
   * 
   * @private
   * @type {HTMLImageElement}
   * @memberOf CardBlurHelper
   */
  private image: HTMLImageElement;
  /**
   * 
   * 
   * @private
   * @type {Subject<void>}
   * @memberOf CardBlurHelper
   */
  private imageLoadSubject: Subject<void>;


  /**
   * 
   * 
   * 
   * @memberOf CardBlurHelper
   */
  public init() {
    this._genBgImage();
    this._genImageLoadSubject();
  }

  /**
   * 
   * 
   * @returns {Subject<void>}
   * 
   * @memberOf CardBlurHelper
   */
  public bodyBgLoad(): Subject<void> {
    return this.imageLoadSubject;
  }

  /**
   * 
   * 
   * @returns {BgMetrics}
   * 
   * @memberOf CardBlurHelper
   */
  public getBodyBgImageSizes(): BgMetrics {
    let elemW = document.documentElement.clientWidth;
    let elemH = document.documentElement.clientHeight;
    if (elemW <= 640) {
      return;
    }
    let imgRatio = (this.image.height / this.image.width);
    let containerRatio = (elemH / elemW);

    let finalHeight, finalWidth;
    if (containerRatio > imgRatio) {
      finalHeight = elemH;
      finalWidth = (elemH / imgRatio);
    } else {
      finalWidth = elemW;
      finalHeight = (elemW * imgRatio);
    }
    return { width: finalWidth, height: finalHeight, positionX: (elemW - finalWidth) / 2, positionY: (elemH - finalHeight) / 2};
  }

  /**
   * 
   * 
   * @private
   * 
   * @memberOf CardBlurHelper
   */
  private _genBgImage(): void {
    this.image = new Image();
    let computedStyle = getComputedStyle(document.body.querySelector('main'), ':before');
    this.image.src = computedStyle.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2');
  }

  /**
   * 
   * 
   * @private
   * 
   * @memberOf CardBlurHelper
   */
  private _genImageLoadSubject(): void {
    this.imageLoadSubject = new Subject<void>();
    /**
     * 
     * 
     * @param {any} err
     */
    this.image.onerror = (err) => {
      this.imageLoadSubject.complete();
    };
    /**
     * 
     */
    this.image.onload = () => {
      this.imageLoadSubject.next(null);
      this.imageLoadSubject.complete();
    };
  }
}
