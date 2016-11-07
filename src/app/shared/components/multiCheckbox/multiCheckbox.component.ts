import { Component, Input, Self } from '@angular/core';
import { ControlValueAccessor, NgModel } from '@angular/forms';

/**
 * 
 * 
 * @export
 * @class MultiCheckboxComponent
 * @implements {ControlValueAccessor}
 */
@Component({
  selector: 'multi-checkbox[ngModel]',
  templateUrl: './multiCheckbox.component.html',
})
export class MultiCheckboxComponent implements ControlValueAccessor {
  /**
   * 
   * 
   * @type {string}
   * @memberOf MultiCheckboxComponent
   */
  @Input() multiCheckboxClass: string;
  /**
   * 
   * 
   * @type {*}
   * @memberOf MultiCheckboxComponent
   */
  @Input() propertiesMapping: any;

  /**
   * 
   * 
   * @type {NgModel}
   * @memberOf MultiCheckboxComponent
   */
  public model: NgModel;
  /**
   * 
   * 
   * @type {boolean}
   * @memberOf MultiCheckboxComponent
   */
  public state: boolean;

  /**
   * Creates an instance of MultiCheckboxComponent.
   * 
   * @param {NgModel} state
   * 
   * @memberOf MultiCheckboxComponent
   */
  public constructor(@Self() state: NgModel) {
    this.model = state;
    state.valueAccessor = this;
  }

  /**
   * 
   * 
   * @param {*} item
   * @param {string} propName
   * @returns {string}
   * 
   * @memberOf MultiCheckboxComponent
   */
  public getProp(item: any, propName: string): string {
    const prop = this.propertiesMapping[propName];

    if (!prop) {
      return item[propName];
    } else if (typeof prop === 'function') {
      return prop(item);
    }
    return item[prop];
  }
  /**
   * 
   * 
   * @param {*} value
   * 
   * @memberOf MultiCheckboxComponent
   */
  public onChange(value: any): void {}
  /**
   * 
   * 
   * @param {*} value
   * 
   * @memberOf MultiCheckboxComponent
   */
  public onTouch(value: any): void {}
  /**
   * 
   * 
   * @param {*} state
   * 
   * @memberOf MultiCheckboxComponent
   */
  public writeValue(state: any): void {
    this.state = state;
  }

  /**
   * 
   * 
   * @param {*} fn
   * 
   * @memberOf MultiCheckboxComponent
   */
  public registerOnChange(fn: any): void {
    /**
     * 
     * 
     * @param {boolean} state
     */
    this.onChange = function (state: boolean) {
      this.writeValue(state);
      this.model.viewToModelUpdate(state);
    }
  }
  /**
   * 
   * 
   * @param {*} fn
   * 
   * @memberOf MultiCheckboxComponent
   */
  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
