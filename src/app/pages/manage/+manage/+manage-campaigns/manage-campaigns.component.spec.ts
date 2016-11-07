import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ManageCampaignsComponent } from './manage-campaigns.component';

describe('Component: ManageCampaigns', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ManageCampaignsComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ManageCampaignsComponent],
      (component: ManageCampaignsComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ManageCampaignsComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(ManageCampaignsComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-manage-campaigns></app-manage-campaigns>
  `,
  directives: [ManageCampaignsComponent]
})
class ManageCampaignsComponentTestController {
}

