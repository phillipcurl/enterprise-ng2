export class Sorter {

  direction: number;
  key: string;

  constructor() {
    this.direction = 1;
  }

  /**
   * The main sort function. It takes a string which is used as the filter key. In
   * this case is will almost always be the property associated with the table header 
   * text. The second param is the array of data binded to the table.
   * @param  {string} key
   * @param  {any[]} data
   */
  sort(key: string, data: any[]) {

    // If we're filtering on the same key, just reverse the order of that column by 
    // inverting the current sort direction
    if (this.key === key) {
      this.direction = -this.direction;
    }
    // Otherwise, set the initial order to the default of 1 (eg. A-Z, oldest-newest, etc.).
    // Then change the sort key to the current key to enable the filtering of a new column
    else {
      this.direction = 1;
      this.key = key;
    }

    /**
     * This is where the *simplified* magic occurs. We take 2 params:
     * a: the current index and b: the previous index.
     * @param  {any} a
     * @param  {any} b
     */
    data.sort((a, b) => {

      // The current item and the previous item are identical - don't do anything
      if (a[key] === b[key]) {
        return 0;
      }

      // The current key is *greater than* ("greater than" is completely subjectable
      // to the current array type and the specified sort order) the previous key
      else if (a[key] > b[key]) {
        return this.direction;
      } else {
        return -this.direction;
      }

    });
  }

}