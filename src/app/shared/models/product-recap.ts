
export class ProductRecap {
  constructor(
      public id: string,
      public created: Date,
      public creatorId: number,
      public isActive: Boolean,
      public isLocked: Boolean,
      public updated: Date,
      public samplesPoured: number,
      public amountSold: number,
      public price: number,
      public promoPrice: number,
      public updaterId: number
      
  ) {}
}