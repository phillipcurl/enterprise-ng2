import {Component, Input, Self} from '@angular/core';
import {ControlValueAccessor, NgModel} from '@angular/forms';

/**
 * 
 * 
 * @export
 * @class CheckboxComponent
 * @implements {ControlValueAccessor}
 */
@Component({
  selector: 'checkbox[ngModel]',
  styleUrls: ['./checkbox.component.scss'],
  templateUrl: './checkbox.component.html'
})
export class CheckboxComponent implements ControlValueAccessor {
  /**
   * 
   * 
   * @type {boolean}
   * @memberOf CheckboxComponent
   */
  @Input() disabled: boolean;
  /**
   * 
   * 
   * @type {string}
   * @memberOf CheckboxComponent
   */
  @Input() label: string;
  /**
   * 
   * 
   * @type {string}
   * @memberOf CheckboxComponent
   */
  @Input() value: string;
  /**
   * 
   * 
   * @type {string}
   * @memberOf CheckboxComponent
   */
  @Input() checkboxClass: string;

  /**
   * 
   * 
   * @type {NgModel}
   * @memberOf CheckboxComponent
   */
  public model: NgModel;
  /**
   * 
   * 
   * @type {boolean}
   * @memberOf CheckboxComponent
   */
  public state: boolean;

  /**
   * Creates an instance of CheckboxComponent.
   * 
   * @param {NgModel} state
   * 
   * @memberOf CheckboxComponent
   */
  public constructor(@Self() state: NgModel) {
    this.model = state;
    state.valueAccessor = this;
  }

  /**
   * 
   * 
   * @param {*} value
   * 
   * @memberOf CheckboxComponent
   */
  public onChange(value: any): void {}
  /**
   * 
   * 
   * @param {*} value
   * 
   * @memberOf CheckboxComponent
   */
  public onTouch(value: any): void {}
  /**
   * 
   * 
   * @param {*} state
   * 
   * @memberOf CheckboxComponent
   */
  public writeValue(state: any): void {
    this.state = state;
  }

  /**
   * 
   * 
   * @param {*} fn
   * 
   * @memberOf CheckboxComponent
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
    };
  }
  /**
   * 
   * 
   * @param {*} fn
   * 
   * @memberOf CheckboxComponent
   */
  public registerOnTouched(fn: any): void { this.onTouch = fn; }
}
