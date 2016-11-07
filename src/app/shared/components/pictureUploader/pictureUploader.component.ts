import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  Renderer
} from '@angular/core';
import { Ng2Uploader } from 'ng2-uploader/ng2-uploader';

/**
 * 
 * 
 * @export
 * @class PictureUploaderComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'picture-uploader',
  styleUrls: ['./pictureUploader.component.scss'],
  templateUrl: './pictureUploader.component.html',
  providers: [Ng2Uploader]
})
export class PictureUploaderComponent implements OnInit {

  /**
   * 
   * 
   * @type {string}
   * @memberOf PictureUploaderComponent
   */
  @Input() defaultPicture: string = '';
  /**
   * 
   * 
   * @type {string}
   * @memberOf PictureUploaderComponent
   */
  @Input() picture: string = '';

  /**
   * 
   * 
   * @type {*}
   * @memberOf PictureUploaderComponent
   */
  @Input() uploaderOptions: any = {};
  /**
   * 
   * 
   * @type {boolean}
   * @memberOf PictureUploaderComponent
   */
  @Input() canDelete: boolean = true;

  /**
   * 
   * 
   * @type {EventEmitter < any >}
   * @memberOf PictureUploaderComponent
   */
  onUpload: EventEmitter < any > = new EventEmitter();
  /**
   * 
   * 
   * @type {EventEmitter < any >}
   * @memberOf PictureUploaderComponent
   */
  onUploadCompleted: EventEmitter < any > = new EventEmitter();

  /**
   * 
   * 
   * @protected
   * @type {ElementRef}
   * @memberOf PictureUploaderComponent
   */
  @ViewChild('fileUpload') protected _fileUpload: ElementRef;

  /**
   * 
   * 
   * @type {boolean}
   * @memberOf PictureUploaderComponent
   */
  public uploadInProgress: boolean = false;

  /**
   * Creates an instance of PictureUploaderComponent.
   * 
   * @param {Renderer} renderer
   * @param {Ng2Uploader} _uploader
   * 
   * @memberOf PictureUploaderComponent
   */
  constructor(private renderer: Renderer, protected _uploader: Ng2Uploader) {}

  /**
   * 
   * 
   * 
   * @memberOf PictureUploaderComponent
   */
  ngOnInit() {
    if (this._canUploadOnServer()) {
      setTimeout(() => {
        this._uploader.setOptions(this.uploaderOptions);
      });

      this._uploader._emitter.subscribe((data) => {
        this._onUpload(data);
      });
    } else {
      console.warn('Please specify url parameter to be able to upload the file on the back-end');
    }
  }

  /**
   * 
   * 
   * 
   * @memberOf PictureUploaderComponent
   */
  public onFiles(): void {
    let files = this._fileUpload.nativeElement.files;

    if (files.length) {
      const file = files[0];
      this._changePicture(file);

      if (this._canUploadOnServer()) {
        this.uploadInProgress = true;
        this._uploader.addFilesToQueue(files);
      }
    }
  }

  /**
   * 
   * 
   * @returns {boolean}
   * 
   * @memberOf PictureUploaderComponent
   */
  public bringFileSelector(): boolean {
    this.renderer.invokeElementMethod(this._fileUpload.nativeElement, 'click');
    return false;
  }

  /**
   * 
   * 
   * @returns {boolean}
   * 
   * @memberOf PictureUploaderComponent
   */
  public removePicture(): boolean {
    this.picture = '';
    return false;
  }

  /**
   * 
   * 
   * @protected
   * @param {File} file
   * 
   * @memberOf PictureUploaderComponent
   */
  protected _changePicture(file: File): void {
    const reader = new FileReader();
    reader.addEventListener('load', (event: Event) => {
      this.picture = ( < any > event.target).result;
    }, false);
    reader.readAsDataURL(file);
  }

  /**
   * 
   * 
   * @protected
   * @param {any} data
   * 
   * @memberOf PictureUploaderComponent
   */
  protected _onUpload(data): void {
    if (data['done'] || data['abort'] || data['error']) {
      this._onUploadCompleted(data);
    } else {
      this.onUpload.emit(data);
    }
  }

  /**
   * 
   * 
   * @protected
   * @param {any} data
   * 
   * @memberOf PictureUploaderComponent
   */
  protected _onUploadCompleted(data): void {
    this.uploadInProgress = false;
    this.onUploadCompleted.emit(data);
  }

  /**
   * 
   * 
   * @protected
   * @returns {boolean}
   * 
   * @memberOf PictureUploaderComponent
   */
  protected _canUploadOnServer(): boolean {
    return !!this.uploaderOptions['url'];
  }
}
