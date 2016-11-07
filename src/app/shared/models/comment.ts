export class Comment{

    constructor(
      public id: string,
      public comment: string,
      public isFavorable: Boolean,
      public isLocked: Boolean
    ){}
}
