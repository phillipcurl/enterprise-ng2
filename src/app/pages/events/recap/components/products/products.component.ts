import { Component, OnInit } from '@angular/core';
import { Event, EventService, DialogService } from './../../../../../shared';
import { RecapState } from './../../recap-state.service';

@Component({
  selector: 'recap-products',
  templateUrl: 'products.component.html',
  styleUrls: ['products.component.scss']
})
export class ProductsComponent implements OnInit {
  newProductName: string;
  newProductSample: number;
  newProductSold: number;
  newProductRegularPrice: number;
  newProductDemoPrice: number;
  userProducts = (<any>[]);

  constructor(private EventService: EventService,
              public dialog: DialogService,
              public recapState: RecapState) {}

  ngOnInit() {
    if (this.recapState.recap.products) {
      this.userProducts = this.recapState.recap.products;
    }
  }

  deleteProduct(index: number): boolean {
    if (index >= 0) {
      if (confirm('Are you sure you want to delete this product?')) {
        this.userProducts.splice(index, 1);
      }
    }
    return false;
  }

  addProduct(): boolean {
    // this.nameListService.add(this.newName);
    if (this.newProductName.length > 0) {
      let newProduct: any = {
        name: this.newProductName,
        samplesPoured: this.newProductSample,
        bottlesSold: this.newProductSold,
        regularPrice: this.newProductRegularPrice,
        demoPrice: this.newProductDemoPrice
      };
      this.userProducts.push(newProduct);
      this.clearFormModel();
      newProduct = {};
    }
    return false;
  }

  showNext() {
    this.recapState.setRecap('products', this.userProducts);
    this.recapState.setState('currentStep', 'feedback');
  }

  showPrevious() {
    this.recapState.setState('currentStep', 'info');
  }

  clearFormModel() {
    this.newProductName = null;
    this.newProductSample = null;
    this.newProductSold = null;
    this.newProductRegularPrice = null;
    this.newProductDemoPrice = null;
  }

}
