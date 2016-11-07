export class PhoneNumber{

    constructor(
      public id: string,
      public created: Date,
      public creatorId: number,
      public isActive: Boolean,
      public isPrimary: Boolean,
      public updated: Date,
      public updaterId: number,
      public type: string,
      public value: string
    ){}
}
