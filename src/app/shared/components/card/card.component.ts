import { Component, ViewEncapsulation, ViewChild, Input } from '@angular/core';

/**
 * The card component that builds on top of Bootstrap's .card component
 * 
 * @export
 * @class CardComponent
 */
@Component({
  selector: 'app-card',
  styleUrls: ['./card.component.scss'],
  templateUrl: './card.component.html',
  encapsulation: ViewEncapsulation.None
})
export class CardComponent {

  /**
   * The title will be rendered in the .card-header div
   * 
   * @type {String}
   * @memberOf CardComponent
   */
  @Input() title: String;

  /**
   * Any optional class is added to the div containing the .card class
   * 
   * @type {String}
   * @memberOf CardComponent
   */
  @Input() cardClass: String;
}
