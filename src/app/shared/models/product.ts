

export class Product {
  constructor(
      public id: string,
      public created: Date,
      public creatorId: number,
      public isActive: Boolean,
      public updated: Date,
      public name: string,
      public notes: string,
      public updaterId: number
      
  ) {}
}