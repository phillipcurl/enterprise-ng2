export class Image{

    constructor(
      public id: string,
      public created: Date,
      public creatorId: number,
      public isActive: Boolean,
      public isLocked: Boolean,
      public updated: Date,
      public updaterId: number,
      public fileExtension: string,
      public fileName: string,
      public fileData: string
    ){}
}
