export class Location{

    constructor(
      public id: string,
      public created: Date,
      public creatorId: number,
      public isActive: Boolean,
      public name: string,
      public notes: string,
      public store: number,
      public updated: Date,
      public updaterId: number
    ){}
}
