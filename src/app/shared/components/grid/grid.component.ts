import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';
import { Column, DialogService } from './../../../shared';
import { Sorter } from './sorter';

@Component({
  selector: 'app-grid',
  templateUrl: 'grid.component.html',
  styleUrls: ['grid.component.scss'],
})
export class GridComponent implements OnInit {
  /** 
   * The component takes three initializer parameters. These are only used to initialize the
   * component. They cannot be updated after the component has been initialized. To create a
   * property that can be updated dynamically, add an @Input() declaration below.
   * 
   * @param {Array}   rows       : The array of objects being bound to the grid (eg. Events, Users, etc.)
   * @param {Array}   columns    : The array of columns being bound to the grid. Each column is a key value
   *                               pair of {"objectProperty", "Header Text"}. For Event title, this would
   *                               be: {"title","Title"}
   * @param {boolean} isEditable : True if the grid should be editable. False if it should be readonly.
   */
  @Input() public rows: any[];
  @Input() public columns: Column[];
  @Input() public isEditable: Boolean;

  // Allow a name input to be updated on the fly. This is unnecessary right now,
  // but I wanted to enable the functionality to test it out.
  @Input() name: string;

  // We emit an event containing the edited object each time an edit is made. The
  // parent component is responsible for listening to this event and making a call
  // to its associated service to update the object.
  @Output() objectUpdated = new EventEmitter();

  // Emit the id of the deleted object
  @Output() objectDeleted = new EventEmitter();

  // Properties scoped to the grid component
  liveEditing: boolean;

  // The row that is currenly being edited, which corresponds to an object whose
  // type matches the array of objects sent to the grid
  tempObject: {};
  // The ID of the currently selected object. This is primarily used in the UI to
  // to determine whether fields should be shown or hidden when isEditing is set
  // to true
  selectedId: number;
  // As opposed to isEditable, isEditing is stateful and is set to true when the
  // currently selected row should be displayed with editable inputs 
  isEditing: boolean;
  // Whenever we detect a change to the model, we set isModelDirty to true. Once
  // that object has been emitted by the objectUpdated EventEmitter, we set this
  // to false
  isModelDirty: boolean = false;

  lastSavedObject = {};

  constructor(public dialog: DialogService) {

  }

  // Create a new instance of the sorter and sort the column if the grid is not
  // being edited.
  sorter = new Sorter();
  sort(key) {
    if (!this.isEditing) {
      this.sorter.sort(key, this.rows);
    }
  }

  /**
   * Enable editing of a row and save any unsaved data from the previously edited row
   * @param {number} id
   */
  edit(id: number) {

    /** 
     * The user is not able to see the edit column at this point, but we still
     * have to disable double-click to edit by scoping this function to editable
     * grids
     * */
    if (this.isEditable) {
      this.selectedId = id;
      console.log('selected id: ' + this.selectedId);
      // Clean the model if changes are unsaved
      if (this.isModelDirty) {
        this.cleanModel(true);
      }
      // set the tempObject to the row's index in the rows array
      this.tempObject = this.rows.filter((row) => row['id'] === this.selectedId)[0];
      console.log(this.tempObject);
      // set isEditing to true, which toggles all editing functionality in the UI
      this.isEditing = true;
    }
  }

  /**
   * Save the object that is being edited by sending it to the objectUpdated
   * EventEmitter, and set isEditing to false to disable the editing UI.
   * @param  {number} id
   */
  save(id: number) {
    this.cleanModel(true);
    this.selectedId = -1;
    this.toggleEditing();
  }

  delete(id: number) {
    this.dialog.confirm('Are you sure you want to delete this? This action cannot be undone.')
      .then((isTrue) => {
        if (isTrue) {
          this.objectDeleted.emit(id);
          let arrayIndex = this.rows.findIndex((row) => row['id'] === id);
          this.rows.splice(arrayIndex, 1);
        }
      })
      .catch(() => {
        this.cleanModel(false);
      });
  }

  // When the model is changed, set isModelDirty to true
  change($event) {
    this.isModelDirty = true;
  }

  dblClick(id) {
    // if (this.liveEditing) {
    //   this.edit(id);
    // }
    this.edit(id);
  }

  tableClick() {
    if (this.isEditing) {
      this.cleanModel(true);
      this.selectedId = -1;
      this.isEditing = false;
    }
  }

  cancel() {
    this.cleanModel(false);
    this.selectedId = 0;
    this.lastSavedObject = {};
    this.toggleEditing();
  }

  toggleEditing() {
    this.isEditing = !this.isEditing;
  }

  enableEditing() {
    this.isEditing = true;
  }

  disableEditing() {
    this.isEditing = false;
  }

  /**
   * @param  {number} objectId - the currently selected row ID
   * @param  {Boolean} saveChanges - true if the currently selected object
   *                                 should be saved
   */
  cleanModel(saveChanges: Boolean) {
    if (saveChanges && this.isModelDirty) {
      this.tempObject = this.rows.filter((row) => row['id'] === this.selectedId)[0];
      this.objectUpdated.emit(this.tempObject);
      this.lastSavedObject = this.tempObject;
    } else {
      this.lastSavedObject = {};
    }
    this.isModelDirty = false;
  }

  // When the component is initialized, make sure the grid is not in an
  // editing state.
  ngOnInit() {
    this.liveEditing = false;
    this.isEditing = false;
    this.isModelDirty = false;
  }

}