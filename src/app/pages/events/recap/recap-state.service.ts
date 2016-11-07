import { Injectable } from '@angular/core';
import { EventRecap } from './../../../shared';

@Injectable()
export class RecapState {
  _state = {};
  _recap = {EventRecap};

  constructor() {
    // Any service initialization should go here
  }

  get state() {
    return this._state = this._clone(this._state);
  }
  // never allow mutation
  set state(value) {
    throw new Error('do not mutate the `.state` directly');
  }

  get recap() {
    return this._recap = this._clone(this._recap);
  }
  // never allow mutation
  set recap(value) {
    throw new Error('do not mutate the `.recap` directly');
  }

  getState(prop?: any) {
    // use our state getter for the clone
    const state = this.state;
    return state[prop] || state;
  }

  setState(prop: string, value: any) {
    // internally mutate our state
    return this._state[prop] = value;
  }

  getRecap(prop?: any) {
    // use our state getter for the clone
    const recap = this.recap;
    return recap[prop] || recap;
  }

  setRecap(prop: string, value: any) {
    // internally mutate our state
    return this._recap[prop] = value;
  }

  _clone(object: any) {
    // simple object clone
    return JSON.parse(JSON.stringify( object ));
  }
}
