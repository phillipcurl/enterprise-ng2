export class Email{

    constructor(
      public id: string,
      public created: Date,
      public creatorId: number,
      public isActive: Boolean,
      public isLocked: Boolean,
      public updated: Date,
      public updaterId: number
    ){}
}
