import { Component, ViewEncapsulation, AfterViewInit } from '@angular/core';
import {
  GlobalState,
  ImageLoaderService,
  ThemePreloader,
  ThemeSpinner
} from './../shared';
import { layoutPaths, ThemeConfig } from './../theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {

  isMenuCollapsed: boolean = false;

  constructor(private _state: GlobalState,
              private _imageLoader: ImageLoaderService,
              private _spinner: ThemeSpinner,
              private _config: ThemeConfig) {

    this._loadImages();

    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  ngAfterViewInit() {
    // hide spinner once all loaders are completed
    ThemePreloader.load().then((values) => {
      this._spinner.hide();
    });
  }

  private _loadImages(): void {
    // register some loaders
    ThemePreloader.registerLoader(this._imageLoader.load(layoutPaths.images.root + 'sky-bg.jpg'));
  }
}
